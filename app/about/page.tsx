import CustomizedTimeline from "@/components/custom-timeline";

export default function AboutPage() {
  return (
    <div className="relative flex h-full w-full flex-col bg-background dark:bg-black-90 light:bg-white-90">
      <main className="container mx-auto flex flex-col items-center justify-center px-8 py-16 sm:py-24">
        <section className="flex flex-col items-center justify-center gap-8 sm:gap-6">
          <h1 className="text-center text-4xl sm:text-5xl font-bold leading-tight text-default-700">
            Me
          </h1>
          <p className="text-lg sm:text-xl text-default-500 max-w-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, aliquid, iusto quia aperiam quo quos non enim ut animi
            ipsam praesentium quaerat cupiditate nobis aliquam maiores ullam
            rerum atque tempora.
          </p>
          <p className="text-lg sm:text-xl text-default-500 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est esse
            omnis itaque adipisci officiis, optio, voluptates placeat non sunt
            odit, tenetur ex tempore perferendis nemo iusto quas nulla iure
            mollitia!{" "}
          </p>
          <h1 className="text-center text-4xl sm:text-5xl font-bold leading-tight text-default-700">
            Education
          </h1>
          <CustomizedTimeline />
          <p className="text-lg sm:text-xl text-default-500 max-w-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, aliquid, iusto quia aperiam quo quos non enim ut animi
            ipsam praesentium quaerat cupiditate nobis aliquam maiores ullam
            rerum atque tempora.
          </p>
          <p className="text-lg sm:text-xl text-default-500 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est esse
            omnis itaque adipisci officiis, optio, voluptates placeat non sunt
            odit, tenetur ex tempore perferendis nemo iusto quas nulla iure
            mollitia!{" "}
          </p>
          <h1 className="text-center text-4xl sm:text-5xl font-bold leading-tight text-default-700">
            Title...
          </h1>
          <p className="text-lg sm:text-xl text-default-500 max-w-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, aliquid, iusto quia aperiam quo quos non enim ut animi
            ipsam praesentium quaerat cupiditate nobis aliquam maiores ullam
            rerum atque tempora.
          </p>
          <p className="text-lg sm:text-xl text-default-500 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est esse
            omnis itaque adipisci officiis, optio, voluptates placeat non sunt
            odit, tenetur ex tempore perferendis nemo iusto quas nulla iure
            mollitia!{" "}
          </p>
        </section>
      </main>
    </div>
  );
}
