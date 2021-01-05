import React from "react"
import {
    TimerBg,
    TimerContainer,
    Timer,
    Minute,
    Colon,
    Seconds,
    ButtonContainer,
    StartButton,
    PauseButton,
    ResetButton,
    IncrementButton,
    DecrementButton,
    IncrementBreakButton,
    DecrementBreakButton,
    SessionWrapper,
    BreakWrapper,
    Session,
    Break,
    SectionInfo,
    ControlWrapper,
    ControlBg,
    TimerLabel,
    TimerWrapper,
    TimerTest
} from "./Elements"


class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            start: false,
            reset: false,
            setMin: 25,
            setBreakMin: 5,
            mins: 25,
            secs: 0,
            breakMin: 5,
            breakSecs: 0
        }

        this.onSwitch = this.onSwitch.bind(this)
        this.pause = this.pause.bind(this)
        this.countdownTimer = this.countdownTimer.bind(this)
        this.resetTime = this.resetTime.bind(this)
        this.formatTime = this.formatTime.bind(this)
        this.addMin = this.addMin.bind(this)
        this.decMin = this.decMin.bind(this)
        this.addBreakMin = this.addBreakMin.bind(this)
        this.decBreakMin = this.decBreakMin.bind(this)
        this.playSound = this.playSound.bind(this)
    }

    onSwitch(){
        this.setState({
            start: true
        })
        this.countdownTimer()
    }

    pause(){
        clearInterval(this.decrement)
    }

    countdownTimer(){
        if (this.state.start){
            this.decrement = setInterval(() => {
                if(this.state.secs > 0){
                    this.setState(prevState => {
                        return{
                            secs: prevState.secs - 1
                        }
                    })
                } else if (this.state.mins > 0) {
                    this.setState(prevState => {
                        return{
                            secs: 59,
                            mins: prevState.mins - 1 
                        }
                    })
                } else {
                    clearInterval(this.decrement);
                    this.playSound()
                    this.setState({
                        start: false,
                        reset: false,
                        mins: this.state.breakMin,
                        secs: 0,
                    })
                    this.decrement = setInterval(() => {
                        if(this.state.secs > 0){
                            this.setState(prevState => {
                                return{
                                    secs: prevState.secs - 1
                                }
                            })
                        } else if (this.state.mins > 0) {
                            this.setState(prevState => {
                                return{
                                    secs: 59,
                                    mins: prevState.mins - 1 
                                }
                            })
                        } else {
                            clearInterval(this.decrement);
                            this.playSound()
                            this.setState({
                                start: false,
                                reset: false,
                                mins: 25,
                                secs: 0,
                                setMin: 25,
                                setBreakMin: 5,
                            })
                        }
                    }, 1000);
                }
            }, 1000);
        } else {
            clearInterval(this.decrement)
        }
    }

    resetTime(){
        clearInterval(this.decrement)
        this.setState({
            start: false,
            reset: false,
            mins: 25,
            secs: 0,
            setMin: 25,
            setBreakMin: 5,
        })
    }

    formatTime(num){
        return num <= 9 ? `0${num}` : num;
    }

    addMin(){
        if(this.state.mins >= 60 && this.state.setMin >= 60 ) {
            return
        }else {
            this.setState(prevState => {
                return{
                    mins: prevState.mins + 1,
                    setMin: prevState.setMin + 1,
                }
            })
        }
    }

    decMin(){
        if(this.state.mins <= 1 && this.state.setMin <= 1) {
            return
        }else {
            this.setState(prevState => {
                return{
                    mins: prevState.mins - 1,
                    setMin: prevState.setMin - 1,
                }
            })
        }
    }

    addBreakMin(){
        if(this.state.breakMin >= 60 && this.state.setBreakMin >=60 ){
            return
        } else {
            this.setState(prevState => {
                return{
                    breakMin: prevState.breakMin + 1,
                    setBreakMin: prevState.setBreakMin + 1

                }    
            })
        }
    }

    decBreakMin(){
        if(this.state.breakMin <= 1 && this.state.setBreakMin <=1 ){
            return
        } else {
            this.setState(prevState => {
                return{
                    breakMin: prevState.breakMin - 1,
                    setBreakMin: prevState.setBreakMin - 1, 
                }
            })
        }
    }

    playSound(){
        const sound = document.getElementById("beep")
        sound.play()
    }

    render(){
        return(
            <TimerBg>
                <TimerContainer>
                    <TimerWrapper>
                        <TimerLabel id="timer-label">Session</TimerLabel>
                        <Timer>
                            <TimerTest id="time-left">
                                <Minute>{this.formatTime(this.state.mins)}</Minute>
                                <Colon>:</Colon>
                                <Seconds>{this.formatTime(this.state.secs)}</Seconds>
                            </TimerTest>
                            <audio
                                id = "beep"                             
                                src = "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
                            >
                            </audio>
                        </Timer>
                    </TimerWrapper>
                    <ButtonContainer>
                        <StartButton id="start_stop" onClick = {this.onSwitch}>Start</StartButton>
                        <PauseButton onClick={this.pause}>Pause</PauseButton>
                        <ResetButton id="reset" onClick = {this.resetTime}>Reset</ResetButton>
                    </ButtonContainer>
                    <ControlBg>
                        <ControlWrapper>
                            <SectionInfo id="session-label">Session Length</SectionInfo>
                            <SessionWrapper>
                                <IncrementButton id="session-increment" onClick ={this.addMin}>+</IncrementButton>
                                <Session id="session-length">{this.state.setMin}</Session>
                                <DecrementButton id="session-decrement" onClick={this.decMin}>-</DecrementButton>
                            </SessionWrapper>
                        </ControlWrapper>
                        <ControlWrapper>
                            <SectionInfo id="break-label">Break Length</SectionInfo>
                            <BreakWrapper>
                                <IncrementBreakButton id="break-increment" onClick={this.addBreakMin}>+</IncrementBreakButton>
                                <Break id="break-length">{this.state.setBreakMin}</Break>
                                <DecrementBreakButton id="break-decrement" onClick={this.decBreakMin}>-</DecrementBreakButton>
                            </BreakWrapper>
                        </ControlWrapper>
                    </ControlBg>
                </TimerContainer>
            </TimerBg>
        )
    }
}

export default Main