import { Form, Layout, } from "antd";

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Logo } from './components/Image';
import PressableCard from './components/CompletedTask';
import DeletedTasks from './components/TerminatedTasks';

import { useMutation } from '@apollo/client';
import { ADD_TODO } from './queries';


const { Header, Content } = Layout;

const TodoApp = () => {
  const [form] = Form.useForm({ form: 'TodoForm' });
  const [addTodo] = useMutation(ADD_TODO);


  const onFinish = async (values) => {
    try {
      const { task } = values;
      if (task && task.trim() !== '') {
        await addTodo({
          variables: { task },
          refetchQueries: ['MyTask'],
        });
        form.resetFields();
      }
    }
    catch (error) {
      console.error('Error adding todo:', error);
    }
  }


  return (
    <Layout>
      <Header
        style={{
          textAlign: "center",
          height: "100px",
          fontSize: "20px",
          borderRadius: "20px",
        }}
      >
        <Logo />
      </Header>

      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <TodoForm onFinish={onFinish} Form={form} />
        </div>
        <Content
          style={{
            color: "black",
            textAlign: "center",
            height: "500px",
            lineHeight: "50px",
            borderRadius: "20px",
            backgroundColor: "silver",
          }}
        >
          <TodoList />
        </Content>
      </div>
    </Layout>
  );
};

export default TodoApp;