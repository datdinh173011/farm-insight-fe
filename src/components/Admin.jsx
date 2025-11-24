

import React, { useEffect } from 'react';
import { Typography, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from './Admin.module.scss';
const { Title } = Typography;

export default function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    const access = localStorage.getItem('access');
    if (!access) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    navigate('/login');
  };
  return (
    <div className={styles.adminWrapper}>
      <div className={styles.topRight}>
        <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout} className={styles.logoutBtn}>
          Đăng xuất
        </Button>
      </div>
      <Title level={2} className={styles.title}>Chào mừng đến trang Quản trị</Title>
      <div className={styles.content}>Bạn đã đăng nhập thành công!</div>
    </div>
  );
}
