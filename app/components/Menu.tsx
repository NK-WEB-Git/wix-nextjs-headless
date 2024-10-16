"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <MenuIcon
        className="h-8 w-8 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <ul className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 text-xl z-10">
          <Link href="#">Homepage</Link>
          <Link href="#">Shop</Link>
          <Link href="#">Deals</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Logout</Link>
          <Link href="#">Cart(1)</Link>
        </ul>
      )}
    </div>
  );
}

export default Menu;
