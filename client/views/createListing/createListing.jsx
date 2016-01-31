CreateListing = React.createClass({

  render: function() {
    return (
      <div>
        <div className="container">
          <div className="box">
            <div className="box-heading text-center text-uppercase">Publica tu anuncio</div>

            <div className="box-padding">
              <form className="form-horizontal">
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


                <div className="form-group">
                  <label for="inputPassword3" className="col-sm-2 control-label">Titulo</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Escibe un titulo conciso" />
                  </div>
                </div>

                <div className="form-group">
                  <label for="inputPassword3" className="col-sm-2 control-label">Descripción</label>
                  <div className="col-sm-10">
                    <textarea rows="3" className="form-control"></textarea>
                  </div>
                </div>

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
                    <input type="text" className="form-control" placeholder="$0.00" />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-primary">Publicar Anuncio</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
