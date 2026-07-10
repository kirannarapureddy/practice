const express = require("express");
const router = express.Router();
const Product = require("../model/product");
router.post("/posts3", (req, res) => {
    const { productName, price, category } = req.body;
    res.json({
        message: req.body
    });
});
router.post("/posts4", (req, res) => {
    const { productName, price, category } = req.body;
    res.json({
        message: req.body
    });
});
router.post("/product/create", async (req, res) => {
    const { productName, price, category } = req.body;

    const product = new Product({
        productName,
        price,
        category
    });

    await product.save();

    res.json({
        message: "Product Added Successfully"
    });
});
router.get("/getproducts", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});
router.delete("/deleteproduct/:id", async (req, res) => {
    const id = req.params.id;

    await Product.findByIdAndDelete(id);

    res.json({
        message: "Product Deleted Successfully"
    });
});
router.get("/getproduct/:id", async (req, res) => {
    const id = req.params.id;

    const product = await Product.findById(id);

    res.json(product);
});

module.exports = router;
