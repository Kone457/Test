import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();


app.use("/", createProxyMiddleware({
  target: "http://ip:puerto",
  changeOrigin: true,
  ws: true 
}));

app.listen(process.env.PORT || 3000, () => {
  console.log("Proxy corriendo en Render...");
});