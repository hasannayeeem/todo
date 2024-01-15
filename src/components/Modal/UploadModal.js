import React, { useState } from "react";
import { ModalStc } from "../../styles/Modal.stc";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, List, message } from "antd";
import axios from "axios";

export default function UploadModal({ isModalOpen, handleCancel, handleOk }) {
  const [fileList, setFileList] = useState([]);

  const customRequest = ({ file, onSuccess, onError }) => {
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("API_ENDPOINT", formData)
      .then((response) => {
        const uploadedFile = response.data;
        setFileList((prevList) => [...prevList, uploadedFile]);
        onSuccess();
      })
      .catch((error) => {
        message.error("File upload failed.");
        onError();
      });
  };

  const handleRemove = (file) => {
    setFileList((prevList) => prevList.filter((item) => item.uid !== file.uid));
  };

  const fileExtension = (filename) => {
    return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
  };

  const renderFileItem = (file) => (
    <List.Item actions={[<a key="remove" onClick={() => handleRemove(file)}>Remove</a>]}>
      <List.Item.Meta
        title={file.name}
        description={`Extension: ${fileExtension(file.name)}`}
      />
    </List.Item>
  );

  return (
    <ModalStc
      title="File Upload"
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Upload
        customRequest={customRequest}
        fileList={fileList}
        showUploadList={false}
        onChange={({ fileList }) => setFileList(fileList)}
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      {fileList.length > 0 && (
        <List
          dataSource={fileList}
          renderItem={renderFileItem}
          style={{ marginTop: "16px" }}
        />
      )}
    </ModalStc>
  );
}

