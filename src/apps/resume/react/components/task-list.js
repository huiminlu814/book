MyComponents.Task = React.createClass({

  render: function() {
    return (
      <div className="card">
        <div className="card-content">
        <p>Title: {this.props.task.title}</p>
		<p>Priority: {this.props.task.priority}</p>
		<p>Type: {this.props.task.type}</p>
		<p>Deadline: {this.props.task.deadline}</p>
		<p>Completed:  {this.props.task.completed}</p>
        </div>
      </div>
    );
  }

});

MyComponents.TaskList = React.createClass({
  render: function() {

    var taskElements = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        {taskElements}

        </div>
      </div>
    );
  }
});
