import { useState,useEffect } from "react";
import CardComponent from "./CardComponent";
import './body.css'

interface ResData {
  info: {
    avgRating: string;
    cloudinaryImageId: string;
    name: string;
    costForTwo: string;
    id:string;
  };
}

const Body = () =>{
  const [datas,setData] = useState([]);
 
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    const response =  await fetch("https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999")
    const data = await response.json();
    setData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }
  console.log(datas);
  return(
    <div className="body">
      <div className="containers">
        {
          datas.map((res:ResData)=>(
            <CardComponent key={res.info.id}  resData={res}/>
          ))
        }
      </div>
    </div>
  )
}

export default Body;