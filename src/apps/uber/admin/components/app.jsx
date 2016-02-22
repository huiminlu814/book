class App extends React.Component {
  render(){
    return <div>
	    <MyComponents.Needs actions={this.props.actions}/>
		<div >
        <MyComponents.UserMap
            users={this.props.data.users}
			providers={this.props.data.providers}
            filters={this.props.data.filters}/>
      </div>

	<div >
	<MyComponents.UserList 
		users={this.props.data.users}
		filters={this.props.data.filters}/>
	</div>
	
		<div >
        <MyComponents.ProviderList
            
			providers={this.props.data.providers}
            filters={this.props.data.filters}/>
      </div>
        
    </div>

  }
}

MyComponents.App = App
