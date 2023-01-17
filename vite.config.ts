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
