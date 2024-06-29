"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChevronUp, X } from "lucide-react";
import { LinkType } from "@/types/linkType";
import Link from "next/link";
import { useState } from "react";

export default function NavDrawer({ links }: { links: LinkType[] }) {
  const [open, setOpen] = useState(false);
  const wait = () => new Promise((resolve) => setTimeout(resolve, 400));

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div
          className={`fixed bottom-12 z-[1] flex w-full justify-center ${
            open ? "hidden" : "block"
          }`}
        >
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 shrink-0 rounded-full bg-black text-white"
          >
            <ChevronUp className="h-8 w-8" />
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm pt-4">
          {/* Navbar menu content here */}
          {links.map((link) => (
            <div
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
              <div className="flex w-full justify-center">
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
  );
}
