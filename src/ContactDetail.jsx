import React from "react";

const ContactDetail = ({ url, label, icon }) => {
  return (
    <div className="flex justify-start items-center">
      <div className="w-11 h-11 mr-1">
        {icon}
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href={url}
        className="font-secondary text-xl font-semibold text-prussian-blue-950 hover:-translate-y-1px hover:underline w-full"
      >
        {label}
      </a>
    </div>
  );
};

export default ContactDetail;
