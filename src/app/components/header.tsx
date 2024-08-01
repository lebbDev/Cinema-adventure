import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar position="static" className="bg-black color flex items-center justify-between py-8">
        <NavbarContent>
            <NavbarItem className="flex items-center gap-4">
                <Link href="/" className="text-white text-4xl">Cinema adventure</Link>
            </NavbarItem>

            <NavbarItem className="flex items-center gap-4">
                <Link href="/profile" className="text-white">Профиль</Link>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  );
}