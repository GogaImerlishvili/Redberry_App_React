import React, { useState, useContext } from "react";
export const AuthContext = React.createContext("Props");

AuthContext.displayName = "AuthContext";

const init = {
  token: "fe7ef439-22f2-4db8-85aa-f7195783961b",
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  skills: [],
  work_preference: "",
  had_covid: false,
  had_covid_at: "",
  vaccinated: false,
  vaccinated_at: "",
  will_organize_devtalk: false,
  devtalk_topic: "",
  something_special: "",
};

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(init);

  const setUser = (fName = "", lName = "", email = "", phone = "") => {
    if (!fName.length) return "name is empty";
    let newData = data;
    newData.first_name = fName;
    newData.last_name = lName;
    newData.email = email;
    newData.phone = phone;
    setData(...newData);
    return "";
  };

  const setCovid = (
    had_covid,
    vaccinated,
    work_preference,
    had_covid_at,
    vaccinated_at
  ) => {
    let newData = data;
    newData.had_covid = had_covid;
    newData.vaccinated = vaccinated;
    newData.work_preference = work_preference;
    newData.had_covid_at = had_covid_at;
    newData.vaccinated_at = vaccinated_at;
    setData({ ...newData });
    console.log(newData);
    return "";
  };

  const setAbout = (
    will_organize_devtalk,
    devtalk_topic,
    something_special
  ) => {
    let newData = data;
    newData.will_organize_devtalk = will_organize_devtalk;
    newData.devtalk_topic = devtalk_topic;
    newData.something_special = something_special;
    setData({ ...newData });
    return "";
  };

  const addSkill = (id, experience) => {
    const newSkill = {
      id,
      experience,
    };

    let newData = data;
    newData.skills.push(newSkill);
    setData({ ...newData });
    return "";
  };

  const removeById = (id) => {
    let newData = data;
    newData.skills = data.skills.filter((e) => e.id !== id);
    setData({ ...newData });
  };

  const cleanAll = () => {
    setData({ ...init });
  };

  return (
    <AuthContext.Provider
      value={{
        data,
        setUser,
        addSkill,
        removeById,
        setCovid,
        cleanAll,
        setAbout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("Auth Context Provider is not defined");
  }
  return value;
};
