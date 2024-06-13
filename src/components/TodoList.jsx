import React from 'react';
import { Card, Button } from 'antd';
import { DeleteTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import { useQuery, useMutation } from '@apollo/client';

import { GET_TASK } from '../queries';
import { DELETE_TODO } from '../queries';

const TodoList = () => {
    const { data } = useQuery(GET_TASK);
    const todo = data?.tasks;
    const [deleteTodo] = useMutation(DELETE_TODO,
        {
            refetchQueries: ['MyTask'],
        });
    if (!todo || todo.length === 0) {
        return <p
            style={{
            color: "black"
        }}>No task found!</p>;
    }

    const handleDelete = async (id) => {
        try {
            await deleteTodo({
                variables: { id },
            });
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    }
    return (
        <div>
            {todo.map((todo) => (
                <Card
                    key={todo.id}
                    style={{
                        display: "block",
                        margin: "auto",
                        width: "60%",
                        backgroundImage: "url(4562472.png)",
                        borderColor: "purple"
                    }}
                    actions={[
                        <Button onClick={() => handleDelete(todo.id)}
                            danger>
                            <DeleteTwoTone />
                        </Button>,
                        <Button>
                            <CheckCircleTwoTone />
                        </Button>
                    ]}>
                    <p>
                        {todo.task}
                    </p>
                </Card>
            ))}
        </div>
    )
};
export default TodoList;