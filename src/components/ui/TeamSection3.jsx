import React from "react";

const TeamSection3 = () => {

const teamMembers=[

{
name:"Shub Kumar",
role:"Chief Executive Officer",
img:"/people/shubhsir.jpeg",
bio:"Visionary leader driving innovation and long-term company growth."
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
bio:"Creating strong strategic partnerships."
},

{
name:"Rajiv Bhatia",
role:"VP Strategic Partnerships",
img:"/people/p7.jpeg",
bio:"Building meaningful business collaborations."
},

{
name:"Ritika Malhotra",
role:"Project Manager",
img:"/people/p5.jpeg",
bio:"Managing execution and delivery."
},

{
name:"Sophia Carter",
role:"UI Designer",
img:"/people/p1.jpeg",
bio:"Creating intuitive designs."
},

{
name:"Daniel Ross",
role:"Frontend Engineer",
img:"/people/p2.jpeg",
bio:"Building responsive applications."
},

{
name:"Emma Wilson",
role:"Cloud Engineer",
img:"/people/p3.jpeg",
bio:"Managing cloud infrastructure."
},

{
name:"James Cooper",
role:"DevOps Engineer",
img:"/people/p4.jpeg",
bio:"Automating deployment workflows."
},

{
name:"Olivia Brown",
role:"AI Engineer",
img:"/people/p6.jpeg",
bio:"Building intelligent systems."
},

{
name:"Lucas White",
role:"Mobile Developer",
img:"/people/p8.jpeg",
bio:"Creating Android experiences."
},

{
name:"Mia Anderson",
role:"QA Engineer",
img:"/people/p9.jpeg",
bio:"Ensuring product quality."
}

];

return(

<section className="relative bg-[#07111f] py-28 overflow-hidden text-white">

<div className="absolute aurora1"></div>
<div className="absolute aurora2"></div>
<div className="absolute aurora3"></div>

<div className="relative max-w-full px-6 z-10">

{/* Heading */}

<div className="text-center mb-28">

<p className="tracking-[6px] text-gray-500 mb-5">

(OUR TEAM)

</p>

<h2 className="text-5xl md:text-7xl font-bold">

Meet The People Behind

<br/>

<span className="text-[#ff4d4d]">

Vsachi Tech

</span>

</h2>

</div>


{/* First Member */}

<div
className="
grid
md:grid-cols-2
gap-16
items-center
mb-32
">

<div
className="
memberCard
mx-auto
md:ml-auto
md:mr-8
w-[500px]
h-[500px]
"
>

<img
src={teamMembers[0].img}
alt=""
className="
w-full
h-full
object-contain
bg-transparent
"
/>

</div>

<div>

<h3 className="text-5xl font-bold">

{teamMembers[0].name}

</h3>

<p className="mt-4 text-[#ff4d4d]">

{teamMembers[0].role}

</p>

<p className="mt-8 text-gray-400 leading-8">

{teamMembers[0].bio}

</p>

</div>

</div>


{/* Remaining */}

<div className="space-y-32">

{

Array.from(
{length:Math.ceil((teamMembers.length-1)/2)},
(_,i)=>{

const member1=teamMembers[i*2+1]
const member2=teamMembers[i*2+2]

return(

<div
key={i}
className="
grid
lg:grid-cols-[1fr_auto_1fr]
gap-10
items-center
">

<div className="infoCard">

<h3 className="text-3xl font-bold">

{member1?.name}

</h3>

<p className="text-[#ff4d4d] mt-4">

{member1?.role}

</p>

<p className="mt-6 text-gray-400">

{member1?.bio}

</p>

</div>


{/* Images */}

<div
className="
flex
justify-center
items-center
gap-6
"
>

{member1&&(

<div className="memberCard imageFloat">

<img
src={member1.img}
alt=""
className="
w-full
h-full
object-contain
"
/>

</div>

)}

{member2&&(

<div className="memberCard imageFloat">

<img
src={member2.img}
alt=""
className="
w-full
h-full
object-contain
"
/>

</div>

)}

</div>


<div className="infoCard">

<h3 className="text-3xl font-bold">

{member2?.name}

</h3>

<p className="text-[#ff4d4d] mt-4">

{member2?.role}

</p>

<p className="mt-6 text-gray-400">

{member2?.bio}

</p>

</div>

</div>

)

})

}

</div>

</div>


<style jsx>{`

.memberCard{

height:360px;
width:360px;

background:#07111f;   /* same as page background */

border:none;
outline:none;
box-shadow:none;

border-radius:30px;

overflow:hidden;

display:flex;

align-items:center;

justify-content:center;

transition:.6s;

flex-shrink:0;

}
.memberCard:hover{

transform:
translateY(-10px)
scale(1.03);

}

.infoCard{

padding:35px;

background:#111827;

border-radius:30px;

}

.imageFloat{

animation:floatCard 4s ease infinite;

}

@keyframes floatCard{

0%{
transform:translateY(0)
}

50%{
transform:translateY(-10px)
}

100%{
transform:translateY(0)
}

}

.aurora1{

top:-150px;
left:-150px;
height:500px;
width:500px;
background:#ff4d4d15;
filter:blur(150px);
position:absolute;
border-radius:50%;
animation:move1 18s infinite alternate;

}

.aurora2{

right:-100px;
top:20%;
height:450px;
width:450px;
background:#4d7dff15;
filter:blur(150px);
position:absolute;
border-radius:50%;
animation:move2 20s infinite alternate;

}

.aurora3{

bottom:-150px;
left:30%;
height:450px;
width:450px;
background:#8b5cf615;
filter:blur(150px);
position:absolute;
border-radius:50%;
animation:move3 15s infinite alternate;

}

@keyframes move1{
to{transform:translate(100px,50px)}
}

@keyframes move2{
to{transform:translate(-100px,-50px)}
}

@keyframes move3{
to{transform:translate(50px,-100px)}
}

`}</style>

</section>

)

}

export default TeamSection3