import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RocketMan from "../img/rocketman.png";
import SubmittedApp from "./SubmittedApp";
import SignupForm from "./SignupForm";
import classes from "./MainPage.module.css";

const MainPage = () => {
  const navigate = useNavigate();
  const navigate1 = useNavigate();
  const [data, setData] = useState([]);

  const getIt = async () => {
    const fetched = await fetch(
      `https://bootcamp-2022.devtest.ge/api/applications?token=fe7ef439-22f2-4db8-85aa-f7195783961b`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await fetched.clone().json();
    setData(result);
    console.log(result);
  };

  useEffect(() => {
    getIt();
  }, []);

  const nextPage = (token) => {
    navigate("/page");
  };

  const submitted = () => {
    navigate1("/page5");
  };
  return (
    <div className={classes["main_container"]}>
      <div className={classes.title}>
        <h1>welcome rocketeer!</h1>
        <div className={classes["start-button"]}>
          <button type="button" onClick={nextPage}>
            Start Questionnaire
          </button>
        </div>
        <div className={classes["submitted-button"]}>
          <button onClick={submitted}>Submitted Button</button>
        </div>
        <div className={classes.img}>
          <img src={RocketMan} alt="rocket man" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
