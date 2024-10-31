import Lottie from "lottie-react";
import person from "../../assets/lottie/person.json";
import SectionTitle from "../SectionTitle/SectionTitle";
const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row justify-center items-center pt-8 gap-x-5"
    >
      <div
        className="max-w-md min-w-[50px]"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <Lottie animationData={person} />
      </div>
      <div className="relative">
        <SectionTitle title="about me" />
        <p className="text-justify" data-aos="zoom-in" data-aos-delay="300">
          Hello, I’m Feysel Ansar – a dedicated Full Stack Developer passionate about building dynamic, user-friendly web applications. With a solid foundation in HTML, CSS, and JavaScript, and experience in frameworks like React on the frontend and Node.js on the backend, I bring ideas to life through clean, efficient code.

          I continuously expand my skills across the full stack, staying current with industry trends to create responsive, robust applications. I thrive in collaborative environments, working closely with clients and teams to turn their vision into reality. My mission is to contribute to impactful projects that blend great design with seamless functionality.
          
          Explore my work, and let’s build something incredible together!
                  </p>
      </div>
    </div>
  );
};

export default About;
