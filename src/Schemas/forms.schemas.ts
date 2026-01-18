import { z } from "zod";
import { emailField } from "./fields.schema";

export const newsletterSchema = z.object({
  email: emailField,
});
