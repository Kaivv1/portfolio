import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="overflow-y-auto overflow-x-hidden h-screen w-screen bg-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
