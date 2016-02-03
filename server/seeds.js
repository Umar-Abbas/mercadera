Meteor.methods({
  'Database.seed': function() {
    // Create initial Category documents.
    var categories = [
      'Bienes Raices',
      'Automoviles',
      'Electrodomesticos',
      'Computadoras'
    ];
    _.forEach(categories, function(c) {
      var category = new Category();
      category.set({
        name: c,
        createdAt: new Date(),
        totalListings: 0
      });
      category.generateSlug();
      if (category.validate()) {
        category.save();
      }
    });

    // Create initial City documents.
    var cities = [
      'Santa Cruz',
      'La Paz',
      'Cochabamba',
      'Tarija',
      'Oruro',
      'Sucre',
      'Beni',
      'Potosi',
      'Pando'
    ];
    _.forEach(cities, function(c) {
      var city = new City();
      city.set({
        name: c,
        createdAt: new Date(),
        totalListings: 0
      });
      city.generateSlug();
      if (city.validate()) {
        city.save();
      }
    });
  }
});
