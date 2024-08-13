import ProjectsArrow from "@/components/ProjectsArrow";
import Heading from "@/typography/Heading";
import Paragraph from "@/typography/Paragraph";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

export default function Home() {
  const [sizeAvatar, setSizeAvatar] = useState<number>(0);
  const [sizeProjects, setSizeProjects] = useState<number>(0);
  const isXXL = useMediaQuery({ minWidth: 1600 });
  const isXL = useMediaQuery({ minWidth: 1280 });

  useEffect(() => {
    function handleAvatarSize() {
      if (isXXL) {
        setSizeAvatar(450);
      } else if (isXL) {
        setSizeAvatar(400);
      } else {
        setSizeAvatar(300);
      }
    }
    handleAvatarSize();

    function handleProjectsSize() {
      if (isXXL) {
        setSizeProjects(200);
      } else if (isXL) {
        setSizeProjects(160);
      } else {
        setSizeProjects(140);
      }
    }
    handleProjectsSize();
  }, [isXXL, isXL, setSizeAvatar, setSizeProjects]);

  return (
    <main className="flex flex-col justify-center items-center gap-5 h-full xl:block ">
      <div className="flex flex-col xl:flex-row xl:justify-between justify-center sm:gap-10 gap-1 items-center">
        <div className="text-center xl:text-start mb-4 flex flex-col items-center xl:items-start">
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
            As an aspiring web developer, I am passionate about creating
            full-stack applications that combine aesthetic design with solid
            functionality. Through personal projects and intensive learning,
            I've developed skills in both frontend and backend development. I'm
            eager to bring my enthusiasm and growing expertise to a dynamic team
            where I can contribute and continue to grow in the field.
          </Paragraph>
        </div>
        <div className="rounded-full border border-primary-hover shadow-primary animate-move-shadows hidden xl:block">
          <Image
            src="/avatar_compressed.png"
            alt=""
            width={sizeAvatar}
            height={sizeAvatar}
            className="brightness-90"
          />
        </div>
      </div>
      <div className="inline-flex rounded-full relative animate-move-shadows justify-center items-center">
        <Link
          href="/projects"
          className="block z-[1] animate-projects-spin hover:paused rounded-full"
        >
          <Image
            src="/projects.png"
            width={sizeProjects}
            height={sizeProjects}
            alt=""
            className="hover:scale-[1.03] rounded-full transform duration-300"
          />
        </Link>
        <ProjectsArrow />
      </div>
    </main>
  );
}
