import header from "../../image/header-logo.svg";
import person from "../../image/person.svg";
import menu from "../../image/menu.svg";
import "../../styles/header.scss";

interface Props {
  openMenu: boolean;
  setOpenMenu: (arg: boolean) => void;
}

function Header({ openMenu, setOpenMenu }: Props): JSX.Element {
  return (
    <header>
      <div
        className="headmenu"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <img src={menu} alt="menu" />
      </div>
      <div>
        <img src={header} alt="logo CRM" />
        <span>Wrench CRM</span>
      </div>
      <div>
        <img src={person} alt="person" />
        <span>Имя Фамилия</span>
      </div>
    </header>
  );
}

export default Header;
