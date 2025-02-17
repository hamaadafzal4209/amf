"use client";

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AlertCircle, Upload, X, Plus, Loader2 } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";

export default function EditProduct() {
  const { id } = useParams();
  const router = useRouter();
  const [previewImages, setPreviewImages] = useState([]);
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOptionClick = (option) => {
    onChange(option);
    setOpen(false);
  };

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/products/edit/${id}`, {
            method: "GET",
          });
          if (response.ok) {
            const data = await response.json();
            setProduct(data.product);
            setFeatures(data.product.features);
            setPreviewImages(data.product.images);
          } else {
            console.error("Failed to fetch product. Status:", response.status);
            toast.error("Failed to fetch product data.");
          }
        } catch (error) {
          console.error("Error fetching product:", error);
          toast.error("An error occurred while fetching product data.");
        }
      };
      fetchProduct();
    }
  }, [id]);

  async function uploadImages(files) {
    const uploads = files.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "al-maram");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dq2ljujxe/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      return data.secure_url;
    });

    return Promise.all(uploads);
  }

  const formik = useFormik({
    initialValues: {
      title: product?.title || "",
      description: product?.description || "",
      images: product?.images || [],
      features: product?.features || [],
      category: product?.category || "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Title is required")
        .max(100, "Title must be 100 characters or less"),
      description: Yup.string()
        .required("Description is required")
        .max(1000, "Description must be 1000 characters or less"),
      images: Yup.array().min(1, "At least one image is required"),
      features: Yup.array()
        .of(Yup.string().required("Feature cannot be empty"))
        .min(1, "At least one feature is required"),
      category: Yup.string().required("Category is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const uploadedImages = await uploadImages(values.images);
        const response = await fetch(`/api/products/edit/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...values,
            images: uploadedImages,
          }),
        });

        if (response.ok) {
          toast.success("Product updated successfully!");
          router.push("/admin-ALMAF");
        } else {
          const error = await response.json();
          toast.error("Failed to update product: " + error.message);
        }
      } catch (error) {
        console.error("Error updating product:", error);
        toast.error("An error occurred while updating the product.");
      } finally {
        setLoading(false);
      }
    },
  });

  // Handle image change
  const handleImageChange = (event) => {
    const files = event.target.files;
    const imageArray = Array.from(files);
    formik.setFieldValue("images", [...formik.values.images, ...imageArray]);

    const previews = imageArray.map((file) => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(previews).then((results) => {
      setPreviewImages((prev) => [...prev, ...results]);
    });
  };

  const handleRemoveImage = (indexToRemove) => {
    setPreviewImages((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
    formik.setFieldValue(
      "images",
      formik.values.images.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleAddFeature = () => {
    setFeatures([...features, ""]);
    formik.setFieldValue("features", [...formik.values.features, ""]);
  };

  const handleFeatureChange = (value, index) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = value;
    setFeatures(updatedFeatures);
    formik.setFieldValue("features", updatedFeatures);
  };

  const handleRemoveFeature = (indexToRemove) => {
    const updatedFeatures = features.filter(
      (_, index) => index !== indexToRemove
    );
    setFeatures(updatedFeatures);
    formik.setFieldValue(
      "features",
      formik.values.features.filter((_, index) => index !== indexToRemove)
    );
  };

  if (!product)
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );

  return (
    <div className="flex items-center justify-center h-screen px-4">
      <ScrollArea
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        }}
        className="w-full p-6 sm:p-8 max-w-2xl mx-auto bg-white rounded-lg max-h-[80vh] overflow-y-auto custom-scrollbar"
      >
        <div>
          <h2 className="text-2xl pb-4 font-semibold text-main">
            Edit Product
          </h2>
        </div>
        <div>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="mx-0.5">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Product Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                className={`w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#E66F3D] focus:outline-none ${
                  formik.touched.title && formik.errors.title
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter product title"
              />
              {formik.touched.title && formik.errors.title && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {formik.errors.title}
                </p>
              )}
            </div>

            <div className="mx-0.5">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Product Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                className={`w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#E66F3D] focus:outline-none ${
                  formik.touched.description && formik.errors.description
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter product description"
              />
              {formik.touched.description && formik.errors.description && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {formik.errors.description}
                </p>
              )}
            </div>

            <div className="mx-0.5">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Product Category
              </label>
              <div className="relative mt-0">
                <div
                  className="relative w-full"
                  onClick={() => setOpen(!open)}
                  onBlur={() => setOpen(false)}
                  tabIndex={0}
                >
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between p-2 rounded border ${
                      formik.touched.category && formik.errors.category
                        ? "border-red-500"
                        : "border-gray-300"
                    } bg-white focus:outline-none`}
                  >
                    <span
                      className={
                        formik.values.category ? "text-black" : "text-gray-400"
                      }
                    >
                      {formik.values.category || "Select a category"}
                    </span>
                    <i
                      className={`fas fa-chevron-down text-xl transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>

                  {open && (
                    <ul className="absolute mt-1 w-full rounded bg-gray-50 border border-gray-300 shadow-md z-10">
                      {[
                        "Distribution Boards",
                        "Transfer Switching Panel",
                        "Control Panel",
                      ].map((option, index) => (
                        <li
                          key={index}
                          className="cursor-pointer select-none p-2 hover:bg-gray-200"
                          onClick={() => handleOptionClick(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {formik.touched.category && formik.errors.category && (
                  <p className="mt-2 text-sm text-red-600">
                    {formik.errors.category}
                  </p>
                )}
              </div>

              {formik.touched.category && formik.errors.category && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {formik.errors.category}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="features"
                className="block text-sm font-medium text-gray-700"
              >
                Product Features
              </label>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center mt-2 ml-0.5"
                >
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(e.target.value, index)}
                    placeholder={`Feature ${index + 1}`}
                    className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#E66F3D] focus:outline-none border-gray-300"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveFeature(index)}
                    className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddFeature}
                className="mt-2 flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E66F3D] text-white"
              >
                <Plus className="w-5 h-5" /> Add Feature
              </button>
              {formik.touched.features && formik.errors.features && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {formik.errors.features}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="images"
                className="block text-sm font-medium text-gray-700"
              >
                Product Images
              </label>
              <div className="mt-2">
                <label
                  htmlFor="images"
                  className="flex items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="w-8 h-8 mb-2 text-main" />
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-400">
                      PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="images"
                    name="images"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
              {formik.touched.images && formik.errors.images && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {formik.errors.images}
                </p>
              )}
              {previewImages.length > 0 && (
                <div className="mt-4 flex gap-4 flex-wrap">
                  {previewImages.map((image, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={image}
                        width={80}
                        height={80}
                        alt={`Preview ${index + 1}`}
                        className="rounded-lg w-20 h-20 object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              {loading ? (
                <Button
                  disabled
                  className="w-full py-2 rounded-lg text-white disabled:opacity-75 cursor-not-allowed font-medium bg-main hover:bg-main"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.4314 20.5461C82.6666 14.3776 73.736 10.7397 64.3028 10.1815C55.1864 9.67977 46.5777 13.3939 40.3573 19.6133C34.1369 25.8327 30.4238 34.4973 30.9796 43.6144C31.2851 46.4874 34.2604 48.6169 37.1335 48.3113C40.0065 48.0057 42.136 45.0304 42.4307 42.1579C43.1377 37.8545 45.5282 33.9455 48.9866 31.3171C54.0457 26.6194 61.9863 25.2816 69.0022 27.7436C72.6091 29.0473 75.4637 32.2724 77.1145 35.9551C78.1391 38.5048 81.2924 39.9863 83.8422 38.9617C85.7329 38.4305 88.5352 37.3581 90.7798 35.6401C92.4604 34.2409 93.1559 32.4331 93.9676 30.1759C93.7069 32.3587 93.0494 34.2586 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  updating...
                </Button>
              ) : (
                <Button className="w-full py-2 rounded-lg text-white bg-main font-medium hover:bg-main">
                  Update Product
                </Button>
              )}
            </div>
          </form>
          <Button
            onClick={() => router.back()}
            className="mt-4 w-full py-2 rounded-lg text-white font-medium bg-gray-500 hover:bg-gray-600"
          >
            Cancel
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
}
