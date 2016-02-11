Profile = React.createClass({
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
        <div className="container">
          <div className="row head-row">
            <div className="col-lg-3">
              <div className="box profile-box">
                <div className="box-padding text-center">
                  <img className="img-responsive img-circle avatar" src="http://lorempixel.com/100/100" alt="..." />
                  <h4 className="no-margin">Daniel T.</h4>
                  <div className="meta">@username</div>
                  <div className="meta subtle-text">Santa Cruz</div>
                  <div className="subtle-text">Miembro desde 12/01/16</div>

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
                  <a href="#" className="btn btn-block btn-default">Reportar usuario</a>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <h4 className="profile-heading text-center">Anuncios de Daniel</h4>
              <div className="row card-row grid" ref="grid">
                <ProfileListingCard cardThumbnail={"http://lorempixel.com/300/300"} price={"$9,999,999"} name={"PS4 500GB Nuevo"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                <ProfileListingCard cardThumbnail={"http://placehold.it/300x120"} price={"$4,000"} name={"Kia Optima 2007"} city={"La Paz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Oscar N."} />
                <ProfileListingCard cardThumbnail={"http://placehold.it/300x500"} price={"$24,000"} name={"Vendo casa grande!"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                <ProfileListingCard cardThumbnail={"http://placehold.it/300x310"} price={"$250"} name={"PS4 500GB Nuevo"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                <ProfileListingCard cardThumbnail={"http://placehold.it/300x180"} price={"$4,000"} name={"Kia Optima 2007"} city={"La Paz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Oscar N."} />
                <ProfileListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$24,000"} name={"Vendo casa grande!"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                <ProfileListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$250"} name={"PS4 500GB Nuevo"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                <ProfileListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$4,000"} name={"Kia Optima 2007"} city={"La Paz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Oscar N."} />
                <ProfileListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$24,000"} name={"Vendo casa grande!"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                <ProfileListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$250"} name={"PS4 500GB Nuevo"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
                <ProfileListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$4,000"} name={"Kia Optima 2007"} city={"La Paz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Oscar N."} />
                <ProfileListingCard cardThumbnail={"http://placehold.it/300x300"} price={"$24,000"} name={"Vendo casa grande!"} city={"Santa Cruz"} sellerAvatar={"http://lorempixel.com/30/30"} sellerName={"Daniel T."} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
