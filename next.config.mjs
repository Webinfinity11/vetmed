const staticPreview = process.env.STATIC_PREVIEW === '1';
const config = {
  distDir: process.env.LOCAL_SHOPPING === '1' ? '.next-shop-preview-final' : staticPreview ? '.next-static-preview' : (process.env.VERCEL ? '.next' : '.next-kalandadze'),
  ...(staticPreview ? { output: 'export', trailingSlash: true } : {}),
};
export default config;


