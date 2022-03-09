import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
const Page4 = () => {
  const navigate = useNavigate();
  const { data } = useContext(AuthContext);

  const submit = async () => {
    try {
      const response = await fetch(
        `https://bootcamp-2022.devtest.ge/api/application`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );
    } catch (e) {
      console.log(e, "eeeee");
    } finally {
      goHome();
    }
  };

  const goHome = (token) => {
    navigate("/");
  };

  const backPage = (token) => {
    navigate("/page");
  };
  return (
    <div className="final_page">
      <button type="submit" className="final_submit" onClick={submit}>
        Submit
      </button>
      <div>
        <a
          href="/"
          className="go_back"
          onClick={() => {
            backPage();
          }}
        >
          go back
        </a>
      </div>
    </div>
  );
};

export default Page4;
