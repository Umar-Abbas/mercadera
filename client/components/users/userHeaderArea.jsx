UserHeaderArea = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
      return {
          currentUser: Meteor.user()
      };
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
          Username <span className="caret"></span>
        </a>
        <ul className="dropdown-menu dropdown-menu-right">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" className="divider"></li>
          <li><a href="#">Separated link</a></li>
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
