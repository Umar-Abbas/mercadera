Home = React.createClass({
  componentDidMount: function() {
    $(this.refs.grid).isotope({
      itemSelector: '.grid-item',
      layoutMode: 'masonry'
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

          <div className="category-head text-center">
            <h3>Materiales de Construcción</h3>

            <div className="filters subtle-text">
              Ordenados por 
              <select>
                <option>Nuevos</option>
                <option>Precio Mayor</option>
                <option>Precio Menor</option>
              </select>
              en
              <select>
                <option>Santa Cruz</option>
                <option>Cochabamba</option>
                <option>Sucre</option>
              </select>
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
    );
  }

});
