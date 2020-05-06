import React, { Component } from 'react';
import './ExploreContainer.css';
import ReactInterval from 'react-interval';

export default class ExploreContainer extends Component {


	state = {
		breathe: 'BREATHE IN',
		play: true,
		count: 0,
		dcount: 0,
		toggle: 0,
		breathe_status: 'Breathe In',
		pulse_class_name: 'pulse_breathe_in'
	}
	
	
	componenDidMount = () => {
		this.setState({
			breathe_in_status: true
		});
		this.setState({
			play: true
		});
		console.log(this.state.play);
		console.log("Play clicked");
		const mytrack = document.getElementById('myAudio');
		(mytrack as HTMLAudioElement).play();
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
		if( this.state.play && this.state.toggle == 0) {
			console.log("Play clicked");
			const mytrack = document.getElementById('myAudio');
			(mytrack as HTMLAudioElement).play();
			this.setState({ toggle: 1});
		}
		this.setState({count: this.state.count + 1});
		this.setState({dcount: this.state.dcount + 1});
		if(this.state.count >= 0 && this.state.count <= 5){
			this.setState({ breathe_status: 'Breathe In'});
			this.setState({ pulse_class_name: 'pulse_breathe_in'});
			if( this.state.count == 5){
				this.setState({ dcount: 0});
			}
		}
		if( this.state.count >=6 && this.state.count <= 9){
			this.setState({ breathe_status: 'Hold'});
			this.setState({ pulse_class_name: 'pulse_hold'});
			if(this.state.count == 9){
				this.setState({ dcount: 0});
			}
		}
		if( this.state.count >=10 && this.state.count <= 14){
			this.setState({ breathe_status: 'Breathe Out'});
			this.setState({ pulse_class_name: 'pulse_breathe_out'});
			if(this.state.count == 14){
				this.setState({ dcount: 0});
			}
		}
		if( this.state.count >=15 && this.state.count <= 18){
			this.setState({ breathe_status: 'Hold'});
			this.setState({ pulse_class_name: 'pulse_hold'});
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
     		<b>{breathe_status}</b>

        <ReactInterval timeout={1000} enabled={true}
          callback={ this.endBreatheIn} />
       		
       </div>
       <br/>
       <div className="animation">

			<div className="center">
        		<div className={this.state.pulse_class_name}>{dcount}</div>
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

     <div className="foot">
     	<h3>Love for the FrontLine</h3>
     	<p>Music by Alibi Music</p>
     </div>
    </div>
	);
		
	}
}

    
  