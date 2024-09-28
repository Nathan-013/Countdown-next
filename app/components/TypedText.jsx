import { ReactTyped } from "react-typed";

const TypedText = ({ strings }) => (
  <div>
    {/* <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} />
    <br /> */}

    <ReactTyped
      showCursor = {false}
      strings = {strings}
      typeSpeed = {100}
      backSpeed = {0}
      fadeOut = {true}
      loop= {true}
    />
  </div>
);

export default TypedText;