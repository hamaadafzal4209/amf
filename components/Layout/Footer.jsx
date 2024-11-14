"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 py-4 px-6 border-t border-gray-400">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Almaram Alfaneyah Manufacturing Co. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
