
import React, { useEffect } from 'react';
import { Form, Input, Divider, Select, Row, Col, Button, DatePicker } from 'antd';
import styles from './GeneralInfoForm.module.scss';


const { Option } = Select;

const techniques = [
  'len-men-phu-pham',
  'nuoi-ga-dem-lot',
  'nuoi-sau-canxi',
  'nuoi-trun-que',
  'u-phan-huu-co-tai-ruong',
  'xu-ly-goc-ra-che-pham'
];


export default function GeneralInfoForm({ form, onFinish, initialValues }) {
  useEffect(() => {
    if (form && initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [form, initialValues]);

  return (
    <div className={styles.generalInfoWrapper}>
      <div className={styles.generalInfoForm}>
        <div className={styles.sectionTitle}>Thông tin chung</div>
        <Divider className={styles.divider} />
        <Form
          form={form}
          layout="vertical"
          initialValues={initialValues || { technique: undefined }}
          onFinish={onFinish}
        >
          <Row gutter={16}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item name="fullName" label="Họ và tên người được phỏng vấn" rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}> 
                <Input placeholder="Nhập họ và tên" />
              </Form.Item>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <Form.Item name="dateOfBirth" label="Ngày tháng năm sinh" rules={[{ required: true, message: 'Vui lòng chọn ngày tháng năm sinh' }]}> 
                <DatePicker format="YYYY/MM/DD" style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <Form.Item name="phone" label="Số điện thoại liên hệ" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }, { pattern: /^\+?\d{7,15}$/, message: 'Số điện thoại không hợp lệ (chỉ gồm chữ số, có thể có +)' }]}> 
                <Input placeholder="Ví dụ: +84901234567" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={8}>
              <Form.Item name="village" label="Hiện nay đang sinh sống tại - Thôn" rules={[{ required: true, message: 'Vui lòng nhập thôn' }]}> 
                <Input placeholder="Thôn" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Form.Item name="commune" label="Xã" rules={[{ required: true, message: 'Vui lòng nhập xã' }]}> 
                <Input placeholder="Xã" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Form.Item name="province" label="Tỉnh" rules={[{ required: true, message: 'Vui lòng nhập tỉnh' }]}> 
                <Input placeholder="Tỉnh" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="technique" label="Gia đình bạn tham gia, triển khai kỹ thuật nào" rules={[{ required: true, message: 'Vui lòng chọn một kỹ thuật' }]}> 
            <Select placeholder="Chọn kỹ thuật">
              {techniques.map((t, idx) => (
                <Option key={idx} value={t}>{t}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Tiếp tục</Button>
            <Button style={{ marginLeft: 8 }} onClick={() => form.resetFields()}>Đặt lại</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
