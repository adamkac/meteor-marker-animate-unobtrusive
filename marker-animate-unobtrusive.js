
if (Meteor.isClient) {
  Template.map.onCreated(function() {
  	SlidingMarker.initializeGlobally();
  }
}