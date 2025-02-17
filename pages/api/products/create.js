import connectToDatabase from "@/lib/db";
import Product from "@/models/Product";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { title, description, images, category, features } = req.body;

    if (
      !title ||
      !description ||
      !images?.length ||
      !category ||
      !features?.length
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    await connectToDatabase();

    const newProduct = new Product({
      title,
      description,
      images,
      category,
      features,
    });
    await newProduct.save();

    return res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
