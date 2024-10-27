import React from "react";
import Header from "./component/header/Header.jsx";
import Hero from "./component/header/hero-section/Hero.jsx";
import "./App.css";
import Hero_buttom from "./component/hero-buttom/Hero_buttom.jsx";
import Service from "./component/service-section/Service.jsx";
import Work from "./component/Recent-work/Work.jsx";
import "./data.js"
import Education from "./component/educations/Education.jsx";
import Skill from "./component/Skill/Skill.jsx";
import Testimonials from "./component/Testimonials/Testimonials.jsx";
import Blog from "./component/blog/Blog.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Hero_buttom />
      <Service />
      <Work />
      <Education />
      <Skill />
      <Testimonials />
      <Blog />

    </div>

  );
};

export default App;
