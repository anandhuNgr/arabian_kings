import React, { useState } from "react";
import MessageIcon from "../../assets/icons/MessageIcon";
import WhatsAppIcon from "../../assets/icons/WhatsAppIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import MailIcon from "../../assets/icons/MailIcon";

function FloatingIcon() {
  const [isSocialMediaVisible, setIsSocialMediaVisible] = useState(false);

  const handleSocialMediaToggle = () => {
    setIsSocialMediaVisible((prev) => !prev);
  };

  return (
    <>
      <div
        className="cursor-pointer fixed bottom-4 right-4  hover:animate-tada"
        onClick={handleSocialMediaToggle}
      >
        <MessageIcon className="shadow-xl " />
      </div>

      <div
        className={`fixed bottom-20 right-4 bg-red-50 p-4 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out ${isSocialMediaVisible
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-90 opacity-0 translate-y-10"
          }`}
      >
        <div className="flex flex-col space-y-2">
          <a
            href="https://wa.me/971509675843?text=Hello%20there!%20I%20would%20like%20to%20inquire%20about%20your%20services."
            className="text-green-500 font-semibold"
            target="_blank"
            // rel="noopener noreferrer"
          >
            <WhatsAppIcon />
          </a>

          <a
            href="https://www.instagram.com/arabiankingstravelandtourism?igsh=MTRzd2Vycnliemk5cg=="
            target="_blank"
            // rel="noopener noreferrer"
            className="text-pink-500 font-semibold"
          >
            <InstagramIcon />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61569554835750&ref=xav_ig_profile_web"
            target="_blank"
            // rel="noopener noreferrer"
            className="text-blue-500 font-semibold"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@arabiankingstravelandtourism.ae&su=Inquiry&body=Hello%20there%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            className="text-blue-500 font-semibold"
          >
            <MailIcon />
          </a>

        </div>
      </div>
    </>
  );
}

export default FloatingIcon;
