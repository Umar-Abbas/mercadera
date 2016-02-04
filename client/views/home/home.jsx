Home = React.createClass({


  render: function() {
    return (
      <div>
        <div className="container">
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
              <div className="box">
                <div className="box-content">Hi</div>
              </div>

              <h4 className="discover-heading subtle-text">Autos y Vehículos</h4>
              <div className="row card-row">
                <div className="col-lg-5ths col-md-3 col-sm-4 col-xs-6">
                  <ListingCard price={"$400"} name={"PS4 500GB Nuevo"} city={"Santa Cruz"} seller={"Daniel T."} />
                </div>

                <div className="col-lg-5ths col-md-3 col-sm-4 col-xs-6">
                  <ListingCard price={"$24,000"} name={"Vendo casa grande!"} city={"Santa Cruz"} seller={"Daniel T."} />
                </div>

                <div className="col-lg-5ths col-md-3 col-sm-4 col-xs-6">
                  <ListingCard />
                </div>

                <div className="col-lg-5ths col-md-3 col-sm-4 col-xs-6">
                  <ListingCard />
                </div>

                <div className="col-lg-5ths col-md-3 col-sm-4 col-xs-6">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
