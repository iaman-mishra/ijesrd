import SignupForm from "@/Components/Auth/SignupForm";
import React, { Suspense } from "react";

const Signup: React.FC = () => {
  return (
    <Suspense>
      <SignupForm />
    </Suspense>
  );
};

export default Signup;
