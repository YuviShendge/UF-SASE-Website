import { z } from "zod";

// As specified in conventions.md
export type ApiResponse<T> = {
  data?: T;
  error?: {
    message: string;
    code?: number;
  };
};

export const successResponseSchema = z.object({
  data: z.any(),
  message: z.string(),
  meta: z.object({}).optional(), // Optional metadata, e.g., pagination details
});

export const errorResponseSchema = z.object({
  error: z.object({
    errCode: z.string(),
    errMsg: z.string(),
  }),
});

export type SuccessResponse<T> = z.infer<typeof successResponseSchema> & {
  data: T;
};
export type ErrorResponse = z.infer<typeof errorResponseSchema>;
