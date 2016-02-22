class ProviderList extends React.Component {
  render(){
  
	var filters=this.props.filters
	var providers = this.props.providers.map(function(p, i){
		var color = "small material-icons"
		if (filters[p.vendor]) return (
				<div>
      			 <p><img src="../img/vendor/provider.png" width="30" height="30"></img>{p.name}</p>
				 <p> Selling product: {p.vendor}</p>
				 <p> Service Time: 10:00AM-5:00PM</p>
				 </div>
		);
	})
  
    return (
      <div className="row" >
        <div className="col s12">
          <div className="card black">
		  <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="http://d3dl1v0rc03tp9.cloudfront.net/sites/default/files/food.jpg" height="350" ></img>
            </div>
            <div className="card-content" >
              <span className="card-title activator white-text text-darken-4">Provider List<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
              <span className="card-title white-text">Provider List<i className="material-icons right">close</i></span>
				{providers}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MyComponents.ProviderList = ProviderList
