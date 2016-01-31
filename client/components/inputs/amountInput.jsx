AmountInput = React.createClass({
  render: function() {
    return (
      <div className={this.props.errors.length > 0 ? "form-group has-error" : "form-group"}>
        <label htmlFor={this.props.name} className="col-sm-2 control-label">{this.props.label}</label>
        <div className="col-sm-10">

          <div className="input-group">
            <span className="input-group-addon">$</span>
            <input type="text" className="form-control" name={this.props.name} placeholder={this.props.placeholder} />
            <span className="input-group-addon">.00</span>
          </div>
        </div>
      </div>
    );
  }

});
