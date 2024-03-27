import React from "react";
import AppUploader from "../../../../components/Shared/AppUploader/AppUploader";

const UploadLicense = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className=" text-yale-blue font-bold py-10 xs:text-2xl md:text-3xl ">
          Upload License
        </h1>
      </div>
      <div className="px-10">
        <AppUploader name="uploader" label="upload license" />
      </div>
    </div>
  );
};

export default UploadLicense;
