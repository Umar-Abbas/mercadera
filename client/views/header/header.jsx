Header = React.createClass({
  render: function() {
    return (
      <div className="navbar-fixed-top">
        <div className="color-stripe">
          <div className="color-tag red"></div>
          <div className="color-tag blue"></div>
          <div className="color-tag yellow"></div>
          <div className="color-tag green"></div>
        </div>

        <div className="visible-xs visible-sm">
          <div id="mobile-header">
            <div className="header-inner">
              <div className="header-left">
                <a href="#" className="sidebar-btn">
                  <i className="material-icons">menu</i>
                </a>
              </div>

              <div className="header-middle">
                <input type="text" className="search-bar text-center" placeholder="Busca en Mercadera"/>
              </div>
            </div>
          </div>
        </div>

        <div className="visible-md visible-lg">
          <div id="header">
            <div className="header-inner">
              <div className="header-left">
                <a href="/" className="nav-btn brand">Mercadera</a>
                <DropdownCategoryPicker />                
              </div>

              <div className="header-middle">
                <div className="search-bar-holder">
                  <input type="text" className="search-bar" placeholder="Search for something..."/>
                </div>
              </div>

              <div className="header-right">
                <div className="dropdown">
                  <a className="icon-btn text-center dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <i className="material-icons">notifications_none</i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right notifications-menu">
                    <div className="dropdown-heading">Notificaciónes</div>
                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img className="media-object img-circle" src="http://lorempixel.com/30/30" alt="..." />
                        </a>
                      </div>
                      <div className="media-body">
                        <div><strong>Daniel T.</strong> comento en tu anuncio: "PS4 500GB Blanco".</div>
                      </div>
                    </div>

                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img className="media-object img-circle" src="http://lorempixel.com/30/30" alt="..." />
                        </a>
                      </div>
                      <div className="media-body">
                        <div><strong>Marco S.</strong> comento en tu anuncio: "Air Jordans 10 OVO".</div>
                      </div>
                    </div>

                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img className="media-object img-circle" src="http://lorempixel.com/30/30" alt="..." />
                        </a>
                      </div>
                      <div className="media-body">
                        <div><strong>Daniel T.</strong> commento en tu anuncio: "PS4 500GB Blanco".</div>
                      </div>
                    </div>
                  </ul>
                </div>

                <UserHeaderArea />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
