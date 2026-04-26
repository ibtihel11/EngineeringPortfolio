"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="py-20 pt-32">
        <h1 className="heading mb-16">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-32">
          {projects.map((item) => (
            <div
              className="lg:min-h-[38rem] h-[30rem] flex items-center justify-center sm:w-[28rem] w-[80vw] cursor-pointer"
              key={item.id}
              onClick={() => window.open(item.link, "_blank")}
            >
                <PinContainer title={item.link} href={item.link}>
                  <div className="relative flex items-center justify-center sm:w-[28rem] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-6">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <img
                        src="/bg.png"
                        alt="background"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="z-10 absolute bottom-0"
                    />
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-2">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-base lg:font-normal font-light text-sm"
                    style={{ color: "#BEC1DD" }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-6 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img
                            src={icon}
                            alt={`tech-${index}`}
                            className="p-2"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center gap-2">
                      <p className="lg:text-base text-sm text-purple">
                        View on GitHub
                      </p>
                      <FaLocationArrow color="#CBACF9" />
                    </div>
                  </div>
                </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
