/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.tsca.com.ph" },
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "www.essmetron.com" },
      { protocol: "https", hostname: "www.amf-sa.com" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "www.cearsistemi.it" },
      { protocol: "https", hostname: "s.alicdn.com" },
      { protocol: "http", hostname: "localhost" },
      { protocol: "https", hostname: "www.anupamelectricalcontrols.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "example.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
  },
};

export default nextConfig;
