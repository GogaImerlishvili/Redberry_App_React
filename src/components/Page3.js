import { useState, useContext } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import About from "../atoms/Page3/About";
import SpeakAbout from "../atoms/Page3/SpeakAbout";
import Special from "../atoms/Page3/Special";
// import About from "../atoms/Page3/About";
const Page3 = () => {
  const { data, setAbout } = useContext(AuthContext);
  const [devtalk, setDevtalk] = useState(data.will_organize_devtalk);
  const [devtalkTopic, setDevtalkTopic] = useState(data.devtalkTopic);
  const [special, setSpecial] = useState(data.special);

  const navigate = useNavigate();

  const nextPage = (token) => {
    navigate("/page4");
  };

  const backPage = (token) => {
    navigate("/page2");
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const loginData = {};

    try {
      for (let [inputName, value] of fd.entries()) {
        loginData[inputName] = value;
      }
      setAbout(devtalk, devtalkTopic, special);
    } finally {
      nextPage();
    }
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <h2 className="title_about">What about you?</h2>
        </div>
        <form className="form-wrapper" onSubmit={onSubmit}>
          <div className="container_about">
            <About
              name="orginize_deftalk"
              setDevtalk={setDevtalk}
              val={data.will_organize_devtalk}
              value={devtalk}
            />
            <div className="about_devtalik">
              <SpeakAbout
                name="devtalk_topik"
                setDevtalkTopic={setDevtalkTopic}
                val={data.devtalkTopic}
              />
            </div>
            <div className="about_special">
              <Special
                name="special"
                setSpecial={setSpecial}
                val={data.special}
              />
            </div>
          </div>
          <div className="container-dots">
            {/* here should be array */}
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
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
          <h2 className="other_title">Redberrian Insights</h2>
          <p className="content_about">
            Redberrian Insights We were soo much fun before the pandemic
            started! Parties almost every weekend and lavish employee birthday
            celebrations! Unfortunately, covid ruined that fun like it did
            almost everything else in the world. But we try our best to zhuzh it
            up a bit. For example, we host biweekly Devtalks where our senior
            and lead developers talk about topics they are passionate about.
            Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc.
            We hold these talks in the office but you can join our Zoom
            broadcast as well. Feel free to join either as an attendee or a
            speaker!
          </p>
        </div>
      </div>
    </>
  );
};

export default Page3;
