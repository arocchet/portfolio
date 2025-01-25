"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  Image,
  Tooltip,
} from "@heroui/react";

export const DrawerDefinition = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className="size-1 max-w-min text-default-500" onPress={onOpen}>
        gamified
      </Button>
      <Drawer
        hideCloseButton
        backdrop="blur"
        classNames={{
          base: "data-[placement=right]:sm:m-2 data-[placement=left]:sm:m-2  rounded-medium",
        }}
        size={"sm"} 
        isOpen={isOpen}
        onOpenChange={onOpenChange}
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
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="absolute top-0 inset-x-0 z-40 flex flex-row gap-2 px-2 py-2 border-b border-default-200/50 justify-between bg-content1/50 backdrop-saturate-150 backdrop-blur-lg">
                <Tooltip content="Close">
                  <Button
                    isIconOnly
                    className="text-default-400"
                    size="sm"
                    variant="light"
                    onPress={onClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="2em"
                      height="2em"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        d="m6 6l12 12m0-12L6 18"
                      ></path>
                    </svg>
                  </Button>
                </Tooltip>
                <div className="w-full flex justify-start gap-2 mt-1 text-default-700">
                  What's mean "gamified" ?
                </div>
              </DrawerHeader>
              <DrawerBody className="pt-16">
                <div className="flex w-full justify-center items-center pt-4">
                  <Image
                    isBlurred
                    isZoomed
                    alt=""
                    className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
                    height={300}
                    src="https://cdn.discordapp.com/attachments/1251991416222253076/1332836790217736222/0E454545-D9DB-4FA3-8081-9E7A5E88FA3F.png?ex=6796b47d&is=679562fd&hm=26b1f7f8dd81a129c16575a8005a93d92bff000a043556c8445a0ee50484fe50&"
                  />
                </div>
                <div className="flex flex-col gap-2 py-4">
                  <h1 className="text-2xl font-bold leading-7 text-default-700">
                    Here is my current level
                  </h1>
                  <p className="text-sm text-default-500">
                    We level up as the exercises are validated, we also increase
                    our skills in different aspects.
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                      <div className="flex-none border-1 border-default-200/50 rounded-small text-center w-11 overflow-hidden">
                        <div className="text-tiny bg-default-100 py-0.5 text-default-500">
                          Jan
                        </div>
                        <div className="flex items-center justify-center font-semibold text-medium h-6 text-default-500">
                          25
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-medium font-medium text-default-700">
                          My level is at this date
                        </p>
                        <p className="text-small text-default-500">
                          He was able to change..
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center"></div>
                    <div className="flex flex-col mt-4 gap-3 items-start">
                      <span className="text-medium font-medium text-default-700">
                        About the exercices
                      </span>
                      <div className="text-medium text-default-500 flex flex-col gap-2">
                        <p>
                         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum necessitatibus, assumenda amet sint doloribus voluptates odio. Ipsum explicabo placeat quaerat mollitia, porro nostrum fugiat amet nobis suscipit rerum tempore.
                        </p>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eaque architecto, quidem, nihil accusantium dolorem explicabo vel quis enim ea ullam veniam excepturi deserunt quae, quos cum laborum! Deserunt, non?
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, corporis sapiente. Neque repellendus qui pariatur nisi similique autem dolores nemo, blanditiis nostrum, error vero ad dolore, hic dolor soluta id.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </DrawerBody>
              <DrawerFooter className="flex flex-col gap-1">
                
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
