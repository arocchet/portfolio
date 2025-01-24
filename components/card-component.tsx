import {Card, CardHeader, CardFooter, CardBody} from "@heroui/card";
import { Button } from "@heroui/button";
import {Image} from "@heroui/image";

export const CardTest = () => {

  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
          <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src=""
          
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
          <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src=""
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
          <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src=""
        />
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">New</p>
          <h4 className="text-black font-medium text-2xl">Acme camera</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src=""
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Got to Github
          </Button>
        </CardFooter>
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
          <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src=""
        />
        
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
          <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src=""
        />
        
      </Card>
    </div>
  );
}

export const Card2 = () => {
    const list = [
      {
        title: "Golang",
        img: "",
        price: "Adv",
      },
      {
        title: "Javascript",
        img: "/images/fruit-2.jpeg",
        price: "Int",
      },
      {
        title: "React",
        img: "/images/fruit-3.jpeg",
        price: "Int",
      },
      {
        title: "Java",
        img: "/images/fruit-4.jpeg",
        price: "Beg",
      },
      {
        title: "Typescript",
        img: "/images/fruit-8.jpeg",
        price: "Int",
      },
      {
        title: "Python",
        img: "/images/fruit-5.jpeg",
        price: "Beg",
      },
      {
        title: "",
        img: "/images/fruit-6.jpeg",
        price: "",
      },
      {
        title: "Git",
        img: "/images/fruit-5.jpeg",
        price: "Adv",
      },
      {
        title: "Docker",
        img: "/images/fruit-6.jpeg",
        price: "Adv",
      },
    ];
  
    return (
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-10">
        {list.map((item, index) => (
          /* eslint-disable no-console */
          <Card key={index} isPressable shadow="sm" >
            <CardBody className="overflow-visible p-0">
              <Image
                alt={item.title}
                className="w-full object-cover h-[140px]"
                radius="lg"
                shadow="sm"
                src={item.img}
                width="100%"
                
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-400">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }
