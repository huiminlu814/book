MyComponents.TeamCards = React.createClass({
  render: function() {
    console.log('member', this.props.members)
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={this.props.members.pic} height="350"></img>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{this.props.members.name}<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">{this.props.members.name}<i className="material-icons right">close</i></span>
              <li><a className="white" href={this.props.members.github}>Github</a></li>
              <li><a className="white" href={this.props.members.website}>UCD Website</a></li>
            </div>
          </div>
        </div>
      </div>
    );
  }
});



MyComponents.Team = React.createClass({
  render: function() {

    // inspect this.props.team to make sure we load the data correctly
    console.log('members', this.props.members)

    // For each 'member' in 'team', create a <li> component to display
    // information about this member.

    var members = this.props.members.map(function(member, i){
      return <MyComponents.TeamCards members={member} key={i}/>
    })

    return (
      <div>
        <h2>Team Members</h2>
          {members}
      </div>
	  
    );
  }
});
