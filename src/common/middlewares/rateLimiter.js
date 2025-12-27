import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  // windowMs: 10 * 1000, // 10 secs
  max: 2, // max 5 requests per IP
  message: "Too many requests, Wait 2 minutes and try again.",
});
