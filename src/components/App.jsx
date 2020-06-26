import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstname: "",
    lastname: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFullName(prevValue => {
      if (name === "firstname") {
        return {
          firstname: value,
          lastname: prevValue.lastname
        };
      } else if (name === "lastname") {
        return {
          firstname: prevValue.firstname,
          lastname: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.firstname} {fullName.lastname}
      </h1>
      <form>
        <input
          name="firstname"
          placeholder="First Name"
          autocomplete="off"
          onChange={handleChange}
          value={fullName.firstname}
        />
        <input
          name="lastname"
          placeholder="Last Name"
          autocomplete="off"
          onChange={handleChange}
          value={fullName.lastname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
