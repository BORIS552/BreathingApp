import React, { Component } from 'react';
import './ExploreContainer.css';
import ReactInterval from 'react-interval';

export default class ExploreContainer extends Component {

	state = {
		breathe: 'BREATHE IN',
		play: false,
		breathe_out_status: false,
		breathe_in_hold_status: false,
		breathe_in_status: true,
		breathe_out_hold: false,
		count: 0,
		dcount: 0,
		breathe_status: 'BREATHE IN'
	}
	
	componenDidMount = () => {
		this.setState({
			breathe_in_status: true
		});
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

	endBreatheIn = () => {
		this.setState({count: this.state.count + 1});
		this.setState({dcount: this.state.dcount + 1});
		if(this.state.count >= 0 && this.state.count <= 5){
			this.setState({ breathe_status: 'BREATHE IN'});
			if( this.state.count == 5){
				this.setState({ dcount: 0});
			}
		}
		if( this.state.count >=6 && this.state.count <= 9){
			this.setState({ breathe_status: 'HOLD'});
			if(this.state.count == 9){
				this.setState({ dcount: 0});
			}
		}
		if( this.state.count >=10 && this.state.count <= 14){
			this.setState({ breathe_status: 'BREATHE OUT'});
			if(this.state.count == 14){
				this.setState({ dcount: 0});
			}
		}
		if( this.state.count >=15 && this.state.count <= 18){
			this.setState({ breathe_status: 'HOLD'});
			if(this.state.count == 18){
				this.setState({ dcount: 0});
			}
		}
		if(this.state.count >= 19) {
			this.setState({ count: 0});
			this.setState({dcount: 0});
		}
		console.log("timer");
	}
	render() {
		const {breathe_status} = this.state; 
		const {dcount} = this.state;
	return(
	<div className="container">
     <div className="audio_div">
     
     	<div className="head">
       		{dcount}
       		<br/>
     		{breathe_status}
        <ReactInterval timeout={1000} enabled={true}
          callback={ this.endBreatheIn} />
       		
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

    
  