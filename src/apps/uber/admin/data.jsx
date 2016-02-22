const { Map, TileLayer, Marker, Popup } = window.ReactLeaflet;

// a single 'data' object that holds the data of your entire app, with initial values
var data = {
  center: [40.701749, -73.922], // San Francisco
  providers: [],
  filters: {"Pizza":0,"HotDog":0,"Tacos":0,"Burger":0,"IceCream":0},
  users: []
}

// a single 'handlers' object that holds all the actions of your entire app
var actions = {}

// the main render() function. call this function whenever the app's UI
// needs to to re-rendered
// 'data' and 'actions' are injected into the app
function render(){
  ReactDOM.render(
    <MyComponents.App
        data={data}
        actions={actions}/>,
    $('#app-container').get(0)
  )
}

//
// DATA
//

var firebaseRef = new Firebase('https://team-roar.firebaseio.com/')



// Real-time Data (load constantly on changes)
firebaseRef.child('users')
  .on('value', function(snapshot){

    data.users = _.values(snapshot.val())

    render()

  })

firebaseRef.child('providers')
  .on('value', function(snapshot){

    data.providers = _.values(snapshot.val())

    render()

  })
  
actions.filterUpdateIceCream = function() {
  var filter = "IceCream"
  data.filters[filter] == 1 ? data.filters[filter] = 0 :  data.filters[filter] = 1
  render()
}
actions.filterUpdateBurger = function() {
  var filter = "Burger"
  data.filters[filter] == 1 ? data.filters[filter] = 0 :  data.filters[filter] = 1
  render()
}
actions.filterUpdateTacos = function() {
  var filter = "Tacos"
  data.filters[filter] == 1 ? data.filters[filter] = 0 :  data.filters[filter] = 1
  render()
}
actions.filterUpdatePizza = function() {
  var filter = "Pizza"
  data.filters[filter] == 1 ? data.filters[filter] = 0 :  data.filters[filter] = 1
  render()
}
actions.filterUpdateHotDog = function() {
  var filter = "HotDog"
  data.filters[filter] == 1 ? data.filters[filter] = 0 :  data.filters[filter] = 1
  render()
}
