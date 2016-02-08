MyComponents.Skill = React.createClass({

  render: function() {
    return (

       <p>  <i className="tiny material-icons">play_arrow</i>{this.props.skill.name}: {this.props.skill.year}y </p>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        {skillElements}

        </div>
      </div>
    );
  }
});
