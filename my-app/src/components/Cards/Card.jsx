import { data } from "../../data";
import "./Card.css";

const Card = () => {
  return (
    <div className="cards-div">
      {data.map(({ title, desc, id, image }) => {
        return (
          <div className="card" key={id}>
            <h2>{title}</h2>
            <nav className="card-box">
              <img className="image" src={image} alt="" />
              <div className="overlay">
                <div className="text">{desc}</div>
              </div>
            </nav>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
