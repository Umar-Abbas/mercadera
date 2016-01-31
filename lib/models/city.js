Cities = new Mongo.Collection("cities");

City = Astro.Class({
  name: 'City',
  collection: Cities,
  fields: {
    name: {
      type: 'string',
      validator: [
        Validators.required(null, "Type in a name for your City."),
        Validators.unique(null, "A city with this name already exists."),
        Validators.minLength(4, "Your city name has to be at least 4 letters."),
        Validators.maxLength(100, "Your city name can't be bigger than 100 letters.")
      ]
    },
    slug: {
      type: 'string',
      validator: [
        Validators.unique(null, "A city with this name already exists.")
      ]
    },
    createdAt: {
      type: 'date',
      validator: [
        Validators.required(),
      ]
    },
    totalListings: {
      type: 'number'
    }
  },
  methods: {
    updateListingCount() {
      Meteor.call("City.updateListingCount", this._id);
    },

    generateSlug: function() {
      var self = this;
      Meteor.call("Helpers.generateSlug", this.name, function(error, response) {
        self.set('slug', response);
      });
    }
  }
});
