import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { deleteProduct, fetchProducts } from "@/lib/productsSlice";
import { useRouter } from "next/navigation";

export default function ProductManagement() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    products = [],
    loading,
    error,
  } = useSelector((state) => state.products);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [deleteProductId, setDeleteProductId] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const handleEdit = (id) => {
    router.push(`/product/edit/${id}`);
  };

  const handleDelete = (id) => {
    setDeleteProductId(id);
  };

  const confirmDelete = () => {
    if (deleteProductId) {
      dispatch(deleteProduct(deleteProductId));
      setDeleteProductId(null);
    }
  };

  const handleLearnMoreClick = (productId) => {
    router.push(`/product-detail/${productId}`);
  };

  return (
    <div className="container mx-auto">
      <div className="space-y-4">
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
              <SelectItem value="4">4 per page</SelectItem>
              <SelectItem value="6">6 per page</SelectItem>
              <SelectItem value="8">8 per page</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-6 min-h-[50vh]">
            <div className="loader"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-600 py-6">{error}</div>
        ) : filteredProducts?.length === 0 ? (
          <div className="select-none text-center text-xl text-gray-600 py-6">
            <p>No products found.</p>
            <p className="text-lg text-gray-400">
              Try adjusting your search or add new products.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg shadow-lg bg-white">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="min-w-full divide-y divide-gray-200 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Image
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentProducts.map((product) => (
                    <tr key={product._id} className="hover:bg-gray-50">
                      <td
                        onClick={() => handleLearnMoreClick(product._id)}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                      >
                        {product.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-xs font-semibold rounded-full bg-gray-100">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Image
                          width={500}
                          height={500}
                          src={product.images[0]}
                          alt={product.title}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleEdit(product._id)}
                          className="text-green-600 hover:text-green-900 transition-all"
                        >
                          <Pencil className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="ml-3 text-red-600 hover:text-red-900 transition-all"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mt-4">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-main text-white hover:bg-[#da3a16]"
          >
            Previous
          </Button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-main text-white hover:bg-[#da3a16]"
          >
            Next
          </Button>
        </div>

        <AlertDialog
          open={deleteProductId !== null}
          onOpenChange={() => setDeleteProductId(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to delete this product?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone.
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
    </div>
  );
}
