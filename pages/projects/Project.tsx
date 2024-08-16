import { ProjectType } from "@/data/projects";
import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Heading from "@/typography/Heading";
import Paragraph from "@/typography/Paragraph";
import Image from "next/image";

type ProjectProps = {
  project: ProjectType;
};

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <Heading variant="h3" color="primary">
          {project.name}
        </Heading>
        <Paragraph variant="sm">{project.description}</Paragraph>
      </CardHeader>
      <CardContent>
        <Image src={project.image} width={800} height={800} alt="" />
      </CardContent>
    </Card>
  );
};

export default Project;
