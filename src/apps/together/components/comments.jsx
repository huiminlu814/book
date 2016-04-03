MyComponents.Comment = React.createClass({
  render: function() {
	if (this.props.user)
	{
		return(
		  <div className="card">
			<div className="card-content">
			  <div className="chip">
				<img src={this.props.discuss.imageURL}/>
				{this.props.discuss.userName} 
			  </div>
			  <br/>
			  {this.props.discuss.comment}
			</div>
		  </div>			
		);
	}
	else
	{
		return (
		  <div className="card">
			<div className="card-content">
			  <div className="chip">
				<img src={this.props.discuss.imageURL}/>
				{this.props.discuss.userName} 
			  </div>
			  <br/>
			  {this.props.discuss.comment}
			</div>
		  </div>
		);
	}
  }
});

class Comments extends React.Component {
  render(){
    var u = this.props.user
    var comments = this.props.Comments.map(function(c,i){
      return <MyComponents.Comment discuss={c} key={i} user={u}/>
    })

    if (this.props.user) {
      return (
        <div>
          <div className="card">
            <div className="card-content">
              <div className="row">
                <div className="col s1"><i className="small material-icons">chat</i></div>
                <div className="col s6"><h6>Discussion</h6></div>
                <div className="progress ">
                  <div className="determinate"></div>
                </div>
              </div>
              <div id="scrollable">
                { comments }
              </div>
            </div>
          </div>      
        </div>
      )
    }
    else {
      return (
        <div>
          <div className="card">
            <div className="card-content">
              <div className="row">
                <div className="col s1"><i className="small material-icons">chat</i></div>
                <div className="col s6"><h6>Discussion</h6></div>
                <div className="progress ">
                  <div className="determinate"></div>
                </div>
              </div>
              <div id="scrollable">
                { comments }
              </div>
            </div>
          </div>      
        </div>
      )
    }
  }
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false
      });
    });
  }
}
MyComponents.Comments = Comments