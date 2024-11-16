"use client";

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

// Mock data for products
const initialProducts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  image: `http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.prod.website-files.com%2F6630e01961a932246ebda785%2F66b31b5d3c3eeb6ae3ae2c53_Customer%2520Experience%2520(CX)%2520Design%2520in%2520Manufacturing.%2520Examples%2520%2526%2520Case%2520Studies-p-1080.webp&w=1920&q=75`,
}));

export default function ProductManagement() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [deleteProductId, setDeleteProductId] = useState(null);

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleProductsPerPageChange = (value) => {
    setProductsPerPage(Number(value));
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = (id) => {
    setDeleteProductId(id);
  };

  const confirmDelete = () => {
    if (deleteProductId) {
      setProducts(products.filter((product) => product.id !== deleteProductId));
      setDeleteProductId(null);
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <input
          type="search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full sm:w-64 border-gray-300 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#E66F3D] focus:outline-none"
        />
        <Select
          onValueChange={handleProductsPerPageChange}
          value={productsPerPage.toString()}
        >
          <SelectTrigger className="w-full sm:w-[180px] bg-white hover:bg-gray-100 focus:ring-2 focus:ring-primary">
            <SelectValue placeholder="Products per page" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem className="cursor-pointer" value="4">
              4 per page
            </SelectItem>
            <SelectItem className="cursor-pointer" value="6">
              6 per page
            </SelectItem>
            <SelectItem className="cursor-pointer" value="8">
              8 per page
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-h-[80vh] overflow-y-auto custom-scrollbar">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Image</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentProducts.map((product) => (
              <TableRow key={product.id} className="hover:bg-gray-100">
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-green-600 hover:text-green-700 hover:bg-green-100"
                  >
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-600 hover:text-red-700 hover:bg-red-100"
                    onClick={() => handleDelete(product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Button
          className="bg-main text-white hover:bg-[#da3a16]"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          className="bg-main text-white hover:bg-[#da3a16]"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
      <AlertDialog
        open={deleteProductId !== null}
        onOpenChange={() => setDeleteProductId(null)}
      >
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this product?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              product from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
