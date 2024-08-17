import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ObjectSection from "../../components/ObjectSection";
import AboutSection from "../../components/AboutSection";
import SkillsSection from "../../components/SkillsSection";
import CreateTableSection from "../../components/CreateTableSection";
import Peace from "../../components/Peace";

const About = () => {
  return (
    <main className="space-y-3 ">
      <div className="mb-6 sm:mb-10 flex justify-center sm:justify-between items-center">
        <CreateTableSection />
        <ObjectSection />
      </div>
      <Peace />
      <Tabs
        defaultValue="about"
        className="flex flex-col items-center justify-center"
      >
        <TabsList className="w-fit gap-4 mb-3">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="justify-center flex items-center">
          <AboutSection />
        </TabsContent>
        <TabsContent value="skills">
          <SkillsSection />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default About;
