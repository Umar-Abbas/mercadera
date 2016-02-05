Home = React.createClass({


  render: function() {
    return (
      <div>
        <div className="container">
          <div className="box">
            <div className="box-content">Hi</div>
          </div>
          <div className="row">
            <div className="visible-lg col-lg-2">
              <div className="box category-sidebar">
                <h4 className="no-margin"><i className="material-icons md-18">dashboard</i> Categorias</h4>
                <ul className="list-unstyled">
                  <li><a href="#">Autos y Vehículos</a></li>
                  <li><a href="#">Bienes Raices</a></li>
                  <li><a href="#">Materiales de Construcción</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-12 col-lg-10">
              <FeaturedListings categoryName={"Autos y Vehiculos"} />

              <hr className="home-separator"/>

              <FeaturedListings categoryName={"Bienes Raices"}  />

              <hr className="home-separator"/>

              <FeaturedListings categoryName={"Celulares y Accesorios"} />
            </div>
          </div>
        </div>
      </div>
    );
  }

});
