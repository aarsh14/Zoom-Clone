"use client"; //Placing 'use client' at the top of the file tells Next.js
import { sidebarLinks } from "@/constants";
//that this component should be treated as a client component.(explicitly)
//This ensures that it is rendered on the client side, not the server side.

//import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  /*

The usePathname hook from next/navigation is used to get the current path in the browser. 
This hook is designed for client-side navigation and will not work in server components because it relies on browser-specific APIs


The component dynamically applies CSS classes based on the current pathname.
 This kind of interactivity (determining active links) is done on the client side where the component can access the current URL and apply the appropriate styles

 The Sidebar component includes interactive elements, such as links that update the UI based on the current route.
  This interaction happens entirely in the browser without requiring a full page reload
*/

  return (
    <section
      className="sticky left-0 top-0 flex h-screen w-fit flex-col
     justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]"
    >
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);

          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
