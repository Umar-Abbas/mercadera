DropdownCategoryPicker = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var data = {};
    var handle = Meteor.subscribe('categories.all');
    if (handle.ready()) {
      data.categories = Categories.find().fetch();
    }
    return data;
  },

  renderCategories() {
    return (
      this.data.categories.map(function(category) {
        return (
          <li key={category.slug}><a href={'/' + category.slug}>{category.name}</a></li>
        )
      })
    )
  },

  render() {
    return (
      <div className="dropdown">
        <a className="icon-btn browse-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <i className="material-icons">menu</i>
        </a>
        <ul className="dropdown-menu">
          {this.data.categories ? this.renderCategories() : null}
          <li role="separator" className="divider"></li>
          <li><a href="#">Crear Anuncio</a></li>
        </ul>
      </div>
    )
  }

});
