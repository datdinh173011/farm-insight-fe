
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

  // Lưu state cho từng form kỹ thuật (sử dụng label đầy đủ làm key)
  const [techniqueAnswers, setTechniqueAnswers] = useState({
    'Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi': {},
    'Nuôi gà trên đệm lót sinh học': {},
    'Nuôi sâu canxi': {},
    'Nuôi trùn quế': {},
    'Ủ phân hữu cơ tại ruộng': {},
    'Xử lý gốc rạ bằng chế phẩm sinh học': {},
  });
  const [activeTab, setActiveTab] = useState(null);

  // mapping từ giá trị select (slug) trong GeneralInfoForm => label đầy đủ
  const slugToLabel = {
    'len-men-phu-pham': 'Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi',
    'nuoi-ga-dem-lot': 'Nuôi gà trên đệm lót sinh học',
    'nuoi-sau-canxi': 'Nuôi sâu canxi',
    'nuoi-trun-que': 'Nuôi trùn quế',
    'u-phan-huu-co-tai-ruong': 'Ủ phân hữu cơ tại ruộng',
    'xu-ly-goc-ra-che-pham': 'Xử lý gốc rạ bằng chế phẩm sinh học',
  };

  // Bước 1: Điền thông tin chung
  const handleGeneralSubmit = () => {
    const values = generalForm.getFieldsValue(true);
    setGeneralInfo(values);
    // set the active technique tab based on selected technique slug
    if (values && values.technique && slugToLabel[values.technique]) {
      setActiveTab(slugToLabel[values.technique]);
    }
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

  // Bước 3: Điền form chung - callback từ CommonForm khi gửi thành công
  const handleCommonSubmit = (payload) => {
    // CommonForm đã gửi API thành công, chỉ cần chuyển sang step 4 (hoàn tất)
    // và reset toàn bộ state
    setStep(4);
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
      {step === 2 && activeTab && (
        (() => {
          const TechniqueComponent = techniqueComponentMap[activeTab];
          // choose form instance by activeTab label
          const getFormInstance = (label) => {
            switch (label) {
              case 'Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi': return formLenMen;
              case 'Nuôi gà trên đệm lót sinh học': return formNuoiGa;
              case 'Nuôi sâu canxi': return formSauCanxi;
              case 'Nuôi trùn quế': return formTrunQue;
              case 'Ủ phân hữu cơ tại ruộng': return formUPhan;
              case 'Xử lý gốc rạ bằng chế phẩm sinh học': return formGocRa;
              default: return null;
            }
          };
          const formInstance = getFormInstance(activeTab);
          return (
            <div>
              {TechniqueComponent ? (
                <TechniqueComponent
                  form={formInstance}
                  onFinish={() => {
                    handleTechniqueSubmit(activeTab);
                    setStep(3);
                  }}
                  onBack={() => setStep(1)}
                  initialValues={techniqueAnswers[activeTab]}
                />
              ) : (
                <div>Không tìm thấy form kỹ thuật đã chọn.</div>
              )}
            </div>
          );
        })()
      )}
      {/* Removed the separate continue button; TechniqueForm submit now advances to common questions */}
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
