import { BusinessCenter, GitHub, LinkedIn, Twitter } from '@material-ui/icons';
import React from 'react';
import './App.css';

function App() {
  const [dateInput,setDate] = React.useState();
  const [luckyNum,setNum] = React.useState("");
  const [result , setResult] = React.useState();

  const handler = () => {
    const dateArray = dateInput.split("");
    let sum = dateArray.reduce((acc,ele) => {
        if(Number.isInteger(+ele)){
          return acc+(+ele);
        }
        else{
          return acc;
        }
      },0);
    if (sum % Number(luckyNum) === 0) {
      setResult("Hurray!!You are a lucky person!");
    } else {
      setResult("Oops!!Your birthday is not a lucky number!");
    }
  }

  return (
    <div className="App">
      <div className="mainBox">

          <div  className="poster">
            <div className="result" style={result ? {display : 'revert'} : {display : 'none'}}>
              {result}
            </div>
          </div >

          <div style={{ paddingLeft: 25+'px',paddingRight : 25+'px'}}>
            <h1 style={{marginTop : 0}}> Is your birthday lucky? </h1>
            <h2>Enter Your Birthdate and lucky number to continue...</h2>

            <div className="inputBox">
              <label htmlFor="dateinput">Date of Birth</label>
              <input id="dateinput" onChange={(event)=>setDate(event.target.value)} type="date" required></input>
              <label htmlFor="lucky">Lucky Number</label>
              <input id="lucky" onChange={(event)=>setNum(event.target.value)} value={luckyNum} required></input>
              <button onClick={handler}>Search</button>
            </div>
            
        </div>
    
      </div>

      <hr />
      
      <footer style={{marginTop : 3+'rem'}}> 
          <ul>
            <li className="footerLink">
              <a href="https://github.com/Prudhvi789">
                <GitHub />
              </a>
            </li>
            <li className="footerLink">
              <a href="https://twitter.com/">
                <Twitter />
              </a>
            </li>
            <li className="footerLink">
              <a href="https://www.linkedin.com/">
                <LinkedIn />
              </a>
            </li>
            <li className="footerLink">
              <a href="https://netlify.app/">
                <BusinessCenter />
              </a>
            </li>
          </ul>
        </footer>
    </div>
  );
}

export default App;
