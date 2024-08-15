import Typewriter from "typewriter-effect";

const TypeWriter = ({ text }: { text: string }) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(text).start();
      }}
      options={{
        loop: false,
        cursor: "",
      }}
    />
  );
};

export default TypeWriter;
