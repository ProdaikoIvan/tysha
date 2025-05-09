import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { INewBooking } from "../../types/booking.type";
import { useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";

interface BookingInfoProps {
  data: INewBooking;
  selectedDate: Dayjs;
  onSaveBooking: (data: INewBooking) => void;
  onCancelationBooking: () => void;
}

const BookingInfo: React.FC<BookingInfoProps> = ({
  data,
  selectedDate,
  onSaveBooking,
  onCancelationBooking,
}) => {
  const [form] = Form.useForm<INewBooking>();
  
  const onChangeBookedDays = (value: number | null): void => {
    if(value) {
      const startDate = form.getFieldValue('startDate');
      const endDate = dayjs(startDate).add(value, "day");
      form.setFieldValue('endDate', endDate);
    }
  }

  const onSave = async () => {
    try {
      await form.validateFields();
      const formData = form.getFieldsValue();
      onSaveBooking(formData);
    } catch (errorInfo) {
      console.log('Форма невалідна!:', errorInfo);
    }
  };

  const onResetFields = () => {
    console.log("reset");
  };

  const onCancel = () => {
    onCancelationBooking();
  };

  

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        name: data.name || "",
        guests: data.guests || 2,
        note: data.note || "",
        bookedDays: data.bookedDays || 1,
        prepaid: data.prepaid || false,
        startDate: data.startDate || dayjs(selectedDate),
        endDate:
          data.endDate ||
          dayjs(selectedDate)
            .add(data.bookedDays || 1, "day"),
      });
    }
  }, [selectedDate, data]);

  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
      >
        <Form.Item
          name="name"
          label="Ім’я instagram"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="guests"
          label="Кількість відпочиваючих"
          rules={[{ required: true }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="bookedDays"
          label="Кількість днів"
          rules={[{ required: true }]}
        >
          <InputNumber min={1} onChange={onChangeBookedDays}/>
        </Form.Item>

        <Form.Item label="Період Бронювання" style={{ marginBottom: 0 }}>
          <Form.Item
            name="startDate"
            style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          >
            <DatePicker format="DD MMMM YYYY" placeholder="Заїзд" disabled />
          </Form.Item>
          <Form.Item
            name="endDate"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <DatePicker format="DD MMMM YYYY" placeholder="Виїзд" disabled />
          </Form.Item>
        </Form.Item>

        <Form.Item name="note" label="Нотатки">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item name="prepaid" valuePropName="checked" label="Передплата">
          <Checkbox>Оплачено</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 20 }}>
          <Space>
            <Button type="primary" htmlType="button" onClick={onSave}>
              Зберегти
            </Button>
            <Button htmlType="button" onClick={onCancel}>
              Відмінити бронювання
            </Button>
            <Button htmlType="button" onClick={onResetFields}>
              Скинути данні
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default BookingInfo;
