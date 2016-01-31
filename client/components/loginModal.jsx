LoginModal = React.createClass({
  loginWithFacebook: function() {
    var self = this;
    Meteor.loginWithFacebook({}, function(err) {
      if (err) { throw new Meteor.Error("Facebook login failed"); }
      self.hideLoginModal();
    });
  },
  loginWithTwitter: function() {
    var self = this;
    Meteor.loginWithTwitter({}, function(err) {
      if (err) { throw new Meteor.Error("Twitter login failed"); }
      self.hideLoginModal();
    });
  },
  hideLoginModal: function() {
    $(this.refs.loginModal).modal('hide');
  },
  render: function() {
    return (
      <div className="modal fade" ref='loginModal' id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModal">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title text-center" id="myModalLabel">Ingresa / Registrate</h4>
            </div>

            <div className="modal-body">
              <ul className="list-unstyled">
                <li><a href="#" onClick={this.loginWithFacebook} className="btn btn-block btn-facebook">Ingresa con Facebook</a></li>
                <li><a href="#" onClick={this.loginWithTwitter} className="btn btn-block btn-twitter">Ingresa con Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
