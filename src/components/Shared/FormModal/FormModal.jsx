import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";

function FormModal({
  isModalOpen,
  setIsModalOpen,
  children,
  title = "",
  handleCancel,
  bodyStyle,
  setIsLoading,
  closeIcon = <CloseCircleOutlined className="text-xl text-black" />,
  centered = false,
  width = 1000,
  closable = true,
}) {
  const closeModalHandler = () => {
    setIsModalOpen(false);
    setIsLoading(false);
  };

  return (
    <Modal
      destroyOnClose={true}
      open={isModalOpen}
      closeIcon={closeIcon}
      title={<h3 className="text-center">{title}</h3>}
      footer={null}
      onCancel={handleCancel ? handleCancel : closeModalHandler}
      bodyStyle={bodyStyle}
      centered={centered}
      width={width}
      closable={closable}
    >
      {children}
    </Modal>
  );
}

export default FormModal;
