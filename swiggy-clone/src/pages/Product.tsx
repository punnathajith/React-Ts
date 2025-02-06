import { useParams } from "react-router-dom";


const Product = () =>{
  const {id} = useParams();
  console.log(id);
  return(
    <>
    
    </>
  )
}

export default Product;