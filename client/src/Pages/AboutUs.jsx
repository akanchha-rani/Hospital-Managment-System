import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Get to Know Us | Help in Health"}
        para={"At Help in Health, we believe that everyone deserves access to trustworthy healthcare information and support. Our mission is to empower individuals with expert guidance, practical wellness tips, and reliable medical insights to help them make informed health choices. With a compassionate and knowledgeable team, we are dedicated to simplifying healthcare and promoting overall well-being. Whether you need advice on preventive care, fitness, nutrition, or general health, we’re here to guide you every step of the way. Your health is our priority, and we’re committed to helping you live your best life."}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;