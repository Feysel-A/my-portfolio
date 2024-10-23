import SectionTitle from "../SectionTitle/SectionTitle";
import apple from '../../assets/myProject/Apple.jpg'
import netflix from '../../assets/myProject/Netflixjpg.jpg'
import amazon from '../../assets/myProject/Amazon.jpg'
import forum from '../../assets/myProject/Forum.jpg'
import SingleProject from "./SingleProject";

const Projects = () => {
   return (
     <div id="projects" className="pt-32 relative">
       <SectionTitle title="projects" />
       <div className="flex justify-center md:justify-around flex-wrap gap-8">
         <SingleProject
           imgPath={apple}
           title="Apple Clone Project"
           desc="A fully responsive website replicating the design and layout of the Apple product page. Users can browse product details with smooth animations and a clean user interface."
           client="https://github.com/Feysel-A/apple-clone"
           liveLink="https://app1e-clone-feysel.netlify.app/"
           tech="React.js, CSS, Axios, Bootstrap, etc."
           feature1="Responsive layout and seamless product page transitions."
           feature2="Data-driven product listings with mapped arrays from a database."
           feature3="Optimized for mobile and desktop viewing with smooth animations."
         />
         <SingleProject
           imgPath={netflix}
           title="Netflix Clone Project"
           desc="A clone of the popular streaming service, providing a platform to browse and watch movies and TV shows with a   clean, user-friendly interface."
           client="https://github.com/Feysel-A/Netflix-Clone-Project"
           liveLink="https://clone-by-feysel.netlify.app/"
           tech="React, React Router, CSS, Firebase, Axios, TMDB API"
           feature1="Browse and stream movie content fetched from the TMDB API."
         />
         <SingleProject
           imgPath={amazon}
           title="Amazon Clone"
           desc="An Amazon e-commerce clone with a shopping cart and payment integration."
           client="https://github.com/Feysel-A/Amazon-clone"
           server="https://github.com/Feysel-A/amazon-backend-deploy-"
           liveLink="https://amazone-clone-by-feysel.netlify.app/"
           tech="React, React Router, Firebase, Stripe API, Material UI, Redux, Axios, Express"
           feature1="Add items to the cart, update, and remove them."
           feature2="User authentication with Firebase and protected routes."
           feature3="Stripe payment integration in test mode."
         />
         <SingleProject
           imgPath={forum}
           title="Evangadi Forum"
           desc="A forum platform for users to ask and answer questions."
           client="https://github.com/Feysel-A/Evangadi-Forum"
           server="https://github.com/Feysel-A/Evangadi-Forum"
           liveLink="https://evangadi-forum-by-feysel.netlify.app/" // Replace with your actual live link if applicable
           tech="React, Node.js, Express, MySQL, CSS, JWT, Firebase"
           feature1="Email and password authentication"
           feature2="Question and answer posting system"
           feature3="Responsive design for all devices"
         />
         {/* <SingleProject
           imgPath={carsDoc}
           title="Car's Doctor"
           desc="A website of a car's garage with booking system."
           client="https://github.com/gsjoy24/cars-doctor-client"
           server="https://github.com/gsjoy24/cars-doctor-server"
           liveLink="https://joys-cars-doctor.web.app/"
           tech="React, React-router Tailwind CSS, DaisyUl, Sweetalert_2, Firebase."
           feature1="Service booking system."
           feature2="Firebase authentication system."
           feature3="Responsive for all devices"
         />
         <SingleProject
           imgPath={penguin}
           title="Penguin Fashion"
           desc="An ecommerce landing page"
           client="https://github.com/gsjoy24/penguin-fashion"
           liveLink="https://gsjoy24.github.io/penguin-fashion/"
           tech="HTML, CSS, Tailwind CSS"
           feature1="Well designed."
           feature2="Responsive for all devices"
         />
         <SingleProject
           imgPath={convention}
           title="Convention Center"
           desc="An convention center landing page"
           client="https://github.com/gsjoy24/joys-convention-center"
           liveLink="https://gsjoy24.github.io/joys-convention-center/"
           tech="HTML, CSS, Bootstrap 5, font-awesome icons"
           feature1="Well designed."
           feature2="Responsive for all devices"
         />
         <SingleProject
           imgPath={hireMe}
           title="Hire Me"
           desc="A job portal website."
           client="https://github.com/gsjoy24/hire-me"
           liveLink="https://joys-hire-me.netlify.app/"
           tech="HTML, Tailwind CSS, Recharts, font-awesome icons"
           feature1="Well designed."
           feature2="Responsive for all devices"
         />
         <SingleProject
           imgPath={donate}
           title="Donate Now"
           desc="An organization landing page"
           client="https://github.com/gsjoy24/donate-now"
           liveLink="https://gsjoy24.github.io/donate-now/"
           tech="HTML and CSS"
           feature1="Well designed."
           feature2="Responsive for all devices"
         /> */}
       </div>
     </div>
   );
};

export default Projects;