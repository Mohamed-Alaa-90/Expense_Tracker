import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import ExpressMongoSanitize from "express-mongo-sanitize";
import limiter from "./middleware/rateLimiter.js";
import { notFound } from "./middleware/notFound.js";
import morgan from "morgan";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
dotenv.config();

const app = express();

// -> security middleware
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(ExpressMongoSanitize());
app.use(limiter);

// -> global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//-> route
//app.use("/api/v1", routes);

// -> not found middleware
app.use(notFound);
app.use(errorMiddleware);

export default app;
