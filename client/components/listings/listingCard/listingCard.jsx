ListingCard = React.createClass({
  render() {
    return (
      <div className="card">
        <a href="#">
          <div className="card-thumbnail">
            <img src={this.props.cardThumbnail} alt="" className="img-responsive"/>
          </div>
          <h5 className="card-price no-margin text-center">{this.props.price}</h5>
          <div className="card-content">
            <h5 className="title no-margin">{this.props.name}</h5>
            <div className="city subtle-text"><i className="material-icons md-18">place</i> {this.props.city}</div>
          </div>
        </a>
        <a href="#">
          <div className="card-owner">
            <div className="media">
              <div className="media-left">
                <img className="media-object img-circle" src={this.props.sellerAvatar} alt="..." />
              </div>
              <div className="media-body">
                <div className="username">{this.props.sellerName}</div>
                <div className="timestamp subtle-text">hace 2 minutos</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }

});
