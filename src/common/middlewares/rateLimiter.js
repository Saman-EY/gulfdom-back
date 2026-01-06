import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs:  40 * 1000, // 2 minutes
  // windowMs: 10 * 1000, // 10 secs
  max: 5, // max 5 requests per IP
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    // Use the first IP in x-forwarded-for
    const xff = req.headers["x-forwarded-for"];
    if (xff) return xff.split(",")[0].trim();

    // fallback to Cloudflare headers
    if (req.headers["true-client-ip"]) return req.headers["true-client-ip"];
    if (req.headers["cf-connecting-ip"]) return req.headers["cf-connecting-ip"];

    // fallback to default req.ip
    return req.ip;
  },
  message: "Too many requests, Wait 40 seconds and try again.",
});
