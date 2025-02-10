import { useEffect,useContext } from "react";
import CardComponent from "./CardComponent";
import './body.css';
import { DataContext } from "../context/Datacontext";

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
  const { data1, setData1 } = useContext(DataContext);
 
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    const response =  await fetch("https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999")
    const data = await response.json();
    setData1(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }
  console.log(data1);
  return(
    <div className="body">
      <div className="containers">
        {
          data1.map((res:ResData)=>(
            <CardComponent key={res.info.id}  resData={res}/>
          ))
        }
      </div>
    </div>
  )
}

export default Body;