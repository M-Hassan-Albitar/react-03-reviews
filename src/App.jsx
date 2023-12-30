import { useState } from "react";
import reviews from "./data";

const App = () => {
  const [x, setX] = useState(0);
  const { id, name, job, image, text } = reviews[x];

  const checkX = (num) => {
    if (num < 0) {
      return reviews.length - 1;
    }
    if (num > reviews.length - 1) {
      return 0;
    }
    return num;
  };

  const handleNext = () => {
    setX((x) => {
      let newX = checkX(x + 1);
      return checkX(newX);
    });
  };

  const handlePrev = () => {
    setX((x) => {
      let newX = checkX(x - 1);
      return checkX(newX);
    });
  };

  return (
    <>
      <main>
        <article className="review">
          <div className="img-container">
            <img className="person-img" src={image} alt={name} />
            <span className="quote-icon">"</span>
          </div>
          <h4 className="author">{name} </h4>
          <p className="job"> {job} </p>
          <p className="info"> {text} </p>
          <div className="btn-container">
            <button className="next-btn" onClick={handlePrev} type="button">
              prev
            </button>
            <button className="prev-btn" onClick={handleNext} type="button">
              next
            </button>
          </div>
        </article>
      </main>
    </>
  );
};
export default App;
