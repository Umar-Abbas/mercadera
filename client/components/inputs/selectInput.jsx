SelectInput = React.createClass({
  render: function() {
    return (
      <div className={this.props.errors.length > 0 ? "form-group has-error" : "form-group"}>
        <label htmlFor={this.props.name} className="col-sm-2 control-label">{this.props.label}</label>
        <div className="col-sm-10">
          <select name={this.props.name} className="form-control">
            <option value="1">Value 1</option>
            <option value="2">Value 2</option>
          </select>
        </div>
      </div>
    );
  }

});
