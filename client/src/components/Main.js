import React, {Component} from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
<div>
<div className="tile is-ancestor">
  <div className="tile is-4 is-vertical is-parent " style={{marginLeft: 40}}>
    <div className="tile is-child box " >
      <p className="title">Compatible!</p>
      <p>Most Compatible User</p>
    </div>
    <div className="tile is-child box notification" style={{marginLeft: 40}}>
      <p className="title">Check Me Out!</p>
      <p>Featured Musician</p>
    </div>
  </div>
  <div className="tile is-parent" style={{marginRight: 40}}>
    <div className="tile is-child box">
      <p className="title">Latest Band Ads</p>
        <ul>
            <li>Request Here</li>
            <li>Request Here</li>
            <li>Request Here</li>
        </ul>
    </div>
  </div>
</div>
<div className="tile is-ancestor">
  <div className="tile is-parent" style={{marginLeft: 40}}>
    <article className="tile is-child box notification is-danger" >
      <p className="title">#1</p>
      <p className="subtitle">New Friend</p>
    </article>
  </div>
  <div className="tile is-parent" style={{marginLeft: 40, marginRight: 40}}>
    <article className="tile is-child box notification is-danger">
      <p className="title">#2</p>
      <p className="subtitle">New Friend</p>
    </article>
  </div>
  <div className="tile is-parent" style={{marginRight: 40}}>
    <article className="tile is-child box notification is-danger">
      <p className="title">#3</p>
      <p className="subtitle">New Friend</p>
    </article>
  </div>
</div>
<div style={{display: "flex", flexDirection: "column"}}>
        <footer className="footer" style={{background:"rgba(240, 161, 242, 0.0)", justifyContent: "flex-end"}}>
        <div className="content has-text-centered" style={{}}>
          <p>
            <strong>BandMate</strong>.  Currently work-in-progress
          </p>
        </div>
      </footer>
      </div>
      </div>



            
        );
    }
}

export default Main;