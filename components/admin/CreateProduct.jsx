"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AlertCircle, Upload, X } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";

export default function CreateProduct() {
  const [previewImages, setPreviewImages] = useState([]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      images: [],
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Title is required")
        .max(100, "Title must be 100 characters or less"),
      description: Yup.string()
        .required("Description is required")
        .max(500, "Description must be 500 characters or less"),
      images: Yup.array()
        .of(Yup.mixed())
        .required("At least one image is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission here
    },
  });

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

  return (
    <ScrollArea className="w-full p-6 sm:p-8 max-w-2xl mx-auto bg-white shadow-lg rounded-lg max-h-[80vh] overflow-y-auto custom-scrollbar">
      <div>
        <h2 className="text-2xl pb-4 font-semibold text-main">
          Create New Product
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
                    <span className="font-medium">Click to upload</span> or drag
                    and drop
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
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg text-white font-medium"
              style={{ backgroundColor: "#E66F3D" }}
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </ScrollArea>
  );
}
