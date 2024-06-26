
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
export default function CustomNavbar(props) {
  return (
    <div className="navbar bg-slate-800 h-16  ">
      <Navbar>
        <NavbarBrand>
          <div className="flex gap-3">
            <img
              src="/hustle.png"
              width={30}
              height={90}
              className="rounded"
            ></img>
            <p className="font-bold text-inherit">
              <Link href="#">{props.brandName}</Link>
            </p>
          </div>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
       {props.navItems.map((item)=>{
        return (<div>{item} </div>)
       })}
        </NavbarContent>

        <NavbarContent className="pl-20">
          <NavbarItem className="">
            <Button className="w-30 hover:bg-green-700" color="primary">
              <Link as={Button} href="/">
                Login
              </Link>
            </Button>
          </NavbarItem>

          <NavbarItem>
            <Button className="w-30 hover:bg-green-700" color="primary">
              <Link as={Button} href="/">
                Sign Up
              </Link>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}