import { useEffect, useState } from 'react';
import axios from 'axios';
import Card1 from './Card1';
function DisplayHome() {
  let [arr0,setarr0]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:4000/podcast-api/mostviewed")
    .then((response)=>{
      console.log(response.data.payload)
      setarr0(response.data.payload)
    })
    .catch((err)=>{alert('err occured')})},[]);
    let [arr1,setarr1]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:4000/podcast-api/getpodcast/horror")
      .then((response)=>{
        console.log(response.data.payload)
        setarr1(response.data.payload)
      })
      .catch((err)=>{alert('err occured')})},[]);
    let [arr2,setarr2]=useState([]);
      useEffect(()=>{
        axios.get("http://localhost:4000/podcast-api/getpodcast/science fiction")
        .then((response)=>{
          console.log(response.data.payload)
          setarr2(response.data.payload)
        })
        .catch((err)=>{alert('err occured')})},[]);
      let [arr3,setarr3]=useState([]);
        useEffect(()=>{
          axios.get("http://localhost:4000/podcast-api/getpodcast/comedy")
          .then((response)=>{
            console.log(response.data.payload)
            setarr3(response.data.payload)
          })
          .catch((err)=>{alert('err occured')})},[]);
      let [arr4,setarr4]=useState([]);
          useEffect(()=>{
            axios.get("http://localhost:4000/podcast-api/getpodcast/spiritual")
            .then((response)=>{
              console.log(response.data.payload)
              setarr4(response.data.payload)
            })
            .catch((err)=>{alert('err occured')})},[]);
      let [arr5,setarr5]=useState([]);
            useEffect(()=>{
              axios.get("http://localhost:4000/podcast-api/getpodcast/technology")
              .then((response)=>{
                console.log(response.data.payload)
                setarr5(response.data.payload)
              })
              .catch((err)=>{alert('err occured')})},[]);
    
  return (
    <div>
    <h1 className='text-start text-primary CardZoner'>Most Popular</h1>
    <div className='loader mb-2'></div>
    <div className="DisplayHome d-flex pb-4">
    {
        arr0.map((item)=>
        <Card1 item={item}/>)
    }
    </div>
    <h1 className='text-start text-primary CardZoner'>Horror</h1>
    <div className='loader mb-2'></div>
    <div className="DisplayHome d-flex pb-4">
    {
        arr1.map((item)=>
        <Card1 item={item}/>)
    }
    </div>
    <h1 className='text-start text-primary CardZoner'>Science fiction</h1>
    <div className='loader mb-2'></div>
    <div className="DisplayHome d-flex pb-4">
    {
        arr2.map((item)=>
        <Card1 item={item}/>)
    }
    </div>
    <h1 className='text-start text-primary CardZoner'>Comdey</h1>
    <div className='loader mb-2'></div>
    <div className="DisplayHome d-flex pb-4">
    {
        arr3.map((item)=>
        <Card1 item={item}/>)
    }
    </div>
    <h1 className='text-start text-primary CardZoner'>Spiritual</h1>
    <div className='loader mb-2'></div>
    <div className="DisplayHome d-flex pb-4">
    {
        arr4.map((item)=>
        <Card1 item={item}/>)
    }
    </div>
    <h1 className='text-start text-primary CardZoner'>Technology</h1>
    <div className='loader mb-2'></div>
    <div className="DisplayHome d-flex pb-4">
    {
        arr5.map((item)=>
        <Card1 item={item}/>)
    }
    </div>
    </div>
  );
}

export default DisplayHome;
