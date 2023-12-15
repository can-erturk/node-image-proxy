export const testContentType = (res) => {
  const contentType = res.headers["content-type"];

  const acceptedFormats = /jpeg|jpg|png|gif|webp|bmp|svg|tiff/;
  return acceptedFormats.test(contentType);
};
