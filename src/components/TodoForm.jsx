 import { Input, Button, Card, Form, List } from 'antd';

const TodoForm = ({ onFinish, form }) => {
  return (
    <Card
      style={{
        backgroundImage: "url('4562472.png')",
        textAlign: "center",
        borderRadius: "20px",
        border: "0px",
        backgroundSize: "cover"
      }}
    >
      <Form
        form={form}
        onFinish={onFinish}
        style={{
          textAlign: "center",
          margin: "75px 75px 0 75px"
        }}
      >
        <Form.Item
          name="task"
          rules={[{ required: true, message: "Please enter a task!" }]}
        >
          <Input placeholder="Add a new task..." />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "black",
              margin: "15px 0 0 0 ",
            }}
          >
            Create Task
          </Button>
        </Form.Item>
      </Form>
      <List>

      </List>
    </Card>
  );
};
export default TodoForm;