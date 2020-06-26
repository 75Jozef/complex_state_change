import React, { useState } from "react";

function App() {
  const [firstname, changeFirstName] = useState("");
  const [lastname, changeLastName] = useState("");
  function changeFirst(event) {
    changeFirstName(event.target.value);
  }
  function changeLast(event) {
    changeLastName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {firstname} {lastname}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={changeFirst}
          value={firstname}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={changeLast}
          value={lastname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
