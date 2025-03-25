import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  CardBody,
} from "@heroui/react";

import graphQL from "@/public/73B2F88B-C0DC-495A-A00D-5E1EFEEDFB45.png";
import capacitor from "@/public/78C7F679-A1DC-49F8-9756-AB69F1511718.png";

export const ProjectCards = () => {
  return (
    <div className="w-screen max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mt-5">
      <Card className="col-span-12 sm:col-span-4 h-[275px] flex flex-col mt-5">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mt-3">
          <p className="text-tiny uppercase font-bold">NextJS + Express</p>
          <h4 className=" font-medium text-sm">
            NextJS app build with capacitor.
          </h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 mt-3 self-center min-w-fit min-h-fit">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={capacitor.src}

            width={270}
            height={175}
          />
        </CardBody>
      </Card>

      <Card className="col-span-12 sm:col-span-4 h-[275px] mt-5">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mt-3">
          <p className="text-tiny uppercase font-bold">GraphQL</p>
          <h4 className=" font-medium text-sm">About my school graphql API.</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 mt-3 self-center min-w-fit min-h-fit">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={graphQL.src}
            width={270}
            height={175}

            
          />
        </CardBody>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[275px] mt-5">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-md uppercase font-bold">Title</p>
          <h4 className=" font-medium text-md">Short description</h4>
        </CardHeader>
      </Card>

      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5 "
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Title</p>
          <h4 className="text-black font-medium text-xl">Short description</h4>
        </CardHeader>
        <span className="z-0 w-full h-full scale-125 -translate-y-6 object-cover" />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-default-200 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
          </div>
          <Button
            className="size-0.5 text-default-600 bg-default-100 text-small font-normal border-1 border-default-300"
            color="secondary"
            radius="full"
            size="sm"
          >
            ...
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Title</p>
          <h4 className="font-medium text-xl">Short description</h4>
        </CardHeader>

        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-200">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
          </div>
          <div className="flex flex-grow gap-2 items-center"></div>

          <Button
            className="size-0.5 text-default-600 bg-default-100 text-small font-normal border-1 border-default-300"
            radius="full"
            size="sm"
          >
            ...
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
