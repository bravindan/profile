import { TiAdjustContrast } from "react-icons/ti";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub
} from "react-icons/ai";
import displaypic from "./images/brav.jpeg";
import code from "./images/code.png";
import exp from "./images/exp.png";
import design from "./images/design.png";
import phone from "./images/phone.svg"
import whatsapp from "./images/whatsapp.svg"
import email from "./images/email.svg"
import { useState } from "react";
import {FaWhatsapp} from 'react-icons/fa'
import './index.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  // if(darkMode){
  //   localStorage.setItem("!darkMode","dark");
  // }else{
  //   localStorage.getItem("!darkMode");
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="px-10 bg-white md:px-20 lg:px-40 dark:bg-black">
        <section className="min-h-screen ">
          <nav className="flex justify-between py-10 mb-12 ">
            <h1 className="text-3xl font-semibold dark:text-gray-400 font-lobster ">
              Portfolio
            </h1>
            <ul className="flex items-center">
              <li>
                <TiAdjustContrast
                  onClick={() => setDarkMode(!darkMode)
                  }
                  className="text-2xl cursor-pointer dark:text-gray-400 "
                />
              </li>
              <li>
                <a
                  className="px-4 py-2 ml-8 text-white rounded-md bg-gradient-to-r from-cyan-500 to-teal-500"
                  href="/public/cv.pdf"
                  target="_blank"
                  download
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-10 text-center">
            <h2 className="py-2 text-3xl font-medium text-teal-600 md:text-6xl ">
              Bravin Daniel
            </h2>
            <h3 className="py-2 text-xl md:text-3xl dark:text-gray-400">
              Developer & Designer
            </h3>

            <p className="py-5 leading-8 text-gray-800 text-md md:text-xl dark:text-gray-400">
              I design and develop software. I'm available for freelance works,
              employment and collaboration to work on any given project.
            </p>
          </div>
          <div className="flex justify-center gap-12 py-2 text-3xl text-gray-700 dark:text-teal-600 cursor-pointer">
         <AiFillTwitterCircle
             onClick={(event) =>
               (window.location.href = "https://twitter.com/Bravin_Dan")
             }
           />
           <AiFillInstagram onClick={(event) => (window.location.href = "https://www.instagram.com/brav_dan/")} />
           <AiFillLinkedin
             onClick={(event) =>
               (window.location.href =
                 "https://www.linkedin.com/in/bravin-daniel-bw")
             }
           />
           <AiFillYoutube
             onClick={(event) =>
               (window.location.href =
                 "https://youtube.com/channel/UC6AZdR8ngHeT7oy6T8_g4qQ")
             }
           />
           <AiFillGithub onClick={(event)=>(window.location.href="https://github.com/bravindan")}/>
         </div>
        
          <div className="relative mx-auto mt-20 mx w-80 h-80 md:h-96 md:w-96">
            {/* <img src={process.env.PUBLIC_URL+"brav.jpeg"} alt='mypic'/> */}
            <img className="rounded-full" src={displaypic} alt="mypic" />
          </div>
        </section>
        <section>
          <div className="py-10">
            <h3 className="py-1 text-3xl text-center mx-auto dark:text-gray-400">
              Services I offer
            </h3>
            <p className="py-2 mx-auto leading-8 text-gray-80 text-md max-w-lg dark:text-gray-400">
              I have offered services as a freelancer for{" "}
              <span className="text-teal-500">Tephanic Inc</span> startup and{" "}
              <span className="text-teal-500">Enockhan Hospital.</span> I have
              also collaborated with some talented developers to work on some
              projects like{" "}
              <span className="text-teal-500">
                <a href="https://github.com/PentaUI/">Penta</a>
              </span>{" "}
              and{" "}
              <span className="text-teal-500">
                <a href="https://github.com/kathukyabrian/gigs-connect-client">Gigsconnect</a>
              </span>{" "}
              among others.
            </p>
            <p className="py-2 mx-auto leading-8 text-gray-80 text-md max-w-lg dark:text-gray-400">
              I offer services such as programming, designing, system analysis
              and design, quality assuarance and project management
            </p>
          </div>
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
            <div className="p-10 my-10 text-center shadow-lg rounded-xl dark:text-gray-400 dark:shadow-slate-700 dark:shadow-md hover:-translate-y-1 hover:scale-110 duration-300 ">
              <img
                className="mx-auto"
                src={design}
                alt=""
                width={100}
                height={100}
              />
              <h3 className="py-1 pt-8 pb-2 text-lg font-medium ">Designs</h3>
              <p className="py-2">
                Creating designs that follows core usability principles and
                suits customer's needs{" "}
              </p>
              <h4 className="py-4 text-teal-600">Design Tools</h4>
              <p className="py-1 text-gray-800 dark:text-gray-400">Canva</p>
              <p className="py-1 text-gray-800 dark:text-gray-400">Figma</p>
              <p className="py-1 text-gray-800 dark:text-gray-400">
                Corel Draw
              </p>
            </div>
            <div className="p-10 my-10 text-center shadow-lg rounded-xl dark:text-gray-400 dark:shadow-slate-700 dark:shadow-md hover:-translate-y-1 hover:scale-110 duration-300 ">
              <img
                className="mx-auto"
                src={code}
                alt=""
                width={100}
                height={100}
              />
              <h3 className="py-1 pt-8 pb-2 text-lg font-medium">Code</h3>
              <p className="py-2">
                I have good knowledge of SDLC and programming{" "}
              </p>
              <h4 className="py-4 text-teal-600">Technologies</h4>
              <p className="py-1 text-gray-800 dark:text-gray-400">Java</p>
              <p className="py-1 text-gray-800 dark:text-gray-400">
                JavaScript(..React)
              </p>
              <p className="py-1 text-gray-800 dark:text-gray-400">Python</p>
              <p className="py-1 text-gray-800 dark:text-gray-400">
                HTML, CSS, Bootstrap & Tailwind CSS
              </p>
            </div>
            <div className="p-10 my-10 text-center shadow-lg rounded-xl dark:text-gray-400 dark:shadow-slate-700 dark:shadow-md hover:-translate-y-1 hover:scale-110 duration-300 ">
              <img
                className="mx-auto"
                src={exp}
                alt=""
                width={100}
                height={100}
              />
              {/* MODIFY: */}
              <h3 className="py-1 pt-8 pb-2 text-lg font-medium">Expertise</h3>
              <p className="py-2">
                I have skills in web development, UI/UX design and MySQL
                database designs and implementation{" "}
              </p>
              <h4 className="py-4 text-teal-600">Major areas</h4>
              <p className="py-1 text-gray-800 dark:text-gray-400">
                Web development
              </p>
              <p className="py-1 text-gray-800 dark:text-gray-400">
                UI/UX design
              </p>
              <p className="py-1 text-gray-800 dark:text-gray-400">
                Project Management
              </p>
            </div>
          </div>

          {/* contact info section */}
          <h3 className="py-1 text-3xl text-center mx-auto dark:text-gray-400">
              Contact Me
            </h3>
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
            <div className="p-10 my-10 text-center shadow-lg rounded-xl dark:text-gray-400 dark:shadow-slate-700 dark:shadow-md hover:-translate-y-1 hover:scale-110 duration-300 ">
              <img
                className="mx-auto"
                src={email}
                alt=""
                width={100}
                height={100}
              />
              <h3 className="py-1 pt-8 pb-2 text-lg font-medium ">Email</h3>
              
             <a href="mailto:danielbravin0@gmail.com"><h4 className="py-4 text-teal-600 bg-slate-300 rounded-md">Message</h4></a>
             
            </div>
            <div className="p-10 my-10 text-center shadow-lg rounded-xl dark:text-gray-400 dark:shadow-slate-700 dark:shadow-md hover:-translate-y-1 hover:scale-110 duration-300 ">
              <img
                className="mx-auto"
                src={whatsapp}
                alt={<FaWhatsapp/>}
                width={100}
                height={100}
              />
              
              <h3 className="py-1 pt-8 pb-2 text-lg font-medium">WhatsApp</h3>
             
              <a href="https://wa.me/+254701634107"><h4 className="py-4 text-teal-600 bg-slate-300 rounded-md">Message</h4></a>
              
            </div>
            <div className="p-10 my-10 text-center shadow-lg rounded-xl dark:text-gray-400 dark:shadow-slate-700 dark:shadow-md hover:-translate-y-1 hover:scale-110 duration-300 ">
              <img
                className="mx-auto"
                src={phone}
                alt={<FaWhatsapp/>}
                width={100}
                height={100}
              />
              {/* MODIFY: */}
              <h3 className="py-1 pt-8 pb-2 text-lg font-medium">Phone</h3>
              <a href="tel:0701634107"><h4 className="py-4 text-teal-600 bg-slate-300 rounded-md">Call</h4></a>
              
             
        
            </div>
          </div>
          {/* end of contact info section */}
        </section>
        <section>
          <footer className="text-center py-5 pt-8 dark:text-gray-400 text-sm">
            <h4>
              Copyright &copy; {new Date().getFullYear()} BravinDan All Rights
              Reserved.
            </h4>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
