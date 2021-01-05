import styled from "styled-components"

export const TimerBg = styled.div`
  background: rgb(252,176,69);
  background: linear-gradient(90deg, rgba(252,176,69,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);  
  height: 100vh;
`

export const TimerContainer = styled.div`
  background: rgb(253,254,254);
  background: linear-gradient(147deg, rgba(253,254,254,1) 0%, rgba(240,240,240,1) 50%, rgba(227,227,227,1) 100%); 
  border-radius: 20px;
  height: 600px;
  width: 500px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
`

export const TimerWrapper = styled.div`
    background: #EAEDED;
    border-radius: 20px;
    margin-top: 30px;
    display: flex;
    flex-direction:column;
    justify-content: center;

`

export const Timer = styled.div`
  position: relative;
  left:8%;
  /* background: #EAEDED; */
  border-radius: 20px;
  width: 400px;
  display: flex;
  font-size: 7rem;
  justify-content: center;
  /* margin-top: 50px; */
  align-items: center;
  color: #EC7063;
`

export const TimerLabel = styled.p`
  color: #EC7063;
  /* background-color: red; */
  text-align: center;
  font-size: 1.5rem;
`
export const TimerTest = styled.div`
  display: flex;
`

export const Minute = styled.p`

`

export const Colon = styled.p`
`

export const Seconds = styled.p`

`

export const ButtonContainer = styled.div`
  display: flex;
  font-size: 5rem;
  position:relative;
  justify-content: center;
  margin-top: 50px;
  justify-content: space-between;
`

export const ControlBg = styled.div`
  background: #EAEDED;
  padding: 10px;
  width: 400px;
  position: relative;
  left: 8%;
  border-radius: 20px;
  margin-top: 45px;
`

export const ControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

export const SectionInfo = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 10px;
  color: #E74C3C;
`

export const SessionWrapper = styled.div`
  display: flex;
  font-size: 5rem;
  position:relative;
  justify-content: center;
  align-items: center;
`
export const BreakWrapper = styled.div`
  display: flex;
  font-size: 5rem;
  position:relative;
  justify-content: center;
  align-items: center;
`
export const Session = styled.p`
  font-size: 2rem;
  margin-left:20px;
  margin-right: 20px;
  color: #EC7063;

`
export const Break = styled.p`
  font-size: 2rem;
  margin-left: 30px;
  margin-right: 30px;
  color: #EC7063;
`

export const StartButton = styled.button`
  background: rgb(231,76,60);
  background: linear-gradient(166deg, rgba(231,76,60,1) 0%, rgba(236,112,99,1) 50%, rgba(245,176,65,1) 100%);
  border: none;
  border-radius: 20px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin-left: 40px;
  cursor: pointer;
  outline: none;
`
export const PauseButton = styled.button`
  background: rgb(231,76,60);
  background: linear-gradient(166deg, rgba(231,76,60,1) 0%, rgba(236,112,99,1) 50%, rgba(245,176,65,1) 100%);  
  border: none;
  border-radius: 20px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  cursor: pointer;
  outline: none;
`
export const ResetButton = styled.button`
  background: rgb(231,76,60);
  background: linear-gradient(166deg, rgba(231,76,60,1) 0%, rgba(236,112,99,1) 50%, rgba(245,176,65,1) 100%);  
  border: none;
  border-radius: 20px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin-right: 40px;
  cursor: pointer;
  outline: none;
`
export const IncrementButton = styled.button`
  background: rgb(231,76,60);
  background: linear-gradient(166deg, rgba(231,76,60,1) 0%, rgba(236,112,99,1) 50%, rgba(245,176,65,1) 100%);   
  border: none;
  border-radius: 50px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  outline: none;
`
export const DecrementButton = styled.button`
  background: rgb(231,76,60);
  background: linear-gradient(166deg, rgba(231,76,60,1) 0%, rgba(236,112,99,1) 50%, rgba(245,176,65,1) 100%);   
  border: none;
  border-radius: 50px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  outline: none;
`
export const IncrementBreakButton = styled.button`
  background: rgb(231,76,60);
  background: linear-gradient(166deg, rgba(231,76,60,1) 0%, rgba(236,112,99,1) 50%, rgba(245,176,65,1) 100%);   
  border: none;
  border-radius: 50px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  outline: none;
`
export const DecrementBreakButton = styled.button`
  background: rgb(231,76,60);
  background: linear-gradient(166deg, rgba(231,76,60,1) 0%, rgba(236,112,99,1) 50%, rgba(245,176,65,1) 100%);   
  border: none;
  border-radius: 50px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  outline: none;
`
