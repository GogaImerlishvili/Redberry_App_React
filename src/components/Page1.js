import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { SkillsInput } from "../atoms/Page1/SkillsInput/SkillsInput";
// import { ExperienceInput } from "../atoms/Page1/SkillsInput/ExperienceInput";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Page1 = () => {
  const { setUser, data, addSkill } = useContext(AuthContext);

  const navigate = useNavigate();

  const nextPage = (token) => {
    navigate("/page2");
  };

  const backPage = (token) => {
    navigate("/page");
  };

  const x = (a, b) => {
    addSkill(a, b);
  };
  const onSubmit = async (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const loginData = {};

    for (let [inputName, value] of fd.entries()) {
      loginData[inputName] = value;
    }

    const res = setUser(loginData.skills, loginData.work_preference);

    if (!res.length) {
      nextPage();
    }
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <h2 className="title">Tell us about your skills</h2>
        </div>
        <form className="form-wrapper" onSubmit={onSubmit}>
          <div>
            <div className="name">
              <SkillsInput name="name" val={data.skills} add={x} />
            </div>
            <div className="container-dots">
              {/* here should be array */}
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <button
            className="left-arrow"
            onClick={() => {
              backPage();
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="right-arrow"
            type="submit"
            onClick={() => {
              nextPage();
            }}
          >
            <FaChevronRight />
          </button>
        </form>
        <div className="right">
          <h2 className="other_title page1_title">Redberry Origins</h2>
          <p className="content">
            You watch “What? Where? When?” Yeah. Our founders used to play it.
            That’s where they got a question about a famous American author and
            screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
            exact name and he answered Ray Redberry. And at that moment, a name
            for a yet to be born company was inspired - Redberry 😇
          </p>
        </div>
      </div>
    </>
  );
};

export default Page1;
