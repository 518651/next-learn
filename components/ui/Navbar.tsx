import {
    Navbar as Nav,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import IsLogin from "./IsLogin";

export default function Navbar() {
    return (
        <Nav isBordered className="bg-opacity-75 bg-gray-50/5 hover:bg-opacity-10" maxWidth="2xl">
            <NavbarBrand className="justify-center">
                <Link href="/" className="flex items-center text-white">
                    <AcmeLogo />
                    <p className="font-bold">Next Learn</p>
                </Link>
            </NavbarBrand>
            <NavbarContent as="div" justify="end">
                <NavbarItem>
                    <IsLogin />
                </NavbarItem>
            </NavbarContent>
        </Nav>
    )
}