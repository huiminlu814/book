MyComponents.City = React.createClass({

  render: function() {
    return (
      <div className="card">
        <div className="card-content">
			<div className="row">
			<div className="col s4 m2" >		
				<div className="card-content valign center" ><img  src={this.props.city.img} height="80" width="80" /></div>
			</div>
			<div className="col s4 m10">
				<p> <span className="blue-text text-darken-2"  ><font size="6">{this.props.city.name}</font></span></p>
				<p>Tempture: {this.props.city.tempture}°F</p>
				<p>Timezone:  {this.props.city.timezone}</p>
				<p>Humidity:  {this.props.city.humidity}</p>
				<p>Visibility:  {this.props.city.visibility}</p>
				<p>Wind Speed:  {this.props.city.windSpeed}</p>
				<p>Overall Summary: {this.props.city.summary}</p>
			</div>
			</div>
        </div>
      </div>
    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        {cityElements}

        </div>
      </div>
    );
  }
});
