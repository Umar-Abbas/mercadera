CreateListing = React.createClass({

  render: function() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 mobile-padding">
              <div className="box">
                <div className="box-heading text-uppercase text-center">Publica tu anuncio</div>
                <div className="box-padding">
                  <ListingForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
