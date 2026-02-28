import SignupForm from "@/Components/Auth/SignupForm";
import React, { Suspense } from "react";

const Signup: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupForm />
    </Suspense>
  );
};

export default Signup;
