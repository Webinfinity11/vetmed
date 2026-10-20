const staticPreview = process.env.STATIC_PREVIEW === '1';
const config = {
  distDir: staticPreview ? '.next-static-preview' : (process.env.VERCEL ? '.next' : '.next-kalandadze'),
  ...(staticPreview ? { output: 'export', trailingSlash: true } : {}),
};
export default config;
