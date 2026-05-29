import React from "react";

const TeamSectionNew = () => {

const teamMembers = [

{
name:"Shub Kumar",
role:"Chief Executive Officer",
img:"/people/shubhsir.jpeg",
bio:"Visionary leader driving company growth and innovation."
},

{
name:"Himanshu Dubey",
role:"Python Fullstack Engineer",
img:"/people/himanshu.png",
bio:"Building scalable systems and backend architecture."
},

{
name:"Nikhil Sain",
role:"Business Development Head",
img:"/people/nikhil.jpeg",
bio:"Creating strategic partnerships and opportunities."
},

{
name:"Rajiv Bhatia",
role:"VP Strategic Partnerships",
img:"/people/p7.jpeg",
bio:"Strengthening long-term business relationships."
},

{
name:"Prateek Sah",
role:"Digital Marketing Lead",
img:"/people/prateek.png",
bio:"Driving online presence and brand visibility."
},

{
name:"Abhishek Sah",
role:"Junior Python Developer",
img:"/people/abhishek.png",
bio:"Developing APIs and backend features."
},

{
name:"Ritika Malhotra",
role:"Project Manager",
img:"/people/p5.jpeg",
bio:"Managing teams and project execution."
},

// New random people

{
name:"Sophia Carter",
role:"UI/UX Designer",
img:"/people/p1.jpeg",
bio:"Designing intuitive user experiences."
},

{
name:"Daniel Ross",
role:"Frontend Engineer",
img:"/people/p2.jpeg",
bio:"Building modern interactive interfaces."
},

{
name:"Emma Wilson",
role:"Cloud Engineer",
img:"/people/p3.jpeg",
bio:"Handling deployment and infrastructure."
},

{
name:"James Cooper",
role:"DevOps Engineer",
img:"/people/p4.jpeg",
bio:"Automating systems and workflows."
},

{
name:"Olivia Brown",
role:"AI Specialist",
img:"/people/p6.jpeg",
bio:"Developing intelligent AI systems."
},

{
name:"Lucas White",
role:"Mobile Developer",
img:"/people/p8.jpeg",
bio:"Building Android and iOS experiences."
},

{
name:"Mia Anderson",
role:"QA Engineer",
img:"/people/p9.jpeg",
bio:"Ensuring software quality and reliability."
},

];

return (

<section className="bg-[#0D1117] text-white py-32 relative overflow-hidden">

{/* background effects */}

<div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-500/10 blur-[180px]" />

<div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-blue-500/10 blur-[180px]" />

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-24">

<p className="tracking-[5px] text-gray-400 mb-6">

(OUR TEAM)

</p>

<h2 className="text-5xl md:text-7xl font-bold">

Meet The People Behind

<br/>

<span className="text-[#ff4a4a]">
Vsachi Tech
</span>

</h2>

</div>

<div className="space-y-28">

{teamMembers.map((member,index)=>(

<div
key={index}
className={`
grid 
md:grid-cols-2
gap-16
items-center
${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}
`}
>

{/* IMAGE */}

<div
className="
rounded-[35px]
overflow-hidden
bg-[#161B22]
border border-white/5
hover:scale-[1.02]
transition-all duration-700
"
>

<img
src={member.img}
alt={member.name}
className="
w-full
h-[450px]
object-contain
p-6
"
/>

</div>


{/* CONTENT */}

<div>

<p className="text-[#ff4a4a] mb-4">
TEAM MEMBER
</p>

<h3 className="text-5xl font-bold">

{member.name}

</h3>

<p className="text-xl text-gray-400 mt-4">

{member.role}

</p>

<p className="text-gray-500 leading-8 mt-8 max-w-lg">

{member.bio}

</p>

<div className="flex gap-4 mt-8">

<div className="
px-5 py-3
rounded-full
bg-[#1B2430]
text-sm
">
Team Player
</div>

<div className="
px-5 py-3
rounded-full
bg-[#1B2430]
text-sm
">
Innovation
</div>

</div>

</div>

</div>

))}

</div>

</div>

</section>

);

};

export default TeamSectionNew;