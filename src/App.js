import React, { useState } from "react";

import data from "./data";

import Tours from "./Component/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  // remove tour ka data filter laga diya id ka upper bcoz id unique ha sab ma
  function removeTour(id) {
    const newTours = tours.filter((tours) => tours.id !== id);

    setTours(newTours);
  }

  function displayHandler() {
    setTours(data);
  }

  if (tours.length === 0) {
    // koi bi data nhi
    return (
      <div>
        <div className="refresh">
          <h1>No Tours Left</h1>
          <button className="btn-white" onClick={displayHandler}>
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
