import "./App.css";
import Navbar from "./components/Navbar";
import DetailsFilling from "./components/pages/DetailsFilling";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import AboutUs from "./components/pages/AboutUs";
import MyResume from "./components/pages/MyResumes";
import Preview from "./components/Preview";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import DataContextPro from "./context/Context";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Function to clear localStorage when the page is reloaded
    const clearLocalStorageOnReload = () => {
      localStorage.clear();
    };

    // Attach the event listener

    window.addEventListener("beforeunload", clearLocalStorageOnReload);

    // Clean up the event listener when the component unmounts

    return () => {
      window.removeEventListener("beforeunload", clearLocalStorageOnReload);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <DataContextPro>
            <div>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/preview" element={<Preview />} />
                <Route
                  exact
                  path="/details-filling-page/*"
                  element={<DetailsFilling />}
                />
                <Route exact path="/my-resumes" element={<MyResume />} />
                <Route exact path="/about-us" element={<AboutUs />} />
              </Routes>
            </div>
          </DataContextPro>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
