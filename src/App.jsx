import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import SocialMenu from "./SocialMenu";
import Email from "./Email";

function App() {
  const [english, setEnglish] = useState(true);

  const handleLang = (label) => {
    if (label === 'french') {
      setEnglish(false)
      console.log(english)
    } else if (label === 'english') {
      setEnglish(true)
      console.log(english)
    }
  }

  return (
    <div className="flex flex-col min-h-screen text-prussian-blue-950 bg-background-100">
      <Email/>
      <Header english={english} handleLang={handleLang} />
      <Main english={english} />
      <Footer />
      <SocialMenu/>
    </div>
  );
}

export default App;
