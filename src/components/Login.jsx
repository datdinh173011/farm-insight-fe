
import React, { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
const { Title } = Typography;

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const response = await fetch('https://isatsbangkhaosat.com:81/api/auth/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      });
      setLoading(false);
      if (response.ok) {
        const data = await response.json();
        if (data.access && data.refresh) {
          localStorage.setItem('access', data.access);
          localStorage.setItem('refresh', data.refresh);
          message.success('Đăng nhập thành công!');
          navigate('/admin');
        } else {
          message.error('Sai tài khoản hoặc mật khẩu!');
        }
      } else {
        message.error('Sai tài khoản hoặc mật khẩu!');
      }
    } catch (error) {
      setLoading(false);
      message.error('Lỗi kết nối máy chủ!');
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <Form
        form={form}
        name="login"
        className={styles.loginForm}
        onFinish={handleLogin}
        layout="vertical"
      >
        <Title level={2} className={styles.title}>Đăng nhập hệ thống</Title>
        <Form.Item
          name="username"
          label="Tài khoản"
          rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Tài khoản" size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Mật khẩu"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" size="large" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large" loading={loading} className={styles.loginBtn}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
