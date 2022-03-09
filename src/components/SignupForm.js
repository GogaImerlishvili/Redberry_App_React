import React, { useContext } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NameInput } from "../atoms/NameInput/NameInput";
import { EmailInput } from "../atoms/EmailInput/EmailInput";
import { LastNameInput } from "../atoms/LastNameInput/LastNameInput";
import { TelInput } from "../atoms/TelInput/TelInput";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const { setUser, data } = useContext(AuthContext);
  console.log(data);
  const navigate = useNavigate();

  const nextPage = (token) => {
    navigate("/page1");
  };

  const backPage = (token) => {
    navigate("/");
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const loginData = {};

    try {
      for (let [inputName, value] of fd.entries()) {
        loginData[inputName] = value;
      }
      const res = setUser(
        loginData.name,
        loginData.last_name,
        loginData.email,
        loginData.tel
      );
      console.log(res, "name");
    } finally {
      nextPage();
    }
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <h2 className="title">
            Hey,Rocketeer,what
            <br />
            are your coordinates?
          </h2>
        </div>
        <form className="form-wrapper" onSubmit={onSubmit}>
          <div>
            <div className="name">
              <NameInput name="name" val={data.first_name} />
            </div>
            <div className="last_name">
              <LastNameInput name="last_name" val={data.last_name} />
            </div>
            <div className="email">
              <EmailInput name="email" val={data.email} />
            </div>
            <div className="tel">
              <TelInput name="tel" val={data.phone} />
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
          <button type="submit" className="right-arrow">
            <FaChevronRight />
          </button>
        </form>
        <div className="right">
          <h2 className="other_title">Redberry Origins</h2>
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

export default SignupForm;
