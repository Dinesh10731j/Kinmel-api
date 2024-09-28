import productModel from "../Model/product.model.js";
const addProduct = async (req, res) => {
  try {
    const {
      productCategory,
      productDescription,
      productImage,
      productName,
      productPrice,
      sellerId
    } = req.body;

    const products = await productModel.create({
      productCategory,
      productDescription,
      productImage,
      productName,
      productPrice,
      sellerId
    });

    if (!products) {
      return res
        .status(400)
        .json({ msg: "Failed to create product", success: false });
    }

    res.status(201).json({ msg: "Product added succesfully", success: true });
  } catch (err) {
    res
      .status(500)
      .json({
        msg: "Internal server error",
        success: false,
        error: err.message,
      });
  }
};



export default addProduct;
