import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  //js code
  const [principal, setPrincipal] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [isPrincipal, setIsPrincpal] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)
  const [Interest, setInterest] = useState(0)

  const Validate = (e) => {
    const { name, value } = e.target
    console.log(name, value);

    //reqular expression for numbers
    // reg expression = /^[0-9]*$/
    // match() - check the pattern matches the value
    // !! - to convert into boolean
    console.log(value.match(/^[0-9]*$/));
    console.log(!!value.match(/^[0-9]*$/));
    let expression = !!value.match(/^[0-9]*$/)
    if (expression) {
      if (name === "principal") {
        setPrincipal(value)
        setIsPrincpal(true)
      }
      else if (name === "year") {
        setIsYear(true)
        setYear(value)
      }
      else {
        setRate(value)
        setIsRate(true)
      }
    }
    else {
      if (name === "principal") {
        setPrincipal(value)
        setIsPrincpal(false)
      }
      else if (name === "year") {
        setIsYear(false)
        setYear(value)
      }
      else {
        setIsRate(false)
        setRate(value)
      }
    }
  }

  const Reset = () => {
    setPrincipal(0)
    setRate(0)
    setYear(0)
    setIsPrincpal(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }

  const Submit = (e) => {
    e.preventDefault()
    setInterest((principal * rate * year) / 100)
    setPrincipal(0)
    setRate(0)
    setYear(0)
    setTimeout
  }

  return (
    // jsx code
    <>
      <div className='d-flex justify-content-center align-items-center bg-dark' style={{ height: "100lvh" }}>
        <div className="d-flex flex-column mt-5 p-5 flex-colum w-25 rounded-3 bg-light" >
          <h2 >Simple Interest App</h2>
          <p>Calculate your Simple Interest Easily</p>
          <div className="bg-warning w-100 rounded-3 d-flex flex-column justify-content-center align-items-center" style={{ height: "15lvh" }}>
            <h1>$ {Interest}</h1>
            <p>Total Simple Interest</p>
          </div>
          <form onSubmit={Submit}>

            <div className='mt-4 d-flex flex-column '>
              <TextField className="w-100 mb-2" name="principal" value={principal || ""} id="principal" onChange={(e) => Validate(e)} label="Principle Amount" variant="outlined" />
              {!isPrincipal && <p className=' text-danger'>*Invalid Input</p>}
              <TextField className="w-100 mb-2" name="rate" id="rate" value={rate || ""} onChange={(e) => Validate(e)} label="Rate of Interest" variant="outlined" />
              {!isRate && <p className='text-danger'>*Invalid Input</p>}
              <TextField className="w-100 mb-2" name="year" id="year" value={year || ""} onChange={(e) => Validate(e)} label="Year" variant="outlined" />
              {!isYear && <p className='text-danger'>*Invalid Input</p>}
              <div className='d-flex gap-3 mt-2 w-100'>
                <Button type="submit" variant="contained" disabled={principal && year && rate && isPrincipal && isRate && isYear ? false : true} className='p-3 w-50' color="success">
                  Calculate
                </Button>
                <Button onClick={Reset} variant="outlined" name="reset" className='w-50 p-3' >
                  Reset
                </Button>
              </div>

            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default App
