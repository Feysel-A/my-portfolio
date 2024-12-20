import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';
import myImg from '../../assets/feye.jpg';
import img from '../../assets/lottie/img.json';
import Button from '../Button/Button';
AOS.init();

const Banner = () => {
	return (
    <div
      id="home"
      className="flex flex-col-reverse sm:flex-row items-center gap-8 pt-3 md:pt-12"
    >
      <div className="max-w-lg sm:min-w-[300px]">
        <p
          className="text-2xl font-semibold flex items-center mb-3"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          Hello there
          {/* <img
						src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fc/512.gif'
						alt='👋'
						width='32'
						height='32'
					/> */}
          , I am
        </p>
        <h1
          data-aos="fade-right"
          className="text-4xl md:text-5xl font-extrabold flex flex-wrap gap-3"
        >
          <span>Feysel</span>{" "}
          <span className="flex">
            Ansar{" "}
            <img
              className="w-12"
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.gif"
              alt="✨"
            ></img>
          </span>
        </h1>
        <p
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-anchor-placement="bottom-bottom"
          className="mt-2 mb-6 text-xl flex gap-2 items-center"
        >
          {" "}
          <FiMonitor />
          <span>A Full-stack Developer</span>
        </p>

        {/* social contact */}
        <div className="mb-4 space-x-3">
          {/* facebook */}
          {/* <button
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-anchor-placement="bottom-bottom"
          > */}
            {/* <a target="_blank" rel="noreferrer" href="#">
              <FaFacebook
                size={30}
                className="border-black dark:border-white rounded-full active:scale-90 ease-in-out duration-200 text-blue-500 dark:text-white"
              />
            </a> */}
          {/* </button> */}
          {/* linkedin */}
          <button
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-anchor-placement="bottom-bottom"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/feysel-ansar-842b41292/"
            >
              <FaLinkedin
                size={30}
                className="border-black dark:border-white active:scale-90 ease-in-out duration-200 text-[#0072b1] dark:text-white"
              />
            </a>
          </button>
          {/* gmail */}
          <button
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-anchor-placement="bottom-bottom"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:ansarfeysel@gmail.com"
            >
              <SiGmail
                size={30}
                className=" border-black dark:border-white  active:scale-90 ease-in-out duration-200 text-[#BD150F] dark:text-white"
              />
            </a>
          </button>
          {/* github */}
          <button
            data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-anchor-placement="bottom-bottom"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Feysel-A"
            >
              <FaGithub
                size={30}
                className="border-black dark:border-white active:scale-90 ease-in-out duration-200 text-[#171515] dark:text-white"
              />
            </a>
          </button>
          {/* youtube */}
          {/* <button
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-anchor-placement="bottom-bottom"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://youtube.com/@goursahajoy"
            >
              <FaYoutube
                size={30}
                className="active:scale-90 ease-in-out duration-200 text-[#f00] dark:text-white"
              />
            </a>
          </button> */}
        </div>
        <div data-aos="flip-up" data-aos-delay="800">
          <Button />
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="500"
        className="max-w-[350px]  p-6 relative"
      >
        <img
          className="min-w-[260px] min-h-[270px] w-full p-2 rounded-full shadow-md shadow-slate-800"
          src={myImg}
          alt="Gour Saha Joy"
        />
        {/* <div
          className="myImg max-w-md min-w-[150px] absolute -bottom-14 md:-bottom-5 -right-44 md:-right-56"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <Lottie className="w-full" animationData={img} />
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
