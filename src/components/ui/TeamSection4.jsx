import React, { useState } from "react";

/** Vite serves static files from public/ at /. Never use dist/ in src paths. */
const PLACEHOLDER_IMG = "/people/p1.jpeg";

function teamImagePath(path) {
  if (!path) return PLACEHOLDER_IMG;
  if (path.startsWith("/")) return path;
  return `/${path.replace(/^dist\//, "")}`;
}

const teamMembers = [
  {
    name: "Shub Kumar",
    role: "Chief Executive Officer",
    img: "/people/shubhsir.jpeg",
    bio: "Visionary leader driving innovation and long-term company growth.",
    tag: "FOUNDER",
    index: "00",
  },
 
  {
    name: "Himanshu Dubey",
    role: "Tech Head",
    img: "/people/himanshu.png",
    bio: "Leading technical strategy, architecture, and engineering excellence across the team.",
    tag: "ENGINEERING",
    index: "01",
  },
  {
    name: "Nikhil Sain",
    role: "Business Development Head",
    img: "/people/nikhil.jpeg",
    bio: "Creating strong strategic partnerships.",
    tag: "GROWTH",
    index: "02",
  },
  {
    name: "Rajiv Bhatia",
    role: "VP Strategic Partnerships",
    img: "/people/p7.jpeg",
    bio: "Building meaningful business collaborations.",
    tag: "STRATEGY",
    index: "03",
  },
  {
    name: "Charu Sharma",
    role: "Project Manager",
    img: "/people/Charu_Sharma_PM_.png",
    bio: "Managing execution and delivery.",
    tag: "OPS",
    index: "04",
  },

  {
    name: "Gargie",
    role: "Graphic Designer",
    img: "/people/gargie.png",
    bio: "Crafting visual identity and engaging brand creatives.",
    tag: "Digital Engagement",
    index: "09",
  },
  {
    name: "Saurav",
    role: "Business Developer",
    img: "/people/saurav.png",
    bio: "Identifying opportunities and growing client relationships.",
    tag: "Growth",
    index: "10",
  },
  {
    name: "Priyanshu Yadav",
    role: "Business Analyst Intern",
    img: "/people/priyanshu.png",
    bio: "Analyzing data and insights to support business decisions.",
    tag: "Business",
    index: "11",
  },
  {
    name: "Sumit Mishra",
    role: "Full Stack Developer ",
    img: "/people/sumit.png",
    bio: "Delivering end-to-end web applications with modern frameworks.",
    tag: "Engineer",
    index: "12",
  },
  {
    name: "Shubh Shukla ",
    role: "Python Developer",
    img: "/people/shubh_dataentry.png",
    bio: "Developing robust Python solutions and backend services.",
    tag: "Engineer",
    index: "13",
  },
  {
    name: "Mohit Giri",
    role: "Full Stack Developer",
    img: "/people/mohit_giri.jpeg",
    bio: "Building responsive frontends and reliable full stack features.",
    tag: "Engineer",
    index: "14",
  },
  {
    name: "Satyam",
    role: " Creative Video Editor",
    img: "/people/satyam.png",
    bio: "Producing compelling video content for brand storytelling.",
    tag: "Digital Engagement",
    index: "15",
  },
  {
    name: "Anjali Saini",
    role: "Automation Engineer",
    img: "/people/anjali.png",
    bio: "Supporting workflow automation and engineering integrations.",
    tag: "Engineer",
    index: "16",
  },
   {
    name: "Raju",
    role: "Photographer",
    img: "/people/raju.png",
    bio: "Capturing high-quality visuals for campaigns and events.",
    tag: "Digital Engagemnt",
    index: "17",
  }, {
    name: "Jithin Simon",
    role: "Video Editor",
    img: "/people/jithin.png",
    bio: "Editing polished videos that elevate brand narratives.",
    tag: "Digital Engagement",
    index: "18",
  },
   {
    name: "Neeraj Gupta",
    role: "Full Stack Developer Intern",
    img: "/people/neeraj.png",
    bio: "Building and learning full stack features across the product.",
    tag: "Engineer",
    index: "19",
  },
   {
    name: "Ankit Kumar",
    role: "Admin",
    img: "/people/mohit_kumar.png",
    bio: "Keeping daily operations organized and the office running smoothly.",
    tag: "Digital Engagement",
    index: "18",
  },
   {
    name: "Rajesh ",
    role: "Office Help",
    img: "/people/rajesh.png",
    bio: "Supporting the team with essential workplace assistance.",
    tag: "Digital Engagement",
    index: "20",
  },
];



function MemberCard({ member }) {
  const [hovered, setHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(() => teamImagePath(member.img));

  return (
    <div
      className={`gc ${hovered ? "gc--on" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
 


      {/* photo */}
      <div className="gc-photo">
        <img
          src={imgSrc}
          alt={member.name}
          className="gc-img"
          loading="lazy"
          onError={() => {
            if (imgSrc !== PLACEHOLDER_IMG) setImgSrc(PLACEHOLDER_IMG);
          }}
        />
        <div className="gc-fade" />
       

      </div>

      {/* info */}
      <div className="gc-body">
        <span className="gc-idx">{member.index}</span>
        <h4 className="gc-name">{member.name}</h4>
        <p className="gc-role">{member.role}</p>
        <p className="gc-bio">{member.bio}</p>
      </div>

      {/* bottom accent */}
      <div className="gc-bar" style={{ background: "#ff4d4d" }} />
    </div>
  );
}

const TeamSection3 = () => {
  return (
    <section className="ts">
      <div className="ts-grain" />
      <div className="orb o1" /><div className="orb o2" />
      <div className="orb o3" /><div className="orb o4" />
      <div className="ts-gridlines" />

      <div className="ts-inner">

        {/* HEADING */}
<div className="ts-head">

  <p className="ts-eyebrow">(OUR TEAM)</p>

  <h2 className="ts-title">
    
            Meet The People
            <br />
            <em>Behind</em>{" "}
            <span className="ts-red">Vsachi Tech</span>
          </h2>

          <p className="ts-sub">
            A collective of builders, thinkers, and creators —<br />
            shaping the future one line of code at a time.
          </p>
        </div>

        {/* GRID — all 12 members including Shub */}
        <div className="ts-grid-hdr">
          <span>( THE TEAM )</span>
          <span className="ts-red-sm">{teamMembers.length} MEMBERS</span>
        </div>
        <div className="ts-grid">
          {teamMembers.map((m) => (
            <MemberCard key={m.index} member={m} />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=DM+Mono:wght@300;400&display=swap');
        /* ROOT */
        .ts {
          position: relative;
          background: #07111f;
          color: #e8e4dc;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
          padding: 120px 0 160px;
        }

        /* GRAIN */
        .ts-grain {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.5;
        }

        /* GRID LINES */
        .ts-gridlines {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          background-image:
            linear-gradient(rgba(255,77,77,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,77,77,0.025) 1px, transparent 1px);
          background-size: 80px 80px;
        }

        /* ORBS */
        .orb {
          position: absolute; border-radius: 50%;
          filter: blur(130px); pointer-events: none; z-index: 0;
        }
        .o1 { width:600px;height:600px; background:radial-gradient(circle,#ff4d4d18,transparent 70%); top:-200px;left:-200px; animation:oF1 22s ease-in-out infinite alternate; }
        .o2 { width:500px;height:500px; background:radial-gradient(circle,#4d7dff14,transparent 70%); right:-150px;top:30%; animation:oF2 18s ease-in-out infinite alternate; }
        .o3 { width:550px;height:550px; background:radial-gradient(circle,#8b5cf612,transparent 70%); bottom:-100px;left:25%; animation:oF3 24s ease-in-out infinite alternate; }
        .o4 { width:300px;height:300px; background:radial-gradient(circle,#4dffa010,transparent 70%); top:55%;left:10%; animation:oF1 15s ease-in-out infinite alternate-reverse; }
        @keyframes oF1 { to { transform:translate(80px,60px); } }
        @keyframes oF2 { to { transform:translate(-80px,-60px); } }
        @keyframes oF3 { to { transform:translate(60px,-80px); } }

        /* INNER */
        .ts-inner {
          position: relative; z-index: 2;
          max-width: 1400px; margin: 0 auto; padding: 0 40px;
        }

        /* HEADING */
        .ts-head { text-align: center; margin-bottom: 72px; }

        .ts-eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  letter-spacing: 5px;
  color: #7b8fb5;
  margin-bottom: 28px;
}
        

        .ts-title {
    font-size: clamp(48px, 6vw, 82px);
  font-weight: 800;
  line-height: 0.92;
  margin: 0 0 24px;
  letter-spacing: -4px;
  font-family: 'Inter', sans-serif;
  color: #ffffff;
}
        .ts-title em {
  font-style: normal;
  font-weight: 800;
  color: #ff4d4d;;
}
        .ts-red {
          color: #ff4d4d;
          position: relative; display: inline-block;
        }
        

      .ts-sub {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #5f7392;
  line-height: 1.9;
  font-weight: 300;
  letter-spacing: -0.2px;
}

        /* GRID HEADER */
        .ts-grid-hdr {
          display: flex; justify-content: space-between; align-items: center;
          font-family: 'DM Mono', monospace;
          font-size: 11px; letter-spacing: 4px; color: #2a3a52;
          margin-bottom: 28px; padding-bottom: 16px;
          border-bottom: 1px solid #ffffff06;
        }
        .ts-red-sm { color: #ff4d4d; }

        /* GRID */
        .ts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 20px;
        }

        /* MEMBER CARD */
        .gc {
          position: relative;
          background: #070f1c;
          border: 1px solid #ffffff08;
          border-radius: 20px;
          overflow: hidden;
          cursor: default;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .gc--on {
          border-color: #ffffff14;
          transform: translateY(-6px);
          box-shadow: 0 24px 60px #00000055;
        }

        /* corner brackets */
        .gc-c {
          position: absolute; width: 16px; height: 16px;
          z-index: 5; opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gc--on .gc-c { opacity: 1; }
        .gc-tl { top:10px; left:10px;   border-top:1.5px solid; border-left:1.5px solid; }
        .gc-tr { top:10px; right:10px;  border-top:1.5px solid; border-right:1.5px solid; }
        .gc-bl { bottom:10px; left:10px;  border-bottom:1.5px solid; border-left:1.5px solid; }
        .gc-br { bottom:10px; right:10px; border-bottom:1.5px solid; border-right:1.5px solid; }

        /* photo */
        .gc-photo {
          position: relative; height: 320px; overflow: hidden;
        }
        .gc-img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center 10%;
          transition: transform 0.5s ease;
          display: block;
        }
        .gc--on .gc-img { transform: scale(1.04); }
        .gc-fade {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 72%, #070f1c 100%);
        }
        

        /* body */
        .gc-body { padding: 20px 24px 30px; }
        .gc-idx {
          font-family: 'DM Mono', monospace;
          font-size: 10px; letter-spacing: 3px; color: #1e2d3d;
          margin-bottom: 8px; display: block;
        }
        .gc-name {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.3px;
          margin: 0 0 6px;
          color: #e8e4dc;
          font-family: 'Barlow', sans-serif;
        }
        .gc-role {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin: 0 0 12px;
  color: #ff4d4d;
  text-transform: uppercase;
}
       .gc-bio {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #9db0c9;
  line-height: 1.65;
  margin: 0;
  font-weight: 400;
  letter-spacing: -0.1px;
}
        .gc--on .gc-bio {
          color: #c5d4e8;
        }

        /* accent bar */
        .gc-bar {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; opacity: 0; transition: opacity 0.3s ease;
        }
        .gc--on .gc-bar { opacity: 0.7; }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .ts-inner { padding: 0 20px; }
          .ts-title { letter-spacing: -0.5px; }
          .ts-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {

  .ts-inner {
    padding: 0 22px;
  }

  .ts-head {
    margin-bottom: 56px;
    padding: 0 8px;
  }

  .ts-title {
    font-size: clamp(40px, 11vw, 56px);
    line-height: 0.95;
    letter-spacing: -2px;
    text-align: center;
    word-break: keep-all;
  }

  .ts-sub {
    font-size: 15px;
    line-height: 1.7;
    margin-top: 28px;
    padding: 0 8px;
  }

  .ts-grid {
    grid-template-columns: 1fr;
  }

  .ts-grid-hdr {
    margin-top: 40px;
  }
}
      `}</style>
    </section>
  );
};

export default TeamSection3;