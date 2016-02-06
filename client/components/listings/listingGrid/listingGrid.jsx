ListingGrid = React.createClass({
  render() {
    return (
      <div className="row card-row">
        <div className="col-lg-5ths col-md-3 col-sm-4 col-xs-6">
          <ListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$250"} name={"PS4 500GB Nuevo"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/32/32"} sellerName={"Daniel T."} />
        </div>

        <div className="col-lg-5ths col-md-3 col-sm-4 col-xs-6">
          <ListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$4,000"} name={"Kia Optima 2007"} city={"La Paz"} sellerAvatar={"http://lorempixel.com/32/32"} sellerName={"Oscar N."} />
        </div>

        <div className="col-lg-5ths col-md-3 col-sm-4 col-xs-6">
          <ListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$24,000"} name={"Vendo casa grande!"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/32/32"} sellerName={"Daniel T."} />
        </div>

        <div className="col-lg-5ths col-md-3 col-sm-4 col-xs-6">
          <ListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$500"} name={"Jordan 10 OVO"} city={"Cochabamba"} sellerAvatar={"http://lorempixel.com/32/32"} sellerName={"Daniel T."} />
        </div>
        <div className="col-lg-5ths col-md-3 col-sm-4 col-xs-6">
          <ListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$250"} name={"PS4 500GB Nuevo"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/32/32"} sellerName={"Daniel T."} />
        </div>
      </div>
    );
  }

});