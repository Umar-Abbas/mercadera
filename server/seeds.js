Meteor.methods({
  'Database.seed': function() {
    // Create initial Category documents.
    var categories = [
      'Aeronáutica',
      'Agropecuaria y Campo',
      'Alimentos y Bebidas',
      'Animales y Mascotas',
      'Arte y Antigüedades',
      'Autos y Vehículos',
      'Bienes Raíces',
      'Bolsa de Trabajo',
      'Celulares y Accesorios',
      'Computación y Juegos',
      'Deportes y Fitness',
      'Electrónicos',
      'Entretenimiento y Ocio',
      'Equipamiento Industrial',
      'Hogar',
      'Instrumentos Musicales',
      'Inversiones y Negocios',
      'Joyas y Relojes',
      'Libros y Revistas',
      'Maquinaria Pesada',
      'Niños y Bebes',
      'Otras Cosas',
      'Restaurantes y Locales',
      'Salud y Belleza',
      'Servicios',
      'Vestimenta y Moda',
      'Viajes y Turismo'
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
