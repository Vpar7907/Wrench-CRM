import home from "../image/home.svg";
import adress from "../image/adress.svg";
import tables from "../image/tables.svg";
import profile from "../image/profile.svg";
import exit from "../image/exit.svg";
import finance from "../image/finance.svg";
import maps from "../image/maps.svg";
import widgets from "../image/widgets.svg";
import calendar from "../image/calendar.svg";
import settings from "../image/settings.svg";

export interface navBarItem {
  id: number;
  name: string;
  path: string;
  image: string;

  subitems?: navBarItem[];
}

export const navBar: navBarItem[] = [
  {
    id: 1,
    name: "Главная",
    image: home,
    path: "/",
  },
  {
    id: 2,
    name: "Поиск адресов",
    image: adress,
    path: "/address",
  },
  {
    id: 3,
    name: "Таблицы",
    image: tables,
    path: "/tables",
  },
  {
    id: 4,
    name: "Календарь",
    image: calendar,
    path: "/calendar",
  },
  {
    id: 5,
    name: "Карты",
    image: maps,
    path: "/maps",
  },
  {
    id: 6,
    name: "Виджеты",
    image: widgets,
    path: "/widgets",
  },
  {
    id: 11,
    name: "Настройки",
    image: settings,
    path: "#",
    subitems: [
      {
        id: 7,
        name: "Настройки профиля",
        image: profile,
        path: "/settings/profile",
      },
      {
        id: 8,
        name: "Управление финансами",
        image: finance,
        path: "/settings/finance",
      },
    ],
  },
  {
    id: 9,
    name: "Выход",
    image: exit,
    path: "/",
  },
];
