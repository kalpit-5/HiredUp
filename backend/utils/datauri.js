// import DataUriParser from "datauri/parser.js"

// import path from "path";

// const getDataUri = (file) => {
//     const parser = new DataUriParser();
//     const extName = path.extname(file.originalname).toString();
//     return parser.format(extName, file.buffer);
// }

// export default getDataUri;

import DataUriParser from "datauri/parser.js";
import path from "path";

// Default logo URL
const DEFAULT_LOGO_URL = "https://photosking.net/wp-content/uploads/2024/05/no-dp-pic_23.webp";

const getDataUri = (file) => {
  if (!file) {
    // Return default logo if no file is uploaded
    return DEFAULT_LOGO_URL;
  }

  const parser = new DataUriParser();
  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
};

export default getDataUri;
