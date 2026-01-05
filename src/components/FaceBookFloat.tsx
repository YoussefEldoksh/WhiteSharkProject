
import { FC } from "react";
import { FaFacebookF } from "react-icons/fa6";

const FaceBookFloat = () => {
  const faceBookUrl = "https://www.facebook.com/whiteshark.clean";

  return (
    <div >
      <a
        href={faceBookUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Icon */}
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl">
          <FaFacebookF size={25} />
        </span>
      </a>
    </div>
  );
};

export default FaceBookFloat;
