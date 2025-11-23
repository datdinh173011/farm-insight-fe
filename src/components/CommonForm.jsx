import React from 'react'
import { Form, Input, Button } from 'antd'

export default function CommonForm({ questions, onFinish, onBack }) {
  return (
    <Form layout="vertical" onFinish={onFinish} initialValues={{}}>
      <h3>Nhóm câu hỏi chung</h3>
      {(questions || []).map((q, idx) => (
        <Form.Item key={idx} name={`common_q_${idx}`} label={`${idx + 1}. ${q}`} rules={[{ required: true, message: 'Vui lòng trả lời câu hỏi này' }]}>
          <Input />
        </Form.Item>
      ))}
      <Form.Item>
        <Button onClick={onBack}>Quay lại</Button>
        <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>Gửi toàn bộ phiếu</Button>
      </Form.Item>
    </Form>
  )
}
