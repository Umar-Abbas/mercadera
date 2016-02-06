Footer = React.createClass({
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div>
            2016 &copy; Mercadera. Hecho con <i className="fa fa-heart"></i> en Bolivia.
          </div>

          <ul className="list-inline company-links">
            <li><a href="#">Acerca de Mercadera</a></li>
            <li><a href="#">Terminos & Privacidad</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>

          <ul className="list-inline social-links">
            <li><a href="#" className="facebook"><i className="fa fa-facebook-square fa-lg"></i></a></li>
            <li><a href="#" className="twitter"><i className="fa fa-twitter fa-lg"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }

});