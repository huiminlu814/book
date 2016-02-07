MyComponents.About = React.createClass({


  render: function() {
	  
    return (
	<div className="card">
		<div className="card-content">
			<div className="row">
			<div className="col s4 m2">
				<img src="me2.png" className="circle responsive-img"/>
			</div>
			<div className="col s4 m10">
				<p>Major: Computer Science</p> 
				<p>Country: Taiwan</p>
				<p>Birthday: 14. Aug</p>
				<p><a href="https://github.com/huiminlu814/book" >Github</a></p>
			</div>
			</div>
		</div>
	</div>
    );
  }

});
