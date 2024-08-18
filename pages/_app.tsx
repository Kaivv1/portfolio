import Layout from "@/components/Layout";
import ParticlesContainer from "@/components/ParticlesContainer";
import TransitionAnimation from "@/components/TransitionAnimation";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="w-full">
          <TransitionAnimation />
          <ParticlesContainer />
          <Component {...pageProps} />
          <Toaster />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
