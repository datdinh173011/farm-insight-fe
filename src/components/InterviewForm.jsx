
import React, { useState } from 'react';
import { Card, message, Button, Form, Tabs } from 'antd';
import GeneralInfoForm from './GeneralInfoForm';
import TechniqueFormLenMen from './TechniqueFormLenMen';
import TechniqueFormNuoiGa from './TechniqueFormNuoiGa';
import TechniqueFormSauCanxi from './TechniqueFormSauCanxi';
import TechniqueFormTrunQue from './TechniqueFormTrunQue';
import TechniqueFormUPhan from './TechniqueFormUPhan';
import TechniqueFormGocRa from './TechniqueFormGocRa';
import CommonForm from './CommonForm';

// Map tên kỹ thuật sang component
const techniqueComponentMap = {
  'Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi': TechniqueFormLenMen,
  'Nuôi gà trên đệm lót sinh học': TechniqueFormNuoiGa,
  'Nuôi sâu canxi': TechniqueFormSauCanxi,
  'Nuôi trùn quế': TechniqueFormTrunQue,
  'Ủ phân hữu cơ tại ruộng': TechniqueFormUPhan,
  'Xử lý gốc rạ bằng chế phẩm sinh học': TechniqueFormGocRa,
};

const commonQuestions = [
  'Bạn có đề xuất gì để cải thiện kỹ thuật?',
  'Bạn có mong muốn được tập huấn thêm không?',
  'Bạn đánh giá hiệu quả kinh tế của kỹ thuật ra sao?',
];

export default function InterviewForm() {

  // Controlled form instances
  const [generalForm] = Form.useForm();
  const [step, setStep] = useState(1);
  const [generalInfo, setGeneralInfo] = useState({});
  // Tạo instance cho từng form kỹ thuật
  const [formLenMen] = Form.useForm();
  const [formNuoiGa] = Form.useForm();
  const [formSauCanxi] = Form.useForm();
  const [formTrunQue] = Form.useForm();
  const [formUPhan] = Form.useForm();
  const [formGocRa] = Form.useForm();

  // Lưu state cho từng form kỹ thuật
  const [techniqueAnswers, setTechniqueAnswers] = useState({
    'len-men-phu-pham' : {},
    'nuoi-ga-dem-lot': {},
    'nuoi-sau-canxi': {},
    'nuoi-trun-que': {},
    'u-phan-huu-co-tai-ruong': {},
    'xu-ly-goc-ra-che-pham': {},
  });
  const [activeTab, setActiveTab] = useState('len-men-phu-pham');

  // Bước 1: Điền thông tin chung
  const handleGeneralSubmit = () => {
    const values = generalForm.getFieldsValue(true);
    setGeneralInfo(values);
    setStep(2);
  };

  // Bước 2: Lưu từng form kỹ thuật
  const handleTechniqueSubmit = (techniqueKey) => {
    let values = {};
    switch (techniqueKey) {
      case 'Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi':
        values = formLenMen.getFieldsValue(true);
        break;
      case 'Nuôi gà trên đệm lót sinh học':
        values = formNuoiGa.getFieldsValue(true);
        break;
      case 'Nuôi sâu canxi':
        values = formSauCanxi.getFieldsValue(true);
        break;
      case 'Nuôi trùn quế':
        values = formTrunQue.getFieldsValue(true);
        break;
      case 'Ủ phân hữu cơ tại ruộng':
        values = formUPhan.getFieldsValue(true);
        break;
      case 'Xử lý gốc rạ bằng chế phẩm sinh học':
        values = formGocRa.getFieldsValue(true);
        break;
      default:
        break;
    }
    setTechniqueAnswers(prev => ({ ...prev, [techniqueKey]: values }));
    message.success(`Đã lưu dữ liệu kỹ thuật: ${techniqueKey}`);
  };

  // Bước 3: Điền form chung
  const handleCommonSubmit = (commonValues) => {
    // Thu thập dữ liệu từ tất cả các form kỹ thuật
    const allTechniques = {
      'Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi': formLenMen.getFieldsValue(true),
      'Nuôi gà trên đệm lót sinh học': formNuoiGa.getFieldsValue(true),
      'Nuôi sâu canxi': formSauCanxi.getFieldsValue(true),
      'Nuôi trùn quế': formTrunQue.getFieldsValue(true),
      'Ủ phân hữu cơ tại ruộng': formUPhan.getFieldsValue(true),
      'Xử lý gốc rạ bằng chế phẩm sinh học': formGocRa.getFieldsValue(true),
    };
    const payload = {
      generalInfo: generalInfo,
      technique: allTechniques,
      common: commonValues,
    };
    // Gửi về backend
    fetch('https://isatsbangkhaosat.com:81/api/forms/submissions/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(res => {
        if (res.ok) {
          message.success('Gửi thành công toàn bộ phiếu!');
          setStep(4);
        } else {
          message.error('Gửi phiếu thất bại!');
        }
      })
      .catch(() => {
        message.error('Có lỗi khi gửi phiếu!');
      });
  };

  // Render hoàn tất
  const renderDone = () => (
    <div>
      <h3>Hoàn tất</h3>
      <p>Cảm ơn — phiếu đã gửi.</p>
      <Button onClick={() => {
        setStep(1);
        setGeneralInfo({});
        setTechniqueAnswers({
          'Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi': {},
          'Nuôi gà trên đệm lót sinh học': {},
          'Nuôi sâu canxi': {},
          'Nuôi trùn quế': {},
          'Ủ phân hữu cơ tại ruộng': {},
          'Xử lý gốc rạ bằng chế phẩm sinh học': {},
        });
        generalForm.resetFields();
        formLenMen.resetFields();
        formNuoiGa.resetFields();
        formSauCanxi.resetFields();
        formTrunQue.resetFields();
        formUPhan.resetFields();
        formGocRa.resetFields();
      }}>Bắt đầu lại</Button>
    </div>
  );

  return (
    <Card title="Phiếu phỏng vấn" style={{ width: '100%', height: '100%', borderRadius: 0 }} bodyStyle={{ height: 'calc(100% - 55px)', overflow: 'auto' }}>
      {step === 1 && (
        <GeneralInfoForm form={generalForm} onFinish={handleGeneralSubmit} initialValues={generalInfo} />
      )}
      {step === 2 && (
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          type="card"
          items={Object.keys(techniqueComponentMap).map(key => ({
            key,
            label: key,
            children: React.createElement(
              techniqueComponentMap[key],
              {
                form:
                  key === 'Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi' ? formLenMen :
                  key === 'Nuôi gà trên đệm lót sinh học' ? formNuoiGa :
                  key === 'Nuôi sâu canxi' ? formSauCanxi :
                  key === 'Nuôi trùn quế' ? formTrunQue :
                  key === 'Ủ phân hữu cơ tại ruộng' ? formUPhan :
                  key === 'Xử lý gốc rạ bằng chế phẩm sinh học' ? formGocRa : null,
                onFinish: () => handleTechniqueSubmit(key),
                onBack: () => setStep(1),
                initialValues: techniqueAnswers[key],
              }
            ),
          }))}
        />
      )}
      {step === 2 && (
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Button type="primary" onClick={() => setStep(3)}>
            Tiếp tục sang phần câu hỏi chung
          </Button>
        </div>
      )}
      {step === 3 && (
        <CommonForm
          onFinish={handleCommonSubmit}
          onBack={() => setStep(2)}
          generalInfoData={generalInfo}
          techniqueData={techniqueAnswers}
        />
      )}
      {step === 4 && renderDone()}
    </Card>
  );
}
