import React from 'react'
import { Form, Input, Button } from 'antd'

export default function TechniqueForm({ questions, onFinish, onBack }) {
  return (
    <Form layout="vertical" onFinish={onFinish} initialValues={{}}>
      <h3>Câu hỏi kỹ thuật</h3>
      {(questions || []).map((q, idx) => (
        <Form.Item key={idx} name={`tech_q_${idx}`} label={`${idx + 1}. ${q}`} rules={[{ required: true, message: 'Vui lòng trả lời câu hỏi này' }]}>
          <Input />
        </Form.Item>
      ))}
      <Form.Item>
        <Button onClick={onBack}>Quay lại</Button>
        <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>Hoàn tất phần kỹ thuật</Button>
      </Form.Item>
    </Form>
  )
}
