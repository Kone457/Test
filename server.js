import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();


app.use("/", createProxyMiddleware({
  target: "http://145.239.65.119:20152",
  changeOrigin: true,
  ws: true 
}));

app.listen(process.env.PORT || 3000, () => {
  console.log("Proxy corriendo en Render...");
});