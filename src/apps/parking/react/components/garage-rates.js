MyComponents.Rate = React.createClass({
 render: function() {

   var keyMap = {'BEG': 'Beginning', 'END': 'End', 'RATE': 'Rate', 'RQ': 'Type of Rate', 'RR': 'Other Info', 'DESC': 'Description', }
   var vals = [];
   for(var key in this.props.rate) {
     vals.push(<span key={key}>{keyMap[key]}: {this.props.rate[key]}<br /></span>);
   }

   return (

       <span className="card-content">
        <br /> { vals }----------------------------------------------------------------------------------<br />
       </span>
   );
 }
});


MyComponents.GarageRates = React.createClass({
  render: function() {

    var rates = this.props.rates.map(function(r,i){
      return <MyComponents.Rate rate={r} key={i}/>
    })

    return (
      <div className="row">
        <div className="col s12 m9">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="http://www.rentenbach.com/Uploads/Images/PhotoGalleries/VA%20Tech%20Parking%20Deck%204[1].JPG" height="500"></img>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Garage Rate Info<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Garage Rate Info:<i className="material-icons right">close</i></span>
              {rates}
            </div>
          </div>
        </div>
      </div>
    );
  }
});