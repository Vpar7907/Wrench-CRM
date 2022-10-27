import React, { useState } from "react";
import AsideMenu from "../asideMenu/AsideMenu";
import Header from "../header/Header";
import LayoutModal from "../UI/LayoutModal";

interface IProps {
  children: React.ReactNode;
}

function MainLayout({ children }: IProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="mainLayout">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu ? <LayoutModal setOpenMenu={setOpenMenu} /> : null}
      <AsideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
