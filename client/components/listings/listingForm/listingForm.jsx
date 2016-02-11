ListingForm = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var data = {};
    var categoriesHandle = Meteor.subscribe('categories.all');
    var citiesHandle = Meteor.subscribe('cities.all');
    if (categoriesHandle.ready() && citiesHandle.ready()) {
      data.categories = Categories.find().fetch();
      data.cities = Cities.find().fetch();
      data.handlesReady = true;
    }
    return data;
  },

  handleChange(e) {
    console.log("Changed input");
  },

  content() {
    return (
      <form className="form-horizontal listing-form">
        <div className="form-group upload-group">
          <div className="upload-box text-center">
            <i className="material-icons md-36">add_a_photo</i>
            <h5 className="no-margin">Haz clic o arrastra para subir imagenes</h5>
          </div>
        </div>

        <hr/>

        <SelectInput options={this.data.categories} value={{}} name={"category"} label={"Categoria:"} errors={[]} onChange={this.handleChange} />

        <TextInput defaultValue={this.props.listing.name} name={"name"} label={"Titulo:"} placeholder={"Escribe un nombre para tu anuncio. Corto y sencillo!"} errors={[]} onChange={this.handleChange} />

        <TextAreaInput defaultValue={this.props.listing.description} name={"description"} label={"Descripción:"} rows={"3"} errors={[]} onChange={this.handleChange} />

        <SelectInput options={this.data.cities} value={{}} name={"city"} label={"Ciudad:"} errors={[]} onChange={this.handleChange} />

        <AmountInput defaultValue={this.props.listing.price} name={"price"} label={"Precio:"} placeholder={"0"} errors={[]} onChange={this.handleChange} />

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-success">Publicar Anuncio</button>
          </div>
        </div>
      </form>
    );
  },

  render() {
    return (
      this.data.handlesReady ? this.content() : null
    )
  }

});
