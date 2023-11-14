import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {duotoneLight} from 'react-syntax-highlighter/dist/esm/styles/prism'

const article = () => {
  const [content, setContent] = useState("");
  const { id } = useParams();
  const url = `/markdown/article-${id}.md`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);
  return (
    <div><ReactMarkdown
    children={content}
    components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={duotoneLight}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }}/></div>
  );
}

export default article;
