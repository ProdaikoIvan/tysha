import {
  Checkbox,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
} from "antd";
import { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { ICreateBooking } from "./booking-calendar-popup.type";

interface BookingPopupProps {
  open: boolean;
  data: ICreateBooking;
  handleOk: (data: ICreateBooking) => void;
  handleCloseModal: () => void;
}

const BookingPopup: React.FC<BookingPopupProps> = ({
  open,
  data,
  handleOk,
  handleCloseModal,
}) => {
  const [form] = Form.useForm<ICreateBooking>();
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const onOk = () => {
    const formData = form.getFieldsValue();
    handleOk(formData);
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Loaded!",
        duration: 2,
      });
    }, 1000);
    setTimeout(() => {
      handleCloseModal();
    }, 2000)
    
  };

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        name: data.name,
        guests: data.guests,
        note: data.note,
        bookedDays: data.bookedDays,
        numbersOfDays: data.numbersOfDays,
        prepaid: data.prepaid,
        startDate: data.startDate,
      });
    }
  }, [data]);

  return (
    <>
      {contextHolder}
      <Modal
        open={open}
        title="Title"
        onOk={onOk}
        onCancel={handleCloseModal}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          layout="horizontal"
        >
          <Form.Item name="name" label="Input" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="guests" label="Person" rules={[{ required: true }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="numbersOfDays"
            label="Days"
            rules={[{ required: true }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name="note" label="TextArea">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item name="prepaid" label="Checkbox" valuePropName="checked">
            <Checkbox>Checkbox</Checkbox>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default BookingPopup;
