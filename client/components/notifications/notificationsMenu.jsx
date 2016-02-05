NotificationsMenu = React.createClass({
  render() {
    return (
      <div className="dropdown">
        <a className="icon-btn text-center dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <i className="material-icons">notifications_none</i>
        </a>
        <ul className="dropdown-menu dropdown-menu-right notifications-menu">
          <div className="dropdown-heading">Notificaciónes</div>
          <Notification userAvatar={"http://lorempixel.com/32/32"} userName={"Daniel T."} listingTitle={"Vendo PS4 500GB Nuevo"} />
          <Notification userAvatar={"http://lorempixel.com/32/32"} userName={"Jack S."} listingTitle={"Air Jordans 10 OVO"} />
          <Notification userAvatar={"http://lorempixel.com/32/32"} userName={"Daniel T."} listingTitle={"Regalo Duplex 2do Anillo"} />
        </ul>
      </div>
    );
  }

});
