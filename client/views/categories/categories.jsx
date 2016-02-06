Categories = React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="visible-lg col-lg-2">
              <SidebarCategoryPicker />
            </div>

            <div className="col-md-12 col-lg-10">
              <div className="row category-heading">
                <div className="col-md-5">
                  <h4 className="no-margin">Autos y Vehiculos</h4>
                </div>

                <div className="col-md-7">
                  <ul className="list-inline no-margin text-right">
                    <li><div className="subtle-text">Ordenar anuncios por:</div></li>
                    <li><a href="#" className="current">Nuevos</a></li>
                    <li><a href="#">Precio Mayor</a></li>
                    <li><a href="#">Precio Menor</a></li>
                  </ul>
                </div>
              </div>

              <ListingGrid />
              <ListingGrid />
              <ListingGrid />
              <ListingGrid />

              <Pagination />
            </div>
          </div>
        </div>
      </div>
    );
  }

});
