import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstname: "",
    lastname: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullName(prevValue => {
      if (inputName === "firstname") {
        return {
          firstname: newValue,
          lastname: prevValue.lastname
        };
      } else if (inputName === "lastname") {
        return {
          firstname: prevValue.firstname,
          lastname: newValue
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
          onChange={handleChange}
          // value={fullName.firstname}
        />
        <input
          name="lastname"
          placeholder="Last Name"
          onChange={handleChange}
          // value={fullName.lastname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
