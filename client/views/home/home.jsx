Home = React.createClass({
  componentDidMount: function() {
    $(this.refs.grid).isotope({
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      masonry: {
        isFitWidth: true,
        gutter: 16
      },
    });

    var self = this;
    $(this.refs.grid).imagesLoaded().progress(function() {
      $(self.refs.grid).isotope('layout');
    });
  },

  render: function() {
    return (
      <div className="container-fluid">
        <div className="grid" ref="grid">
          <div className="grid-item">
            <div className="card">
              <a href="#">
                <div className="card-thumbnail">
                  <img src="http://lorempixel.com/200/200/" alt="" className="img-responsive"/>
                </div>
              </a>

              <div className="card-price text-center">$20,000</div>

              <div className="card-content">
                <a href="#" className="title">Vendo Jordans 10 OVO nuevos</a>
                <div className="location subtle-text"><i className="fa fa-map-marker"></i> Santa Cruz</div>
              </div>

              <a href="#" className="card-seller">
                <div className="media">
                  <div className="media-left">
                    <img className="media-object" src="http://lorempixel.com/24/24" alt="..." />
                  </div>
                  <div className="media-body">
                    <div className="username">Daniel T.</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="grid-item">
            <div className="card">
              <a href="#">
                <div className="card-thumbnail">
                  <img src="http://lorempixel.com/200/200/" alt="" className="img-responsive"/>
                </div>
              </a>

              <div className="card-price text-center">$20,000</div>

              <div className="card-content">
                <a href="#" className="title">Vendo Jordans 10 OVO nuevos</a>
                <div className="location subtle-text"><i className="fa fa-map-marker"></i> Santa Cruz</div>
              </div>

              <a href="#" className="card-seller">
                <div className="media">
                  <div className="media-left">
                    <img className="media-object" src="http://lorempixel.com/24/24" alt="..." />
                  </div>
                  <div className="media-body">
                    <div className="username">Daniel T.</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="grid-item">
            <div className="card">
              <a href="#">
                <div className="card-thumbnail">
                  <img src="http://lorempixel.com/200/200/" alt="" className="img-responsive"/>
                </div>
              </a>

              <div className="card-price text-center">$20,000</div>

              <div className="card-content">
                <a href="#" className="title">Vendo Jordans 10 OVO nuevos</a>
                <div className="location subtle-text"><i className="fa fa-map-marker"></i> Santa Cruz</div>
              </div>

              <a href="#" className="card-seller">
                <div className="media">
                  <div className="media-left">
                    <img className="media-object" src="http://lorempixel.com/24/24" alt="..." />
                  </div>
                  <div className="media-body">
                    <div className="username">Daniel T.</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="grid-item">
            <div className="card">
              <a href="#">
                <div className="card-thumbnail">
                  <img src="http://lorempixel.com/200/200/" alt="" className="img-responsive"/>
                </div>
              </a>

              <div className="card-price text-center">$20,000</div>

              <div className="card-content">
                <a href="#" className="title">Vendo Jordans 10 OVO nuevos</a>
                <div className="location subtle-text"><i className="fa fa-map-marker"></i> Santa Cruz</div>
              </div>

              <a href="#" className="card-seller">
                <div className="media">
                  <div className="media-left">
                    <img className="media-object" src="http://lorempixel.com/24/24" alt="..." />
                  </div>
                  <div className="media-body">
                    <div className="username">Daniel T.</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="grid-item"><div className="card"><div className="card-content">...</div></div></div>
          <div className="grid-item"><div className="card"><div className="card-content">...</div></div></div>
          <div className="grid-item"><div className="card"><div className="card-content">...</div></div></div>
          <div className="grid-item"><div className="card"><div className="card-content">...</div></div></div>
          <div className="grid-item"><div className="card"><div className="card-content">...</div></div></div>
          <div className="grid-item"><div className="card"><div className="card-content">...</div></div></div>
          <div className="grid-item"><div className="card"><div className="card-content">...</div></div></div>
          <div className="grid-item"><div className="card"><div className="card-content">...</div></div></div>
          <div className="grid-item"><div className="card"><div className="card-content">...</div></div></div>
          <div className="grid-item"><div className="card"><div className="card-content">...</div></div></div>
          <div className="grid-item"><div className="card"><div className="card-content">...</div></div></div>
          <div className="grid-item"><div className="card"><div className="card-content">...</div></div></div>
        </div>
      </div>
    );
  }

});
