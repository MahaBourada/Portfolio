import React from "react";
import { Github, Linkedin, MapPin, Mail } from "lucide-react";
import ContactDetail from "./ContactDetail";
import image1 from "./img/WaleTest.png";
import image2 from "./img/MountainTest.png";

const Contact = ({ english }) => {
  return (
    <div className="mx-8 md:mx-16 my-20">
      {/* ml-32 mt-32 pt-32 */}
      <h1 className="font-main text-2xl text-hippie-blue-400 mb-5">Contact</h1>
      <div className="md:flex">
        {/* flex mb-10 */}
        {english ? (
          <p className="font-secondary text-xl md:text-[1.3rem] font-medium">
            I am interested in internships so if you think that my skills
            are helpful don't hesitate to contact me.
          </p>
        ) : (
          <p className="font-secondary text-xl md:text-[1.3rem] font-medium">
            Je suis interessée par un stage ou une formation en alternance,
            si vous pensez que mes compétences peuvent vous être utiles,
            je suis disponible à votre disposition.
          </p>
        )}
        {/* Image */}
        <img
          className="hidden md:block md:rounded-2xl md:w-1/2 lg:w-2/5 lg:ml-14 xl:ml-40 lg:mr-20 md:h-auto md:object-cover"
          src={image1}
          alt="Test 3"
        />
      </div>

      <div className="md:flex md:flex-row-reverse md:mt-8 lg:mt-10">
        <div className="mt-8 mx-auto sm:mx-6 md:mx-0 md:ml-4 lg:ml-14 xl:ml-16 xl:mr-16 2xl:mr-52 md:mt-0">
          {english ? (
            <>
              <ContactDetail
                url={
                  "https://www.google.com/maps/place/Constantine/@36.3545275,6.6453969,12z/data=!3m1!4b1!4m6!3m5!1s0x12f17717c4785627:0x25fb307fd08801a!8m2!3d36.3570052!4d6.6390282!16zL20vMDJkNF9x?entry=ttu"
                }
                label={"Constantine, Algeria"}
                icon={<MapPin size={36} color="#003049" />}
              />
            </>
          ) : (
            <>
              <ContactDetail
                url={
                  "https://www.google.com/maps/place/Constantine/@36.3545275,6.6453969,12z/data=!3m1!4b1!4m6!3m5!1s0x12f17717c4785627:0x25fb307fd08801a!8m2!3d36.3570052!4d6.6390282!16zL20vMDJkNF9x?entry=ttu"
                }
                label={"Constantine, Algérie"}
                icon={<MapPin size={36} color="#003049" />}
              />
            </>
          )}

          <ContactDetail
            url={"https://github.com/MahaBourada"}
            label={"github.com/MahaBourada"}
            icon={<Github size={36} color="#003049" />}
          />

          <ContactDetail
            url={"https://www.linkedin.com/in/maha-marwa-bourada/"}
            label={"linkedin.com/in/maha-marwa-bourada/"}
            icon={<Linkedin size={36} color="#003049" />}
          />

          <div className="flex justify-start items-center">
            <div className="w-11 h-11 mr-1">
              <Mail size={36} color="#003049" />
            </div>
            <a
              href="mailto:mahamarwabourada@gmail.com"
              className="font-secondary text-xl font-semibold text-prussian-blue-950 hover:-translate-y-1px hover:underline w-full"
            >
              mahamarwabourada@gmail.com
            </a>
          </div>
        </div>

        {/* Image */}
        <img
          className="rounded-2xl mt-10 md:mt-0 md:mr-2 lg:mr-12 xl:mr-20 2xl:mr-28 object-cover md:w-1/2 lg:w-2/5"
          src={image2}
          alt="Test 4"
        />
      </div>
    </div>
  );
};

export default Contact;
