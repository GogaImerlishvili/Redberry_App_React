import React, { useEffect, useState, useContext } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import PreferToWork from "../atoms/Page2/PreferToWork";
import HasCovid from "../atoms/Page2/HasCovid";
import When from "../atoms/Page2/When";
import Vaccinated from "../atoms/Page2/Vaccinated";
import WhenVaccinated from "../atoms/Page2/WhenVaccinated";

const Page2 = () => {
  const { setUser, data, setCovid } = useContext(AuthContext);
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
      <div className="container">
        <div className="left">
          <h2 className="title_page2">Covid Stuff</h2>
        </div>
        <form className="form-wrapper" onSubmit={onSubmit}>
          <div>
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
          <h2 className="other_title">Redberry Covid Policies</h2>
          <p className="content_covid">
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
