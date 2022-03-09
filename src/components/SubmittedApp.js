import { useEffect, useState } from "react";
import { AiFillPauseCircle } from "react-icons/ai";

const SubmittedApp = () => {
  const [data, setData] = useState([]);

  // { apl.had_covid ?  if true : component if false }

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
  return (
    <div className="container_info">
      <h1 className="title_info">Submitted Applications</h1>
      {data.map((apl, index) => (
        <form key={index} className="form-wrapper_info">
          <div className="name">
            <h2 className="personal_info">Personal Information</h2>
            <div className="api_info">
              <p>First Name:</p>
              {apl.first_name}
            </div>
          </div>
          <div className="last_name api_info">
            <p>Last Name:</p>
            {apl.last_name}
          </div>
          <div className="email api_info">
            <p>E Mail:</p>
            {apl.email}
          </div>
          <div className="tel api_info">
            <p>Phone:</p>
            {apl.phone}
          </div>

          <div className="covid_situation">
            <h3 className="covid_sit">Covid Situation</h3>
            <div className="apl_info">
              <p>how would you prefer to work?</p>

              <input
                type="radio"
                checked={apl.work_preference === "from_office"}
              />
              <label>From Sairme office</label>
              <br />
              <input
                type="radio"
                checked={apl.work_preference === "from_home"}
              />
              <label>From Home</label>
              <br />
              <input type="radio" checked={apl.work_preference === "hybrid"} />

              <label>Hybrid</label>
            </div>
          </div>
          <div className="container_covid1 apl_info">
            <p>Did you contact covid 19? :(</p>

            <input type="radio" checked={apl.had_covid === true} />
            <label>Yes</label>
            <input type="radio" checked={apl.had_covid === false} />
            <label>No</label>
            {apl.had_covid === true && (
              <div className="container_covid2">
                <p>When did you have covid 19?</p>
                <input type="date" placeholder="Date" />
              </div>
            )}
          </div>

          <div className="container_covid3 apl_info">
            <p>Have you been vaccinated?</p>
            <input type="radio" checked={apl.vaccinated === true} />
            <label>Yes</label>
            <input type="radio" checked={apl.vaccinated === false} />
            <label>No</label>
            {apl.had_covid === true && (
              <div className="container_covid2">
                <p>When did you have covid 19?</p>
                <input type="date" placeholder="Date" />
              </div>
            )}
          </div>

          <div className="insights_info">
            <h4 className="insights_title">Insights</h4>
            <p>Would you attend Devtaliks and maybe also organize you onw?</p>
            <input
              type="radio"
              name="yes"
              checked={apl.will_organize_devtalk === true}
            />
            <label>Yes</label>
            <input type="radio" checked={apl.will_organize_devtalk === false} />
            <label>No</label>
          </div>

          <div className="devtalk_info">
            <p>What would you speak about at Devtalik?</p>
            <textarea className="textarea" name="devtalk_topik">
              {apl.devtalk_topic}
            </textarea>
          </div>

          <div className="about_info">
            <p>Tell us something special</p>
            <textarea className="textarea1">{apl.something_special}</textarea>
          </div>
        </form>
      ))}
    </div>
  );
};

export default SubmittedApp;
