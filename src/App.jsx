import React, { useState } from "react";
import SubscribeForm from "./components/SubscribeForm";
import SuccessCard from "./components/SuccessCard";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <main className="mx-auto container flex flex-col justify-center items-center min-h-screen">
      <AnimatePresence mode="wait">
        {!subscribed ? (
          <motion.div
            key="Subscribe"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <SubscribeForm
              onSubscribe={(email) => {
                setEmail(email);
                setSubscribed(true);
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="Success"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <SuccessCard email={email} onDismiss={() => setSubscribed(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;
