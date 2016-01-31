Meteor.publish('listing.find', function(userId, slug) {
  return Listings.find({ "userId": userId, "slug": slug });
});

Meteor.publish('listing.byCity', function(citySlug) {
  var city = Cities.findOne({ slug: citySlug });
  return Listings.find({ cityId: city.slug });
});

Meteor.publish('cities', function() {
  return Cities.find();
});
