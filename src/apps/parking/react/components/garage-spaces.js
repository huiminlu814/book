MyComponents.GarageSpaces = React.createClass({
  render: function() { 
    return (
      <div className="row">
        <div className="col s12 m9">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="https://c1.staticflickr.com/3/2790/4540289776_65c401d463_z.jpg" height="500"></img>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Parking Spaces<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Parking Spaces:<i className="material-icons right">close</i></span>
              <p>Open Spaces: {this.props.open}</p>
              <p>Total Spaces: {this.props.total}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});