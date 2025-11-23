import React from 'react'
import { Form, Input, Button } from 'antd'

const questions = [
  'Bạn xử lý gốc rạ bằng loại chế phẩm nào?',
  'Bạn thấy hiệu quả xử lý gốc rạ ra sao?',
  'Bạn có gặp khó khăn về chi phí không?'
]

export default function TechniqueFormGocRa({ onFinish, onBack }) {
  return (
    <Form layout="vertical" onFinish={onFinish} initialValues={{}}>
      <h3>Kỹ thuật: Xử lý gốc rạ bằng chế phẩm sinh học</h3>
      {questions.map((q, idx) => (
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
