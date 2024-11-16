"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
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

import { Edit, Trash2 } from "lucide-react";
import Image from "next/image";

const initialData = [
  { id: 1, name: "John Doe", image: "/assets/banner-3.jpg" },
  { id: 2, name: "Jane Smith", image: "/assets/banner-3.jpg" },
  { id: 3, name: "Bob Johnson", image: "/assets/banner-3.jpg" },
  { id: 4, name: "Alice Brown", image: "/assets/banner-3.jpg" },
];

export default function AllProducts() {
  const [data, setData] = useState(initialData);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
  };

  const confirmDelete = () => {
    setData((prevData) =>
      prevData.filter((item) => item.id !== itemToDelete.id)
    );
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setItemToDelete(null);
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="rounded-sm object-cover shadow-sm w-28 h-14 "
                />
              </TableCell>
              <TableCell className="space-x-2">
                <Button variant="ghost">
                  <Edit className="w-4 h-4 text-gray-600" />
                </Button>
                <Button variant="ghost" onClick={() => handleDeleteClick(item)}>
                  <Trash2 className="w-4 h-4 text-red-600" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Delete Confirmation Popup */}
      {itemToDelete && (
        <AlertDialog open={!!itemToDelete} onOpenChange={cancelDelete}>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to delete?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. The item{" "}
                <strong>{itemToDelete.name}</strong> will be permanently
                deleted.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={cancelDelete}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={confirmDelete}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}
