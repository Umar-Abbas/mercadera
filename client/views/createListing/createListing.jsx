CreateListing = React.createClass({
  getDefaultProps() {
    return {
      listing: new Listing()
    }
  },

  render: function() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 mobile-padding">
              <div className="box">
                <div className="box-heading text-uppercase text-center">Publica tu anuncio</div>
                <div className="box-padding">
                  <ListingForm listing={this.props.listing} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
