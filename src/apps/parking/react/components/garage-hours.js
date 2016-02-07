MyComponents.Hour = React.createClass({
 render: function() {

   var keyMap = {'BEG': 'Open ', 'END': '-', 'FROM': '   ', 'TO': ' through ', }
   var vals = [];
   for(var key in this.props.hour) {
     vals.push(<span key={key}>{keyMap[key]}{this.props.hour[key]}</span>);
   }

   return (

         <p>
         { vals }
         </p>

   );
 }
});


MyComponents.GarageHours = React.createClass({
  render: function() {

    var hours = this.props.hours.map(function(h,i){
      return <MyComponents.Hour hour={h} key={i}/>
    })

    return (
      <div className="row">
        <div className="col s12 m9">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="http://www.chevrolet.com/content/dam/Chevrolet/northamerica/usa/nscwebsite/en/Home/Chevy%20Culture/News/Parking%20Garages/01-images/2013-culture-news-parking-garages-mh-1-1280x551.jpg" height="450"></img>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Garage Open Hours<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Garage Open Hours:<i className="material-icons right">close</i></span>
              {hours}
            </div>
          </div>
        </div>
      </div>
    );
  }
});