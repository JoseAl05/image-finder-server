const pexels = require("pexels");
const router = require("express").Router();
require('dotenv').config();
const ApiKey = process.env.PEXELS_API_KEY;

const client = pexels.createClient(ApiKey);

router.get("/getImages", async(req, res) => {
  const {
    method,
    query: { query, page },
  } = req;
  if (method !== "GET") {
    return res.status(405).send("Method not Allowed");
  }

  if (!query || !page) {
    return res.status(400).send("Bad Request");
  }

  const result = await client.photos.search({ query, page });
  const images = result.photos.map((image) => {
    return {
      photographer:image.photographer,
      photographer_url:image.photographer_url,
      src:image.src,
      alt:image.alt
    }
  });


  return res.send(images);
});

module.exports = router;
