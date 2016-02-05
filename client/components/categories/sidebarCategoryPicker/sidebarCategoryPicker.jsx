SidebarCategoryPicker = React.createClass({
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
          <li key={category.slug}><a href={'/anuncios/' + category.slug}>{category.name}</a></li>
        )
      })
    )
  },

  render() {
    return (
      <div className="box category-sidebar">
        <h4 className="no-margin"><i className="material-icons md-18">dashboard</i> Categorias</h4>
        <ul className="list-unstyled">
          {this.data.categories ? this.renderCategories() : null}
        </ul>
      </div>
    )
  }

});
