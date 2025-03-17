import React from "react";
import { motion } from "framer-motion";
import F2 from "../assets/F2.png";
import F3 from "../assets/F3.png";
import F4 from "../assets/F4.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeIn", duration: 0.9 },
  },
};

const blockVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const textBlockVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
  },
};

const FeatureHeadline = () => {
  return (
    <div className="text-center max-w-[75rem]">
      <h1 className="text-6xl font-serif justify-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-200">
        What we offer
      </h1>
      <motion.div
        className="text-2xl max-w-3xl font-serif py-6 justify-center gap-2 text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Discover the tools and features designed to enhance your competitive
        coding journey.
      </motion.div>
    </div>
  );
};

// Feature Block Component
const FeatureBlock = ({ title, description, image, reverse }) => {
  return (
    <motion.div
      className={`w-[75rem] h-[32rem] rounded-4xl flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } shadow-lg bg-[#121212] text-white`}
      variants={blockVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="w-[50%] px-16 py-10 flex flex-col justify-center items-start"
        variants={textBlockVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-3xl font-serif pb-6 ">{title}</p>
        <p className="text-lg font-sans leading-relaxed text-gray-300">{description}</p>
      </motion.div>
      <motion.div
        className="flex justify-center items-center w-[50%] px-8"
        variants={blockVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src={image} alt={title} className="w-[90%] h-[60%] rounded-lg" />
      </motion.div>
    </motion.div>
  );
};

// Main Features Component
const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black py-20">
      <FeatureHeadline />
      <div className="flex flex-col justify-center items-center gap-16">
        <FeatureBlock
          title="Comprehensive Event Calendar"
          description="Stay updated with upcoming competitions through our intuitive event scheduler. Organizers can effortlessly post new events, while participants can track and register for hackathons, DSA contests, CP challenges, and ML competitions all in one place."
          image={F4}
          reverse={true}
        />
        <FeatureBlock
          title="Incentive System & Rewards Marketplace"
          description="Earn digital currency by participating in and winning competitions. Redeem your earned points for exclusive merchandise, tech gadgets, and special perks that recognize your achievements and skills."
          image={F3}
          reverse={false}
        />
        <FeatureBlock
          title="Real-Time Coding Duels"
          description="Challenge your peers to 1v1 coding battles focused on data structures and algorithms. Compete in real-time, solve problems under pressure, and climb the competitive leaderboard to showcase your technical prowess."
          image={F2}
          reverse={true}
        />
      </div>
    </div>
  );
};

export default Features;
