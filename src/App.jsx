import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.event) {
      alert("Please fill out all fields.");
      return;
    }
    setSuccessMessage(`Thank you for registering, ${formData.name}!`);
    setFormData({ name: "", email: "", phone: "", event: "" });
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Event Registration</h1>
        {successMessage && <p className="success">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Phone:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Select Event:</label>
            <select name="event" value={formData.event} onChange={handleChange}>
              <option value="">-- Choose an event --</option>
              <option value="workshop">Workshop</option>
              <option value="webinar">Webinar</option>
              <option value="hackathon">Hackathon</option>
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default App;
