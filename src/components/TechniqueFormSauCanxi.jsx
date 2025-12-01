
import React, { useState } from 'react';
import { Form, Input, InputNumber, Radio, Button, Divider, Select } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './TechniqueFormSauCanxi.module.scss';

export default function TechniqueFormSauCanxi({ form, onFinish, onBack, initialValues }) {
  const [sectionACount, setSectionACount] = useState(1);
  const [sectionBCount, setSectionBCount] = useState(1);
  const [sectionCCount, setSectionCCount] = useState(1);
  const [sectionDCount, setSectionDCount] = useState(1);

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      value={initialValues || {}}
      style={{ maxWidth: 1200, margin: '0 auto' }}
    >
      <div className={styles.sectionTitle}>A. Nhóm câu hỏi: Loại phụ phẩm cây trồng, vật nuôi, Quản lý phụ phẩm cây trồng vật nuôi và chất thải SAU KHI nuôi Sâu canxi (Từ TRƯỚC đến NAY).</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionACount }).map((_, i) => (
        <div key={i} className={styles.formSectionBg}>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <Form.Item name={['sectionA', i, 'ngayBatDau']} label={<span style={{whiteSpace:'nowrap'}}>Ngày bắt đầu</span>} rules={[]} style={{flex:'1 1 260px'}}><Input /></Form.Item>
            <Form.Item name={['sectionA', i, 'soLuaSâuCanxi']} label={<span style={{whiteSpace:'nowrap'}}>Số lứa Sâu canxi đã nuôi</span>} rules={[]} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <Form.Item name={['sectionA', i, 'soNgayMotLua']} label={<span style={{whiteSpace:'nowrap'}}>Số ngày để nuôi một lứa Sâu canxi (TB 45 ngày)</span>} rules={[]} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={['sectionA', i, 'tongChiPhiXayDung']} label={<span style={{whiteSpace:'nowrap'}}>Tổng chi phí xây dựng khu nuôi Sâu canxi (bao gồm vật liệu và nhân công)</span>} rules={[]} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <Form.Item name={['sectionA', i, 'chiPhiMuaGiong']} label={<span style={{whiteSpace:'nowrap'}}>Chi phí mua giống (trứng Sâu canxi)/tổng số lứa</span>} rules={[]} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={['sectionA', i, 'chiPhiDauVaoKhac']} label={<span style={{whiteSpace:'nowrap'}}>Chi phí đầu vào/vật liệu khác (cho nuôi sâu canxi)</span>} rules={[]} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <Form.Item name={['sectionA', i, 'cachSuDungSâuCanxi']} label={<span style={{whiteSpace:'nowrap'}}>Cách sử dụng Sâu canxi</span>} rules={[]} style={{flex:'1 1 260px'}}>
              <Select
                placeholder='Chọn cách sử dụng Sâu canxi'
                options={[
                  {value: 'Làm thức ăn cho vật nuôi', label: 'Làm thức ăn cho vật nuôi'},
                  {value: 'Đem bán', label: 'Đem bán'},
                  {value: 'Khác', label: 'Khác'},
                ]}
              />
              {/* <Input placeholder="Làm thức ăn cho vật nuôi, Đem bán, Khác (ghi rõ)" /> */}
            </Form.Item>
            <Form.Item name={['sectionA', i, 'tenLoaiVatNuoi']} label={<span style={{whiteSpace:'nowrap'}}>Tên loài vật nuôi được nuôi bằng Sâu canxi</span>} rules={[]} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          </div>
          <div className={styles.groupedBg} style={{display:'flex',gap:16,marginBottom:8}}>
            <Form.Item name={['sectionA', i, 'soLuongConVatNuoi']} label={<span style={{whiteSpace:'nowrap'}}>Số lượng con vật nuôi/lứa</span>} rules={[]} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={['sectionA', i, 'soLuaVatNuoi']} label={<span style={{whiteSpace:'nowrap'}}>Số lứa (được cho ăn Sâu canxi)</span>} rules={[]} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
          <div className={styles.groupedBg} style={{display:'flex',gap:16,marginBottom:8}}>
            <Form.Item name={['sectionA', i, 'cachSuDungPhanSâuCanxi']} label={<span style={{whiteSpace:'nowrap'}}>Cách sử dụng phân Sâu canxi</span>} rules={[]} style={{flex:'1 1 260px'}}>
              <Select 
                placeholder='Chọn cách sử dụng phân Sâu canxi'
                options={[
                  {value: 'Bón phân cho cây trồng', label: 'Bón phân cho cây trồng'},
                  {value: 'Sử dụng thuốc trừ sâu tự nhiên', label: 'Sử dụng thuốc trừ sâu tự nhiên'},
                  {value: 'Đem bán', label: 'Đem bán'},
                ]}
              />
              {/* <Input placeholder="Bón phân cho cây trồng, Sử dụng như thuốc trừ sâu tự nhiên, Đem bán" /> */}
            </Form.Item>
            <Form.Item name={['sectionA', i, 'tenCayTrongPhanSâuCanxi']} label={<span style={{whiteSpace:'nowrap'}}>Tên những loài cây trồng được bón bằng phân Sâu canxi (1 ô ghi 1 loại cây trồng)</span>} rules={[]} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          </div>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <Form.Item name={['sectionA', i, 'tongSoVuTrongPhanSâuCanxi']} label={<span style={{whiteSpace:'nowrap'}}>Tổng số vụ trồng (sử dụng phân bón Sâu canxi; số vụ/năm)</span>} rules={[]} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={['sectionA', i, 'dienTichCayTrongPhanSâuCanxi']} label={<span style={{whiteSpace:'nowrap'}}>Diện tích cây trồng được bón phân Sâu canxi (số sào/vụ)</span>} rules={[]} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          </div>
        </div>
      ))}
      <div className={styles.buttonGroup} style={{ marginTop: 16, marginBottom: 32 }}>
        <Button icon={<PlusOutlined />} onClick={() => setSectionACount(sectionACount + 1)}>Thêm phần</Button>
        {sectionACount > 1 && (
          <Button danger icon={<DeleteOutlined />} onClick={() => setSectionACount(sectionACount - 1)}>Xóa phần cuối</Button>
        )}
      </div>

      <div className={styles.sectionTitle}>B. Nhóm câu hỏi: Quản lý sử dụng thức ăn cho Sâu canxi & sản phẩm Sâu canxi thu được (Tính cho 1 LỨA nuôi GẦN ĐÂY NHẤT)</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionBCount }).map((_, i) => (
        <div key={i} className={styles.formSectionBg}>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <Form.Item name={['sectionB', i, 'loaiPhuPhamThucAn']} label="Loại phụ phẩm nông nghiệp làm thức ăn cho Sâu canxi" rules={[]} style={{flex:'1 1 260px'}}><Input /></Form.Item>
            <Form.Item name={['sectionB', i, 'khoiLuongPhuPhamTB']} label="Khối lượng phụ phẩm nông nghiệp thải trung bình mỗi ngày" rules={[]} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          </div>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <Form.Item name={['sectionB', i, 'soLuongVatNuoi']} label="Số lượng từng loại vật nuôi" rules={[]} style={{flex:'1 1 260px'}}><Input /></Form.Item>
            <Form.Item name={['sectionB', i, 'soNgayLuaNuoi']} label="Số ngày/lứa nuôi" rules={[]} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <Form.Item name={['sectionB', i, 'soLuaNuoi']} label="Số lứa nuôi" rules={[]} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={['sectionB', i, 'tongKhoiLuongPhuPhamSX']} label="Tổng khối lượng phụ phẩm nông nghiệp sản xuất ra được (kg/ngày)" rules={[]} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          </div>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <Form.Item name={['sectionB', i, 'khoiLuongPhuPhamDungChoSâuCanxi']} label="Khối lượng phụ phẩm nông nghiệp dùng cho sâu canxi (kg/ngày)" rules={[]} style={{flex:'1 1 260px'}}><Input /></Form.Item>
            <Form.Item name={['sectionB', i, 'tyLePhuPhamDungChoSâuCanxi']} label="Tỷ lệ % phụ phẩm nông nghiệp dùng cho sâu canxi (câu 25g/25f)" rules={[]} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          </div>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <Form.Item name={['sectionB', i, 'dienTichNuoiSâuCanxi']} label="Diện tích được sử dụng để nuôi sâu canxi (m2/lứa)" rules={[]} style={{flex:'1 1 260px'}}><Input /></Form.Item>
            <Form.Item name={['sectionB', i, 'chiPhiMuaGiongB']} label="Chi phí mua giống (trứng sâu canxi, tính cho 1m2/lứa)" rules={[]} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          </div>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <Form.Item name={['sectionB', i, 'soNgayDeNuoiMotLuaB']} label="Số ngày để nuôi một lứa sâu canxi (ngày)" rules={[]} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={['sectionB', i, 'khoiLuongSâuCanxiThuDuoc']} label="Khối lượng sâu canxi thu được (kg/lứa)" rules={[]} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          </div>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <Form.Item name={['sectionB', i, 'khoiLuongPhanSâuCanxiThuDuoc']} label="Khối lượng phân sâu canxi thu được (kg/lứa)" rules={[]} style={{flex:'1 1 260px'}}><Input /></Form.Item>
            <Form.Item name={['sectionB', i, 'congLaoDong']} label="Công lao động (số giờ/ngày)" rules={[]} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          </div>
        </div>
      ))}
      <div className={styles.buttonGroup} style={{ marginTop: 16, marginBottom: 32 }}>
        <Button icon={<PlusOutlined />} onClick={() => setSectionBCount(sectionBCount + 1)}>Thêm phần</Button>
        {sectionBCount > 1 && (
          <Button danger icon={<DeleteOutlined />} onClick={() => setSectionBCount(sectionBCount - 1)}>Xóa phần cuối</Button>
        )}
      </div>

      <div className={styles.sectionTitle}>C. Nhóm câu hỏi: Sử dụng phân sâu canxi bón cho cây trồng SAU và TRƯỚC khi nuôi sâu canxi (Tính cho 1 VỤ cây trồng GẦN ĐÂY NHẤT)</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionCCount }).map((_, i) => (
        <div key={i} className={styles.formSection}>
          {/* Crop name input */}
          <div style={{ marginBottom: 24 }}>
            <Form.Item 
              name={['sectionC', i, 'tenCayTrong']} 
              label={<span className={styles.formLabel} style={{ fontWeight: 600 }}>Tên loại cây trồng được bón phân sâu canxi</span>} 
              rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập tên cây trồng' }] : []}
            > 
              <Input placeholder='Ví dụ: Lúa, Rau cải...' /> 
            </Form.Item>
          </div>

          {/* Table with two rows: không bón and sau bón */}
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
                    26b. Cây được trồng tháng/năm nào?
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    26c. Diện tích trồng (sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    26d. Khối lượng của từng loại phân bón được bón cho cây trồng (kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    26e. Số tiền đã chi cho mỗi loại phân bón (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    26f. Số lần phun thuốc trừ sâu hóa học
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    26g. Số lượng thuốc trừ sâu hóa học được sử dụng (số bình 15-20l/ sào/ vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    26h. Số lượng thuốc trừ cỏ được sử dụng (số bình 15-20l/ sào/ vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    26i. Số tiền đã chi cho thuốc trừ sâu hóa học (đồng/sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    26j. Số tiền đã chi cho thuốc trừ cỏ hóa học (đồng/sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    26k. Số tiền đã chi cho công chăm sóc cây trồng (đồng/sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    26l. Số tiền đã chi cho mua hạt giống (đồng/sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    26m. Cây trồng có bị sâu bệnh tấn công (có/không)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    26n. Năng suất thu hoạch (kg/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    26o. Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    26p. Thành tiền (đồng)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: Không bón phân ủ (2022) */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#e6f7ff' }}>
                    KHÔNG BÓN PHÂN<br/>SÂU CANXI
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '26bkhong']} rules={[]} style={{ marginBottom: 0 }}>
                      <Input placeholder='Tháng/năm' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '26ckhong']} rules={[]} style={{ marginBottom: 0 }}>
                      <Input placeholder='Sào' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Phân NPK bón lót', 'Phân NPK bón thúc',  'Phân khác (ghi rõ)'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={['sectionC', i, `khongPhanU_tenPhan_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input defaultValue={phanType} disabled size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={['sectionC', i, `khongPhanU_kg_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder='Kg' size='small' style={{ fontSize: '12px' }} />
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Phân NPK bón lót', 'Phân NPK bón thúc',  'Phân khác (ghi rõ)'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={['sectionC', i, `khongPhanU_tenPhanTien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input defaultValue={phanType} disabled size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={['sectionC', i, `khongPhanU_tien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32ekhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='Lần' size='small' style={{ width: '100%' }}/>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32fkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='Bình' size='small' style={{ width: '100%' }}/>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32gkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='Bình' size='small' style={{ width: '100%' }}/>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32hkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32ikhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32jkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32kkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' style={{ width: '100%' }} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32lkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Radio.Group>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32mtruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='kg/sào' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32ntruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32otruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                </tr>

                {/* Row 2: Sau khi bón phân ủ (Vụ gần đây) */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#f6ffed' }}>
                    SAU KHI BÓN PHÂN<br/> SÂU CANXI
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '26bsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Tháng/năm' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '26csau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Sào' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân sâu canxi', 'Phân khác (ghi rõ)'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={['sectionC', i, `sauPhanU_tenPhan2_${idx}`]} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                                <Input defaultValue={phanType} disabled size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={['sectionC', i, `sauPhanU_kg2_${idx}`]} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                                <Input placeholder='Kg' size='small' style={{ fontSize: '12px' }} />
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân sâu canxi', 'Phân khác (ghi rõ)'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={['sectionC', i, `sauPhanU_tenPhanTien2_${idx}`]} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                                <Input defaultValue={phanType} disabled size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={['sectionC', i, `sauPhanU_tien2_${idx}`]} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32esau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='Lần' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32fsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='Bình' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32gsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='Bình' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32hsao']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32isau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32jsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32ksau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionC', i, '32lsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Radio.Group>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                      <Form.Item name={['sectionC', i, '32msau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                        <Input placeholder='kg/sào' size='small' />
                      </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                      <Form.Item name={['sectionC', i, '32nsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                        <Input placeholder='đồng' size='small' />
                      </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <div style={{ fontSize: '12px', marginBottom: '4px' }}>
                      <Form.Item name={['sectionC', i, '32osau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                        <Input placeholder='đồng' size='small' />
                      </Form.Item>
                    </div>
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

      <div className={styles.sectionTitle}>D. Nhóm câu hỏi: Sử dụng sâu canxi làm thức ăn cho vật nuôi SAU và TRƯỚC khi nuôi sâu canxi (Tính cho 1 LỨA nuôi GẦN ĐÂY NHẤT)</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionDCount }).map((_, i) => (
        <div key={i} className={styles.formSection}>
          {/* Type of animal and animal count input */}
          <div style={{ marginBottom: 24 }}>
            <Form.Item 
              name={['sectionD', i, 'loaiVatNuoi']} 
              label={<span className={styles.formLabel} style={{ fontWeight: 600 }}>Loại vật nuôi</span>} 
              rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập loại vật nuôi' }] : []}
            > 
              <Input placeholder='Ví dụ: Gà, Vịt, Lợn...' /> 
            </Form.Item>
          </div>

          {/* Table with two rows: không sử dụng sâu canxi and sau khi sử dụng sâu canxi */}
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
                    29a. Số con vật nuôi (số con/lứa)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    29b. Khối lượng của từng loại thức ăn cho lứa nuôi gần đây (kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    29c. Số tiền đã chi cho mỗi loại thức ăn cho lứa nuôi gần đây (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    29d. Số tiền đã chi cho mua thuốc thú y/lứa (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    29e. Vật nuôi có bị bất kỳ bệnh nào không
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    29f. Bạn đánh giá sức khỏe vật nuôi (1 = cực kỳ tệ, 10: rất tốt)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    29g. Vật nuôi có phát triển nhanh hơn và/hoặc lớn hơn
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    29h. Thời gian nuôi đến khi xuất chuồng (tháng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    29i. Trọng lượng trung bình khi xuất chuồng (kg/con)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    29j. Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    29k. Thành tiền (đồng)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: Không sử dụng sâu canxi làm thức ăn */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#e6f7ff' }}>
                    KHÔNG SỬ DỤNG<br/>SÂU CANXI <br/>LÀM THỨC ĂN
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29akhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
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
                              <Form.Item name={['sectionD', i, `khongCanxi_tenThucAn_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input defaultValue={thucAnType} disabled size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={['sectionD', i, `khongCanxi_kg_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
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
                              <Form.Item name={['sectionD', i, `khongCanxi_tenThucAnTien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input defaultValue={thucAnType} disabled size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={['sectionD', i, `khongCanxi_tien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29dkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29ekhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Radio.Group>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29fkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='1-10' size='small' style={{ width: '100%' }} min={1} max={10} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29gkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Radio.Group>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29hkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='tháng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29ikhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='kg' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29jkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29kkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                </tr>

                {/* Row 2: Sau khi sử dụng sâu canxi làm thức ăn */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#f6ffed' }}>
                    SAU KHI SỬ DỤNG <br/>SÂU CANXI<br/>LÀM THỨC ĂN
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29asau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
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
                        {['Sâu canxi', 'Thức ăn tinh (ngô, gạo)', 'Thức ăn tổng hợp/viên', 'Thức ăn xanh'].map((thucAnType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={['sectionD', i, `sauCanxi_tenThucAn_${idx}`]} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                                <Input defaultValue={thucAnType} disabled size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={['sectionD', i, `sauCanxi_kg_${idx}`]} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
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
                        {['Sâu canxi', 'Thức ăn tinh (ngô, gạo)', 'Thức ăn tổng hợp/viên', 'Thức ăn xanh'].map((thucAnType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={['sectionD', i, `sauCanxi_tenThucAnTien_${idx}`]} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                                <Input defaultValue={thucAnType} disabled size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={['sectionD', i, `sauCanxi_tien_${idx}`]} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29dsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29esau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Radio.Group>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29fsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='1-10' size='small' style={{ width: '100%' }} min={1} max={10} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29gsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Radio.Group>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29hsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='tháng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29isau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='kg' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29jsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={['sectionD', i, '29ksau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
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
  );
}
