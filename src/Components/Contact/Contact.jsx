import React from "react";
import { Github, Linkedin, MapPin, Mail } from "lucide-react";
import ContactDetail from "./ContactDetail";
import image1 from "../../img/WaleTest.png";
import image2 from "../../img/MountainTest.png";
import { useTranslation } from "react-i18next";

const Contact = ({ show }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`mx-5 pt-10 lg:pt-[4.5rem] md:mx-16 lg:ml-24 my-20 ${
        show ? "blur-sm" : "blur-none"
      }`}
    >
      {/* ml-32 mt-32 pt-32 */}
      <h1 className="font-main text-2xl text-hippie-blue-400 mb-5">Contact</h1>
      <div className="md:flex">
        {/* flex mb-10 */}
        <p className="font-secondary text-xl md:text-[1.3rem] font-medium">
          {t("Contact.par")}
        </p>
        {/* Image */}
        <img
          className="hidden md:block md:rounded-2xl md:w-1/2 lg:w-2/5 p-2 lg:ml-14 xl:ml-40 lg:mr-20 md:h-auto md:object-cover"
          src={image1}
          alt="Test 3"
        />
      </div>

      <div className="md:flex md:flex-row-reverse md:mt-8 lg:mt-10">
        <div className="mt-8 mx-auto sm:mx-6 md:mx-0 md:ml-4 lg:mr-20 xl:ml-16 xl:mr-52 2xl:mr-96 md:mt-0">
          <ContactDetail
            url={
              "https://www.google.com/maps/place/Paris,+France/@48.8588548,2.347035,12z/data=!3m1!4b1!4m6!3m5!1s0x47e66e1f06e2b70f:0x40b82c3488c9460!8m2!3d48.856614!4d2.3522219!16zL20vMDVxdGo?entry=ttu"
            }
            label={t("Contact.location")}
            icon={<MapPin size={34} color="#003049" />}
          />

          <ContactDetail
            url={"https://github.com/MahaBourada"}
            label={"github/MahaBourada"}
            icon={<Github size={34} color="#003049" />}
          />

          <ContactDetail
            url={"https://www.linkedin.com/in/maha-marwa-bourada/"}
            label={"linkedin/maha-marwa-bourada"}
            icon={<Linkedin size={34} color="#003049" />}
          />

          <div className="flex justify-start items-center">
            <div className="w-11 h-11 mr-1 p-2">
              <Mail size={34} color="#003049" />
            </div>
            <a
              href="mailto:mahamarwabourada@gmail.com"
              className="font-secondary text-lg md:text-xl font-semibold text-prussian-blue-950 hover:-translate-y-1px hover:underline mt-1 w-full"
            >
              mahamarwabourada@gmail.com
            </a>
          </div>
        </div>

        {/* Image */}
        <img
          className="rounded-2xl p-2 mt-10 md:mt-0 md:mr-2 lg:mr-20 xl:mr-28 2xl:mr-28 object-cover md:w-1/2 lg:w-2/5"
          src={image2}
          alt="Test 4"
        />
      </div>
    </div>
  );
};

export default Contact;
