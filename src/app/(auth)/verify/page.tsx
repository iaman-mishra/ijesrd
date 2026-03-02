"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { useVerifyQuery } from "@/services/api";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import PulsatingIcon from "@/Components/Auth/PulsatingIcon";
import { Suspense } from "react";

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

  const { isLoading, isSuccess, isError } = useVerifyQuery(
    { token: token as string },
    { skip: !token },
  );

  const [countdown, setCountdown] = useState<number>(3);

  useEffect(() => {
    if (!isSuccess) return;
    if (countdown === 0) {
      router.replace("/");
      return;
    }
    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isSuccess, countdown, router]);

  if (!token) {
    return (
      <ContentItem
        title="Invalid Link"
        description={
          "This verification link is missing or incorrect.\nPlease check your email."
        }
        icon={AlertCircle}
        color="error.main"
      />
    );
  }

  if (isLoading) {
    return (
      <ContentItem
        title="Verifying Email"
        description="Please wait while we verify your email address."
      />
    );
  }

  if (isSuccess) {
    return (
      <ContentItem
        title="Email Verified!"
        description={`Your email has been successfully verified.\nRedirecting in ${countdown} seconds...`}
        icon={CheckCircle2}
        color="success.main"
      />
    );
  }

  if (isError) {
    return (
      <ContentItem
        title="Verification Failed"
        description={
          "The verification link has expired or is invalid.\nPlease request a new one."
        }
        icon={XCircle}
        color="error.main"
      />
    );
  }

  return null;
};

const ContentItem = ({
  title,
  description,
  icon,
  color,
}: {
  title: string;
  description: string;
  icon?: React.ElementType;
  color?: string;
}) => {
  return (
    <Stack spacing={4} sx={style.container}>
      {icon ? (
        <PulsatingIcon icon={icon} color={color} />
      ) : (
        <CircularProgress size={56} />
      )}
      <Stack spacing={1}>
        <Typography variant="h5" fontWeight={700}>
          {title}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
          sx={{ whiteSpace: "pre-line" }}
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};

const style = {
  container: {
    alignItems: "center",
    textAlign: "center",
    py: 4,
  },
} satisfies IStyle;

export default VerifyPage;