import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  env: {
    ORIGINAL_CWD: process.env.ORIGINAL_CWD,
    APP_NAME: process.env.APP_NAME,
    APP_CURRENT_VERSION: process.env.APP_CURRENT_VERSION,
    APP_LATEST_VERSION: process.env.APP_LATEST_VERSION,
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig);
