import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmittedApp from "./SubmittedApp";
import SignupForm from "./SignupForm";

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
    <>
      <div className="main_container">
        <h1 className="welcome">Welcome Rocketeer!</h1>
        <div className="start">
          <button
            className="startBtn"
            onClick={() => {
              nextPage();
            }}
          >
            Start Questionnaire
          </button>
          <button
            className="startBtn1"
            onClick={() => {
              submitted();
            }}
          >
            Submitted Application
          </button>
        </div>

        <div className="rocketman"></div>
      </div>
    </>
  );
};

export default MainPage;
