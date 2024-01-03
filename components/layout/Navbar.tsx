"use client";

import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { logo } from "../../public/assets/img";
import { navLinks } from "@/core/shared/constants";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleClickMenu = (event: ChangeEvent<HTMLInputElement>) => {
    setMenuOpen(event.target.checked);
  };
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className='sticky top-0 z-50 bg-software-grey h-14 flex-center'>
        <div className='container mx-auto padding-x flex-between'>
          {/* Logo */}
          <div>
            <h1 className='text-2xl '>Woodchip</h1>
          </div>

          <div className='p-2 border rounded-md shadow-md '>
            Continue with Github
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
