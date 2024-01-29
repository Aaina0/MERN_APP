const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 character" })
    .max(255, { message: "Name must be at least of 255 character" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "email must be at least of 3 character" })
    .max(255, { message: "email must be at least of 255 character" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "phone must be at least of 3 character" })
    .max(20, { message: "phone must be at least of 255 character" }),
  password: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(7, { message: "Name must be at least of 3 character" })
    .max(1024, { message: "Name must be at least of 255 character" }),
});

module.exports= signupSchema;
