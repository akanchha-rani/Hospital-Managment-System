import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Plan Your Visit | Help in Health – Health Made Simple"}
        para={"At Help in Health, we are committed to being your trusted guide on the path to wellness. Our dedicated team provides expert healthcare solutions with a personalized touch, ensuring that your unique needs are met with care and compassion. Focused on your well-being, we strive to make your health journey seamless, supportive, and empowering."}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;