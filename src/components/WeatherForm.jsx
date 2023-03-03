import React from "react";
import { useState } from "react";
import styles from "./WeatherForm.module.css";

const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeCity(city);
    setCity("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="text"
        placeholder="London"
        value={city}
        onChange={handleChange}
        className={styles.input}
      />
    </form>
  );
};

export default WeatherForm;
