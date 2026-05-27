import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Portfolio() {

const recentProjects=[
"/portfolio1.jpg",
"/portfolio2.jpg",
"/portfolio3.jpg",
"/portfolio4.jpg"
];

const aiProjects=[
"/ai1.jpg",
"/ai2.jpg",
"/ai3.jpg",
"/ai4.jpg"
];

const webProjects=[
"/web1.jpg",
"/web2.jpg",
"/web3.jpg",
"/web4.jpg"
];

const engagementProjects=[
"/engage1.jpg",
"/engage2.jpg",
"/engage3.jpg",
"/engage4.jpg"
];

const Row = ({ title, data }) => (

<section className="mt-24">

<div className="flex items-center justify-between mb-8">

<h2
className="
text-3xl
md:text-4xl
font-black
tracking-[-0.03em]
"
>

{title}

</h2>


</div>


<motion.div

animate={{
x:["0%","-50%"]
}}

transition={{
duration:25,
repeat:Infinity,
ease:"linear"
}}

className="
flex
gap-6
w-max
"
>

{[...data,...data].map((image,index)=>(

<motion.div

key={index}

whileHover={{
y:-10,
scale:1.03
}}

className="
group
relative

min-w-[350px]
md:min-w-[420px]

rounded-[32px]
overflow-hidden

bg-[#141414]
border
border-white/10

hover:border-[#de6b58]/40

transition-all
duration-500
"
>

<div className="h-[260px] overflow-hidden">

<img
src={image}
alt=""

className="
w-full
h-full
object-cover

transition-all
duration-[3000ms]

group-hover:scale-110
"
/>

</div>


{/* overlay */}

<div
className="
absolute
inset-0

bg-gradient-to-t
from-black/80
via-transparent
to-transparent
"
/>


{/* content */}

<div
className="
absolute
bottom-0
left-0
p-8
"
>

<p
className="
text-[#de6b58]
text-sm
mb-2
"
>

VSACHI PROJECT

</p>

<h3
className="
text-2xl
font-bold
"
>

Project {((index%data.length)+1)}

</h3>

<p
className="
mt-2
text-gray-300
text-sm
"
>

Creative systems designed for growth.

</p>

</div>

</motion.div>

))}

</motion.div>

</section>

)

return (

<div className="bg-[#0b0b0b] text-white min-h-screen overflow-hidden">

{/* ===== LEFT GLOW ===== */}

<motion.div
animate={{
y:[0,-40,0],
x:[0,20,0]
}}
transition={{
duration:10,
repeat:Infinity,
ease:"easeInOut"
}}
className="
absolute
left-[-250px]
top-[20%]

w-[500px]
h-[500px]

rounded-full
bg-[#de6b58]/10
blur-[140px]
"
/>


{/* ===== RIGHT GLOW ===== */}

<motion.div
animate={{
y:[0,40,0],
x:[0,-20,0]
}}
transition={{
duration:12,
repeat:Infinity,
ease:"easeInOut"
}}
className="
absolute
right-[-250px]
top-[50%]

w-[450px]
h-[450px]

rounded-full
bg-[#de6b58]/8
blur-[140px]
"
/>


{/* ===== LEFT RING ===== */}

<motion.div
animate={{
rotate:[0,360]
}}
transition={{
duration:45,
repeat:Infinity,
ease:"linear"
}}
className="
absolute
left-[-300px]
top-[35%]

w-[650px]
h-[650px]

rounded-full
border-[2px]
border-[#de6b58]/10
"
/>


{/* ===== RIGHT RING ===== */}

<motion.div
animate={{
rotate:[360,0]
}}
transition={{
duration:60,
repeat:Infinity,
ease:"linear"
}}
className="
absolute
right-[-300px]
bottom-[15%]

w-[700px]
h-[700px]

rounded-full
border-[2px]
border-white/5
"
/>


{/* ===== FLOATING LIGHT PARTICLES ===== */}

{[...Array(8)].map((_,i)=>(

<motion.div
key={i}
animate={{
y:[0,-40,0],
opacity:[0.2,.7,.2]
}}
transition={{
duration:4+i,
repeat:Infinity
}}
className="
absolute
rounded-full
bg-[#de6b58]
"
style={{
width:`${4+i}px`,
height:`${4+i}px`,
left:`${10+i*10}%`,
top:`${20+(i*8)}%`
}}
/>

))}


{/* HERO */}

<section
className="
relative
py-32
px-6
"
>

<div
className="
absolute
top-[-200px]
right-[-150px]
w-[500px]
h-[500px]
rounded-full
bg-[#de6b58]/20
blur-[140px]
"
/>


<div className="max-w-7xl mx-auto">

<p
className="
uppercase
tracking-[0.35em]
text-sm
text-[#de6b58]
mb-6
"
>

( OUR PORTFOLIO )

</p>

<h1
className="
font-black
leading-[0.9]
tracking-[-0.05em]

text-[48px]
md:text-[90px]
"
>

Projects that build

<span className="block text-[#de6b58]">

digital momentum

</span>

</h1>

<p
className="
mt-8
max-w-2xl
text-gray-400
leading-[1.9]
"
>

Explore our work across AI systems,
web experiences, digital engagement
and growth solutions.

</p>

</div>

</section>



{/* FEATURED */}

<section className="max-w-7xl mx-auto px-6">

<div
className="
rounded-[40px]
overflow-hidden
bg-[#141414]
border
border-white/10
"
>

<div className="h-[550px] overflow-hidden">

<img
src="/featured.jpg"
alt=""
className="
w-full
h-full
object-cover
"
/>

</div>

<div className="p-10">

<p className="text-[#de6b58]">

FEATURED PROJECT

</p>

<h2
className="
text-4xl
font-black
mt-4
"
>

Digital Engagement System

</h2>

<p
className="
text-gray-400
mt-6
leading-[1.8]
"
>

Built a content ecosystem designed
to increase engagement and audience growth.

</p>

<div className="flex gap-6 mt-8">

<div>+220% Reach</div>
<div>+90% Engagement</div>
<div>+140% Retention</div>

</div>

</div>

</div>

</section>


<div className="max-w-7xl mx-auto px-6 pb-32">

<Row
title="Recent Projects"
data={recentProjects}
/>

<Row
title="AI Projects"
data={aiProjects}
/>

<Row
title="Web Development"
data={webProjects}
/>

<Row
title="Digital Engagement"
data={engagementProjects}
/>

</div>



{/* CTA */}

<section className="pb-28 px-6">

<div
className="
max-w-5xl
mx-auto
rounded-[40px]
bg-[#de6b58]
py-20
text-center
"
>

<h2
className="
text-5xl
font-black
"
>

Ready to create something amazing?

</h2>

<Link
to="/contact"
className="
inline-flex
mt-8
px-8
py-4
rounded-full
bg-white
text-black
font-semibold
"
>

Start Project →

</Link>

</div>

</section>

</div>

)

}

export default Portfolio