"use client";
import { Box, Button, InputBase } from "@mui/material";
import { Mail, Send } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema } from "@/Schemas/forms.schemas";

type NewsletterFormData = z.infer<typeof newsletterSchema>;

const NewsLetterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const submitForm = async (data: NewsletterFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  };

  return (
    <Box
      component="form"
      sx={style.formSection}
      onSubmit={handleSubmit(submitForm)}
    >
      <Box sx={style.emailIcon}>
        <Mail size={18} />
      </Box>

      <Box sx={{ ml: 1, flex: 1 }}>
        <InputBase
          sx={{ flex: 1 }}
          {...register("email")}
          placeholder="Email"
          inputProps={{ "aria-label": "Email address" }}
        />
        {errors.email && (
          <Box sx={{ color: "error.main", fontSize: 12 }}>
            {errors.email.message}
          </Box>
        )}
      </Box>

      <Button
        type="submit"
        variant="contained"
        sx={style.submitButton}
        endIcon={<Send size={18} />}
        loading={isSubmitting}
      >
        Subscribe
      </Button>
    </Box>
  );
};

const style = {
  formSection: {
    display: "flex",
    alignItems: "center",
    bgcolor: "background.paper",
    borderRadius: "50px",
    padding: "4px",
    width: "100%",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:focus-within": {
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    },
  },
  submitButton: {
    borderRadius: "50px",
    px: 2,
    py: 1.5,
    minWidth: "auto",
  },
  emailIcon: {
    color: "text.secondary",
    display: "flex",
    alignItems: "center",
    pl: 2,
    pr: 1,
  },
} satisfies IStyle;

export default NewsLetterForm;
