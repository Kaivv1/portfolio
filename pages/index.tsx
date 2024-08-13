import Heading from "@/typography/Heading";
import Paragraph from "@/typography/Paragraph";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const [size, setSize] = useState<number>(0);
  const isXXL = useMediaQuery({ minWidth: 1700 });
  const isXL = useMediaQuery({ minWidth: 1280 });
  const isL = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    if (isXXL) {
      setSize(450);
    } else if (isXL) {
      setSize(400);
    } else if (isL) {
      setSize(350);
    } else {
      setSize(200);
    }
  }, [isXL, isL, setSize]);

  return (
    <main className="h-full">
      <div className="flex flex-col lg:flex-row lg:justify-around xl:justify-between justify-center sm:gap-6 gap-1 items-center">
        <div className="text-center lg:text-start mb-4 flex flex-col items-center lg:items-start">
          <Paragraph color="primary">{`[ Web developer ]`}</Paragraph>
          <Heading
            variant="h1"
            className="max-w-[20rem] lg:max-w-[24rem] xl:max-w-[27rem] mt-2"
          >
            Hello I'm
            <br />
            <span className="text-primary">Kaloyan Vulchev</span>
          </Heading>
          <Paragraph
            variant="sm"
            className="max-w-[30rem] 2xl:max-w-[40rem] mt-4 sm:mt-8"
          >
            I'm dedicated to crafting full-stack web apps that blend
            eye-catching design with robust functionality. Whether it's creating
            engaging user experiences or working on backend code, I'm eager to
            immerse myself in every aspect of web development and continually
            expand my knowledge.
          </Paragraph>
        </div>
        <div className="rounded-full border border-primary-hover animate-move-shadows shadow-primary animate-spin">
          <Image
            src="/avatar_compressed.png"
            alt=""
            width={size}
            height={size}
            className="brightness-90"
          />
        </div>
      </div>
      <Image
        src="/projects.png"
        width={200}
        height={200}
        alt=""
        className="projects-spin"
      />
    </main>
  );
}
