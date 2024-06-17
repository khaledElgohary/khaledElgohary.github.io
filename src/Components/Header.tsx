import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion';


function Header() {
  return (
  <div className="Header-main">
      <h1 id="Title">
            <ReactTyped
              strings={["Welcome to My Story !"]}
              typeSpeed={50}
              backSpeed={50}
              showCursor={false}
            />
        </h1>
    <div className="Header">
          <div className="buttons-container">
            <motion.button
              id="Projects-btn"
              whileHover={{ scale: 1.1, rotate: 360, transition:{duration: 0.75} }}
              whileTap={{
                scale: 0.8
              }}
            >
              Projects
            </motion.button>

            <motion.button
              id="About-btn"
              whileHover={{ scale: 1.1, rotate: 360, transition:{duration: 0.75} }}
              whileTap={{
                scale: 0.8
              }}
            >
              About
            </motion.button>

            <motion.button
              id="Skills-btn"
              whileHover={{ scale: 1.1, rotate: 360, transition:{duration: 0.75} }}
              whileTap={{
                scale: 0.8
              }}
            >
              Skills
            </motion.button>

            <motion.button
              id="Contact-btn"
              whileHover={{ scale: 1.1, rotate: 360, transition:{duration: 0.75} }}
              whileTap={{
                scale: 0.8
              }}
            >
              Contact
            </motion.button>
          </div>
      </div>
    </div>
  );
}

export default Header;
