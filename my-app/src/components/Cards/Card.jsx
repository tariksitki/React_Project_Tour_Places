import { data } from "../../data";
import "./Card.css";

const Card = () => {
  return (
    <div className="cards-div">
      {data.map(({ title, desc, id, image }) => {
        return (
          <div className="card" key={id}>
            <h1>{title}</h1>
            <nav>
              <img src={image} alt="" />
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
