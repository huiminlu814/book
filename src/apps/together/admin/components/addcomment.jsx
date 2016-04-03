
class AddComment extends React.Component {
  render(){


    if (this.props.user) {
      return (
        <div>
          <div className="card">
           
            <div className="card-content">
              <ul>
                <div className="row">
                  <div className="input-field col m12 s12">
                    <textarea id="comment" className="materialize-textarea"></textarea>
                    <label for="comment">Comment</label>
                  </div>
                  <div className="card-action">
                    <a className="waves-effect waves-light btn blue-grey" onClick={this.props.actions.submitComment}>Submit</a>
                  </div>
                </div>
              </ul>
            </div>		   
		   
          </div>      
        </div>
      )
    }
    else {
      return(<div></div>)
    }
  }

}
MyComponents.AddComment = AddComment