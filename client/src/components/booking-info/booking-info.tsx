import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Space,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { IBooking } from "../../types/booking.type";
import { useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";

interface BookingInfoProps {
  data: IBooking;
  selectedDate: Dayjs;
  onSaveBooking: (data: IBooking) => void;
  onDeleteBooking: (id: string) => void;
}

const BookingInfo: React.FC<BookingInfoProps> = ({
  data,
  selectedDate,
  onSaveBooking,
  onDeleteBooking: onCancelationBooking,
}) => {
  const [form] = Form.useForm<IBooking>();

  const onChangeBookedDays = (value: number | null): void => {
    if (value) {
      const startDate = form.getFieldValue("startDate");
      const endDate = dayjs(startDate).add(value, "day");
      form.setFieldValue("endDate", endDate);
    }
  };

  const onSave = async () => {
    try {
      await form.validateFields();
      const formData = form.getFieldsValue();
      onSaveBooking(formData);
    } catch (errorInfo) {
      console.log("Форма невалідна!:", errorInfo);
    }
  };

  const onResetFields = () => {
    setDefaultData();
  };

  const onCancel = () => {
    const id = form.getFieldValue("id");
    onCancelationBooking(id);
  };

  const setDefaultData = () => {
    if (data) {
      form.setFieldsValue({
        id: data.id,
        name: data.name || "",
        guests: data.guests || 2,
        note: data.note || "",
        bookedDays: data.bookedDays || 1,
        prepaid: data.prepaid || false,
        startDate: dayjs(data.startDate || selectedDate),
        endDate: data.endDate
          ? dayjs(data.endDate)
          : dayjs(selectedDate).add(data.bookedDays || 1, "day"),
      });
    }
  };

  useEffect(() => {
    setDefaultData();
  }, [selectedDate, data]);

  return (
    <div>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
      >
        <Form.Item name="id" noStyle>
          <Input type="hidden" />
        </Form.Item>
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
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item
          name="bookedDays"
          label="Кількість днів"
          rules={[{ required: true }]}
        >
          <InputNumber min={1} onChange={onChangeBookedDays} />
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
        <Form.Item wrapperCol={{ offset: 8, span: 20 }}>
          <Space>
            <Button type="primary" htmlType="button" onClick={onSave}>
              {data.id ? "Оновити" : "Створити"}
            </Button>
            <Popconfirm
              title="Видалити бронювання?"
              onConfirm={onCancel}
              okText="Видалити"
              cancelText="Ні"
            >
              <Button danger>Відмінити</Button>
            </Popconfirm>
            <Button
              htmlType="button"
              onClick={onResetFields}
              disabled={!data.id}
            >
              Скинути данні
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BookingInfo;
