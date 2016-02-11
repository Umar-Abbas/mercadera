// We'll move these publications to separate files soon.

Meteor.publish('listing.find', function(userId, slug) {
  return Listings.find({ "userId": userId, "slug": slug });
});

Meteor.publish('listing.byCity', function(citySlug) {
  var city = Cities.findOne({ slug: citySlug });
  return Listings.find({ cityId: city.slug });
});

Meteor.publish('categories.all', function(){
  return Categories.find({});
});

Meteor.publish('cities.all', function() {
  return Cities.find({});
});
