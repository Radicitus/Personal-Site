import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PanelBottomOpen } from "lucide-react";

export default function NavDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="fixed bottom-12 z-[1] flex w-full justify-center">
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 shrink-0 rounded-full bg-black text-white"
          >
            <PanelBottomOpen className="h-8 w-8" />
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
