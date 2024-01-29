// ImageUpload.jsx
import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const ImageUpload = ({ onImageChange }) => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleChange = (info) => {
    console.log('*****',info)
    if (info.file.status === 'done') {
      const uploadedImageUrl = info.file.response.imageUrl;
      setImageUrl(uploadedImageUrl);
      onImageChange(uploadedImageUrl);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };


  return (
    <Upload
      name="image"
      showUploadList={false}
      onChange={handleChange}
      beforeUpload={() => false}
    >
      <Button icon={<UploadOutlined />}>Upload Image</Button>
      {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '10px' }} />}
    </Upload>
  );
};

export default ImageUpload;
