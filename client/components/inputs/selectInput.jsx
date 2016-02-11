SelectInput = React.createClass({
  render: function() {
    return (
      <div className={this.props.errors.length > 0 ? "form-group has-error" : "form-group"}>
        <label htmlFor={this.props.name} className="col-sm-2 control-label">{this.props.label}</label>
        <div className="col-sm-10">
          <select name={this.props.name} className="form-control">
            {
              this.props.options.map(function(object, i) {
                return (
                  <option value={object._id}>{object.name}</option>
                )
              })
            }
          </select>
        </div>
      </div>
    );
  }

});
