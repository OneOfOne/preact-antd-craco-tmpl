const { darkThemeSingle, compactThemeSingle } = require("antd/dist/theme"),
	CracoAntDesignPlugin = require("craco-antd"),
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
	AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

module.exports = ({ env }) => {
	return {
		plugins: [
			{
				plugin: CracoAntDesignPlugin,
				options: {
					customizeTheme: {
						...darkThemeSingle,
						...compactThemeSingle,
					},
				},
			},
		],
		babel: {
			plugins: [
				{ libraryName: "antd", libraryDirectory: "es", style: true },
				{
					libraryName: "lodash",
					libraryDirectory: "",
					camel2DashComponentName: false,
				},
			].map((v) => ["import", v, v.libraryName]),
		},
		webpack: {
			alias: {
				"react": "preact/compat",
				"react-dom": "preact/compat",
			},
			plugins: [new AntdDayjsWebpackPlugin()],
		},
	};
};
