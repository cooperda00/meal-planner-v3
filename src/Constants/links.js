import React from "react";
import { FaCarrot } from "react-icons/fa";
import { IoIosBookmarks, IoMdCalendar } from "react-icons/io";

export const loggedInLinks = [
  {
    name: "Pantry",
    path: "/pantry",
    icon: <FaCarrot />
  },
  {
    name: "Recipies",
    path: "/recipies",
    icon: <IoIosBookmarks />
  },
  {
    name: "Planner",
    path: "/planner",
    icon: <IoMdCalendar />
  }
];

export const loggedOutLinks = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Login",
    path: "/login"
  },
  {
    name: "Signup",
    path: "/signup"
  }
];
