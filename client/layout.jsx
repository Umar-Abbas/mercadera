Layout = React.createClass({

  render() {
    return (
      <div>
        <Header />

        {this.props.content}
        
        <FooterMessage />
        <Footer />
        
        <LoginModal />
      </div>
    );
  }

});
