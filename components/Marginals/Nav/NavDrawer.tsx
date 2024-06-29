"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import { LinkType } from "@/types/linkType";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavDrawer({ links }: { links: LinkType[] }) {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const wait = () => new Promise((resolve) => setTimeout(resolve, 400));

  const validatedSetDrawerOpen = (open: boolean) => {
    if (isVisible && open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const controlDrawerIcon = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY != 0 && window.scrollY > lastScrollY) {
        // if scrolling down, hide the navbar
        setIsVisible(false);
      } else {
        // if scrolling up, show the navbar
        setIsVisible(true);
      }

      // remember the current page location for the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlDrawerIcon);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlDrawerIcon);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <div className="sticky top-0 z-[1] flex w-full justify-center bg-opacity-40 px-8 pt-6 text-white backdrop-blur-lg backdrop-filter">
        <Link href={"/"} className="group font-mohave text-4xl font-bold">
          <span className="align-sub">
            <div className="inline-block transition group-hover:-translate-y-1">
              C
            </div>
            <div className="inline-block transition group-hover:translate-y-1">
              S
            </div>
          </span>
        </Link>
      </div>

      <Drawer open={open} onOpenChange={validatedSetDrawerOpen}>
        <DrawerTrigger asChild>
          <div
            className={`fixed bottom-12 z-[1] flex w-full justify-center ${
              open ? "hidden" : "block"
            } transition-opacity duration-500 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 shrink-0 rounded-full bg-black text-white"
            >
              <Menu className="h-8 w-8" />
            </Button>
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm pt-4">
            {/* Navbar menu content here */}
            {links.map((link) => (
              <div
                key={link.title}
                className="flex flex-col items-center gap-y-4 p-3 font-quicksand text-xl font-semibold text-gray-300"
                onClick={(event) => {
                  wait().then(() => setOpen(false));
                  event.preventDefault();
                }}
              >
                <Link
                  href={link.path}
                  target={"_" + link.target}
                  legacyBehavior
                  passHref
                >
                  {link.title}
                </Link>
              </div>
            ))}
            <DrawerFooter>
              <DrawerClose asChild>
                <div className="flex w-full justify-center pb-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 shrink-0 rounded-full bg-black text-white"
                  >
                    <X className="h-8 w-8" />
                  </Button>
                </div>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
