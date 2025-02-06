import { SlArrowRightCircle } from "react-icons/sl";
import './cardComponent.css';
import { useNavigate } from 'react-router-dom';

interface ResData {
  info: {
    avgRating: string;
    cloudinaryImageId: string;
    name: string;
    costForTwo: string;
    id:string;
  };
}

interface CardComponentProps {
  resData: ResData;
}

const CardComponent: React.FC<CardComponentProps> = (props) => {
  const { resData } = props;
  const { avgRating, cloudinaryImageId, name, costForTwo,id } = resData.info;
  const Product = useNavigate();
  const navigatePage = () =>{
    Product(`/product/${id}`)
  }

  return(
    <div className='card-body'>
    <h2 className='card-name'>{name}</h2>
    <h6 className='card-sec-name'>{costForTwo}</h6>
    <h2 className='card-offer'>{avgRating}</h2>
    <div className='card-image-container'>
      <div className='card-button'>
        <span onClick={navigatePage}
        >
          <SlArrowRightCircle />
        </span>
      </div>
      <div className='card-image'>
        <img className='card-pic' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId } />
      </div>
    </div>
  </div>
  )
}

export default CardComponent;