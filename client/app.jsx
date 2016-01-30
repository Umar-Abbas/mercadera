App = React.createClass({
    render() {
        let content;
        content = <Layout content={this.props.content} />;
        return content;
    }
});
