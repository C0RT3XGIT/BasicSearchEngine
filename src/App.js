import React from "react";
import "./App.css";
import { useState } from "react";
import styled from "@emotion/styled";
import DBData from "../src/components/data";
import axios from "axios";
const connectDB = require("./components/db");

const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 8080;

const routes = require("./routes/api");

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const Par = styled.p`
    color: blue;
  `;

  /////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(morgan("tiny"));
  app.use("/", require("./routes/index"));
  app.use("/api", require("./routes/api"));

  app.listen(PORT, console.log(`Server has started on port ${PORT}`));

  /////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  const getDBData = () => {
    axios
      .get("/api/")
      .then((response) => {
        const data = response.data;
        console.log(`Data has ben recieved ! ${data}`);
      })
      .catch(console.log("Error retrieving data !"));
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
      <button className="flexing" onClick={getDBData()}>
        Get data
      </button>
      {DBData.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <Par>{val}</Par>
          </div>
        );
      })}
    </div>
  );
}

export default App;
