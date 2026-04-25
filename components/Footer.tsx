import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      <div className="w-full absolute left-0 -bottom-12 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s turn{" "}
          <span className="text-purple">ideas into reality</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 max-w-lg text-center">
          If you have a project, an opportunity, or just want to say hi — drop
          me an email. I read everything.
        </p>
        <a href="mailto:ibtihell.yengui@gmail.com">
          <MagicButton
            title="ibtihell.yengui@gmail.com"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
        <p className="md:text-base text-sm md:font-normal font-light text-white-200">
          © 2026 Ibtihel Yengui — Built with Next.js & Tailwind
        </p>

        <div className="flex items-center gap-3">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={info.label}
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple hover:scale-110 transition-all duration-200"
            >
              <img src={info.img} alt={info.label} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
