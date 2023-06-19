import { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount)); //con slice ritorniamo un nuovo array che parte dal primo elemento, in questo caso 0, fino al secondo valore che non è incluso.
  };

  return (
    <div className="section-center" onSubmit={handleSubmit}>
      <h4>Tired of boring lorem ipsum</h4>
      <form action="" className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          max="8"
          step="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">Generate</button>
      </form>

      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </div>
  );
};
export default App;
