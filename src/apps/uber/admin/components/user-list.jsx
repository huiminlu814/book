class UserList extends React.Component {
  render(){
  	var users = this.props.users.map(function(u, i){
    var color = "small material-icons"
    		return (
    				<div>
          			 <p><i className="small material-icons">info_outline</i>{u.name}</p>
    				 <p> Interested Food: {u.interest}</p>
    				 </div>
    		);
    	})

    return (
          <div className="row">
            <div className="col s12 m10">
              <div className="card">
    		  <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src="http://greatwesternfoods.net/images/slideshow/01.jpg" height="350" ></img>
                </div>
                <div className="card-content" >
                  <span className="card-title activator grey-text text-darken-4">User List<i className="material-icons right">more_vert</i></span>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">User List<i className="material-icons right">close</i></span>
    				{users}
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

MyComponents.UserList = UserList
