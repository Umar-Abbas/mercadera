Home = React.createClass({
  componentDidMount: function() {
    $(this.refs.grid).isotope({
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      masonry: {
          isFitWidth: true
        }
    });

    var self = this;
    $(this.refs.grid).imagesLoaded().progress(function() {
      $(self.refs.grid).isotope('layout');
    });
  },

  render: function() {
    return (
      <div>

        <div className="container-fluid">

          <h2 className="category-title text-center">Todo</h2>
          
          <div className="row head-row">
            <div className="col-lg-2 visible-lg">
              <SidebarCategoryPicker />
            </div>

            <div className="col-lg-10 col-md-12">
              <div className="box filters-box">
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                    <div className="subtle-text text-center">Ordenar anuncios por:</div>
                  </div>

                  <div className="col-md-3 col-xs-4">
                    <select className="form-control">
                      <option>Nuevos</option>
                      <option>Mayor Precio</option>
                      <option>Menor Precio</option>
                    </select>
                  </div>

                  <div className="col-md-3 col-xs-4">
                    <select className="form-control">
                      <option>Todo Bolivia</option>
                      <option>Santa Cruz</option>
                      <option>Cochabamba</option>
                      <option>La Paz</option>
                      <option>Sucre</option>
                      <option>Oruro</option>
                    </select>
                  </div>

                  <div className="col-md-3 col-xs-4">
                    <a href="#" className="btn btn-block btn-default">Submit</a>
                  </div>
                </div>  
              </div>

              <div className="row card-row grid" ref="grid">
                <ListingCard cardThumbnail={"http://lorempixel.com/300/300"} price={"$9,999,999"} name={"PS4 500GB Nuevo"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                <ListingCard cardThumbnail={"http://placehold.it/300x120"} price={"$4,000"} name={"Kia Optima 2007"} city={"La Paz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Oscar N."} />
                <ListingCard cardThumbnail={"http://placehold.it/300x500"} price={"$24,000"} name={"Vendo casa grande!"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                <ListingCard cardThumbnail={"http://placehold.it/300x310"} price={"$250"} name={"PS4 500GB Nuevo"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                <ListingCard cardThumbnail={"http://placehold.it/300x180"} price={"$4,000"} name={"Kia Optima 2007"} city={"La Paz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Oscar N."} />
                <ListingCard cardThumbnail={"http://placehold.it/300x432"} price={"$24,000"} name={"Vendo casa grande!"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                <ListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$250"} name={"PS4 500GB Nuevo"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                <ListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$4,000"} name={"Kia Optima 2007"} city={"La Paz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Oscar N."} />
                <ListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$24,000"} name={"Vendo casa grande!"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                <ListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$250"} name={"PS4 500GB Nuevo"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                <ListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$4,000"} name={"Kia Optima 2007"} city={"La Paz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Oscar N."} />
                <ListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$24,000"} name={"Vendo casa grande!"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                <ListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$250"} name={"PS4 500GB Nuevo"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                <ListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$4,000"} name={"Kia Optima 2007"} city={"La Paz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Oscar N."} />
                <ListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$24,000"} name={"Vendo casa grande!"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
