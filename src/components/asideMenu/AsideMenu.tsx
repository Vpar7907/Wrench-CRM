import { navBar, navBarItem } from "../../data/UIdata";
import MenuItem from "./MenuItem";
import "../../styles/menu.scss";

interface Props {
  openMenu: boolean;
  setOpenMenu: (arg: boolean) => void;
}

function AsideMenu({ openMenu, setOpenMenu }: Props): JSX.Element {
  return (
    <nav className={`${openMenu ? "active" : ""}`}>
      <p className="menup">Меню</p>
      <div className="menudiv">
        <ul>
          {navBar.map((data: navBarItem) => (
            <MenuItem
              setOpenMenu={setOpenMenu}
              name={data.name}
              key={data.id}
              id={data.id}
              image={data.image}
              path={data.path}
              subitems={data.subitems}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default AsideMenu;
