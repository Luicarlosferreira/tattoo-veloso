import { Container } from "./styles";
import { FaPenNib } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [active, setMenu] = useState(false);
  const ToggleMode = () => setMenu(!active);
  const ToggleFalse = () => setMenu(false);

  return (
    <Container>
      <div className="logo_Content">
        <FaPenNib />
        <Link to="/" onClick={ToggleFalse}>
          <span onClick={ToggleFalse}>Veloso Tattoo</span>
        </Link>
      </div>
      <div className="listContent">
        <div className={active ? "listNavActive" : "listNav"}>
          <ul className={active ? "listNavMobileActive" : ""}>
            <Link to="/" onClick={ToggleFalse}>
              <li>Home</li>
            </Link>
            <Link to="works" onClick={ToggleFalse}>
              <li>Trabalhos</li>
            </Link>

            <div className="separator" />
          </ul>
        </div>
        <div className="buttonContent">
          <Link to="/form" onClick={ToggleFalse}>
            <button>Faça um contato</button>
          </Link>
        </div>
        {active ? (
          <HiX
            className={active ? "mobileCloseMenu" : "mobileMenu"}
            onClick={ToggleMode}
          >
            Menu
          </HiX>
        ) : (
          <HiMenuAlt3
            className={active ? "mobileCloseMenu" : "mobileMenu"}
            onClick={ToggleMode}
          >
            Menu
          </HiMenuAlt3>
        )}
      </div>
    </Container>
  );
};
