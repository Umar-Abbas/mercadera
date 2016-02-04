ListingCard = React.createClass({
  render() {
    return (
      <div className="card">
        <div className="card-thumbnail">
          <img src="http://placehold.it/300x300" alt="" className="img-responsive"/>
        </div>
        <h5 className="card-price no-margin text-center">{this.props.price}</h5>
        <div className="card-content">
          <h5 className="title no-margin">{this.props.name}</h5>
          <div className="city subtle-text"><i className="material-icons md-18">place</i> {this.props.city}</div>
        </div>
        <div className="card-owner">
          <div className="media">
            <div className="media-left">
              <a href="#">
                <img className="media-object img-circle" src="http://lorempixel.com/32/32" alt="..." />
              </a>
            </div>
            <div className="media-body">
              <div className="username">{this.props.seller}</div>
              <div className="timestamp subtle-text">hace 2 minutos</div>
            </div>
          </div>
        </div>
      </div>     
    );
  }

});
