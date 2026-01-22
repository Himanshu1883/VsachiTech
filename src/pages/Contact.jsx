import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Scroll from '../components/ui/Scroll';
import usePageTitle from '../components/hooks/usePageTitle';
function Contact() {
    usePageTitle(
    "Contact Us"
  );
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResultMessage("");

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setResultMessage("Message sent successfully! We will contact you soon.");
      setSuccess(true);
      e.target.reset();
      setAgreed(false);
    } else {
      setResultMessage("Something went wrong. Please try again.");
      setSuccess(false);
    }

  };
  return (
    <div className='bg-white'>
      <section className="relative py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            (<Link to="/" className="hover:text-red-500 transition-colors">HOME</Link> - <span className="font-semibold">CONTACT</span>)
          </p>
        </div>

        {/* Team Image with Gradient Effect */}
        <div className="mt-12 mb-10 pt-10`">
          <img
            src="contactus1.jpg"
            alt="contact"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
        <Scroll/>
        
      </section>
      
      <section className="py-10">
        <div className="mx-auto w-[90%] h-px bg-black/80"></div>
      </section>
      <section className="pb-40 pt-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-start">

            {/* LEFT */}
            <div className="relative">
              {/* Accent line */}
              <span className="absolute -left-6 top-2 h-12 w-[2px] bg-red-500" />

              <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">
                (OUR CONTACT INFO)
              </p>

              <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
                Get in Touch <br />
                <span className="text-red-500">
                  With Our Team
                </span>
              </h2>

              <p className="mt-6 text-gray-600 max-w-md">
                Have a project in mind or just want to say hello?
                We’d love to hear from you.
              </p>
            </div>

            {/* RIGHT */}
            <div className="space-y-10 px-5">

              {/* LOCATION */}
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Location
                </p>
                <p className="text-xl font-semibold text-gray-900">
                  Delhi, India
                </p>
              </div>

              {/* EMAIL */}
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Contact
                </p>
                <span
                  
                  className="text-xl font-semibold text-gray-900 "
                >
                  info@vsachitech.com
                </span>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <a
                  href="#project-form"
                  className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide uppercase
               text-gray-900 border-b border-gray-900 pb-2
               hover:text-red-500 hover:border-red-500 transition-all"
                >
                  Start a Project
                  <span className="text-lg">→</span>
                </a>
              </div>


            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-[90%] h-px bg-black/80"></div>
      </section>
      <section>
        <div className="flex justify-center items-center">
          <img
            src="map.png"
            alt="map"
            className="py-32 p-10"
          />
        </div>
      </section>
      <section id="project-form" className="bg-gray-100 text-black py-20 px-6 md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-extrabold text-5xl md:text-6xl leading-tight">
            Lets Bring Your Vision <br />
            <span className="text-red-500">Into Reality</span>
          </h1>

          <p className="mt-6 text-gray-700 text-sm">
            Your email address will not be published.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-14 text-left max-w-3xl mx-auto space-y-8"
          >
            {/* Name */}
            <div>
              <input
                required
                id="name"
                name="name"
                type="text"
                className="w-full border-b border-gray-700 bg-transparent py-2 text-lg placeholder-gray-500 focus:outline-none focus:border-red-500"
                placeholder="What's your name?"
              />
            </div>

            {/* Email */}
            <div>
              <input
                required
                id="email"
                name="email"
                type="email"
                className="w-full border-b border-gray-700 bg-transparent py-2 text-lg placeholder-gray-500 focus:outline-none focus:border-red-500"
                placeholder="Your email address"
              />
            </div>

            {/* Project Info Heading */}
            <h2 className="font-extrabold text-2xl mb-4 text-center">
              Tell us about your project
            </h2>

            {/* Project Options */}
            <div className="space-y-2 pl-6 text-lg">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="projectType"
                  value="newWebsite"
                  className="form-radio text-red-500"
                  required
                />
                <span>I’m looking for a new website development project.</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="projectType"
                  value="redesign"
                  className="form-radio text-red-500"
                />
                <span>I'm looking for a website design/re-design project.</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="projectType"
                  value="consultation"
                  className="form-radio text-red-500"
                />
                <span>I need your consultation about our existing website.</span>
              </label>
            </div>

            {/* Budget */}
            <div>
              <label className="block mb-1 text-lg font-medium" htmlFor="budget">
                Your Budget
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full border-b border-gray-700 bg-transparent py-2 text-lg focus:outline-none focus:border-red-500"
                defaultValue=""
              >
                <option disabled value="">
                  Select your budget
                </option>
                <option value="under1">Under $100</option>
                <option value="5to1k">$5,00 - $1000</option>
                <option value="1kto5k">$1,000 - $5,000</option>
                <option value="5kplus">Above $5,000</option>
              </select>
            </div>

            {/* Phone */}
            <div>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full border-b border-gray-700 bg-transparent py-2 text-lg placeholder-gray-500 focus:outline-none focus:border-red-500"
                placeholder="Phone (Optional)"
              />
            </div>

            {/* Project Description */}
            <div>
              <label
                className="block mb-1 text-lg font-medium"
                htmlFor="description"
              >
                A brief description about your project/request/consultation
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full border border-gray-700 bg-transparent p-3 text-lg placeholder-gray-500 focus:outline-none focus:border-red-500 resize-none"
                placeholder="Write your message here..."
              />
            </div>

            {/* Terms */}
            <div className="flex items-center space-x-3">
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="form-checkbox h-5 w-5 text-red-500"
                required
              />
              <label htmlFor="terms" className="text-base select-none">
                I am bound by the terms of the Service and I accept the{" "}
                <Link to={"/policies"} className="text-red-500 underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Result Message */}
            {resultMessage && (
              <p
                className={`mt-4 text-center ${success ? "text-green-600" : "text-red-600"
                  }`}
              >
                {resultMessage}
              </p>
            )}


            {/* Submit Button */}
            <div className="text-center mt-8">
              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white rounded-full px-6 py-4 text-m tracking-wide hover:bg-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "— send message"}
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  )
}

export default Contact