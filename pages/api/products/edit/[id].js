import connectToDatabase from "@/lib/db";
import Product from "@/models/Product";

export default async function handler(req, res) {
  const { id } = req.query;

  await connectToDatabase();

  if (req.method === "GET") {
    try {
      const product = await Product.findById(id);

      if (!product) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
      }

      res.status(200).json({ success: true, product });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, message: error.message });
    }
  } else if (req.method === "PUT") {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!updatedProduct) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
      }

      res.status(200).json({ success: true, product: updatedProduct });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
