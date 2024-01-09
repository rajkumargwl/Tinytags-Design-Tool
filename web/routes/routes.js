const express = require("express");
const router = express.Router();

// Import Controllers
const shopifyApi = require("../controllers/shopifyRestApi.controller");
router.get("/test", function (req, res, next) {
  res.json({
    status: "success",
    message: "Text Success",
    data: { req_host: req.hostname, real_host: process.env.PORT },
  });
});

/**
 * Get Product Details From Shopify
 */
router.get("/get-meta-information/:product_id", shopifyApi.getMetaInformation);

// Export All Routes
module.exports = router;