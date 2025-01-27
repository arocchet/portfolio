import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";

export const ProjectCards = () => {
  return (
    <div className="w-screen max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mt-5">
      <Card className="col-span-12 sm:col-span-4 h-[300px] bg-transparent bg-opacity-50">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny uppercase font-bold">Title</p>
          <h4 className=" font-medium text-large">Short description</h4>
        </CardHeader>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px] bg-transparent">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny uppercase font-bold">Title</p>
          <h4 className=" font-medium text-large">Short description</h4>
        </CardHeader>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px] bg-transparent">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny uppercase font-bold">Title</p>
          <h4 className=" font-medium text-large">Short description</h4>
        </CardHeader>
        {/* 
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={img.src}
        />
        */}
      </Card>

      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5 bg-transparent"
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
        className="w-full h-[300px] col-span-12 sm:col-span-7 bg-transparent"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Title</p>
          <h4 className="font-medium text-xl">
            Short description
          </h4>
        </CardHeader>

        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-200">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
          </div>
          <div className="flex flex-grow gap-2 items-center"></div>

          <Button className="size-0.5 text-default-600 bg-default-100 text-small font-normal border-1 border-default-300" radius="full" size="sm">
            ...
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
