import { imageUpload } from '@/api/uploadApi.jsx';

const IMG_URL = import.meta.env.VITE_API_IMGURL;

class CustomUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return new Promise((resolve, reject) => {
      this.loader.file
        .then((file) => {
          imageUpload(file, true)
            .then((result) => {
              console.log(result);

              if (result && result.url) {
                resolve({
                  default: `${IMG_URL}${result.url}`,
                });
              } else {
                reject('Upload failed: Invalid result from server');
              }
            })
            .catch((error) => {
              console.error('Upload failed:', error);
              reject(error);
            });
        })
        .catch((error) => {
          console.error('File loader error:', error);
          reject(error);
        });
    });
  }

  abort() {
    console.log('Upload aborted.');
  }
}

export function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new CustomUploadAdapter(loader);
  };
}
