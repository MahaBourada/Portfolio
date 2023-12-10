import React, { useState } from "react";
import { Link } from "react-scroll";
import GitHubIcon from "../../img/GitHub.png";
import LinkedInIcon from "../../img/LinkedIn.png";
import { Mail } from "lucide-react";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createMuiTheme, ThemeProvider } from "@mui/material";

const NavBar = ({ resetShowState }) => {
  const { t } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
  };

  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Press\\ Start\\ 2P", "cursive"].join(","),
      fontSize: 11.5,
    },
  });

  return (
    <div className="flex flex-col lg:flex-row bg-background-100 font-main lg:text-xs py-14 lg:py-4 px-20 mx-auto lg:px-36 h-screen lg:h-fit">
      <ThemeProvider theme={theme}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth size="small">
            <div className="mb-10 lg:-mb-0">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedLanguage}
                onChange={(e) => {
                  chooseLanguage(e);
                  resetShowState();
                }}
                sx={{ color: "#003049", width: "160px" }}
              >
                <MenuItem value="fr">Français</MenuItem>
                <MenuItem value="en">English</MenuItem>
              </Select>
            </div>
          </FormControl>
        </Box>
      </ThemeProvider>

      <div className="hidden lg:block lg:my-auto lg:border-r-2 lg:border-r-prussian-blue-950 lg:ml-6 lg:h-10"></div>
      <div className="flex flex-col lg:flex-row items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="slide-left lg:my-auto mb-6 lg:ml-6 cursor-pointer hover:underline hover:translate-y-1px"
          onClick={resetShowState}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={1000}
          className="slide-left lg:my-auto mb-6 lg:ml-6 cursor-pointer hover:underline  hover:translate-y-1px"
          onClick={resetShowState}
        >
          {t("About.title")}
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={1050}
          className="slide-left lg:my-auto mb-6 lg:ml-6 cursor-pointer hover:underline  hover:translate-y-1px"
          onClick={resetShowState}
        >
          {t("Projects.title")}
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={1100}
          className="slide-left lg:my-auto mb-6 lg:ml-6 cursor-pointer hover:underline  hover:translate-y-1px"
          onClick={resetShowState}
        >
          Contact
        </Link>
      </div>
      <div className="flex mt-5 lg:hidden">
        <a href="mailto:mahamarwabourada@gmail.com" rel="noreferrer">
          <Mail
            size={40}
            color="#C1121F"
            strokeWidth={2.25}
            className="slide-up hover:-translate-y-1px hover:translate-x-1px mt-[0.3rem] mr-[0.6rem]"
          />
        </a>
        <a
          href="https://github.com/MahaBourada"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={GitHubIcon}
            alt="GitHub Icon"
            width={50}
            height={50}
            className="slide-up hover:-translate-y-1px hover:translate-x-1px"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/maha-marwa-bourada/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={LinkedInIcon}
            alt="LinkedIn Icon"
            width={50}
            height={50}
            className="slide-up hover:-translate-y-1px hover:translate-x-1px"
          />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
