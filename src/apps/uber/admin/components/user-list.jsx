class UserList extends React.Component {
  render(){
	var filters=this.props.filters
	
  	var users = this.props.users.map(function(u, i){
    var color = "small material-icons"
    		if (filters[u.interest]) return (
    				<div>
          			 <p><img src="../img/customer/client.png" width="15" height="15"></img>{u.name}</p>
    				 <p> Interested Food: {u.interest}</p>
    				 </div>
    		);
    	})


    return (
          <div className="row">
            <div className="col s12">
              <div className="card black">
    		  <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src="http://greatwesternfoods.net/images/slideshow/01.jpg" height="350" ></img>
                </div>
                <div className="card-content" >
                  <span className="card-title activator white-text">User List<i className="material-icons right">more_vert</i></span>
                </div>
                <div className="card-reveal">
                  <span className="card-title white-text">User List<i className="material-icons right">close</i></span>
    				{users}
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

MyComponents.UserList = UserList
