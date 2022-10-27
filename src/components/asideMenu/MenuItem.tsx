import { Link } from "react-router-dom";
import { navBarItem } from "../../data/UIdata";
import arrow from "../../image/arrow.svg";
import React, { useState, useRef } from "react";

interface Props {
  id: number;
  name: string;
  path: string;
  image: string;
  setOpenMenu: (arg: boolean) => void;
  subitems?: navBarItem[];
}

const TIME_ANIMATION: number = 1000;

function MenuItem({
  name,
  path,
  image,
  subitems,
  setOpenMenu,
}: Props): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const arrowSet = useRef<HTMLImageElement>(null);

  const [closing, setClosing] = useState<boolean>(false);
  return (
    <>
      {!subitems ? (
        <li
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          <Link to={path}>
            <img src={image} alt={name} />
            <p>{name}</p>
          </Link>
        </li>
      ) : (
        <li>
          <Link
            to={path}
            onClick={() => {
              if (!open) {
                arrowSet.current?.classList.add("active");
                setOpen(true);
              } else {
                setClosing(true);
                arrowSet.current?.classList.remove("active");
                const timer = setTimeout(() => {
                  setClosing(false);
                  setOpen(false);
                  clearTimeout(timer);
                }, TIME_ANIMATION);
              }
            }}
          >
            <img src={image} alt={name} />
            <p>{name}</p>

            <img
              ref={arrowSet}
              src={arrow}
              alt={"open settings"}
              className="open-arrow"
            />
          </Link>
          {open ? (
            <ul className={`subitems ${closing ? "close" : ""}`}>
              {subitems.map(({ path, image, name, id }) => (
                <li key={id}>
                  <Link to={path}>
                    <img src={image} alt={name} />
                    <p>{name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      )}
    </>
  );
}

export default MenuItem;
