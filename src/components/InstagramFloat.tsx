import { FC } from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramFloat = () => {
  const instagramUrl = "https://www.instagram.com/white.shark.clean";

  return (
    <div >
      <a
        className=""
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Icon */}
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white shadow-xl">
          <FaInstagram size={30} />
        </span>
      </a>
    </div>
  );
};

export default InstagramFloat;
