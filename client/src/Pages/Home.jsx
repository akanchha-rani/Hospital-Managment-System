import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Help in Health – Your Wellness, Our Priority"
        }
        para={"Help in Health is your trusted partner in wellness, dedicated to providing compassionate and expert healthcare solutions. Our skilled team is committed to delivering personalized care tailored to your unique needs. With a focus on your well-being, we strive to make your journey to optimal health smooth, supportive, and fulfilling."}
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;