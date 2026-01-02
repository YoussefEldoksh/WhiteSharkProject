import { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat: FC = () => {
  const phone = "201114259777";
  const message = encodeURIComponent(
    "السلام عليكم ممكن التفاصيل "
  );

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3"
      >
        {/* Text */}
        <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
          Contact us on WhatsApp
        </span>

        {/* Icon */}
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl">
          <FaWhatsapp size={30} />
        </span>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
