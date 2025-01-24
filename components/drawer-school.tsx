"use client"

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
  } from "@heroui/react";
  
  export function DrawerTest() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
    return (
      <>
        <Button className="size-1" onPress={onOpen}>gamified</Button>
        <Drawer
          isOpen={isOpen}
          motionProps={{
            variants: {
              enter: {
                opacity: 1,
                x: 0,
               
              },
              exit: {
                x: 100,
                opacity: 0,
                
              },
            },
          }}
          onOpenChange={onOpenChange}
        >
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1">Title</DrawerHeader>
                <DrawerBody>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolore libero cupiditate recusandae nostrum quidem consectetur repudiandae sunt ab unde id eum quos, mollitia repellendus qui iusto repellat asperiores. Numquam.</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                    quam.
                  </p>
                </DrawerBody>
                
              </>
            )}
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  