import { BellIcon, CircleUser } from "lucide-react";
import ShoppingCartSheet from "./ShoppingCartSheet";

function NavIcons() {
  return (
    <ul className="flex gap-4 items-center">
      <li>
        <CircleUser className="cursor-pointer" />
      </li>
      <li>
        <BellIcon className="cursor-pointer" />
      </li>
      <li>
        <ShoppingCartSheet />
      </li>
    </ul>
  );
}

export default NavIcons;
