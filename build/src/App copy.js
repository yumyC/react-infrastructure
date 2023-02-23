import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
function App() {
    const [count, setCount] = useState(0);
    return (_jsxs("div", Object.assign({ className: "App" }, { children: [_jsxs("div", { children: [_jsx("a", Object.assign({ href: "https://vitejs.dev", target: "_blank" }, { children: _jsx("img", { src: "/vite.svg", className: "logo", alt: "Vite logo" }) })), _jsx("a", Object.assign({ href: "https://reactjs.org", target: "_blank" }, { children: _jsx("img", { src: reactLogo, className: "logo react", alt: "React logo" }) }))] }), _jsx("h1", { children: "Vite + React" }), _jsxs("div", Object.assign({ className: "card" }, { children: [_jsxs("button", Object.assign({ className: "ui primary button", onClick: () => setCount((count) => count + 1) }, { children: ["count is ", count] })), _jsxs("p", { children: ["Edit ", _jsx("code", { children: "src/App.tsx" }), " and save to test HMR"] })] })), _jsx("p", Object.assign({ className: "read-the-docs" }, { children: "Click on the Vite and React logos to learn more" }))] })));
}
export default App;
//# sourceMappingURL=App%20copy.js.map