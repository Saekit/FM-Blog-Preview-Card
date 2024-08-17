import "./UserLabel.css";

const UserLabel = ({ avatarImg, name }) => (
  <div className="label-container">
    <img src={avatarImg} alt="Avatar" />
    <span>{name}</span>
  </div>
);
export default UserLabel;
