import ProjectsArrow from "@/components/ProjectsArrow";
import Heading from "@/typography/Heading";
import Paragraph from "@/typography/Paragraph";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const TypeWriter = dynamic(() => import("../components/TypeWriter"), {
  ssr: false,
});

const MotionLink = motion(Link);

export default function Home() {
  const [sizeAvatar, setSizeAvatar] = useState<number>(0);
  const [sizeProjects, setSizeProjects] = useState<number>(0);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const is2XL = useMediaQuery({ minWidth: 1500 });
  const is3XL = useMediaQuery({ minWidth: 1600 });
  const isXL = useMediaQuery({ minWidth: 1280 });

  useEffect(() => {
    function handleAvatarSize() {
      if (is3XL) {
        setSizeAvatar(450);
      } else if (is2XL) {
        setSizeAvatar(400);
      } else if (isXL) {
        setSizeAvatar(380);
      } else {
        setSizeAvatar(300);
      }
    }
    handleAvatarSize();

    function handleProjectsSize() {
      if (is2XL) {
        setSizeProjects(180);
      } else if (isXL) {
        setSizeProjects(160);
      } else {
        setSizeProjects(140);
      }
    }
    handleProjectsSize();
  }, [is3XL, is2XL, isXL, setSizeAvatar, setSizeProjects]);

  return (
    <main className="flex flex-col justify-center items-center gap-5 h-full xl:block ">
      <div className="flex flex-col xl:flex-row xl:justify-between justify-center sm:gap-20 gap-1 items-center">
        <motion.div className="text-center xl:text-start mb-4 flex flex-col items-center xl:items-start">
          <div className="text-primary">
            <TypeWriter text="[ Web developer ]" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            <Heading
              variant="h1"
              className="max-w-[20rem] lg:max-w-[24rem] xl:max-w-[27rem] mt-2"
            >
              Hello I'm
              <br />
              <span className="text-primary">Kaloyan Vulchev</span>
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.5,
            }}
          >
            <Paragraph
              variant="sm"
              className="max-w-[23rem] sm:max-w-[30rem] xl:max-w-[35rem] 2xl:max-w-[38rem] 3xl:max-w-[40rem] mt-4 sm:mt-8 "
            >
              As an aspiring web developer, I am passionate about creating
              full-stack applications that combine aesthetic design with solid
              functionality. Through personal projects and intensive learning,
              I've developed skills in both frontend and backend development.
              I'm eager to bring my enthusiasm and growing expertise to a
              dynamic team where I can contribute and continue to grow in the
              field.
            </Paragraph>
          </motion.div>
        </motion.div>
        <motion.div
          className="rounded-full border border-primary-hover shadow-primary animate-move-shadows hidden xl:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <Image
            src="/avatar_compressed.png"
            alt=""
            width={sizeAvatar}
            height={sizeAvatar}
            className="brightness-90"
          />
        </motion.div>
      </div>
      <motion.div className="inline-flex rounded-full relative animate-move-shadows justify-center items-center xl:mt-3 2xl:mt-0">
        <MotionLink
          href="/projects"
          className="block z-[1] animate-projects-spin hover:paused rounded-full"
          onClick={() => setIsClicked(true)}
        >
          <Image
            src="/projects.png"
            width={sizeProjects}
            height={sizeProjects}
            alt=""
            className="hover:scale-[1.03] rounded-full transform duration-300"
          />
        </MotionLink>
        <ProjectsArrow
          isClicked={isClicked}
          onEnd={() => setIsClicked(false)}
        />
      </motion.div>
    </main>
  );
}
