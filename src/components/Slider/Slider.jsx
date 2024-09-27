import { ArrowLeftOutlined, ArrowRightOutlined  } from '@mui/icons-material';
import {useState} from 'react';
import './Slider.scss'
//slides
import Image1 from '../../assets/Nutrition_Story.png';
import Image2 from '../../assets/DIETARY_GUIDELINES_FLYER.png';
import Image3 from '../../assets/4.png';

const slides = [
    {
        id: 1,
        img: Image1,
        title: "personalized meal plans tailored to your dietary preferences & nutritional goals",
    },
    {
        id: 2,
        img: Image2,
        title: "We create downloadable guides on topics related to nutrition & fitness",
    },
    {
        id: 3,
        img: Image3,
        title: "We Provide one-on-one consultations for individuals seeking health guidance",
    }
    
]

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    
    return (
        <div className="slider container">
                
        <div className="arrow"  onClick={() => handleClick("left")}>
           <ArrowLeftOutlined />
        </div>
           
           <div className="wrapper" style={{transform: `translateX(${slideIndex * -100}vw)`}}>
            {
                slides && slides.map(slide => {
                    return (
                        <div className="slider" style={{background: slide.img}} key={slide.id}>
                            <div className="image-container">
                                <img src={slide.img} alt={slide.title.split(" ").join("_")} />
                            </div>
                            <div className="info">
                                <h1>{slide.title}</h1>
                            </div>
                        </div>
                    )
                })
            }
           </div>
        
        <div className="arrow" onClick={() => handleClick("right")}>
           <ArrowRightOutlined />
        </div>
    </div>
    );
}