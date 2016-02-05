Home = React.createClass({


  render: function() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="visible-lg col-lg-2">
              <SidebarCategoryPicker />
            </div>

            <div className="col-md-12 col-lg-10">
              <FeaturedListings categoryName={"Autos y Vehiculos"} />
              <FeaturedListings categoryName={"Bienes Raices"}  />
              <FeaturedListings categoryName={"Celulares y Accesorios"} />
            </div>
          </div>
        </div>
      </div>
    );
  }

});
