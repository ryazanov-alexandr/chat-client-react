export async function getSrcFromBase64(base64) {
  return new Promise((resolve, reject) => {
    const imageBlob = base64ToBlob(base64);
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      resolve(reader.result);
    });

    reader.addEventListener("error", () => {
      reject(new Error("Conversion error base64 to image"));
    });

    reader.readAsDataURL(imageBlob);
  });
}

export function base64ToBlob(dataURL) {
  if (!dataURL) return new Blob();

  var arr = dataURL.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      resolve(reader.result);
    });

    reader.addEventListener("error", () => {
      reject(new Error(`Error occurred reading file: ${file.name}`));
    });

    reader.readAsDataURL(file);
  });
}
