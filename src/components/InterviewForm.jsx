import React, { useState } from 'react'
import { Card, message, Button } from 'antd'
import GeneralInfoForm from './GeneralInfoForm'
import TechniqueFormLenMen from './TechniqueFormLenMen'
import TechniqueFormNuoiGa from './TechniqueFormNuoiGa'
import TechniqueFormSauCanxi from './TechniqueFormSauCanxi'
import TechniqueFormTrunQue from './TechniqueFormTrunQue'
import TechniqueFormUPhan from './TechniqueFormUPhan'
import TechniqueFormGocRa from './TechniqueFormGocRa'
import CommonForm from './CommonForm'

// Map tên kỹ thuật sang component
const techniqueComponentMap = {
  'Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi': TechniqueFormLenMen,
  'Nuôi gà trên đệm lót sinh học': TechniqueFormNuoiGa,
  'Nuôi sâu canxi': TechniqueFormSauCanxi,
  'Nuôi trùn quế': TechniqueFormTrunQue,
  'Ủ phân hữu cơ tại ruộng': TechniqueFormUPhan,
  'Xử lý gốc rạ bằng chế phẩm sinh học': TechniqueFormGocRa
}

const commonQuestions = [
  'Bạn có đề xuất gì để cải thiện kỹ thuật?',
  'Bạn có mong muốn được tập huấn thêm không?',
  'Bạn đánh giá hiệu quả kinh tế của kỹ thuật ra sao?'
]

export default function InterviewForm() {
  const [form] = useState(null) // form instance sẽ được truyền từ GeneralInfoForm
  const [step, setStep] = useState(1)
  const [selectedTechnique, setSelectedTechnique] = useState(null)
  const [generalInfo, setGeneralInfo] = useState({})
  const [techniqueAnswers, setTechniqueAnswers] = useState({})

  // Bước 1: Điền thông tin chung và chọn kỹ thuật
  const handleGeneralSubmit = (values) => {
    setGeneralInfo(values)
    setSelectedTechnique(values.technique)
    setStep(2)
  }

  // Bước 2: Điền form kỹ thuật
  const handleTechniqueSubmit = (values) => {
    setTechniqueAnswers(values)
    setStep(3)
  }

  // Bước 3: Điền form chung
  const handleCommonSubmit = (values) => {
    const allData = {
      ...generalInfo,
      technique: selectedTechnique,
      techniqueAnswers,
      commonAnswers: values
    }
    console.log('Full form data:', allData)
    message.success('Gửi thành công toàn bộ phiếu!')
    setStep(4)
  }

  // Render hoàn tất
  const renderDone = () => (
    <div>
      <h3>Hoàn tất</h3>
      <p>Cảm ơn — phiếu đã gửi.</p>
      <Button onClick={() => { setStep(1); setSelectedTechnique(null); setGeneralInfo({}); setTechniqueAnswers({}) }}>Bắt đầu lại</Button>
    </div>
  )

  return (
    <Card title="Phiếu phỏng vấn" style={{ width: '100%', height: '100%', borderRadius: 0 }} bodyStyle={{ height: 'calc(100% - 55px)', overflow: 'auto' }}>
      {step === 1 && (
        <GeneralInfoForm form={form} onFinish={handleGeneralSubmit} />
      )}
      {step === 2 && (() => {
        const TechniqueComponent = techniqueComponentMap[selectedTechnique]
        return TechniqueComponent ? (
          <TechniqueComponent onFinish={handleTechniqueSubmit} onBack={() => setStep(1)} />
        ) : null
      })()}
      {step === 3 && (
        <CommonForm questions={commonQuestions} onFinish={handleCommonSubmit} onBack={() => setStep(2)} />
      )}
      {step === 4 && renderDone()}
    </Card>
  )
}
