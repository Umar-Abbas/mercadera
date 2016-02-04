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
                <a href="#" className="icon-btn text-center"><i className="material-icons">notifications_none</i></a>

                <UserHeaderArea />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
