import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SocialMenu from "./Components/SideComponents/SocialMenu";
import Email from "./Components/SideComponents/Email";

function App() {
  const [show, setShow] = useState(false);
  const handleMobileNav = () => {
    if (show) setShow(false);
    else setShow(true);
  };

  const resetShowState = () => {
    setShow(false);
  };

  return (
      <div
        className={`flex flex-col min-h-screen text-prussian-blue-950 bg-background-100`}
      >
        <Email />
        <Header
          handleMobileNav={handleMobileNav}
          show={show}
          resetShowState={resetShowState}
        />
        <Main show={show} />
        <Footer show={show} />
        <SocialMenu />
      </div>
  );
}

export default App;
