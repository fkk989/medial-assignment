import express from "express";
import puppeteer from "puppeteer";
import cors from "cors";
import dotenv from "dotenv";
import { getPreviewTemplate } from "./template";
import { posts } from "./utils/users";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/og-img/:postId", async (req, res) => {
  const { postId } = req.params;

  const currentPost = posts.find((elem) => elem.id === parseInt(postId));
  if (!currentPost) return res.send("no post found").status(411);

  const htmlContent = getPreviewTemplate({
    title: currentPost.title,
    content: currentPost.content,
    imageUrl: currentPost.image,
  });
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({ width: 1200, height: 630 });
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    const image = await page.screenshot({ type: "png" });

    await browser.close();

    res.set("Content-Type", "image/png");
    res.send(image);
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
