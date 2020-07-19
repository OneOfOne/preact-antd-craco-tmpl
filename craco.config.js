const { darkThemeSingle, compactThemeSingle } = require("antd/dist/theme"),
	CracoAntDesignPlugin = require("craco-antd"),
	{ BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"),
	AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

const babelMod = (libraryName, libraryDirectory = "lib", style = false, camel2DashComponentName = true) => {
	const mod = { libraryName, libraryDirectory, style, camel2DashComponentName };
	return ["import", mod, libraryName];
};

module.exports = ({ env }) => {
	const wpPlugins = [new AntdDayjsWebpackPlugin()]

	if (env === 'production' && process.env['ANALYZER'] === 'true') {
		// @ts-ignore
		wpPlugins.push(new BundleAnalyzerPlugin());
	}

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
				babelMod('antd', 'es', true),
				babelMod('lodash', '', false, false),
			],
		},
		webpack: {
			alias: {
				"react": "preact/compat",
				"react-dom": "preact/compat",
			},
			plugins: wpPlugins,
		},
	};
};
