import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Policies() {
  return (
    <section className="bg-white text-black min-h-screen">
        <section className="relative bg-white py-20">
                <div className="container mx-auto px-6 text-center">
                   <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Policies & Legal
        </motion.h1>
                    <p className="text-gray-600 text-sm md:text-base">
            (<Link to="/" className="hover:text-red-500 transition-colors">HOME</Link> - <span className="font-semibold">Policies</span>)
          </p>
                    
       
                </div>
                
                {/* Team Image with Gradient Effect */}
                <div className="mt-12">
                    <img
                        src="policy.jpg"
                        alt="policy"
                        className="w-full h-64 md:h-96 object-cover"
                    />
                </div>
            </section>
            <section className="py-10">
        <div className="mx-auto w-[90%] h-px bg-black/80"></div>
      </section>
      

      <div className="container mx-auto px-8 md:px-16 lg:px-24 pb-32 space-y-32">

        <PolicySection
          title="Privacy Policy"
          content={[
            "CloudCoder AI respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.",
            "We collect only the information necessary to provide our services, including name, email address, and project-related details. We never sell or misuse your data.",
            "All information shared with us is stored securely and accessed only by authorized personnel."
          ]}
        />

        <PolicySection
          title="Cookie Policy"
          content={[
            "Our website uses cookies to enhance your browsing experience and analyze website performance.",
            "Cookies help us understand how users interact with our website so we can improve usability and content.",
            "You may disable cookies through your browser settings, though some features of the site may not function properly."
          ]}
        />

        <PolicySection
          title="Web Dev/Design Policy"
          content={[
            "All designs and code created by CloudCoder AI are tailored specifically for each client.",
            "Ownership of the final deliverables is transferred upon full payment, unless otherwise agreed.",
            "We reserve the right to showcase completed projects in our portfolio unless confidentiality is requested."
          ]}
        />

      </div>
    </section>
  );
}

function PolicySection({ title, content }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-4xl"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        {title}
      </h2>
      <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
        {content.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </motion.div>
  );
}
