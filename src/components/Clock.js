import React,{useState} from 'react'

const Clock = () => {

    const [sec, setSec] = useState(0);
    const [mins,setMins] = useState(0);

    const getMinutes = (val)=>{
    const min = (val.target.value);
    setMins(min)
    console.log(min)

  }
  const getSeconds = (val)=>{
    const sec = (val.target.value);
    setSec(sec)
    console.log(sec)
    
  }

  let timer;
  timer = setInterval(()=>{
    setSec(sec-1);

    if(sec===0){
        setMins(mins - 1)
        setSec(59);

    }

  },1000);


  return (
    <div>
    <h1>Hello React.</h1>
      <input type="text" className='minutes' onChange={getMinutes}/>Minutes
      <input type="text" className='seconds' onChange={getSeconds}/>Seconds
      <h2 className="minute"> {mins<10?0+mins:mins}</h2>:
      <h2 className="second">{sec<10?0+sec:sec}</h2>
      <button className='start'> START </button>
      <button className='reset'> RESET </button>
    </div>
  )

  }


export default Clock;