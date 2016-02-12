Profile = React.createClass({
  componentDidMount: function() {
    $(this.refs.mobileGrid).isotope({
      itemSelector: '.grid-item',
      layoutMode: 'masonry'
    });

    $(this.refs.desktopGrid).isotope({
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      masonry: {
          isFitWidth: true,
          percentPosition: true,
          gutter: 15
        }
    });

    var self = this;
    $(this.refs.mobileGrid).imagesLoaded().progress(function() {
      $(self.refs.mobileGrid).isotope('layout');
    });

    var self = this;
    $(this.refs.desktopGrid).imagesLoaded().progress(function() {
      $(self.refs.desktopGrid).isotope('layout');
    });
  },

  render: function() {
    return (
      <div>
        <div className="container">
          <div className="row head-row">
            <div className="col-lg-3">
              <div className="box profile-box">
                <div className="box-padding text-center">
                  <img className="img-responsive img-circle avatar" src="http://lorempixel.com/100/100" alt="..." />
                  <h4 className="no-margin">Daniel T.</h4>
                  <div className="meta">@username</div>
                  <div className="meta subtle-text">Santa Cruz</div>

                  <hr/>

                  <ul className="list-inline no-margin text-center">
                    <li className="disabled">
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                      </span>
                    </li>
                    <li className="disabled">
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-at fa-stack-1x fa-inverse"></i>
                      </span>
                    </li>
                    <li className="disabled">
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-phone fa-stack-1x fa-inverse"></i>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="box-footer text-center">
                  <div className="subtle-text">Miembro desde 12/01/16</div>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="visible-xs">
                <div className="grid mobile-grid row" ref="mobileGrid">
                  <ListingCard cardThumbnail={"http://lorempixel.com/300/300"} price={"$9,999,999"} name={"PS4 500GB Nuevo"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                  <ListingCard cardThumbnail={"http://placehold.it/300x120"} price={"$4,000"} name={"Kia Optima 2007"} city={"La Paz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Oscar N."} />
                  <ListingCard cardThumbnail={"http://placehold.it/300x500"} price={"$24,000"} name={"Vendo casa grande!"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                  <ListingCard cardThumbnail={"http://placehold.it/300x310"} price={"$250"} name={"PS4 500GB Nuevo"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                </div>
              </div>

              <div className="hidden-xs">
                <div className="grid desktop-grid" ref="desktopGrid">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
