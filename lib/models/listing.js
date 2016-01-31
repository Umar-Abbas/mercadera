Listings = new Mongo.Collection("listings");

Listing = Astro.Class({
  name: 'Listing',
  collection: Listings,
  fields: {
    categoryId: {
      type: 'string',
      validator: [
        Validators.required(),
      ]
    },
    userId: {
      type: 'string',
      validator: [
        Validators.required(),
      ]
    },
    cityId: {
      type: 'string',
      validator: [
        Validators.required(),
      ]
    },
    name: {
      type: 'string',
      validator: [
        Validators.required(null, "Type in a name for your Listing."),
        Validators.unique(null, "A category with this name already exists."),
        Validators.minLength(4, "Your category name has to be at least 4 letters."),
        Validators.maxLength(100, "Your category name can't be bigger than 100 letters.")
      ]
    },
    price: {
      type: 'number',
      validators: [
        Validators.required()
      ]
    },
    description: {
      type: 'string',
      validators: [
        Validators.required(null, "Your description can't be empty."),
        Validators.minLength(4, "Your description has to be at least 4 letters."),
        Validators.maxLength(100, "Your description can't be bigger than 100 letters.")
      ]
    },
    pictures: {
      type: 'array'
    },
    slug: {
      type: 'string',
      validator: [
        Validators.required()
      ]
    },
    createdAt: {
      type: 'date',
      validator: [
        Validators.required(),
      ]
    }
  },
  methods: {
    generateSlug: function() {
      var self = this;
      Meteor.call("Helpers.generateSlug", this.name, function(error, response) {
        self.set('slug', response);
      });
    }
  }
});
