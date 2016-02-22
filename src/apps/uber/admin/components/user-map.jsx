
const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

  
class UserMap extends React.Component {



  render(){
  
	var filters = this.props.filters
    const userElements = this.props.users.map( function(u,i){


      var curIcon = L.icon({
        iconUrl: '../img/customer/' + u.interest + ".png",
        iconSize: [35, 35]});
      u.icon=curIcon;

      if (filters[u.interest]) return <Marker position={u.pos} icon={u.icon} opacity="50">
        <Popup>
          <span>{u.name} wants {u.interest} <br />
		  {u.serviceTime}</span>
        </Popup>
      </Marker>
    })
	
    const providerElements = this.props.providers.map( function(u,i){
            var curIcon = L.icon({
        iconUrl: '../img/vendor/' + u.vendor + ".png",
        iconSize: [45, 45]});
      u.icon=curIcon;

      if (filters[u.vendor]) return <Marker position={u.pos} icon={u.icon} >
        <Popup>
          <span>{u.name} <br />
		  </span>
        </Popup>
      </Marker>
    })	
	

	  
    return (
      <div className="row">
        <div className="col s12">
          <div className="card ">
		  <h4>Map</h4>
				
			<Map center={[40.701749, -73.922]} zoom={13}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        {userElements}
		{providerElements}
      </Map>
      </div>
          </div>
        </div>

  	)
  }
}

MyComponents.UserMap = UserMap
