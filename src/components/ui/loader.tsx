import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export function Loader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          },
          scale: {
            repeat: Infinity,
            duration: 0.6,
            ease: "easeInOut",
          },
        }}
      >
        <Loader2 className="h-12 w-12 text-primary" />
      </motion.div>
    </div>
  );
}