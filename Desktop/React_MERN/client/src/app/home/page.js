"use client";
import React from "react";
import { CardHeader, CardBody, Image } from "@nextui-org/react";
import { Divider, Tabs, Tab, Card } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Checkbox,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import Link from "next/link";

const productList = [
  {
    id: 1,
    productName: "hawkins cooker 5l",
    image:
      "https://m.media-amazon.com/images/I/61QX2b5Oa3L._AC_UF894,1000_QL80_.jpg",
    price: 30,
  },
  {
    id: 2,
    productName: "Caliber shoes",
    image:
      "https://calibershoes.sgp1.digitaloceanspaces.com/uploads/2023/07/02111851/695G-GR-1.jpg",
    price: 1400,
  },
  {
    id: 3,
    productName: "casio watch",
    image:
      "https://www.casio.com/content/casio/locales/intl/en/products/watches/casio/standard/_jcr_content/root/responsivegrid/container/container_copy/content_panel_list_c/content_panel/image.casiocoreimg.jpeg/1717043817541/ca-53wf-800-800.jpeg",
    price: 30030,
  },
  {
    id: 4,
    productName: "iphone 15 pro max",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsT2hZa8Z5qospfyJN-OsvfMSrpzHeb6DMnA&s",
    price: 200000,
  },
];

const home = () => {
  const router = useRouter();
  return (
    <div className="container min-w-full h-[100%] ">
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
                <Link href="#">HUSTLE</Link>
              </p>
            </div>
          </NavbarBrand>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Find Talent
              </Link>
            </NavbarItem>

            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Find Freelancers
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link color="foreground" href="#">
                What's New
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link color="foreground" href="#">
                Why Hustle
              </Link>
            </NavbarItem>
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
      <div className="h-3/4 min-w-full bg-gray-700 flex flex-col gap-2 ">
        <div>
          <p className="pl-20 pt-10 text-5xl">How Work</p>
          <p className="pl-20 text-5xl">Should Work</p>
          <p className="pl-20 pt-6 text-2xl">
            {" "}
            Forget the old rules. You can have the best people.
          </p>
          <p className="pl-20 text-2xl">Right now. Right here.</p>
          <Button
            className="w-30 mt-6 mb-6 ml-20 hover:bg-green-700"
            color="primary"
          >
            <Link as={Button} href="/">
              Get Started
            </Link>
          </Button>

          <Button className="w-30 mt-6 mb-6 ml-20 hover:bg-green-700 bg-red-100">
            <div className="flex items-center gap-20">
              <Link as={Button} href="/">
                Search
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="15"
                height="15"
                viewBox="0 0 50 50"
              >
                <path d="M 21 4 C 11.082241 4 3 12.082241 3 22 C 3 31.917759 11.082241 40 21 40 C 24.62177 40 27.99231 38.91393 30.820312 37.0625 L 43.378906 49.621094 L 47.621094 45.378906 L 35.224609 32.982422 C 37.581469 29.938384 39 26.13473 39 22 C 39 12.082241 30.917759 4 21 4 z M 21 8 C 28.756241 8 35 14.243759 35 22 C 35 29.756241 28.756241 36 21 36 C 13.243759 36 7 29.756241 7 22 C 7 14.243759 13.243759 8 21 8 z"></path>
              </svg>
            </div>
          </Button>
        </div>
      </div>

      <div className="flex justify-between pt-5 ">
        {productList.map((item) => {
          return (
            <div>
              <p>

                
                {" "}
                {
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">{item.id}</p>
                      <small className="text-default-500">{item.price}</small>
                      <h4 className="font-bold text-large">
                        {item.productName}
                      </h4>
                    </CardHeader>
                    <CardBody
                      className="overflow-visible py-2"
                      onClick={() => router.push("/home/" + item.id)}
                    >
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={item.image}
                        width={270}
                      />
                    </CardBody>
                  </Card>
                }



              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default home;
