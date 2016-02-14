class NavBar extends React.Component {

  render(){
    return (
    <nav>
        <div className="nav-wrapper black darken-3">
        <a href="#" className="brand-logo center">Uber Cart</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/apps/uber/index.html">Home</a></li>
        <li><a href="/apps/uber/client">Clients</a></li>
         <li><a href="/apps/uber/admin">Admins</a></li>
        </ul>

      </div>
     </nav>
    );
  }

}
MyComponents.NavBar = NavBar
