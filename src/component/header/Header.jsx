import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="text">
      <div className="flex items-center justify-between  w-full h-[65px] gap-5 px-11">
        <div className="w-[55px] h-[55px]">
          <img
            className="w-full h-full object-center"
            src="./src/assets/image/logo-secondary.png"
            alt=""
          />
        </div>
        <div className="">
          <nav className=" gap-8 items-center">
            <ul className="flex gap-5 navbar_item ">
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Resume</a>
              </li>
              <li>
                <a href="#">Skill</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <button className="w-[144px] h-[49px] border antialiased  rounded-full hero_me">
            Hero Me
          </button>
        </div>
        <div className="lg:hidden">
          <Sheet >
            <SheetTrigger>
              {" "}
              <FaBars />
            </SheetTrigger>
            <SheetContent>
              <nav>
                <ul className="">
                  <li>
                    <a href="#">Service</a>
                  </li>
                  <li>
                    <a href="#">Work</a>
                  </li>
                  <li>
                    <a href="#">Resume</a>
                  </li>
                  <li>
                    <a href="#">Skill</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
