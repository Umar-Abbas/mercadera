ListingForm = React.createClass({
  handleChange(e) {
    console.log("Changed input");
  },

  render() {
    return (
      <form className="form-horizontal listing-form">
        <div className="form-group upload-group">
          <div className="upload-box text-center">
            <i className="material-icons md-36">add_a_photo</i>
            <h5 className="no-margin">Haz clic o arrastra para subir imagenes</h5>
          </div>
        </div>

        <hr/>

        <SelectInput name={"category"} label={"Categoria:"} errors={[]} onChange={this.handleChange} />

        <TextInput name={"name"} label={"Titulo:"} placeholder={"Escribe un nombre para tu anuncio. Corto y sencillo!"} errors={[]} onChange={this.handleChange} />

        <TextAreaInput name={"description"} label={"Descripción:"} rows={"3"} errors={[]} onChange={this.handleChange} />

        <SelectInput name={"city"} label={"Ciudad:"} errors={[]} onChange={this.handleChange} />

        <AmountInput name={"price"} label={"Precio:"} placeholder={"0"} errors={[]} onChange={this.handleChange} />

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-success">Publicar Anuncio</button>
          </div>
        </div>
      </form>
    );
  }

});
