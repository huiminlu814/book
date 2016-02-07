MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper green lighten-2">
        <a href="#" className="brand-logo center"><font face="Book Antigua" size="9">Garage Viewer</font></a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
		  <li><a href="/">Course Home</a></li>
		  <li><a href="/apps/parking/index.html">Home</a></li>
		  <li><a href="/apps/parking/garages.html">List</a></li>
		  <li><a href="/apps/parking/garages_map.html">Map</a></li>
        </ul>
        </div>
      </nav>
    );
  }
});
