import { useState, useContext } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import About from "../atoms/Page3/About";
import SpeakAbout from "../atoms/Page3/SpeakAbout";
import Special from "../atoms/Page3/Special";
import classes from "./Page3.module.css";
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
      <div className={classes["main_container"]}>
        <div className={classes.left}>
          <div className={classes.title}>
            <h1>What about you?</h1>
          </div>
          <form className={classes["form_wrapper"]} onSubmit={onSubmit}>
            <div>
              <div className={classes.name}>
                <About
                  name="orginize_deftalk"
                  setDevtalk={setDevtalk}
                  val={data.will_organize_devtalk}
                  value={devtalk}
                />

                <SpeakAbout
                  name="devtalk_topik"
                  setDevtalkTopic={setDevtalkTopic}
                  val={data.devtalkTopic}
                />

                <Special
                  name="special"
                  setSpecial={setSpecial}
                  val={data.special}
                />
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
            <h1>Redberrian Insights</h1>
          </div>
          <p className={classes.content}>
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
