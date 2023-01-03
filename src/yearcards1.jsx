import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Alert, Button, InputGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

function Yearcards1(props) {
  const [form , setForm] = useState(false);
  const [inputNo,setInputNo] = useState();
  const [form1, setForm1] = useState(false);
  const [form2, setForm2] = useState(false);
  const [input ,setInput] = useState()
  const [arr,setArr] = useState();
  const [quarter,setQuarter] = useState([])
  const [val1 ,setVal1] = useState();
  const [val2 ,setVal2] = useState();
  const [val3 ,setVal3] = useState();
  const [val4 ,setVal4] = useState();

  let arr1 = [[0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]]

  const handleChange = (e) => {
     setForm(false);
     setInput(e);
    }
  const handleClick = (n) =>{
    setInputNo(n);
    setForm2(false);
    setForm1(true);
    console.log(inputNo)
  }

  
  const handleReset = () => {
    setVal1(0);setVal2(0);setVal3(0);setVal4(0);
 }
   

  const handleSuccess = () => {

    if(input/1){
    
    if(inputNo!=1) {arr1[arr][0] = input - (Math.random()*100).toFixed(0);  setVal1(arr1[arr][0])} else setVal1(input) ;
    if(inputNo!=2) {arr1[arr][1] = input - (Math.random()*100).toFixed(0);  setVal2(arr1[arr][1])} else setVal2(input);
    if(inputNo!=3) {arr1[arr][2] = input - (Math.random()*100).toFixed(0);  setVal3(arr1[arr][2])} else setVal3(input);
    if(inputNo!=4) {arr1[arr][3] = input - (Math.random()*100).toFixed(0);  setVal4(arr1[arr][3])} else setVal4(input);
    console.log(arr1);
    setForm2(true);
    }
   
  }



  return (
    <div className= "selectionCard grid card">
      
     
        <div className="card__content">
          <h2>Year {props.year}</h2>
        </div>
        

        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Quarter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={e=>{setForm(true); setArr(0); setQuarter(["Jan","Feb","Mar","Apr"]); setForm1(false);  setForm2(false); handleReset; setInput("NaN");}}>Quarter 1</Dropdown.Item>
        <Dropdown.Item onClick={e=>{setForm(true); setArr(1); setQuarter(["May","Jun","Jul","Aug"]); setForm1(false);  setForm2(false); handleReset; setInput("NaN");}}>Quarter 2</Dropdown.Item>
        <Dropdown.Item onClick={e=>{setForm(true); setArr(2); setQuarter(["Sep","Oct","Nov","Dec"]); setForm1(false);  setForm2(false); handleReset; setInput("NaN");}}>Quarter 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        


    {  form &&
        <ToggleButtonGroup type="radio" name="options">
        <ToggleButton id="tbg-radio-1" value={0} onClick={e=>handleClick(1)}>
          {quarter[0]}
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={1} onClick={e=>handleClick(2)}>
        {quarter[1]}
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={2} onClick={e=>handleClick(3)}>
        {quarter[2]}
        </ToggleButton>
        <ToggleButton id="tbg-radio-4" value={3} onClick={e=>handleClick(4)}>
        {quarter[3]}
        </ToggleButton>
        <br />
      </ToggleButtonGroup>
     }
     {
           form1 && 
           <>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Enter Value</InputGroup.Text>
        <Form.Control
          placeholder="Monthly Value"
          aria-describedby="basic-addon1"
          onChange={e=>handleChange(e.target.value)}
          defaultValue="0"
        />
      </InputGroup>
      <Button className="btn-success form"  onClick={handleSuccess} >Calculate</Button>
      <Button className="btn-danger form" onClick={handleReset}>Reset</Button>
      </>
     }
    


    { 
        form2 && 
        <form >
          <label className='headOutput'>
            <h3>{`${quarter[0]}`} : </h3> <input type="text" className='Output' value={val1} isEditable={false} />
          </label>
          <br/>
          <label className='headOutput'>
          <h3> {`${quarter[1]}`} :</h3>
            <input type="text" className='Output'  value={val2} isEditable={false}/>
          </label><br/>
          <label className='headOutput'>
          <h3>{`${quarter[2]}`} :</h3>
            <input type="text" className='Output' value={val3} isEditable={false}/>
          </label><br />
          <label className='headOutput'>
          <h3>{`${quarter[3]}`} :</h3>
            <input type="text" className='Output' value={val4} isEditable={false}/>
          </label><br />
        </form>
        
    }
    </div>

       
  )

}


export default Yearcards1;

