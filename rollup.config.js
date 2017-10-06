export default {
  entry: './release/index.js',
  dest: './release/bundles/component-lab.umd.js',
  format: 'umd',
  moduleName: 'synapse.componentLab',
  globals: {
    '@angular/animations': 'ng.animations',
    '@angular/animations/browser': 'ng.animations.browser',
    '@angular/common': 'ng.common',
    '@angular/core': 'ng.core',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-browser/animations': 'ng.platformBrowser.animations',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
    '@angular/common': 'ng.common',
    '@angular/router': 'ng.router',
    '@ngrx/core': 'ngrx.core',
    'rxjs/Observable': 'Rx',
    'rxjs/operator/pluck': 'Rx.Observable.prototype',
    'lodash': '_'
  }
}