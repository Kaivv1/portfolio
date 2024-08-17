import { ProjectType } from "@/data/projects";
import React, { FC, useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Heading from "@/typography/Heading";
import Paragraph from "@/typography/Paragraph";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CodeXml, Eye } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { getDelay } from "./SkillsSection";
import { useMediaQuery } from "react-responsive";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type ProjectProps = {
  project: ProjectType;
  index: number;
};
const MotionCard = motion(Card);
const ProjectBox: FC<ProjectProps> = ({ project, index }) => {
  const isSM = useMediaQuery({ maxWidth: 640 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <MotionCard
      className="flex flex-col justify-between"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView && { opacity: 1, y: 0 }}
      transition={{
        delay: getDelay(index),
      }}
    >
      <CardHeader className="text-center sm:text-start">
        <Heading
          variant="h2"
          color="primary"
          className="space-x-2 text-xl sm:text-2xl xl:text-3xl"
        >
          {!isSM && (
            <span className="text-white">
              {index > 9 ? index : `0${index}`}
              <span className="text-primary">.</span>
            </span>
          )}
          <span>{project.name}</span>
        </Heading>
        <Paragraph variant="sm">{project.description}</Paragraph>
      </CardHeader>
      <CardContent className="space-y-5">
        <Image src={project.image} width={1000} height={1000} alt="" />
        <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
          {project.stack.map((val, i) => (
            <motion.div key={i}>
              <val.icon className="fill-primary-hover size-7 sm:size-9" />
            </motion.div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="uppercase" size={isSM ? "sm" : "default"}>
          <Link
            href={project.linkRepo}
            target="_blank"
            className="flex items-center gap-1"
          >
            Code
            <CodeXml className="size-5" />
          </Link>
        </Button>
        {project.linkLiveDemo &&
          (project.showModal ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  className="uppercase gap-1"
                  size={isSM ? "sm" : "default"}
                >
                  Live demo
                  <Eye className="size-5" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Before you continue!</AlertDialogTitle>
                  <AlertDialogDescription>
                    {project.name === "File Drive" &&
                      "The server of this app is hosted on Render free tier and it's probably inactive, so if you want to check it out you will need to wait like 50 seconds in the home page until it boots up. 👀"}
                    {project.name === "VillaHaven" &&
                      "The server here is hosted on vercel and it may be a little slow because it's not optimized with serverless functions, but either way it works and if you want a full presentation use a real email to get the emails which are sent for specific actions. 👀"}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>
                    I don't wanna see it anymore..
                  </AlertDialogCancel>
                  <Link
                    href={project.linkLiveDemo}
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <Button className="uppercase" size={isSM ? "sm" : "default"}>
              <Link
                href={project.linkLiveDemo}
                target="_blank"
                className="flex items-center gap-1"
              >
                Live Demo
                <Eye className="size-5" />
              </Link>
            </Button>
          ))}
      </CardFooter>
    </MotionCard>
  );
};

export default ProjectBox;
