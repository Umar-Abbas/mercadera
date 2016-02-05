CreateListing = React.createClass({

  render: function() {
    return (
      <div>
        <div className="container">
          <div className="box">
            <div className="box-heading text-center text-uppercase">Publica tu anuncio</div>

            <div className="box-padding">
              <ListingForm listing={{}} />
            </div>
          </div>
        </div>
      </div>
    );
  }

});
