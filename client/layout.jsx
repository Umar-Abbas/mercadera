Layout = React.createClass({

  render: function() {
    return (
      <div>        
        <Header />

        {this.props.content}
        
      </div>
    );
  }

});
