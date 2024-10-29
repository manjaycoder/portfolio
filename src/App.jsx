/**
 * Application component
 *
 * To contain application-wide settings, routes, state, etc.
 */

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./locomotive-scroll.css"; // Ensure the filename is correct
import "./styles.css";

/**
 * This object represents your information. Update these values as needed.
 */
const siteProps = {
  name: "Manjay",
  title: "Full Stack Web Developer and DSA Problem Solver",
  email: "manjay.verma.coder@gmail.com",
  gitHub: "manjaycoder",
  instagram: "code_with_manjay/profilecard/?igsh=YzZsZDg4Y2X6ZNI4",
  linkedIn: "manjay-verma/",
  twitter: "CoderVerma",
  youTube: "",
};

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  const primaryColor = "#4E567E";
  const secondaryColor = "#D2F1E4";

  return (
    <div id="main" ref={scrollRef} className="scroll-container">
      {/* Add the cursor component here */}
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer
        {...siteProps}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
    </div>
  );
};

export default App;
