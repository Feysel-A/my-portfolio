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
          Hello, and welcome to my portfolio website! I'm Feysel Ansar, a
          passionate full stack developer focused on crafting dynamic,
          user-friendly web experiences. With a solid foundation in HTML, CSS,
          JavaScript, and a growing expertise in modern frameworks, I turn
          creative ideas into reality through clean and efficient code. I'm
          always expanding my skills and staying current with industry trends to
          build responsive and modern websites. I enjoy working collaboratively
          with clients and teams to bring their vision to life. My mission is to
          contribute to projects that have a positive impact. Explore my work,
          and let's create something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
