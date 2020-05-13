module.exports = (api, options, rootOptions) => {
    api.extendPackage({
        dependencies: {
            'iview': '^3.4.0',
            'vuex': '^3.1.1'
        }
    });
    api.render('./template');
}