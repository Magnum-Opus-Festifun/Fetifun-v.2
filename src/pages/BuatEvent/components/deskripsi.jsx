import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

const Description = () => {
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
      <div>
        <label htmlFor="description" className="form-label">Deskripsi</label>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Tulis deskripsi event kamu di sini..."
          style={{ height: "40vh"}}
        />
      </div>
  );
};

export default Description;
