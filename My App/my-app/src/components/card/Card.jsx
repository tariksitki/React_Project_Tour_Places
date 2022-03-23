
import {data} from "../../data";
import "./Card.css"

const Card = function() {
    
    return (
        data.map(item => {
            let {id, image, title, desc} = item;
            return (
                <div className="card" key={id}>
                    <div className="card-header-div">
                        <h3 className="card-header">{title} </h3>
                    </div>

                    <div className="image-div">
                        <img className="image" src={image} alt="" />
                        <div className="overlay">
                            <div className="text">
                                {desc} 
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        
            
       
    )
};

export default Card;