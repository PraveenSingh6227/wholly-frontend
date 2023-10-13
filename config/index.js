const dev = process.env.NODE_ENV !== "production";

export const server = dev 
    ? "https://vrcwebsolutions.com/ecom-admin/admin" 
    : "https://nest-nextjs.vercel.app";
