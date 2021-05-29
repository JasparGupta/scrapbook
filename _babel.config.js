const presets = (api) => {
    // Don't override NextJS presets.
    if (api.env('test')) {
        return [
            ['@babel/preset-env', {targets: {node: 'current'}}],
            '@babel/preset-typescript'
        ];
    }

    return [];
};

module.exports = api => ({
    presets: presets(api),
});
