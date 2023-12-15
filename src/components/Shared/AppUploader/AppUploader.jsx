import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
const AppUploader = ({ className, name, label, status = "uplaoding" }) => {
  return (
    <div>
      <Dragger
        {...props}
        className={className}
        name={name}
        label={label}
        status={status}
      >
        <div className="flex-cols justify-center ">
          <p className="">
            <InboxOutlined />
          </p>
          <p className="text-sm">Upload Licensee</p>
        </div>
      </Dragger>
    </div>
  );
};

export default AppUploader;
