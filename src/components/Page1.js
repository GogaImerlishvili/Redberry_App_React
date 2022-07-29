import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { SkillsInput } from "../atoms/Page1/SkillsInput/SkillsInput";
// import { ExperienceInput } from "../atoms/Page1/SkillsInput/ExperienceInput";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import classes from "./Page1.module.css";
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
      <div className={classes["main_container"]}>
        <div className={classes.left}>
          <div className={classes.title}>
            <h1>Tell us about your skills</h1>
          </div>
          <form className={classes["form_wrapper"]} onSubmit={onSubmit}>
            <div>
              <div className={classes.name}>
                <SkillsInput name="name" val={data.skills} add={x} />
              </div>
              <div className={classes["container-dots"]}>
                {/* here should be array */}
                <button
                  type="button"
                  className={classes["left-arrow"]}
                  onClick={backPage}
                >
                  <AiOutlineArrowLeft />
                </button>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
                <button
                  type="submit"
                  onClick={nextPage}
                  className={classes["right-arrow"]}
                >
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className={classes.right}>
          <div className={classes["right-title"]}>
            <h1>Redberry Origins</h1>
          </div>
          <p className={classes.content}>
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
