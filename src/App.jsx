import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Yearcards1 from './yearcards1';

function App() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleChange1 = () => {
    setIsChecked1(!isChecked1);
  };
  const handleChange2 = () => {
    setIsChecked2(!isChecked2);
  };
  const handleChange3 = () => {
    setIsChecked3(!isChecked3);
  };
  return (
    <div className="container nobootstarp">
    <div className='year-container'>
       <h1 align ="center">Choose The Year</h1>
         <ul className="grid nobootstrap">
         <li className="card nobootstrap">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="card__image"> 
          <rect className="nude" width="200" height="200"/>
          <polygon className="yellow" points="200 0 0 200 200 200 200 0"/>
          <circle className="red" cx="100.5" cy="100.5" r="69.5"/>
          <path className="sunburn" d="M149.14,50.86a69.5,69.5,0,1,1-98.28,98.28Z"/>
        </svg>
        <div className="card__content nobootstrap">
          <h2>Year 1</h2>
          <p>This option is for year 1 select it to see year 1 card.</p>
        </div>
        <label className="checkbox-control1">
          <input type="checkbox" className="checkbox" onClick={handleChange1}/>
        </label>
      </li>
      <li className="card nobootstrap">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="card__image">
          <rect className="nude" width="200" height="200"/>
          <polygon className="red" points="200 200 0 0 0 200 200 200"/>
          <rect data-name="Rectangle" className="blue" x="50" width="150" height="150"/>
          <path className="eggplant" d="M50,50,150,150H50Z"/>
        </svg>
        <div className="card__content">
          <h2>Year 2</h2>
          <p>This option is for year 2 select it to see year 2 card.</p>
        </div>
        <label className="checkbox-control2">
          <input type="checkbox" className="checkbox" onClick={handleChange2}/>
        </label>
      </li>
      <li className="card nobootstrap">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="card__image">
          <rect className="nude" width="200" height="200"/>
          <rect className="blue" y="100" width="200" height="100"/>
          <path className="flamingo" d="M0,0V200A100,100,0,0,0,0,0Z"/>
          <path className="violet" d="M100,101a100,100,0,0,1-85.82,99H0V100H100Z"/>
        </svg>
        <div className="card__content">
          <h2>Year 3</h2>
          <p>This option is for year 3 select it to see year 3 card.</p>
        </div>
        <label className="checkbox-control">
          <input type="checkbox" className="checkbox" onClick={handleChange3}/>
        </label>
      </li>
     </ul>
     </div>

     {
       isChecked1 && <Yearcards1 year="1" />
     }
     {
       isChecked2 && <Yearcards1 year="2" />
     }
     {
       isChecked3 && <Yearcards1 year="3" />
     }
 </div>
  )
}

export default App
