"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CircularProgress, Stack } from "@mui/material";
import { useVerifyQuery } from "@/services/api";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Suspense } from "react";
import VerifyItem from "@/Components/Auth/VerifyItem";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { getVerifyErrorConfig } from "@/utils/helper";

const VerifyPage: React.FC = () => {
  return (
    <Suspense>
      <VerifyContent />
    </Suspense>
  );
};

const VerifyContent: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const { isLoading, isSuccess, isError, error } = useVerifyQuery(
    { token: token as string },
    { skip: !token },
  );

  const [countdown, setCountdown] = useState<number>(3);

  useEffect(() => {
    if (!isSuccess) return;
    if (countdown === 0) {
      router.replace("/dashboard");
      return;
    }
    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isSuccess, countdown, router]);

  const status = (error as FetchBaseQueryError)?.status as number | undefined;
  const errorConfig = getVerifyErrorConfig(status);

  if (!token) {
    return (
      <VerifyItem
        color="error.main"
        icon={AlertCircle}
        heading="Invalid Verification Link"
        description="This verification link is missing or invalid."
        buttonText="Back to Login"
        buttonHref="/login"
        fotterText="Need a new verification link?"
        fotterHref="/signup"
        fotterLinkText="Sign up again"
      />
    );
  }

  if (isLoading) {
    return (
      <Stack textAlign={"center"} alignItems={"center"}>
        <CircularProgress size={56} />
      </Stack>
    );
  }

  if (isSuccess) {
    return (
      <VerifyItem
        color="success.main"
        icon={CheckCircle2}
        heading="Email Verified Successfully"
        description={`Your email has been verified. Redirecting you to your dashboard in ${countdown}...`}
        buttonText="Go to Home"
        buttonHref="/"
        fotterText="If you are not redirected,"
        fotterHref="/dashboard"
        fotterLinkText="click here"
      />
    );
  }

  if (isError) {
    return (
      <VerifyItem
        color="error.main"
        icon={AlertCircle}
        heading={errorConfig.heading}
        description={errorConfig.description}
        buttonText={errorConfig.buttonText}
        buttonHref={errorConfig.buttonHref}
        fotterText={errorConfig.footerText}
        fotterHref={errorConfig.footerHref}
        fotterLinkText={errorConfig.footerLinkText}
      />
    );
  }
};

export default VerifyPage;
