import React from 'react'
import { Form, Input, InputNumber, Select, Row, Col, Button } from 'antd'

const { Option } = Select

const techniques = [
  'Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi',
  'Nuôi gà trên đệm lót sinh học',
  'Nuôi sâu canxi',
  'Nuôi trùn quế',
  'Ủ phân hữu cơ tại ruộng',
  'Xử lý gốc rạ bằng chế phẩm sinh học'
]

export default function GeneralInfoForm({ form, onFinish }) {
  return (
    <Form form={form} layout="vertical" initialValues={{ technique: undefined }} onFinish={onFinish}>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12}>
          <Form.Item name="fullName" label="Họ và tên người được phỏng vấn" rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}>
            <Input placeholder="Nhập họ và tên" />
          </Form.Item>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Form.Item name="dateOfBirth" label="Ngày tháng năm sinh" rules={[{ required: true, message: 'Vui lòng chọn ngày tháng năm sinh' }]}> 
            <Input type="date" style={{ width: '100%' }} />
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
  )
}
