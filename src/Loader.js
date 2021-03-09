
const Loader = props => {
    console.log(props);
    return (
  <div className="ui active dimmer">
    <div className="ui text loader">{props.message}</div>
  </div>
    );
};

Loader.defaultProps = {
    message:'Loading...'
};

export default Loader;