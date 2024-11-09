"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 py-4 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Almaram Alfaneyah Manufacturing Co. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
