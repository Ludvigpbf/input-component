import React, { useState } from "react";
import InputField from "./input/InputField";
import "./styles/App.css";

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    alert("Form Submitted");
    console.log("Form Submitted", { email, username, password });
  };

  return (
    <>
      <InputField
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="custom-input"
        containerClassName="input-container"
        floatingLabel={true}
        placeholder="Enter your email"
        id="email"
        data-id="email-1"
        required={true}
        requiredColor="red"
        requiredPosition="top-right"
        fontColor="#333"
        backgroundColor="#f0f0f0"
        hoverBackgroundColor="#e0e0e0"
        font="Arial"
        fontSize="16px"
        borderRadius="5px"
        margin="1rem 0"
        /* padding="0.5rem 1rem" */
      />

      <InputField
        label="Username"
        name="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="custom-input"
        containerClassName="input-container"
        floatingLabel={true}
        placeholder="Enter your username"
        id="username"
        data-id="username-1"
        required={true}
        requiredColor="blue"
        requiredPosition="after"
        fontColor="#444"
        backgroundColor="#f9f9f9"
        hoverBackgroundColor="#ddd"
        font="Helvetica"
        fontSize="14px"
        borderRadius="8px"
        margin="1rem"
        /* padding="0.6rem 1.2rem" */
      />

      <InputField
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="custom-input"
        containerClassName="input-container"
        floatingLabel={false}
        placeholder="Enter your password"
        id="password"
        data-id="password-1"
        required={true}
        requiredColor="purple"
        requiredPosition="before"
        fontColor="#555"
        backgroundColor="#eaeaea"
        hoverBackgroundColor="#ccc"
        font="Courier New"
        fontSize="18px"
        borderRadius="4px"
        margin="0.5rem 0"
        /* padding="0.4rem 1rem" */
      />

      <button type="submit" onClick={handleSubmit} style={{ margin: "1rem 0" }}>
        Submit
      </button>
    </>
  );
}

export default App;
