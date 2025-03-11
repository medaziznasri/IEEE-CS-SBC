import { Typewriter } from "react-simple-typewriter";

function Typewrite() {
  return (
    <div>
      <h1 className="TypeWritter-h1">
        <span className="TypeWritter-span">
          Welcome to IEEE CIS ISIMA SB
        </span>
        <br /> {/* Add a line break to move the typewriter text to a new line */}
        <span className="TypeWritter-type">
          <Typewriter
            words={[
              "Where Artificial Intelligence",
              "meets Innovation"
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={100}
          />
        </span>
      </h1>
    </div>
  );
}

export default Typewrite;