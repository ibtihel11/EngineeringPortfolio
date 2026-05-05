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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 px-4 justify-items-center gap-x-12 gap-y-16">
          {projects.map((item) => (
            <div
              className="h-[32rem] flex items-center justify-center w-[80vw] sm:w-[22rem] lg:w-[24rem] cursor-pointer"
              key={item.id}
              onClick={() => window.open(item.link, "_blank")}
            >
              <PinContainer title={item.link} href={item.link}>
                <div className="relative flex items-center justify-center w-[80vw] sm:w-[22rem] lg:w-[24rem] overflow-hidden h-[200px] mb-4">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-2xl"
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
                    className="z-10 absolute bottom-0 w-full object-cover rounded-b-2xl"
                  />
                </div>

                <h1 className="font-bold text-xl line-clamp-1 mb-2">
                  {item.title}
                </h1>

                <p
                  className="text-sm font-light line-clamp-3"
                  style={{ color: "#BEC1DD" }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-5 mb-2">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black w-9 h-9 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt={`tech-${index}`} className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center gap-2">
                    <p className="text-sm text-purple">View on GitHub</p>
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
