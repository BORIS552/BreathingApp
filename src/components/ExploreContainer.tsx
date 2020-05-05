import React, { Component } from 'react';
import './ExploreContainer.css';
import Wave from 'react-wavify';

export default class ExploreContainer extends Component {

	state = {
		breathe: 'BREATHE IN',
		play: false
	}
	
	playAudio = () => {
		this.setState({
			play: true
		});
		console.log(this.state.play);
		console.log("Play clicked");
		const mytrack = document.getElementById('myAudio');
		(mytrack as HTMLAudioElement).play();
	};

	pauseAudio = () => {
		this.setState({
			play: false
		});
		console.log(this.state.play);
		console.log("Pause clicked");
		const mytrack = document.getElementById('myAudio');
		(mytrack as HTMLAudioElement).pause();
	}

	render() {

	return(
	<div className="container">
     <div className="audio_div">
     
     	<div className="head">
       		<strong>{this.state.breathe}</strong>
       </div>
       <br/>
       <div className="animation">
       	

			<div className="watch-face">
			  <div className="circle"></div>
			  <div className="circle"></div>
			  <div className="circle"></div>
			  <div className="circle"></div>
			  <div className="circle"></div>
			  <div className="circle"></div>
			</div>


       </div>
       <div className="audio_control">
        <audio id="myAudio" ref="audio_tag" src={"/assets/sounds/audio_file.mpeg"} loop />
        {
        	this.state.play ?
        	<button className="pause" onClick={this.pauseAudio}><img src={"/assets/pause.png"}/></button>
        	:
        	<button className="play" onClick={this.playAudio}><img src={"/assets/play.png"}/></button>
        }
        </div>
     </div>
    </div>
	);
		
	}
}

    
  