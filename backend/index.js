import "dotenv/config.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import {
  UserRouter,
  ProductsRouter,
  CartRouter,
  CategoryRouter,
  CheckoutRouter,
  OrderRouter,
} from "./routes/index.js";

const app = express();
const port = process.env.PORT ?? 3000; // TODO: Updated for environment vairables
const appRouter = express.Router();

// Middleware
app.use(morgan("combined")); // logging
app.use(express.json()); // json parsing
app.use(cors()); // cors - gotta come back to this
app.use("/api", appRouter);

// Routes
appRouter.use("/user", UserRouter);
appRouter.use("/products", ProductsRouter);
appRouter.use("/cart", CartRouter);
appRouter.use("/checkout", CheckoutRouter);
appRouter.use("/order", OrderRouter);
appRouter.use("/category", CategoryRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
