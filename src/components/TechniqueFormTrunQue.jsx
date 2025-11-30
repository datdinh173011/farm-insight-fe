import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, InputNumber, Divider} from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import styles from './TechniqueFormTrunQue.module.scss';

const questions = [
  'Bạn nuôi trùn quế bao lâu rồi?',
  'Bạn sử dụng trùn quế vào mục đích gì?',
  'Bạn có gặp khó khăn về môi trường nuôi không?'
]

export default function TechniqueFormTrunQue({ form, onFinish, onBack, initialValues }) {
  const [sectionACount, setSectionACount] = useState(1);
  const [sectionBCount, setSectionBCount] = useState(1);
  const [sectionCCount, setSectionCCount] = useState(1);
  const [sectionDCount, setSectionDCount] = useState(1);

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={initialValues || {}}
      style={{ maxWidth: 1200, margin: '0 auto' }}
    >
      <div className={styles.sectionTitle}>A. Nhóm câu hỏi: Loại phụ phẩm cây trồng, vật nuôi, Quản lý phụ phẩm cây trồng vật nuôi và chất thải SAU KHI nuôi trùn quế (Từ TRƯỚC đến NAY)</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionACount }).map((_, i) => (
        <div key={i} className={styles.formSectionBg}>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'ngayBatDau']} label="Ngày bắt đầu" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><Input /></Form.Item>
            <Form.Item name={[`sectionA`, i, 'soLuaTrunQue']} label="Số lứa trùn quế đã nuôi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'soNgayMotLua']} label="Số ngày để nuôi một lứa trùn quế (bắt đầu thả sinh khối – thu hoạch, TB 60 ngày)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={[`sectionA`, i, 'tongChiPhiXayDung']} label="Tổng chi phí xây dựng khu nuôi trùn quế (bao gồm vật liệu và nhân công)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'chiPhiMuaGiong']} label="Chi phí mua giống (sinh khối trùn quế)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={[`sectionA`, i, 'chiPhiDauVaoKhac']} label="Chi phí đầu vào/vật liệu khác (cho Trùn quế)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'cachSuDungTrunQue']} label="Cách sử dụng trùn quế" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}>
              <Input placeholder="Làm thức ăn cho vật nuôi, Đem bán, Khác (ghi rõ)" />
            </Form.Item>
            <Form.Item name={[`sectionA`, i, 'tenLoaiVatNuoi']} label="Tên loài vật nuôi được nuôi bằng trùn quế" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 300px'}}><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'soLuongConVatNuoi']} label="Số lượng con vật nuôi/lứa" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={[`sectionA`, i, 'soLuaVatNuoi']} label="Số lứa (được cho ăn trùn quế)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'cachSuDungPhanTrunQue']} label="Cách sử dụng phân trùn quế" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 300px'}}>
              <Input placeholder="Bón phân cho cây trồng, Sử dụng như thuốc trừ sâu tự nhiên, Đem bán" />
            </Form.Item>
            <Form.Item name={[`sectionA`, i, 'tenCayTrongPhanTrunQue']} label="Nêu tên những loài cây trồng được bón bằng phân trùn quế (1 ô ghi 1 loại cây trồng)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 300px'}}><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'tongSoVuTrongPhanTrunQue']} label="Tổng số vụ trồng (sử dụng phân bón trùn quế/vụ; số vụ/năm x số năm)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={[`sectionA`, i, 'dienTichCayTrongPhanTrunQue']} label="Diện tích cây trồng được bón phân trùn quế (số sào/vụ x số vụ/năm)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 300px'}}><Input /></Form.Item>
          </div>
        </div>
      ))}
      <div className={styles.buttonGroup} style={{ marginTop: 16, marginBottom: 32 }}>
        <Button icon={<PlusOutlined />} onClick={() => setSectionACount(sectionACount + 1)}>Thêm phần</Button>
        {sectionACount > 1 && (
          <Button danger icon={<DeleteOutlined />} onClick={() => setSectionACount(sectionACount - 1)}>Xóa phần cuối</Button>
        )}
      </div>

      <div className={styles.sectionTitle}>B. Quản lý sử dụng thức ăn cho trùn quế & sản phẩm trùn quế thu được (1 lứa nuôi gần đây nhất)</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionBCount }).map((_, i) => (
        <div key={i} className={styles.formSectionBg}>
          <div className={styles.row}>
            <Form.Item name={[`sectionB`, i, 'loaiPhuPhamThucAn']} label="Loại phụ phẩm nông nghiệp làm thức ăn cho trùn quế" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><Input /></Form.Item>
            <Form.Item name={[`sectionB`, i, 'khoiLuongPhuPhamTB']} label="Khối lượng phụ phẩm nông nghiệp thải trung bình mỗi ngày (kg/con/ngày)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionB`, i, 'soLuongVatNuoi']} label="Số lượng từng loại vật nuôi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><Input /></Form.Item>
            <Form.Item name={[`sectionB`, i, 'soNgayLuaNuoi']} label="Số ngày/lứa nuôi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionB`, i, 'soLuaNuoi']} label="Số lứa nuôi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={[`sectionB`, i, 'tongKhoiLuongPhuPhamSX']} label="Tổng khối lượng phụ phẩm nông nghiệp sản xuất ra được (kg)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionB`, i, 'khoiLuongPhuPhamDungChoTrunQue']} label="Khối lượng phụ phẩm nông nghiệp dùng cho trùn quế (kg/ngày)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={[`sectionB`, i, 'tyLePhuPhamDungChoTrunQue']} label="Tỷ lệ % phụ phẩm nông nghiệp dùng cho trùn quế (19g/19f)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionB`, i, 'dienTichNuoiTrunQue']} label="Diện tích được sử dụng để nuôi trùn quế (m2/lứa)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><Input /></Form.Item>
            <Form.Item name={[`sectionB`, i, 'chiPhiMuaGiongB']} label="Chi phí mua giống (sinh khối trùn quế, tính cho 1m2/lứa)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionB`, i, 'soNgayDeNuoiMotLuaB']} label="Số ngày để nuôi một lứa trùn quế (ngày)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={[`sectionB`, i, 'khoiLuongTrunQueThuDuoc']} label="Khối lượng trùn quế thu được (kg/lứa)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionB`, i, 'khoiLuongPhanTrunQueThuDuoc']} label="Khối lượng phân trùn quế thu được (kg/lứa)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><Input /></Form.Item>
            <Form.Item name={[`sectionB`, i, 'congLaoDong']} label="Công lao động (số giờ/ngày)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionB`, i, 'gioQuetDonPhanChuongTruoc']} label="Khi chưa nuôi trùn quế, trong 1 ngày dành bao nhiêu giờ để quét dọn phân chuồng" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={[`sectionB`, i, 'gioDonPhanChuongSau']} label="Khi nuôi trùn quế, 1 ngày dành bao nhiêu giờ để dọn dẹp phân chuồng dùng cho trùn quế" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
        </div>
      ))}
      <div className={styles.buttonGroup} style={{ marginTop: 16, marginBottom: 32 }}>
        <Button icon={<PlusOutlined />} onClick={() => setSectionBCount(sectionBCount + 1)}>Thêm phần</Button>
        {sectionBCount > 1 && (
          <Button danger icon={<DeleteOutlined />} onClick={() => setSectionBCount(sectionBCount - 1)}>Xóa phần cuối</Button>
        )}
      </div>
      <div className={styles.sectionTitle}>C. Nhóm câu hỏi: Sử dụng phân trùn quế bón cho cây trồng SAU và TRƯỚC khi nuôi Trùn quế (Tính cho 1 VỤ cây trồng GẦN ĐÂY NHẤT)</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionCCount }).map((_, i) => (
        <div key={i} className={styles.formSection}>
          <div style={{ marginBottom: 24 }}>
            <Form.Item 
              name={[`sectionC`, i, '20a']} 
              label={<span className={styles.formLabel} style={{ fontWeight: 600 }}>20a. Nêu tên loại cây trồng được bón phân trùn quế</span>} 
              rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập loại vật nuôi' }] : []}
            > 
              <Input placeholder='Ví dụ: Lúa...' /> 
            </Form.Item>
          </div>
          <div style={{ overflowX: 'auto', marginBottom: 24 }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d9d9d9',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 150 }}>
                    Giai đoạn
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20b. Cây được trồng tháng/năm nào?
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20c. Diện tích trồng (sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    20d. Tổng số kg của từng loại phân bón được bón cho cây trồng (kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    20e. Số tiền đã chi cho mỗi loại phân bón (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20f. Số lần phun thuốc trừ sâu hóa học
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20g. Số lượng thuốc trừ sâu hóa học được sử dụng (số bình 15-20l/ sào/ vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20h. Số lượng thuốc trừ cỏ được sử dụng (số bình 15-20l/ sào/ vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20i. Số tiền đã chi cho thuốc trừ sâu hóa học (đồng/sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20j. Số tiền đã chi cho thuốc trừ cỏ hóa học (đồng/sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20k. Số tiền đã chi cho công chăm sóc cây trồng (đồng/sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20l. Số tiền đã chi cho mua hạt giống (đồng/sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20m. Cây trồng có bị sâu bệnh tấn công (có/không)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20n. Năng suất thu hoạch (kg/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20o. Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    20p. Thành tiền (đồng)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: SAU KHI BÓN PHÂN TRÙN QUẾ */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#e6f7ff' }}>
                    KHÔNG BÓN<br/>PHÂN TRÙN QUẾ
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20btruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Tháng/năm' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20ctruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Sào' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Loại phân</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân khác'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionC`, i, `sauPhan_tenPhan_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder={phanType} size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionC`, i, `sauPhan_kg_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder='kg' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Loại phân</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân khác'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionC`, i, `sauPhan_tenPhanTien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder={phanType} size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionC`, i, `sauPhan_tien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20ftruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Số lần' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20gtruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Số bình' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20htruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Số bình' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20itruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20jtruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20ktruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20ltruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20mtruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Có/Không' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20ntruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='kg' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20otruc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20ptruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                </tr>
                {/* Row 2: KHÔNG BÓN PHÂN TRÙN QUẾ */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#f6ffed' }}>
                    SAU KHI BÓN<br/>PHÂN TRÙN QUẾ
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20bsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Tháng/năm' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20csau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Sào' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Loại phân</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân trùn quế', 'Phân khác'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionC`, i, `khongPhan_tenPhan_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder={phanType} size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionC`, i, `khongPhan_kg_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder='kg' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Loại phân</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân trùn quế', 'Phân khác'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionC`, i, `khongPhan_tenPhanTien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder={phanType} size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionC`, i, `khongPhan_tien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20fsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Số lần' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20gsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Số bình' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20hsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Số bình' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20isau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20jsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20ksau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20lsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20msau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Có/Không' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20nsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='kg' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20osau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20psau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <div className={styles.buttonGroup} style={{ marginTop: 16, marginBottom: 32 }}>
        <Button icon={<PlusOutlined />} onClick={() => setSectionCCount(sectionCCount + 1)}>Thêm phần</Button>
        {sectionCCount > 1 && (
          <Button danger icon={<DeleteOutlined />} onClick={() => setSectionCCount(sectionCCount - 1)}>Xóa phần cuối</Button>
        )}
      </div>
      <div className={styles.sectionTitle}>D. Nhóm câu hỏi: Sử dụng trùn quế làm thức ăn cho vật nuôi SAU và TRƯỚC khi nuôi trùn quế (Tính cho 1 LỨA nuôi GẦN ĐÂY NHẤT)</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionDCount }).map((_, i) => (
        <div key={i} className={styles.formSection}>
          {/* Type of animal input */}
          <div style={{ marginBottom: 24 }}>
            <Form.Item 
              name={[`sectionD`, i, '21a']} 
              label={<span className={styles.formLabel} style={{ fontWeight: 600 }}>Loại vật nuôi</span>} 
              rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập loại vật nuôi' }] : []}
            > 
              <Input placeholder='Ví dụ: Gà, Vịt, Lợn...' /> 
            </Form.Item>
          </div>

          {/* Main table with two rows */}
          <div style={{ overflowX: 'auto', marginBottom: 24 }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d9d9d9',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 150 }}>
                    Giai đoạn
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21b. Số con vật nuôi (số con/lứa)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    21c. Tổng số kg của từng loại thức ăn cho lứa nuôi gần đây (kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    21d. Số tiền đã chi cho mỗi loại thức ăn cho lứa nuôi gần đây (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21e. Số tiền đã chi cho mua thuốc thú y
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21f. Vật nuôi có bị bất kỳ bệnh nào không
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21g. Bạn đánh giá sức khỏe vật nuôi như thế nào (1 = cực kỳ tệ, 10: rất tốt)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21h. Vật nuôi có phát triển nhanh hơn và/ hoặc lớn hơn
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21i. Thời gian nuôi đến khi xuất chuồng (tháng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21j. Trọng lượng trung bình khi xuất chuồng (kg/con)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21k. Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    21l. Thành tiền (đồng)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: Không sử dụng trùn quế làm thức ăn */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#e6f7ff' }}>
                    KHÔNG SỬ DỤNG<br/>TRÙN QUẾ <br/>LÀM THỨC ĂN
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29akhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='con' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Thức ăn tinh (ngô, gạo)', 'Thức ăn tổng hợp/viên', 'Thức ăn xanh'].map((thucAnType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionD`, i, `khongCanxi_tenThucAn_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder={thucAnType} size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionD`, i, `khongCanxi_kg_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder='kg' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Thức ăn tinh (ngô, gạo)', 'Thức ăn tổng hợp/viên', 'Thức ăn xanh'].map((thucAnType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionD`, i, `khongCanxi_tenThucAnTien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder={thucAnType} size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionD`, i, `khongCanxi_tien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29dkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29ekhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Có/Không' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29fkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='1-10' size='small' style={{ width: '100%' }} min={1} max={10} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29gkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Có/Không' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29hkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='tháng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29ikhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='kg' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29jkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29kkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                </tr>

                {/* Row 2: Sau khi sử dụng trùn quế làm thức ăn */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#f6ffed' }}>
                    SAU KHI SỬ DỤNG <br/>TRÙN QUẾ<br/>LÀM THỨC ĂN
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29asau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='con' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Trùn quế', 'Thức ăn tinh (ngô, gạo)', 'Thức ăn tổng hợp/viên', 'Thức ăn xanh'].map((thucAnType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionD`, i, `sauCanxi_tenThucAn_${idx}`]} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                                <Input placeholder={thucAnType} size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionD`, i, `sauCanxi_kg_${idx}`]} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                                <Input placeholder='kg' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Trùn quế', 'Thức ăn tinh (ngô, gạo)', 'Thức ăn tổng hợp/viên', 'Thức ăn xanh'].map((thucAnType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionD`, i, `sauCanxi_tenThucAnTien_${idx}`]} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                                <Input placeholder={thucAnType} size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionD`, i, `sauCanxi_tien_${idx}`]} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29dsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29esau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Có/Không' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29fsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='1-10' size='small' style={{ width: '100%' }} min={1} max={10} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29gsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Có/Không' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29hsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='tháng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29isau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='kg' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29jsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionD`, i, '29ksau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <div className={styles.buttonGroup} style={{ marginTop: 16, marginBottom: 32 }}>
        <Button icon={<PlusOutlined />} onClick={() => setSectionDCount(sectionDCount + 1)}>Thêm phần</Button>
        {sectionDCount > 1 && (
          <Button danger icon={<DeleteOutlined />} onClick={() => setSectionDCount(sectionDCount - 1)}>Xóa phần cuối</Button>
        )}
      </div>
      <Form.Item>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
          <Button onClick={onBack}>Quay lại</Button>
          <Button type="primary" htmlType="submit" style={{ minWidth: 180, fontWeight: 'bold' }}>Hoàn tất phần kỹ thuật</Button>
        </div>
      </Form.Item>
    </Form>
  )
}
