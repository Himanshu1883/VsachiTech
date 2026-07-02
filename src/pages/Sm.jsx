
import React from 'react'

// function SM() {
//   return (
//     <div>
//       <h1>Social Media Marketing Services</h1>
//       <p>Boost your brand's visibility and engagement across all major social platforms.</p>
//     </div>
//   );
// }

// export default SM;

import {useState} from "react";


import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaYoutube,
    FaXTwitter,
    FaArrowRight,
    FaCheck,
    FaPlus
    
    
    
} from "react-icons/fa6";

/* ---------------- PLATFORMS ---------------- */
const platforms = [
    {
        id: 0,
        icon: FaInstagram,
        iconBg: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]",
        tag: "Visual",
        title: "Instagram",
        desc: "Feed posts, Reels, Stories, and Highlights built around a consistent visual identity.",
        items: [
            "Reels & short-form video editing",
            "Carousel design & copywriting",
            "Story takeovers & polls",
            "Hashtag & geo-tag strategy"
        ]
    },
    {
        id: 1,
        icon: FaFacebookF,
        iconBg: "bg-[#1877f2]",
        tag: "Community",
        title: "Meta",
        desc: "Page management, group engagement, and event promotion for local and returning audiences.",
        items: [
            "Page & group moderation",
            "Review & message response",
            "Event & offer promotion",
            "Audience & lookalike targeting"
        ]
    },
    
    {
        id: 2,
        icon: FaLinkedinIn,
        iconBg: "bg-[#0a66c2]",
        tag: "B2B",
        title: "LinkedIn",
        desc: "Company page growth and founder/executive ghost-posting for credibility and lead generation.",
        items: [
            "Thought-leadership writing",
            "Executive ghost-posting",
            "Employee advocacy programs",
            "InMail-ready lead capture"
        ]
    },
    {
        id: 3,
        icon: FaYoutube,
        iconBg: "bg-[#ff0000]",
        tag: "Long-form",
        title: "YouTube",
        desc: "Channel strategy, Shorts repurposing, and SEO-driven titles, thumbnails, and descriptions.",
        items: [
            "Title & thumbnail testing",
            "Shorts repurposing from long-form",
            "Playlist & channel SEO",
            "Description & tag optimization"
        ]
    },
    {
        id: 4,
        icon: FaXTwitter,
        iconBg: "bg-black border border-white/10",
        tag: "Real-time",
        title: "X (Twitter)",
        desc: "Real-time engagement, customer support triage, and brand voice in fast-moving conversations.",
        items: [
            "Real-time monitoring & reply",
            "Thread writing",
            "Customer support triage",
            "Trend & news-jacking"
        ]
    }
];

/* ---------------- FACILITIES ---------------- */
const facilities = [
    {
        num: "01",
        title: "Content strategy & calendar",
        desc: "A rolling monthly calendar mapped to your goals, key dates, launches, and platform-specific posting windows — agreed with you before anything goes live."
    },
    {
        num: "02",
        title: "Graphic design & video editing",
        desc: "Custom graphics, carousels, Reels, and Shorts produced in-house, on-brand, and sized correctly for each platform's native format."
    },
    {
        num: "03",
        title: "Copywriting & captioning",
        desc: "Captions, hooks, and CTAs written in your brand voice — including hashtag research and SEO-aware descriptions where the platform supports it."
    },
    {
        num: "04",
        title: "Community management",
        desc: "Comments, DMs, and reviews monitored and responded to on schedule, so engagement doesn't go cold after a post goes up."
    },
    {
        num: "05",
        title: "Paid social boosting",
        desc: "Targeted boosting and ad campaigns layered on top of organic content to extend reach to the audiences most likely to convert."
    },
    {
        num: "06",
        title: "Influencer & UGC sourcing",
        desc: "Outreach and coordination with creators and customers for authentic user-generated content and collaboration posts."
    },
    {
        num: "07",
        title: "Analytics & reporting",
        desc: "Monthly reports covering reach, engagement, follower growth, and conversions — in plain language, with what we're changing next."
    },
    {
        num: "08",
        title: "Crisis & reputation monitoring",
        desc: "Ongoing tracking for brand mentions and sentiment shifts, with a response plan ready before a small issue becomes a big one."
    }
];

/* ---------------- PROCESS ---------------- */
const process = [
    {
        num: "01",
        title: "Audit & goal-setting",
        desc: "We review your existing channels, competitors, and audience, then agree on concrete goals — followers, leads, bookings, or sales.",
        chips: ["Week 1", "One-time setup"]
    },
    {
        num: "02",
        title: "Strategy & calendar build",
        desc: "Platform mix, posting frequency, content pillars, and a draft calendar are put together and sent for your sign-off.",
        chips: ["Week 1–2"]
    },
    {
        num: "03",
        title: "Content production",
        desc: "Design, video editing, and copywriting happen against the approved calendar, with drafts shared for review before anything is scheduled.",
        chips: ["Ongoing", "Weekly batches"]
    },
    {
        num: "04",
        title: "Publishing & community management",
        desc: "Posts go live on schedule across every platform, with comments, DMs, and reviews monitored daily.",
        chips: ["Daily"]
    },
    {
        num: "05",
        title: "Reporting & optimization",
        desc: "A monthly report breaks down what worked, what didn't, and what we're adjusting in next month's calendar.",
        chips: ["Monthly"]
    }
];
const igPosts = [
    { img: "/images/post1.jpg", likes: "Royal touch wedding studio | Couture menswear", caption: "https://surl.li/mcccff" },
    { img: "/images/post2.jpg", likes: "easyhomesinfra\nSushil Chopra", caption: "New launch drop ✨,\n🔑 Helping you buy-invest & grow wealth" },
    { img: "/images/post3.jpg", likes: "2.4K", caption: "Client shoutout 🙌" }
   
];

const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/28/15/f2/2815f2273e92d534bd4e92dd3e319fd9.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/5" />

      

      
    </div>
  );
};
  




export default function SM() {
    const [openFaq, setOpenFaq] = useState(null);
    const [selectedPost, setSelectedPost] = useState(null);

   return (
    <div>
       
     
        
        {/* ================= HERO ================= */}
<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center">

  {/* Video background */}
  <video
    autoPlay muted loop playsInline
    className="absolute inset-0 w-full h-full object-cover -z-20"
    src="/video/bg-video.mp4"
  />

  {/* Dark cinematic overlay — two layers for depth */}
  <div className="absolute inset-0 -z-10 bg-[#e44f39]/75" />
  <div
    className="absolute inset-0 -z-10"
    style={{
      background:
        "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(228,79,57,0.18), transparent 70%)"
    }}
  />

  {/* Subtle film-grain texture overlay */}
  <div
    className="absolute inset-0 -z-10 opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat",
      backgroundSize: "128px"
    }}
  />

  {/* Top label */}
  <div className="mb-8 flex items-center gap-3">
    <span className="h-px w-12 bg-[#e44f39]/60" />
    <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#e44f39]">
      Social Media Marketing
    </span>
    <span className="h-px w-12 bg-[#e44f39]/60" />
  </div>

  {/* Main headline — big cinematic typography */}
  <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-white max-w-5xl">
    Your Brand.
    <br />
    <span
      className="text-transparent"
      style={{
        WebkitTextStroke: "2px #e44f39",
      }}
    >
      We Post.
    </span>
    <br />
    We Build{" "}
    <span className="text-[#e44f39]">Business.</span>
  </h1>

  {/* Subheading */}
  <p className="mt-8 text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
    We plan, design, post, and report on every platform that matters —
    so your feed becomes a real channel for leads, not just likes.
  </p>

  {/* CTA Buttons */}
  <div className="mt-10 flex flex-wrap gap-4 justify-center">
    <a
      href="#pricing"
      className="inline-flex items-center gap-2 bg-[#e44f39] text-white font-bold text-sm px-8 py-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#e44f39]/40"
    >
      See Packages <FaArrowRight className="text-xs" />
    </a>
    <a
      href="#facilities"
      className="inline-flex items-center gap-2 border border-white/20 text-white font-bold text-sm px-8 py-4 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1"
    >
      What's Included
    </a>
  </div>

  {/* Platform icons row */}
  <div className="mt-14 flex items-center gap-6 opacity-50">
    {[
      { icon: FaInstagram, color: "#dd2a7b" },
      { icon: FaFacebookF, color: "#1877f2" },
      { icon: FaLinkedinIn, color: "#0a66c2" },
      { icon: FaYoutube, color: "#ff0000" },
      { icon: FaXTwitter, color: "#ffffff" },
    ].map(({ icon: Icon, color }, i) => (
      <Icon key={i} size={22} style={{ color }} />
    ))}
  </div>

  {/* Stats row */}
  <div className="mt-8 flex flex-wrap justify-center gap-10 text-center">
    {[
      { val: "5+", label: "Platforms Managed" },
      { val: "24/7", label: "Community Monitoring" },
      { val: "100%", label: "Monthly Reports" },
    ].map(({ val, label }) => (
      <div key={label}>
        <div className="text-2xl font-black text-white">{val}</div>
        <div className="text-[11px] uppercase tracking-widest text-gray-500 mt-1">{label}</div>
      </div>
    ))}
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
    <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scroll</span>
    <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
  </div>

</section>


            <section className="px-6 md:px-12 py-20">
  <div className="max-w-6xl mx-auto">
       

    <div className="text-center mb-12 bg-[#121212] border border-white/10 rounded-3xl p-8 shadow-lg ">
      <h2 className="text-4xl font-bold text-[#e44f39]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#e44f39] animate-pulse" />
         Reels and Short Form video
        </h2>

        
      <p className="text-gray-400 mt-3">
        Campaigns that generated engagement and conversions.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 ">

      
     

      {/* Reel 1 */}
      <div className="bg-[#121212] rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">

        <video
          src="/video/reel1.mp4"
          autoPlay
          muted
          loop
          
          className="w-full h-[550px] object-cover"
        />

        <div className="p-5">
          <h3 className="text-xs font-semibold">
             <span className="text-[#e44f39] text-xl">OrvellaSalon --</span>  New Hair. New Energy.<br />

            A fresh hairstyle is more than a new look—it’s a boost of confidence, beauty, and self-expression. 
            Step into your best version with a transformation that turns heads and lifts spirits.<br />

           📍Transform your hair. Transform your confidence.<br />

            #OrvellaSalon #HairTransformation #NewHairNewEnergy #HairGoals #delhisalon
          </h3>

          <p className="text-gray-400 text-sm mt-2">
             https://www.instagram.com/orvellasalon/ 
          </p>
        </div>

      </div>

      {/* Reel 2 */}
      <div className="bg-[#121212] rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">

        <video
          src="/video/reel2.mp4"
          autoPlay
          muted
          loop
          
          className="w-full h-[550px] object-cover"
        />

        <div className="p-5">
          <h3 className="text-xs font-semibold">
            <span className="text-[#e44f39] text-xl">SwimNGymPoint --</span>  Dive into Fitness!<br />
            Make a splash with our swimming classes! Whether you're a beginner or looking to improve your technique, our expert instructors are here to guide you every stroke of the way. Join us and experience the joy of swimming while getting fit and having fun!<br />

            #SwimmingGymPoint #SwimClasses #FitnessFun #LearnToSwim #DiveIn
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            https://www.instagram.com/swimngympoint/?hl=en
          </p>
        </div>

      </div>

       {/* Reel 3 */}
      <div className="bg-[#121212] rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">

        <video
          src="/video/reel3.mp4"
          autoPlay
          muted
          loop
          
          className="w-full h-[550px] object-cover"
        />

        <div className="p-5">
          <h3 className="text-xs font-semibold">
            <span className="text-[#e44f39] text-xl">Sitara Vastram --</span>  Fashion & Fusion <br />
            Embrace the elegance of tradition with a modern twist! Our collection blends timeless designs with contemporary flair, perfect for every occasion. Step into a world where fashion meets culture and make a statement that’s uniquely yours.<br />

            #SitaraVastram #FashionFusion #TraditionalElegance #ModernStyle #CulturalChic
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            https://www.instagram.com/sitaravastram/
          </p>
        </div>

      </div>
      
      
    </div>

  </div>
</section>

{/* ================= INSTAGRAM POSTS GRID ================= */}
<section className="px-6 md:px-12 py-20">
  <div className="max-w-6xl mx-auto  bg-[#121212] border border-white/10 rounded-3xl p-8 shadow-lg ">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[#e44f39]">We track your Feed</h2>
      <p className="text-gray-400 mt-3">
        A peek at recent posts across our client accounts.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {igPosts.map((post, i) => (
        <div
          key={i}
          onClick={() => setSelectedPost(post)}
          className="bg-[#ffffff] border border-white/10 rounded-2xl overflow-hidden cursor-pointer group hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="overflow-hidden">
            <img
              src={post.img}
              alt={post.caption}
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-4 text-sm text-black mb-2">
              <span className="flex items-center gap-1.5">
                <span className="text-[#ff0000]">♥ </span> {post.likes}
              </span>
              <span className="flex items-center gap-1.5">
                💬 {post.comments}
              </span>
            </div>
            <p className="text-[13px] text-black leading-snug">
              {post.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* ---------- LIGHTBOX MODAL ---------- */}
  {selectedPost && (
    <div
      onClick={() => setSelectedPost(null)}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden max-w-3xl w-full grid md:grid-cols-2"
      >
        <img
          src={selectedPost.img}
          alt={selectedPost.caption}
          className="w-full h-[320px] md:h-full object-cover"
        />
        <div className="p-6 flex flex-col">
          <button
            onClick={() => setSelectedPost(null)}
            className="self-end text-gray-400 hover:text-white text-xl mb-4"
          >
            ✕
          </button>
          <div className="flex items-center gap-4 text-sm text-gray-300 mb-3">
            <span className="flex items-center gap-1.5">
              <span className="text-[#e44f39]">♥</span> {selectedPost.likes} likes
            </span>
            <span className="flex items-center gap-1.5">
              💬 {selectedPost.comments} comments
            </span>
          </div>
          <p className="text-[14px] text-gray-300 leading-relaxed">
            {selectedPost.caption}
          </p>
        </div>
      </div>
    </div>
  )}
</section>

            


            {/* ================= PLATFORMS ================= */}
            {BackgroundElements()}
            <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 0%, rgba(236, 150, 100, 0.14), transparent 60%)"
                            }}
                        />
             
            
            <section id="platforms" className="px-6 md:px-12 py-20 bg-[#FAFAFA] border-t border-white/5bg-[#121212] border border-white/10 rounded-3xl p-8 shadow-lg">
            
            
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-xl mb-12">
                        <span className="text-xl font-extrabold uppercase tracking-[0.18em] text-[#e44f39]">
                            Platforms
                        </span>
                        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight text-[#e44f39]">
                             <span className="text-[#000000]"> One team</span>, every channel your audience is actually on.
                        </h2>
                        <p className="mt-4 text-gray-400 text-[15px] leading-relaxed">
                            We dont post the same thing everywhere. Each platform gets
                            its own format, tone, and posting rhythm — built around how
                            people actually use it.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {platforms.map((p) => {
                            const Icon = p.icon;
                            return (
                                <div
                                    key={p.id}
                                    className="bg-[#121212] border border-orange-500/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#e44f39]/40 hover:-translate-y-1 hover:bg-[#141414]"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg ${p.iconBg}`}>
                                            <Icon />
                                        </div>
                                        <span className="font-mono text-[10px] uppercase tracking-wider text-gray-500 border border-white/10 px-2.5 py-1 rounded-full">
                                            {p.tag}
                                        </span>
                                    </div>
                                    <h3 className="font-extrabold text-[17px] mb-2">{p.title}</h3>
                                    <p className="text-[13.5px] text-gray-400 leading-relaxed mb-3.5">
                                        {p.desc}
                                    </p>
                                    <ul className="space-y-1.5">
                                        {p.items.map((item, i) => (
                                            <li key={i} className="flex gap-2 items-baseline text-[12.5px] text-gray-400">
                                                <span className="text-[#e44f39] text-[8px]">●</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= FACILITIES ================= */}
            <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 0%, rgba(179, 71, 130, 0.18), transparent 60%)"
                            }}
                        />
            
            <section id="facilities" className="px-6 md:px-12 py-20 border-t border-black/5">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-xl mb-12">
                        <span className="text-xl font-extrabold uppercase tracking-[0.18em] text-[#e44f39]">
                            What's Included
                        </span>
                        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight">
                            Every facility that goes into running your social presence.
                        </h2>
                        <p className="mt-4 text-gray-400 text-[15px] leading-relaxed">
                            Not just "posting" — the full operational stack behind
                            a social channel that actually performs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-bl/5 rounded-2xl overflow-hidden">
                        {facilities.map((f) => (
                            <div key={f.num} className="bg-[#] p-7">
                                <span className="font-mono text-xs text-[#e44f39] block mb-3">
                                    {f.num}
                                </span>
                                <h3 className="font-extrabold text-[16.5px] mb-2">{f.title}</h3>
                                <p className="text-[13.5px] text-gray-400 leading-relaxed">
                                    {f.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= PROCESS ================= */}
            {/* ================= PROCESS ================= */}
<section id="process" className="px-6 md:px-12 py-20 border-t border-white/5 relative overflow-hidden">

  {/* Orange/Black/White Grid Background */}
  <div
    className="absolute inset-0 -z-10"
    style={{
      backgroundColor: "#948888",
      backgroundImage: `
        linear-gradient(rgba(228, 80, 57, 0.53) 1px, transparent 1px),
        linear-gradient(90deg, rgba(228, 80, 57, 0.39) 1px, transparent 1px),
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
      `,
      backgroundSize: "80px 80px, 80px 80px, 20px 20px, 20px 20px",
    }}
  />

  {/* Fade edges so grid doesn't look cut off */}
  <div
    className="absolute inset-0 -z-10"
    style={{
      background:
        "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #0a0a0a 100%)"
    }}
  />

  {/* Orange glow at top left near the timeline */}
  <div
    className="absolute top-0 left-0 w-72 h-72 -z-10 rounded-full blur-3xl"
    style={{ background: "rgba(228,79,57,0.12)" }}
  />

          <div className="max-w-6xl mx-auto">
                    <div className="max-w-xl mb-12">
                        <span className="text-xl font-bold uppercase tracking-[0.18em] text-[#e44f39]">
                            How We Work
                        </span>
                        <h2 className="mt-3 text-2xl md:text-4xl font-extrabold leading-tight">
                            From audit to published post, every step is scheduled.
                        </h2>
                        <p className="mt-4 text-gray-400 text-[15px] leading-relaxed">
                            The same five-step cycle runs every month, so you always know
                            what's happening and when.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-6 top-3.5 bottom-3.5 w-px bg-gradient-to-b from-[#e44f39] to-transparent" />
                        <div className="space-y-10">
                            {process.map((step) => (
                                <div key={step.num} className="grid grid-cols-[48px_1fr] gap-6 relative">
                                    <div className="w-12 h-12 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center font-mono text-sm text-[#e44f39] font-semibold z-10">
                                        {step.num}
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-[17px] mb-1.5">{step.title}</h3>
                                        <p className="text-[13.5px] text-gray-400 leading-relaxed max-w-xl mb-2.5">
                                            {step.desc}
                                        </p>
                                        <div className="flex gap-3 flex-wrap">
                                            {step.chips.map((chip) => (
                                                <span
                                                    key={chip}
                                                    className="font-mono text-[11px] text-gray-500 border border-white/10 px-2.5 py-1 rounded-full"
                                                >
                                                    {chip}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
</section>

            

           
            {/* ================= FINAL CTA ================= */}
            <section className="px-6 md:px-12 py-20 bg-[#ffffff] border-t border-white/5 relative overflow-hidden">
                <div className="max-w-6xl mx-auto ">
                    <div className="relative overflow-hidden bg-[#121212] border border-white/10 rounded-3xl px-8 md:px-16 py-16 text-center">
                        <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 0%, rgba(248, 54, 86, 0.62), transparent 60%)"
                            }}
                        />
                        <h2 className="relative text-3xl md:text-4xl font-extrabold mb-4">
                            Let's see what your feed could be doing for you.
                        </h2>
                        <p className="relative text-gray-400 text-[15px] max-w-md mx-auto mb-8">
                            Tell us about your brand and goals — we'll put together a
                            platform plan and a sample content calendar, free.
                        </p>
                        <a
                            href="#"
                            className="relative inline-flex items-center gap-2 bg-[#e44f39] text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#e44f39]/30"
                        >
                            Request a free audit <FaArrowRight className="text-xs" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}