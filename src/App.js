import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Form from "./components/Form";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import SubmittedApp from "./components/SubmittedApp";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/page" element={<Form />} />
      <Route exact path="/page1" element={<Page1 />} />
      <Route exact path="/page2" element={<Page2 />} />
      <Route exact path="/page3" element={<Page3 />} />
      <Route exact path="/page4" element={<Page4 />} />
      <Route exact path="/page5" element={<SubmittedApp />} />
    </Routes>
  );
}

export default App;
