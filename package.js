Package.describe({
  name: 'adamkaczmarzyk:marker-animate-unobtrusive',
  summary: 'Marker animation for Google Maps Javascript API v3',
  version: '0.0.17',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.addFiles([
    'marker-animate-unobtrusive/vendor/markerAnimate.js',
    'marker-animate-unobtrusive/SlidingMarker.js',
    ], 'client', {isAsset: true});
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('adamkaczmarzyk:marker-animate-unobtrusive');
  api.addFiles('marker-animate-unobtrusive-tests.js');
});
