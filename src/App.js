import './App.css';
import {useState, useEffect} from "react"
import Axios from "axios"


function App() {
  
  const [name, setName] = useState("")
  const [countryData, setCountryData] = useState(null)

 const search = ()=>{
  Axios.get(`https://restcountries.com/v3.1/name/${name}`).then((res)=>{
   setCountryData(res.data[0])
  })
 }
 
  
   
  return (
    <div className="App">
      
      {/* Header */}
    <div className='col-12 p-3 text-center bg-light d-flex flex-column align-items-center'>
      <p className='fw-bold '>Search for a country to get some info about it</p>
      <div className='d-flex'>
        <input onChange={(event)=>{setName(event.target.value)}} type='text' className='form-control m-2' />
        <button onClick={search} className='btn btn-primary m-2'>Search</button>
      </div>
    </div>
    
    {/* Body */}
    
    <div className='container'>
      <div className='row'>
        <div className='col'></div>
      <div className='shadow-lg bg-light p-3 m-3 row w-50 col-8'>
        <div className='col'>
        {countryData && (
                <>
                  <div><h4 className='text-primary'>Capital:</h4> <i><h4>{countryData.capital[0]}</h4></i></div>
                  <div><h4 className='text-primary'>Currency:</h4> <i><h4>{Object.keys(countryData.currencies)[0]}</h4></i></div>
                  <div><h4 className='text-primary'> Region:</h4> <i><h4>{countryData.region}</h4></i></div>
                </>
              )}
        </div>
      </div>
      <div className='col'></div>
    </div>
    </div>
    
    
  </div>
  
  );
}

export default App;
