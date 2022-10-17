const {
  getProductServices,
  postProductServices,
  updateProductService,
  bulkUpdateProductService,
} = require("../services/product.services");

// product get controller
exports.getProduct = async (req, res, next) => {
  try {
    const products = await getProductServices();

    res.status(200).json({ status: "success", data: products });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Can't get the data!!",
      error: error.message,
    });
  }
};

// product post controller
exports.createProduct = async (req, res, next) => {
  //    save or create
  try {
    const result = await postProductServices(req.body);

    result.logger();

    res.status(200).send({
      status: "successful",
      message: "Product inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "data is not inserted",
      error: error.message,
    });
  }
};

// product updateOne with patch controller
exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
      const result = await updateProductService(id, req.body);

      res.status(200).send({
        status: "successful",
        message: "Successfully updated the product.",
      });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Couldn't update the product.",
      error: error.message,
    });
  }
};


// bulk update
exports.bulkUpdateProduct = async (req, res, next) => {
  try {
      const result = await bulkUpdateProductService(req.body);

      res.status(200).send({
        status: "successful",
        message: "Successfully updated the product.",
      });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Couldn't update the product.",
      error: error.message,
    });
  }
};
