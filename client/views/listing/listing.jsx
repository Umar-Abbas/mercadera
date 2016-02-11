Listing = React.createClass({

  render: function() {
    return (
      <div>
        
        <div className="container">
          <div className="row listing-row">

            <div className="col-md-8 col-xs-12">
              <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <img src="http://placehold.it/900x600" alt="..." className="img-responsive" />
                  </div>
                  <div className="item">
                    <img src="http://lorempixel.com/900/600" alt="..." className="img-responsive" />
                  </div>
                </div>

                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

              <div className="box listing-box">
                <h3 className="price no-margin text-center">$36,000</h3>

                <div className="listing-head box-padding text-center">
                  <h4 className="title">Armani design two drawers contemporary night stand</h4>
                  <div className="category"><a href="#">Celulares y Accesorios</a> en Cochabamba</div>
                  <div className="created-at">Publicado el 31/12/2015</div>
                </div>

                <hr/>

                <div className="listing-body box-padding">
                  <div className="subheading subtle-text">Descripción</div>
                  <p>Mercedes CLA 200 color rojo, impecable con 4500 kilometros sacado de Autostar concecionaria Ovando. Escucho ofertas!!!</p>
                </div>

                <hr/>

                <div className="listing-social box-padding">
                  <div className="row">
                    <div className="col-xs-6"><a href="#" className="btn btn-block btn-default"><i className="material-icons md-18">share</i> Compartir</a></div>
                    <div className="col-xs-6"><a href="#" className="btn btn-block btn-default"><i className="material-icons md-18">flag</i> Reportar</a></div>
                  </div>
                </div>
              </div>

              <div className="row main-adspace">
                <div className="col-md-6">
                  <div className="snowflake-box">
                    <img src="http://placehold.it/250x250" alt="" className="img-responsive"/>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="snowflake-box">
                    <img src="http://placehold.it/250x250" alt="" className="img-responsive"/>
                  </div>
                </div>
              </div>

            </div>


            <div className="col-md-4 col-xs-12">
              <div className="box seller-box">
                <div className="box-heading text-center text-uppercase">Vendedor</div>

                <a href="#" className="listing-owner">
                  <div className="owner-holder">
                    <div className="avatar">
                      <img src="http://placehold.it/40x40" alt=""/>
                    </div>

                    <div className="owner-body">
                      <div className="username">Username</div>
                      <div className="subtle-text">Miembro desde 02/01/2016</div>

                      <i className="material-icons subtle-text">chevron_right</i>
                    </div>
                  </div>
                </a>

                <div className="seller-items box-padding">
                  <h5 className="text-center subtle-text no-margin">Más de Daniel</h5>
                  <div className="row">
                    <div className="col-xs-6">
                      <img src="http://www.tumomo.com/files/527787_1.JPG" alt="" className="img-responsive"/>
                    </div>
                    <div className="col-xs-6">
                      <img src="http://www.tumomo.com/files/527787_1.JPG" alt="" className="img-responsive"/>
                    </div>
                    <div className="col-xs-6">
                      <img src="http://www.tumomo.com/files/527787_1.JPG" alt="" className="img-responsive"/>
                    </div>
                    <div className="col-xs-6">
                      <img src="http://www.tumomo.com/files/527787_1.JPG" alt="" className="img-responsive"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box disclaimer-box">
                <div className="box-heading text-center text-uppercase">Información útil</div>
                
                <div className="box-padding">
                  <ul>
                    <li>Evite estafas al actuar localmente o pagando con PayPal.</li>
                    <li>Nunca pagues con Western Union, Moneygram u otros servicios de pago anónimos.</li>
                    <li>No comprar o vender fuera de su país. No aceptes cheques que no sean de tu país.</li>
                    <li>Este sitio no se involucra en las transacciones y no maneja pagos, envíos, garantías de transacciones, proporcionar servicios de custodia.</li>
                  </ul>
                </div>
              </div>

              <div className="snowflake-box">
                <img src="http://placehold.it/300x250" alt="" className="img-responsive"/>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }

});
