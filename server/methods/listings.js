Meteor.methods({
  'Listing.create': function(listing) {
    listing.set('userId', this.userId);
    listing.set('createdAt', new Date().getTime());
    listing.generateSlug();

    if (listing.validate(false)) {
      listing.save();
      return listing;
    }

    community.throwValidationException();
  }
});
