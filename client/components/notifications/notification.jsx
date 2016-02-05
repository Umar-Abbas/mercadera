Notification = React.createClass({
  render() {
    return (
      <a href="#" className="notification-link">
        <div className="media">
          <div className="media-left">
            <img className="media-object img-circle" src={this.props.userAvatar} alt="..." />
          </div>
          <div className="media-body">
            <div><strong>{this.props.userName}</strong> comento en tu anuncio: "{this.props.listingTitle}".</div>
          </div>
        </div>
      </a>
    );
  }

});
