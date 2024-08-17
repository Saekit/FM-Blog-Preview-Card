import "./App.css";
import articleIllustration from "./assets/images/illustration-article.svg";
import avatarImg from "./assets/images/image-avatar.webp";
import Label from "./components/Label";
import UserLabel from "./components/UserLabel";

function App() {
  return (
    <>
      <div className="card-container">
        <img
          src={articleIllustration}
          alt="article illustration"
          className="article-img"
        />
        <div className="card-content">
          <Label title="Learning" />
          <p className="pub-date">Published 21 Dec 2023</p>
          <h1>HTML & CSS foundations</h1>
          <p className="card-copy">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <UserLabel avatarImg={avatarImg} name="Greg Hooper" />
        </div>
      </div>
    </>
  );
}

export default App;
