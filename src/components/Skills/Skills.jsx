import Lottie from 'lottie-react';
import skillsImg from '../../assets/lottie/skills.json';
import bootstrap from '../../assets/skills/bootstrap.png';
import chatgpt from '../../assets/skills/chatgpt.png';
import chrome from '../../assets/skills/chrome.png';
import css from '../../assets/skills/css.png';
import express from '../../assets/skills/express.png';
import firebase from '../../assets/skills/firebase.png';
import github from '../../assets/skills/github.png';
import html from '../../assets/skills/html-5.png';
import js from '../../assets/skills/js.png';
import mysql from '../../assets/skills/database.png';
import netlify from '../../assets/skills/netlify.png';
import next from '../../assets/skills/next.png';
import nodejs from '../../assets/skills/nodejs.png';
import npm from '../../assets/skills/npm.png';
import react from '../../assets/skills/react.png';
import redux from '../../assets/skills/redux.png';
import jQuery from '../../assets/skills/social.png';
import tailwind from '../../assets/skills/tailwind.png';
import vercel from '../../assets/skills/vercel.png';
import vite from '../../assets/skills/vite.svg';
import SectionTitle from '../SectionTitle/SectionTitle';
import SkillImg from './SkillImg';
const Skills = () => {
	return (
    <div
      id="skills"
      className="flex flex-col lg:flex-row justify-center items-center gap-x-5 pt-3 lg:pt-16"
    >
      <div
        className="max-w-md md:min-w-[440px]"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <Lottie className="w-full" animationData={skillsImg} />
      </div>
      <div className="relative">
        <SectionTitle title="skills and tools" />
        <div className="flex gap-5 flex-wrap justify-center">
          <SkillImg path={html} name="html" pars={100} />
          <SkillImg path={css} name="css" pars={100} />
          <SkillImg path={bootstrap} name="bootstrap" pars={100} />
          {/* <SkillImg path={tailwind} name="tailwind" pars={85} /> */}
          {/* <SkillImg path={sass} name="sass" pars={50} /> */}
          <SkillImg path={js} name="javascript" pars={100} />
          <SkillImg path={jQuery} name="jQuery" pars={100} />
          <SkillImg path={react} name="react.js" pars={100} />
          <SkillImg path={vite} name="vite" pars={100} />
          <SkillImg path={nodejs} name="node.js" pars={100} />
          {/* <SkillImg path={next} name="next.js" pars={60} /> */}
          {/* <SkillImg path={redux} name="redux" pars={60} /> */}

          <SkillImg path={express} name="express" pars={100} />
          <SkillImg path={mysql} name="mysql" pars={100} />
          <SkillImg path={firebase} name="firebase" pars={100} />
          <SkillImg path={github} name="github" pars={100} />
          <SkillImg path={netlify} name="netlify" pars={100} />
          <SkillImg path={npm} name="npm" pars={100} />
          <SkillImg path={chrome} name="chrome" pars={100} />
          <SkillImg path={chatgpt} name="chatgpt" pars={100} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
