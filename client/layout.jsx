Layout = React.createClass({

  render: function() {
    return (
      <div>        
        <Header />

        {this.props.content}

        <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">

              <div className="modal-header">
                <h4 className="modal-title text-center" id="myModalLabel">Ingresa / Registrate</h4>
              </div>

              <div className="modal-body">
                <ul className="list-unstyled">
                  <li><a href="#" className="btn btn-block btn-facebook">Ingresa con Facebook</a></li>
                  <li><a href="#" className="btn btn-block btn-twitter">Ingresa con Twitter</a></li>
                  <li><a href="#" className="btn btn-block btn-gplus">Ingresa con Google+</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }

});
