
const withSass = require('@zeit/next-sass')
module.exports = withSass({
    cssModules: true,
	cssLoaderOptions: {
		localIdentName: '[local]__[hash:base64:5]',
	},
    webpack(config) {
        config.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            },
            {
                test: /\.scss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                    ],
            }
            );
            
            return config;
        }   
    });