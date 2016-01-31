NewListingForm = React.createClass({
  handleChange(e) {
    console.log("Changed input");
  },

  render() {
    return (
      <form className="form-horizontal">
        <TextInput name={"name"} label={"Nombre:"} placeholder={"Escribe un nombre para tu anuncio. Corto y sencillo!"} errors={[]} onChange={this.handleChange} />

        <TextInput name={"name"} label={"Nombre:"} placeholder={"Escribe un nombre para tu anuncio. Corto y sencillo!"} errors={["can't be empty.", "too long"]} onChange={this.handleChange} />

        <SelectInput name={"category"} label={"Categoria:"} errors={[]} onChange={this.handleChange} />

        <TextAreaInput name={"description"} label={"Descripción:"} rows={"3"} errors={[]} onChange={this.handleChange} />

        <SelectInput name={"city"} label={"Ciudad:"} errors={[]} onChange={this.handleChange} />

        <AmountInput name={"price"} label={"Precio:"} placeholder={"0"} errors={[]} onChange={this.handleChange} />

        <h1>These below are just static HTML, need to move to component.</h1>

        <div className="form-group">
          <label className="col-sm-2 control-label">Imagenes</label>
          <div className="col-sm-10">
            <div className="row">
              <div className="col-md-4">
                <div className="upload-box"><a href="#" className="btn btn-default">Upload Image</a></div>
              </div>
              <div className="col-md-4">
                <div className="upload-box"><a href="#" className="btn btn-default">Upload Image</a></div>
              </div>
              <div className="col-md-4">
                <div className="upload-box"><a href="#" className="btn btn-default">Upload Image</a></div>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div className="form-group">
          <label for="inputPassword3" className="col-sm-2 control-label">Categoria</label>
          <div className="col-sm-10">
            <select className="form-control">
              <option>Elige una categoria para tu anuncio</option>
            </select>
          </div>
        </div>

        <TextAreaInput name={"description"} label={"Descripción:"} rows={"3"} errors={[]} onChange={this.handleChange} />

        <div className="form-group">
          <label for="inputPassword3" className="col-sm-2 control-label">Ubicación</label>
          <div className="col-sm-10">
            <select className="form-control">
              <option>Elige una ciudad</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label for="inputPassword3" className="col-sm-2 control-label">Precio</label>
          <div className="col-sm-10">
            <div className="input-group">
              <span className="input-group-addon">$</span>
              <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
              <span className="input-group-addon">.00</span>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-primary">Publicar Anuncio</button>
          </div>
        </div>
      </form>
    );
  }

});
