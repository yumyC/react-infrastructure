#  二、react学习-基础框架重构

## 1. 前端UI框架选为 [antd](https://ant.design/components/overview)

~~~js
  $ npm install antd
~~~
如何引用
~~~js
import { Layout, Row, Col, Timeline} from 'antd';
~~~
## 2. CSS 预处理器
技术选型为：less
**$\color{red}{Note: 命名规范}$**（*.module.less）
~~~js
$ npm install --save-dev less less-loader
~~~
## 3. 更新配置
以下是我的配置。更多配置请参考[vite 官网](https://vitejs.dev/guide/)
- vite.config.ts
~~~js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleImport from 'vite-plugin-style-import'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		styleImport({
			libs: [
				{
					libraryName: 'antd',
					esModule: true,
					resolveStyle: name => {
						return `antd/es/${name}/style/index`
					},
				},
			],
		}),
	],
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
	css: {
		//* css模块化
		modules: {
			// css模块化 文件以.module.[css|less|scss]结尾
			generateScopedName: '[name]__[local]___[hash:base64:5]',
			hashPrefix: 'prefix',
		},
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				additionalData: `@import "${path.resolve(__dirname, 'src/style/global.less')}";`,
			},
		},
	},
})

~~~
- tsconfig.json ($\color{red}{配置alia 地址重写需要这个文件中也加上path配置}$)
~~~js
{
  "compileOnSave": false,
  "buildOnSave": false,
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "dist",
    "module": "esnext",
    "target": "es6",
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "lib": ["es6", "dom"],
    "sourceMap": true,
    "allowJs": true,
    "rootDir": "./",
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": false,
    "importHelpers": true,
    "strictNullChecks": true,
    "suppressImplicitAnyIndexErrors": true,
    "noUnusedLocals": true,
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"],
    }
  },
  "include": ["src", "types/*"],
  "exclude": ["node_modules", "build", "public"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
~~~
## 3. 定义目录结构
#### The directory structure
    | dist (打包后目录）
    | ...
    node_modules
    | ...
    | src
    | assets (Static resource)
    | | fonts
    | | images
    | common
    | components
    | store
    | style
    | router
    | pages
    | utils
    | index.module.scss
    | main.tsx
    | vite-env.d.ts
    | ...
    | types
    .eslintrc.json
    .gitignore
    index.html
    package-lock.json
    package.json
    tsconfig.json
    tsconfig.node.json
    vite.config.ts
    README.md

## 5. 仓库管理
技术选型为git 仓库，之前笔记有详细介绍过 [git常用命令](https://www.jianshu.com/p/4fb9e02745c1)
