import { useState } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import './uploader.scss';

function FileUpload() {
  const [images, setImages] = useState([]);
  const [fileNames, setFileNames] = useState([]);

  const handleImageChange = ({ target: { files } }) => {
    const selectedImages = Array.from(files).map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...selectedImages]);
    setFileNames((prevFileNames) => [...prevFileNames, ...Array.from(files).map((file) => file.name)]);
  };

  const deleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setFileNames((prevFileNames) => prevFileNames.filter((_, i) => i !== index));
  };

  return (
    <div>
      <main>
        <form action="">
        <label htmlFor="file-upload" className="upload-button">
          <input
            id="file-upload"
            type="file"
            accept='image/*'
            multiple
            hidden
            onChange={handleImageChange}
          />
          <MdCloudUpload color='#1475cf' size={60} />
          <p>Browse Files to Upload</p>
        </label>
        </form>
      </main>
      <section>
      <div className="image-preview">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="image-container">
                <img src={image} width={150} height={150} alt={fileNames[index]} />
                <MdDelete onClick={() => deleteImage(index)} />
              </div>
            ))
          ) : (
            <div className="upload-placeholder">
              {/* Jika ingin gunakan icon saja */}
              {/* <MdCloudUpload color='#1475cf' size={60} />
              <p>Browse Files to Upload</p> */}
            </div>
          )}
        </div>
        
      </section>
    </div>
  );
}

export default FileUpload;
