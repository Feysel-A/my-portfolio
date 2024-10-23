import './Button.css';
import myResume from  '../../assets/feysel-resume.pdf'
import { BiCloudDownload } from 'react-icons/bi'
const Button = () => {
   return (
      <a href={myResume} target='_blank'><button className="button">
         <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text flex gap-2 items-center">
               <BiCloudDownload size={25} /> Resume
            </span>
         </span>
      </button>
      </a>
   );
};

export default Button;