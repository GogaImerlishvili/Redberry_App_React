import React, { useState, useContext } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import PreferToWork from "../atoms/Page2/PreferToWork";
import HasCovid from "../atoms/Page2/HasCovid";
import When from "../atoms/Page2/When";
import Vaccinated from "../atoms/Page2/Vaccinated";
import WhenVaccinated from "../atoms/Page2/WhenVaccinated";
import classes from "./Page2.module.css";

const Page2 = () => {
  const { data, setCovid } = useContext(AuthContext);
  const [vaccinated, setVaccinated] = useState(data.vaccinated);
  const [hasCovid, setHasCovid] = useState(data.had_covid);
  const [preffer, setPreffer] = useState("");

  const navigate = useNavigate();

  const nextPage = (token) => {
    navigate("/page3");
  };
  const backPage = (token) => {
    navigate("/page1");
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const loginData = {};

    try {
      for (let [inputName, value] of fd.entries()) {
        loginData[inputName] = value;
      }
      setCovid(
        hasCovid,
        vaccinated,
        preffer,
        loginData.date,
        loginData.dateLast
      );
    } finally {
      nextPage();
    }
  };

  return (
    <>
      <div className={classes["main_container"]}>
        <div className={classes.left}>
          <div className={classes.title}>
            <h1>Covid Stuff</h1>
          </div>
          <form className={classes["form_wrapper"]} onSubmit={onSubmit}>
            <div>
              <div className={classes.name}>
                <PreferToWork name="prefer" setPreffer={setPreffer} />

                <HasCovid
                  name="covid"
                  val={data.had_covid}
                  value={hasCovid}
                  setHasCovid={setHasCovid}
                />

                {hasCovid && <When name="date" val={data.had_covid_at} />}

                <Vaccinated
                  name="vaccinated"
                  value={vaccinated}
                  setVaccinated={setVaccinated}
                />

                {vaccinated && (
                  <WhenVaccinated name="dateLast" val={data.vaccinated_at} />
                )}
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
            </div>
          </form>
        </div>
        <div className={classes.right}>
          <div className={classes["right-title"]}>
            <h1>Redberry Covid Policies</h1>
          </div>
          <p className={classes.content}>
            As this infamous pandemic took over the world, we adjusted our
            working practices so that our employees can be as safe and
            comfortable as possible. We have a hybrid work environment, so you
            can either work from home or visit our lovely office on Sairme
            Street. If it was up to us, we would love you to see us in the
            office because we think face-to-face communications Zoom meetings.
            Both on the fun and productivity scales.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page2;
