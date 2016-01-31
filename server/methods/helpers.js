Meteor.methods({
  'Helpers.generateSlug': function(value) {
    var slug = Meteor.npmRequire('limax');
    var sluggedValue = slug(value);
    return sluggedValue;
  }
});
