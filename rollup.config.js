export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/mindgaze-doublescroll.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.mindgaze-doublescroll',
    globals: {
        '@angular/core': 'ng.core'
    }
}