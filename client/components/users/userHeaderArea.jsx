UserHeaderArea = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
      return {
          currentUser: Meteor.user()
      };
  },

  signout() {
    Meteor.logout();
  },

  anonymousUser() {
    return (
      <a href="#" className="nav-btn" data-toggle="modal" data-target="#loginModal">Ingresa / Registrate</a>
    );
  },

  signedInUser() {
    return (
      <div className="dropdown">
        <a className="nav-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          {this.data.currentUser.profile.name} <span className="caret"></span>
        </a>
        <ul className="dropdown-menu dropdown-menu-right">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" className="divider"></li>
          <li><a href="#" onClick={this.signout}>Sign out</a></li>
        </ul>
      </div>
    );
  },

  render() {
    return (
      this.data.currentUser ? this.signedInUser() : this.anonymousUser()
    );
  }

});
