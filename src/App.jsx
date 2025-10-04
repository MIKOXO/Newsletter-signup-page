import React, { useState } from "react";
import SubscribeForm from "./components/SubscribeForm";
import SuccessCard from "./components/SuccessCard";

const App = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <main className="mx-auto container flex flex-col justify-center items-center bg-White rounded-b-3xl lg:rounded-3xl shadow-md max-w-[1000px]">
      {!subscribed ? (
        <SubscribeForm
          onSubscribe={(email) => {
            setEmail(email);
            setSubscribed(true);
          }}
        />
      ) : (
        <SuccessCard email={email} onDismiss={() => setSubscribed(false)} />
      )}
    </main>
  );
};

export default App;
