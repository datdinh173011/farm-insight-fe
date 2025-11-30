import React, { useState } from 'react';
import { Form, Input, InputNumber, Checkbox, Button, Divider, Table } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './TechniqueFormNuoiGa.module.scss';

export default function TechniqueFormNuoiGa({ form, onFinish, onBack, initialValues }) {
  const [sectionACount, setSectionACount] = useState(
    initialValues?.sectionA?.length > 0 ? initialValues.sectionA.length : 1
  );
  const [sectionBCount, setSectionBCount] = useState(
    initialValues?.sectionB?.length > 0 ? initialValues.sectionB.length : 1
  );
  const [phanUCount, setPhanUCount] = useState(
    initialValues?.phanU?.length > 0 ? initialValues.phanU.length : 1
  );
  const [danGaCount, setDanGaCount] = useState(
    initialValues?.danGa?.length > 0 ? initialValues.danGa.length : 1
  );

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues || {}}
      onFinish={onFinish}
      style={{ maxWidth: 1200, margin: '0 auto' }}
    >
      <div className={styles.sectionTitle}>A. Quản lý phụ phẩm cây trồng SAU KHI sử dụng đệm lót sinh học dày</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionACount }).map((_, i) => (
        <div key={i} className={styles.formSection}>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'tenPhuPhamTruoc']} label="Tên phụ phẩm cây trồng (tận dụng làm đệm lót sinh học dày TỪ TRƯỚC ĐẾN NAY)"><Input /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'thangNamBatDau']} label="Tháng/năm bắt đầu áp dụng kỹ thuật"><Input placeholder='Tháng/năm'/></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'tongSoMuaVu']} label="Tổng số mùa vụ đã tận dụng phụ phẩm để làm đệm lót sinh học TỪ TRƯỚC ĐẾN NAY (vụ)"><InputNumber min={0} style={{ width: '100%' }} /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'tenCayBonPhan']} label="Tên những loại cây trồng được bón phân ủ thu được từ lớp đệm lót"><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'dienTichCayBonPhan']} label="Diện tích cây trồng được bón phân ủ thu được từ lớp đệm lót trong 1 vụ (sào/vụ)"><Input /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'tongSoMuaVuBonPhan']} label="Tổng số mùa vụ đã được bón phân ủ thu được từ lớp đệm lót"><InputNumber min={0} style={{ width: '100%' }} /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'tenPhuPhamDuocTao']} label="Tên phụ phẩm cây trồng được tận dụng làm đệm lót sinh học dày"><Input /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'dienTichTaoPhuPham']} label="Diện tích cây trồng tạo ra loại phụ phẩm được tận dụng làm đệm lót sinh học dày (sào)"><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'khoiLuongTrenDong']} label="Khối lượng phụ phẩm cây trồng có trên đồng ruộng (kg/sào x số sào)"><Input /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'khoiLuongThuGom']} label="Khối lượng phụ phẩm cây trồng thu gom được (kg/sào x số sào)"><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'tongKhoiLuongLamDemLot']} label="Tổng khối lượng phụ phẩm cây trồng được tận dụng để làm đệm lót (kg)"><Input /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'tongKhoiLuongPhanU']} label="Tổng khối lượng phân ủ thu được từ lớp đệm lót (kg)"><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'mayBamCat']} label="Sử dụng máy để băm/cắt nhỏ phụ phẩm cây trồng"><Input placeholder='Có/Không' /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'nhienLieu']} label="Lượng nhiên liệu đã sử dụng (dầu diesel/ hoặc điện)"><Input placeholder="Dầu ... lít, Điện ... kw" /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'chiPhiKhac']} label="Chi phí vật liệu/đầu vào khác (ví dụ: nhân công, chế phẩm, …) (đồng)"><Input /></Form.Item>
          </div>
        </div>
      ))}
      <div className={styles.buttonGroup} style={{ marginTop: 16, marginBottom: 32 }}>
        <Button
          type="dashed"
          icon={<PlusOutlined />}
          onClick={() => setSectionACount(sectionACount + 1)}
          style={{ minWidth: 120 }}
        >
          Thêm phần
        </Button>
        {sectionACount > 1 && (
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={() => setSectionACount(sectionACount - 1)}
            style={{ minWidth: 120 }}
          >
            Xóa phần cuối
          </Button>
        )}
      </div>

      <div className={styles.sectionTitle}>B. Quản lý phụ phẩm cây trồng TRƯỚC KHI áp dụng kỹ thuật nuôi gà trên đệm lót sinh học dày (NĂM 2022)</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionBCount }).map((_, i) => (
        <div key={i} className={styles.formSection}>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionB`, i, 'loaiCayTruoc']} label="Loại cây trồng, TRƯỚC KHI áp dụng kỹ thuật"><Input /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionB`, i, 'dienTichTruoc']} label="Diện tích đất trồng cây, TRƯỚC KHI áp dụng kỹ thuật (sào/vụ x số vụ/năm)"><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionB`, i, 'loaiPhuPhamTruoc']} label="Có những loại phụ phẩm cây trồng nào, TRƯỚC KHI áp dụng kỹ thuật"><Input /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionB`, i, 'khoiLuongPhuPhamTruoc']} label="Có bao nhiêu kg phụ phẩm cây trồng tại ruộng/vườn TRƯỚC KHI áp dụng kỹ thuật (kg/sào/vụ x số sào/vụ)"><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionB`, i, 'khoiLuongThuGomTruoc']} label="Có bao nhiêu kg phụ phẩm cây trồng được thu gom TRƯỚC KHI áp dụng kỹ thuật (kg/sào/vụ x số sào/vụ)"><Input /></Form.Item>
          </div>
        </div>
      ))}
      <div className={styles.buttonGroup} style={{ marginTop: 16, marginBottom: 32 }}>
        <Button
          type="dashed"
          icon={<PlusOutlined />}
          onClick={() => setSectionBCount(sectionBCount + 1)}
          style={{ minWidth: 120 }}
        >
          Thêm phần
        </Button>
        {sectionBCount > 1 && (
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={() => setSectionBCount(sectionBCount - 1)}
            style={{ minWidth: 120 }}
          >
            Xóa phần cuối
          </Button>
        )}
      </div>

      <div className={styles.sectionTitle}>C. Sử dụng PHÂN Ủ từ lớp đệm lót làm phân bón cây trồng, sức khoẻ cây trồng, hiệu quả kinh tế SAU và TRƯỚC khi sử dụng phân ủ</div>
      <div style={{ fontSize: '13px', marginBottom: 16, fontStyle: 'italic', color: '#666' }}>
        <strong>Lưu ý:</strong> Thu thập thông tin của 01 vụ GẦN ĐÂY NHẤT sử dụng phân ủ và 01 vụ TRƯỚC ĐÂY (NĂM 2022) khi chưa bao giờ được bón phân ủ
      </div>
      <Divider className={styles.divider} />
      {Array.from({ length: phanUCount }).map((_, i) => (
        <div key={i} className={styles.formSection}>
          {/* Crop name input */}
          <div style={{ marginBottom: 24 }}>
            <Form.Item 
              name={[`phanU`, i, 'tenCayTrong']} 
              label={<span className={styles.formLabel} style={{ fontWeight: 600 }}>Tên cây trồng được bón phân ủ từ lớp đệm lót</span>} 
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
                    32b. Diện tích (sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    32c. Tổng khối lượng từng loại phân bón (kg/sào x số sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    32d. Số tiền đã chi cho mua từng loại phân bón (= khối lượng phân bón/ sào x số sào x đơn giá)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    32e. Số lần phun thuốc trừ sâu hóa học
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    32f. Số lượng thuốc sâu hóa học được sử dụng (bình)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    32g. Số lượng thuốc cỏ được sử dụng (bình)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    32h. Số tiền đã chi cho thuốc trừ sâu hóa học (đồng/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    32i. Số tiền đã chi cho thuốc trừ cỏ hóa học (đồng/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    32j. Số tiền công lao động (số công/ sào x số sào x đơn giá ngày công TB) (1 công = 8 giờ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    32k. Số tiền mua hạt giống (đồng/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    32l. Cây trồng có bị sâu bệnh tấn công không?
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    32m. Năng suất thu hoạch (kg/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    32n. Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    32o. Thành tiền (đồng)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: Không bón phân ủ (2022) */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#e6f7ff' }}>
                    KHÔNG BÓN PHÂN Ủ<br/>(NĂM 2022)
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32bkhong']} rules={[]} style={{ marginBottom: 0 }}>
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
                        {['Phân ủ/ phân đệm lót/ phân trùn quế/ phân sâu canxi', 'Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân khác (ghi rõ)'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`phanU`, i, `khongPhanU_tenPhan_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder={phanType} size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`phanU`, i, `khongPhanU_kg_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
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
                        {['Phân ủ/ phân đệm lót/ phân trùn quế/ phân sâu canxi', 'Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân khác (ghi rõ)'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`phanU`, i, `khongPhanU_tenPhanTien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder={phanType} size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`phanU`, i, `khongPhanU_tien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32ekhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='Lần' size='small' style={{ width: '100%' }}/>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32fkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='Bình' size='small' style={{ width: '100%' }}/>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32gkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='Bình' size='small' style={{ width: '100%' }}/>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32hkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32ikhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32jkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32kkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' style={{ width: '100%' }} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32lkhong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Có/Không' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32mtruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='kg/sào' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32ntruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32otruoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  

                </tr>

                {/* Row 2: Sau khi bón phân ủ (Vụ gần đây) */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#f6ffed' }}>
                    SAU KHI BÓN PHÂN Ủ<br/>(VỤ GẦN ĐÂY)
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, 'dienTichSauPhanU2']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
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
                        {['Phân ủ/ phân đệm lót/ phân trùn quế/ phân sâu canxi', 'Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân khác (ghi rõ)'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`phanU`, i, `sauPhanU_tenPhan2_${idx}`]} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                                <Input placeholder={phanType} size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`phanU`, i, `sauPhanU_kg2_${idx}`]} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
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
                        {['Phân ủ/ phân đệm lót/ phân trùn quế/ phân sâu canxi', 'Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân khác (ghi rõ)'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`phanU`, i, `sauPhanU_tenPhanTien2_${idx}`]} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                                <Input placeholder={phanType} size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`phanU`, i, `sauPhanU_tien2_${idx}`]} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32esau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='Lần' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32fsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='Bình' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32gsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='Bình' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32hsao']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32isau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32jsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Đ' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32ksau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Đ' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`phanU`, i, '32lsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Có/Không' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                      <Form.Item name={[`phanU`, i, '32msau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                        <Input placeholder='kg/sào' size='small' />
                      </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                      <Form.Item name={[`phanU`, i, '32nsau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                        <Input placeholder='đồng' size='small' />
                      </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <div style={{ fontSize: '12px', marginBottom: '4px' }}>
                      <Form.Item name={[`phanU`, i, '32osau']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
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
        <Button icon={<PlusOutlined />} onClick={() => setPhanUCount(phanUCount + 1)}>Thêm phần </Button>
        {phanUCount > 1 && (
          <Button danger icon={<DeleteOutlined />} onClick={() => setPhanUCount(phanUCount - 1)}>Xóa phần cuối</Button>
        )}
      </div>

      <div className={styles.sectionTitle}>D. Sử dụng thức ăn, sức khỏe ĐÀN GÀ và kinh tế SAU và TRƯỚC khi nuôi gà trên đệm lót sinh học dày</div>
      <div style={{ fontSize: '13px', marginBottom: 16, fontStyle: 'italic', color: '#666' }}>
        <strong>Lưu ý:</strong> Tính cho 1 lứa nuôi GẦN ĐÂY NHẤT
      </div>
      <Divider className={styles.divider} />
      {Array.from({ length: danGaCount }).map((_, i) => (
        <div key={i} className={styles.formSection}>
          {/* Table with two rows: sau khi and truoc khi */}
          <div style={{ overflowX: 'auto', marginBottom: 24 }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #d9d9d9',
              fontSize: '12px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 120 }}>
                    Thời điểm
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    35a. Số lượng gà trong đợt nuôi (con)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 250 }}>
                    35b. Khối lượng của từng loại thức ăn cho lứa nuôi gần đây (kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 250 }}>
                    35c. Số tiền đã chi cho mỗi loại thức ăn cho lứa nuôi gần đây (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    35d. Số tiền đã chi cho mua thuốc thú y (đồng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    35e. Số giờ dành cho việc dọn dẹp chuồng gà trong 1 tuần
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    35f. Đàn gà có mắc bệnh gì không
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    35g. Đánh giá sức khỏe đàn gà (1= cực kỳ tệ, 10= rất tốt)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    35h. Số ngày để đạt được trọng lượng mong muốn?
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    35i. Trọng lượng trung bình khi xuất chuồng (kg/con)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    35j. Tổng thời gian nuôi đến khi xuất chuồng (tháng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    35k. Đàn gà có phát triển nhanh hơn và/ hoặc lớn hơn
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    35l. Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    35m. Tổng thu nhập
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    35n. Đánh giá mùi từ chuồng gà (0= không có mùi, 10= cực kỳ khó chịu)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: SAU KHI sử dụng đệm lót */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', fontWeight: 600, backgroundColor: '#f6ffed', textAlign: 'center' }}>
                    TRƯỚC KHI<br/>đệm lót
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'soLuongGaSauDemLot']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='Con' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px', fontWeight: 500 }}>Kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Sâu canxi/trùn quế', 'Thức ăn tinh (ngô, gạo)', 'Thức ăn tổng hợp/viên', 'Thức ăn xanh'].map((thucAnType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`danGa`, i, `sauDemLot_tenThucAn_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder={thucAnType} size='small' style={{ fontSize: '11px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`danGa`, i, `sauDemLot_kg_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder='Kg' size='small' style={{ fontSize: '11px' }} />
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px', fontWeight: 500 }}>Đ</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Sâu canxi/trùn quế', 'Thức ăn tinh (ngô, gạo)', 'Thức ăn tổng hợp/viên', 'Thức ăn xanh'].map((thucAnType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`danGa`, i, `sauDemLot_tenThucAnTien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder={thucAnType} size='small' style={{ fontSize: '11px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`danGa`, i, `sauDemLot_tien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '11px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'tienThuoc']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'gioDonDep']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Giờ' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'gaBiBenh']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Có/Không' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'danhGiaSucKhoe']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber min={1} max={10} placeholder='1-10' size='small' style={{ width: '100%' }} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'soNgayDatTrongLuong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Ngày' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'trongLuongXuatChuong']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='kg/con' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'tongThoiGianNuoi']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Tháng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'gaPhatTrienNhanhHon']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Có/Không' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'giaBan']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng/kg' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'tongThuNhap']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'danhGiaMui']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber min={0} max={10} placeholder='0-10' size='small' style={{ width: '100%' }} />
                    </Form.Item>
                  </td>
                </tr>

                {/* Row 2: TRƯỚC KHI sử dụng đệm lót */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', fontWeight: 600, backgroundColor: '#e6f7ff', textAlign: 'center' }}>
                    SAU KHI<br/>đệm lót
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'soLuongGaTruocDemLot']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='Con' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px', fontWeight: 500 }}>Kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Sâu canxi/trùn quế', 'Thức ăn tinh (ngô, gạo)', 'Thức ăn tổng hợp/viên', 'Thức ăn xanh'].map((thucAnType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`danGa`, i, `truocDemLot_tenThucAn_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder={thucAnType} size='small' style={{ fontSize: '11px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`danGa`, i, `truocDemLot_kg_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder='Kg' size='small' style={{ fontSize: '11px' }} />
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '11px', fontWeight: 500 }}>Đ</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Sâu canxi/trùn quế', 'Thức ăn tinh (ngô, gạo)', 'Thức ăn tổng hợp/viên', 'Thức ăn xanh'].map((thucAnType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`danGa`, i, `truocDemLot_tenThucAnTien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder={thucAnType} size='small' style={{ fontSize: '11px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`danGa`, i, `truocDemLot_tien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '11px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'tienThuoc2']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'gioDonDep2']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Giờ' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'gaBiBenh2']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Có/Không' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'danhGiaSucKhoe2']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber min={1} max={10} placeholder='1-10' size='small' style={{ width: '100%' }} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'soNgayDatTrongLuong2']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Ngày' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'trongLuongXuatChuong2']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='kg/con' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'tongThoiGianNuoi2']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Tháng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'gaPhatTrienNhanhHon2']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='Có/Không' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'giaBan2']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng/kg' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'tongThuNhap2']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`danGa`, i, 'danhGiaMui2']} rules={i === 0 ? [{ required: true, message: 'Bắt buộc' }] : []} style={{ marginBottom: 0 }}>
                      <InputNumber min={0} max={10} placeholder='0-10' size='small' style={{ width: '100%' }} />
                    </Form.Item>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <div className={styles.buttonGroup} style={{ marginTop: 16, marginBottom: 32 }}>
        <Button
          type='dashed'
          icon={<PlusOutlined />}
          onClick={() => setDanGaCount(danGaCount + 1)}
        >
          Thêm phần
        </Button>
        {danGaCount > 1 && (
          <Button
            type='text'
            danger
            icon={<DeleteOutlined />}
            onClick={() => setDanGaCount(danGaCount - 1)}
            style={{ minWidth: 120 }}
          >
            Xóa phần cuối
          </Button>
        )}
      </div>

      <div className={styles.buttonGroup}>
        <Button onClick={onBack}>Quay lại</Button>
        <Button type="primary" htmlType="submit" style={{ minWidth: 180, fontWeight: 'bold' }}>Hoàn tất phần kỹ thuật</Button>
      </div>
    </Form>
  );
}
