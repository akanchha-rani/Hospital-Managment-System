import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At Help in Health, we are passionate about making healthcare accessible, reliable, and compassionate. Our mission is to empower individuals with the knowledge and support they need to lead healthier lives.With a team of dedicated professionals and innovative solutions, we strive to bridge the gap between medical expertise and community well-being. Whether it’s guidance on wellness, preventive care, or expert health insights, we are here to help you every step of the way.Your health is our priority, and together, we make well-being a way of life!
          </p>
          <p>At Help in Health, we believe that good health is the foundation of a happy life. Our mission is to provide reliable, easy-to-understand healthcare guidance that empowers you to take control of your well-being. Whether you’re looking for expert advice, wellness tips, or medical insights, we are here to support you on your journey to a healthier future.Because when it comes to health, every step matters!</p>
          <p>
          Help in Health is dedicated to providing comprehensive healthcare information and support tailored to your needs. Our team of experts and professionals work tirelessly to bring you trusted health insights, preventive care strategies, and wellness solutions. We are committed to ensuring that everyone has access to the knowledge they need to make informed health decisions.Your health, your choice—let us help you make the best one.
          </p>
          <p>Welcome to Help in Health, where we make health and wellness simple, accessible, and stress-free! We’re here to answer your questions, offer expert advice, and help you navigate your journey toward a healthier you. From fitness tips to medical guidance, we’ve got you covered.Because taking care of yourself should be easy—and we’re here to help!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;