import React, { useState } from "react";
import data from "./data";

const App = () => {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count); // แปลง string เป็น number
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <main className="text-center">
      <h3 className="text-3xl font-bold mb-3 text-gray-800">
        tried of boring lorem ipsum?
      </h3>
      <form onSubmit={handleSubmit}>
        <label className="text-lg">paragraphs :</label>
        <input
          className="w-20 m-1 text-center"
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn btn-add">
          generate
        </button>
      </form>
      <article>
        {text.map((item, index) => {
          return (
            <p
              className="text-gray-700 mt-4 max-w-200 bg-gray-200 mx-auto "
              key={index}
            >
              {item}
            </p>
          );
        })}
      </article>
    </main>
  );
};

export default App;
