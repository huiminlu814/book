
class CurrentSong extends React.Component {
  render(){
  	
  	var currentSong = this.props.currentSong.map(function(s,i){
      
      return (
		    <div className="col s10"><h6>Current Song:{ s.songName }</h6></div>
      )
    })

    return (
      <div>
        <div className="card"> 
          <div className="card-content">
		        <div className="row">
              <div className="col s1"><i className="small material-icons">play_circle_outline</i></div>
              {currentSong}
		        </div>

          </div>
        </div>      
      </div>
    )
  }

}
MyComponents.CurrentSong = CurrentSong