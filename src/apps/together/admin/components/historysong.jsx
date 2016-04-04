
class HistorySong extends React.Component {
  render(){
  	
  	var currentSong = this.props.currentSong.map(function(s,i){
      
      return (
		    <div >
		    <a key={i} >
			{ s.songName } 
		    </a>			
			</div>
      )
    })

    return (
      <div>
        <div className="card"> 
          <div className="card-content">
		        <div className="row">
					<div className="col s1"><i className="small material-icons">play_circle_outline</i></div>
					<div className="col s10"><h6>History Song</h6></div>
					<div className="progress ">
						<div className="determinate"></div>
					</div>
				</div>
				{currentSong}
          </div>
        </div>      
      </div>
    )
  }

}
MyComponents.HistorySong = HistorySong