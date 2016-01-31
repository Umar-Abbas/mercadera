Categories = new Mongo.Collection("categories");

Category = Astro.Class({
  name: 'Category',
  collection: Categories,
  fields: {
    name: {
      type: 'string',
      validator: [
        Validators.required(null, "Type in a name for your Category."),
        Validators.unique(null, "A category with this name already exists."),
        Validators.minLength(4, "Your category name has to be at least 4 letters."),
        Validators.maxLength(100, "Your category name can't be bigger than 100 letters.")
      ]
    },
    slug: {
      type: 'string',
      validator: [
        Validators.unique(null, "A category with this name already exists.")
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
      Meteor.call("Category.updateListingCount", this._id);
    },

    generateSlug: function() {
      var self = this;
      Meteor.call("Helpers.generateSlug", this.name, function(error, response) {
        self.set('slug', response);
      });
    }
  }
});
