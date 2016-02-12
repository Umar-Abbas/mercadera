Header = React.createClass({
  render: function() {
    return (
      <div className="navbar-fixed-top">
        <div className="color-stripe">
          <div className="color-tag green"></div>
          <div className="color-tag blue"></div>
          <div className="color-tag yellow"></div>
          <div className="color-tag red"></div>
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
                <input type="text" className="search-bar" placeholder="Search Mercadera"/>
              </div>

              <div className="header-right">
                <a className="icon-btn text-center">
                  <i className="material-icons">add_a_photo</i>
                </a>
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
                  <i className="material-icons">search</i>
                  <input type="text" className="search-bar" placeholder="Search Mercadera"/>
                </div>
              </div>

              <div className="header-right">
                <a className="icon-btn text-center">
                  <i className="material-icons">notifications_none</i>
                </a>
                <UserHeaderArea />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
