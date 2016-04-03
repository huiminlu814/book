MyComponents.Comment = React.createClass({

  handleDeleteComment: function(event) {
    this.props.actions.deleteComment(this.props.discussKey)
  },

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
			   <input type="hidden" value={this.props.songKey} id="songID"/>
			  <a className="btn-small waves-effect waves-light"><i className="small material-icons green-text" onClick={this.handleDeleteComment}>delete</i></a>
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
	var a = this.props.actions
    var comments = this.props.Comments.map(function(c,i){
      return <MyComponents.Comment discuss={c[1]} discussKey={c[0]} key={i} user={u} actions={a}/>
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