import React, { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const TeamSectionNew = () => {
  const [active, setActive] = useState(0);

  const teamMembers = [
    {
      name: "Shub Kumar",
      role: "Chief Executive Officer",
      img: "/people/shubhsir.jpeg",
      bio: "Visionary leader driving innovation",
    },
    {
      name: "Himanshu Dubey",
      role: "Python Fullstack Engineer",
      img: "/people/himanshu.png",
      bio: "Architecting scalable solutions",
    },
    {
      name: "Nikhil Sain",
      role: "Business Development Head",
      img: "/people/nikhil.jpeg",
      bio: "Building strategic partnerships",
    },
    {
      name: "Rajiv Bhatia",
      role: "VP Strategic Partnerships",
      img: "/people/p7.jpeg",
      bio: "Strategic Alliance Builder",
    },
    {
      name: "Prateek Sah",
      role: "Digital Marketing",
      img: "/people/prateek.png",
      bio: "Marketing and growth expert",
    },
    {
      name: "Abhishek Sah",
      role: "Junior Python Developer",
      img: "/people/abhishek.png",
      bio: "Backend and API developer",
    },
    {
      name: "Ritika Malhotra",
      role: "Project Manager",
      img: "/people/p5.jpeg",
      bio: "Managing projects efficiently",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative bg-[#050505] text-white py-28 overflow-hidden">

      {/* Background glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-700/20 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <div>

            <p className="tracking-[4px] text-gray-400 text-sm mb-5">
              MEET OUR TEAM
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">

              The people
              <br />

              behind
              <br />

              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                extraordinary
              </span>

              <br />

              ideas

            </h2>

            <p className="mt-8 text-gray-400 max-w-lg">
              We are strategists, creators and innovators
              building digital experiences that help brands
              grow faster and stand out.
            </p>

            <div className="flex gap-4 mt-10">

              <button className="px-7 py-3 rounded-xl bg-white text-black font-medium">
                Join Our Team
              </button>

              <button className="px-7 py-3 rounded-xl border border-gray-600">
                View Culture
              </button>

            </div>

          </div>

          {/* RIGHT SIDE CARDS */}

          <div>

            <div className="grid grid-cols-2 gap-5">

              {teamMembers.slice(active, active + 4).map(
                (member, index) => (

                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-white/10"
                >

                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-[280px] object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"/>

                  <div className="absolute bottom-0 p-5 w-full">

                    <h3 className="font-bold text-xl">
                      {member.name}
                    </h3>

                    <p className="text-gray-300 text-sm">
                      {member.role}
                    </p>

                    <div className="flex gap-3 mt-3">

                      <button className="p-2 rounded-full bg-white/10 hover:bg-red-500 transition">
                        <FaLinkedinIn size={14}/>
                      </button>

                      <button className="p-2 rounded-full bg-white/10 hover:bg-blue-500 transition">
                        <HiOutlineMail size={14}/>
                      </button>

                    </div>

                  </div>

                </div>

              ))}
            </div>

            {/* Navigation */}

            <div className="flex justify-center gap-6 mt-8">

              <button
                onClick={prevSlide}
                className="p-4 rounded-full border border-white/20 hover:bg-white/10"
              >
                <IoChevronBack/>
              </button>

              <button
                onClick={nextSlide}
                className="p-4 rounded-full border border-white/20 hover:bg-white/10"
              >
                <IoChevronForward/>
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TeamSectionNew;