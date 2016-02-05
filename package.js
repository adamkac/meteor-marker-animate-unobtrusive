Package.describe({
  name: 'akaczmarzyk:marker-animate-unobtrusive',
  summary: 'Marker animation for Google Maps Javascript API v3',
  version: '0.0.1',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use([
    'templating',
    'reactive-var',
    'underscore',
    'dburles:google-maps']);
  api.addFiles([
    'marker-animate-unobtrusive/vendor/markerAnimate.js',
    'marker-animate-unobtrusive/SlidingMarker.js',
    'marker-animate-unobtrusive.js'
    ], 'client');
  api.export('SlidingMarker', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('akaczmarzyk:marker-animate-unobtrusive');
  api.addFiles('marker-animate-unobtrusive-tests.js');
});
