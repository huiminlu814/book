var _ = require('lodash')
var random_name = require('node-random-name');
var Firebase = require('firebase');

// New York
var city_location = {
  lat: 40.73,
  lon: -73.93
}

var radius = 0.03

// simualate a random person entering, staying for a duration, and leaving
function simulate_provider(){

  // generate a random person with a random name,
  // random location, and random duration
  var name = random_name()
  var duration = 1 + 5 * Math.random()
  var lat = city_location.lat + radius * (Math.random() - 0.5) * 2
  var lon = city_location.lon + radius * (Math.random() - 0.5) * 2
  var vendor_type = random_vendor_type()
  var person = {
    name: name,
    vendor: vendor_type,
    //duration: duration,
    lat: lat,
    lon: lon
  }

  // simulate this person entering
  enter_provider(person)

  // simulate this person leaving after 'duration' seconds
  setTimeout(function(){
    leave_provider(person)
  }, duration * 20000)

}

// simualate a random person entering, staying for a duration, and leaving
function simulate_user(){

  // generate a random person with a random name,
  // random location, and random duration
  var name = random_name()
  //var duration = 1 + 5 * Math.random()
  var lat = city_location.lat + radius * (Math.random() - 0.5) * 2
  var lon = city_location.lon + radius * (Math.random() - 0.5) * 2
  var duration = 1 + 5 * Math.random()
  var interest_type = random_vendor_type()
  var person = {
    name: name,
    interest: interest_type,
    duration: duration,
    lat: lat,
    lon: lon
  }

  // simulate this person entering
  enter_user(person)

   //simulate this person leaving after 'duration' seconds
  setTimeout(function(){
    leave_user(person)
  }, duration * 10000)

}

function enter_provider(person){
  console.log('enter person!!!:', person)
    var ref = new Firebase('https://team-roar.firebaseio.com/providers')
    var providerListRef = ref.child('providers')
    ref.child(person.name).set({
        name: person.name,
        pos: {
          lat: person.lat,
          lon: person.lon
        },
        vendor: person.vendor
    });
   var newProviderRef = providerListRef.push()
}

function enter_user(person){
  console.log('enter user!!!:', person)
    var ref = new Firebase('https://team-roar.firebaseio.com/users')
    var userListRef = ref.child('users')
    ref.child(person.name).set({
        name: person.name,
        pos: {
          lat: person.lat,
          lon: person.lon
        },
        interest: person.interest
    });
   var newUserRef = userListRef.push()
}

function leave_user(person){
  console.log('leave', person)
  var ref = new Firebase('https://team-roar.firebaseio.com/users')
    var onComplete = function(error) {
        if (error) {
            console.log('Synchronization failed');
        } else {
            console.log('Synchronization succeeded');
        }
    };

    ref.child(person.name).remove(onComplete);
}
function leave_provider(person){
  console.log('leave', person)
  var ref = new Firebase('https://team-roar.firebaseio.com/providers')
    var onComplete = function(error) {
        if (error) {
            console.log('Synchronization failed');
        } else {
            console.log('Synchronization succeeded');
        }
    };

    ref.child(person.name).remove(onComplete);
}

function random_vendor_type(){
  var types = ["Sandwich","Ice Cream","Burgers","Hot Dogs","Gyros"];
  var index = Math.floor(Math.random() * types.length)
  return types[index]
}

function clear() {
    // TODO: remove all people from the Firebase
    console.log("clear called")
    var ref = new Firebase('https://team-roar.firebaseio.com/providers')
    ref.remove()
    var ref2 = new Firebase('https://team-roar.firebaseio.com/users')
    ref2.remove()
}
// clear the firebase, so that the simulation always starts from no one
clear()

// Generate some providers
for (var i = 0; i < 5; i++)
{
  simulate_provider()
}

// Generate some users. 
for (var i = 0; i < 30; i++)
{
  simulate_user()
}

setInterval(simulate_user, 2000)
setInterval(simulate_provider, 16000)

