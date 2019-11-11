export default () => ({
    test: /\.(gif|png|jpe?g)$/i,
    loaders: [
        {
            loader: require.resolve('file-loader'),
            options: {
                hash: 'sha512',
                digest: 'hex',
                name: '[name].[hash].[ext]'
            }
        },
        {
            loader: require.resolve('image-webpack-loader'),
            options: {
                bypassOnDebug: true,
                mozjpeg: {
                    progressive: false,
                    quality: 80
                }
            }
        }
    ]
})
