Layout = React.createClass({

  render() {
    return (
      <div>
        <Header />

        {this.props.content}

        <LoginModal />
      </div>
    );
  }

});
