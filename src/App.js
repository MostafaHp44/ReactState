import React from "react";
import img from "./me.png";
import './App.css'

class App extends React.Component {
  state = {
    fullName: "Mostafa Aminee Ahmed",
    bio: "bio notimortant",
    myimg: img,
    profession: "forntend developer",
    show: true,
    counter:0,
  };

  handletoggle = (e) => {
    e.preventDefault();
    //clone
    this.setState({ show: !this.state.show , counter:0 });
    
  };

  counterState() {
    this.setState({counter: this.state.counter+1});
  }

  // mounting stage 
  componentDidMount() {
    this.timerID = setInterval(() => this.counterState(),1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
 


  render() {
    return (
      <div className="App" >
        <h2>{this.state.counter} sec</h2>
        <button onClick={this.handletoggle} className='mybtn'>Click me</button>
        {this.state.show ? (
          <header className="App-header">
            <h3>{this.state.fullName}</h3>
            <p>{this.state.bio}</p>
            <br />
            <p>{this.state.profession}</p>
            <img className="mypic" src={this.state.myimg} alt='mypic' />
          </header>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default App;
