import "./Label.css";

const Label = ({ title }) => (
  <div className={title === "Learning" ? "learning label" : "label"}>
    <span>{title}</span>
  </div>
);
export default Label;
