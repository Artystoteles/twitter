import { BrowserRouter as Router, Link } from "react-router-dom";
import "./LeftBar.css";
const LeftBar = () => {
  return (
    <div className="left">
      <Router>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="buttons">
            <span className="btn-icon material-icons">home</span> Główna
          </span>
        </Link>
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <span className="buttons">
            <span className="btn-icon  material-icons">tag</span>
            Przeglądaj
          </span>
        </Link>
        <Link to="/notices" style={{ textDecoration: "none" }}>
          <span className="buttons">
            <span className="btn-icon  material-icons">notifications</span>
            Powiadomienia
          </span>
        </Link>
        <Link to="/messages" style={{ textDecoration: "none" }}>
          <span className="buttons">
            <span className="btn-icon  material-icons">email</span>Wiadomości
          </span>
        </Link>
        <Link to="/bookmarks" style={{ textDecoration: "none" }}>
          <span className="buttons">
            <span className="btn-icon  material-icons">bookmark</span>Zakładki
          </span>
        </Link>
        <Link to="/lists" style={{ textDecoration: "none" }}>
          <span className="buttons">
            <span className="btn-icon  material-icons">
              format_list_bulleted
            </span>
            Listy
          </span>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <span className="buttons">
            <span className="btn-icon  material-icons">person</span>Profil
          </span>
        </Link>
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <span className="buttons">
            <span className="btn-icon  material-icons">more_horiz</span>
            Więcej
          </span>
        </Link>
      </Router>
    </div>
  );
};

export default LeftBar;
