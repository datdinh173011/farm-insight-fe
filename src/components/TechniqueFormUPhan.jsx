import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, Radio, Divider } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './TechniqueFormTrunQue.module.scss';

export default function TechniqueFormUPhan({ form, onFinish, onBack, initialValues }) {
  const [sectionACount, setSectionACount] = useState(1);
  const [sectionBCount, setSectionBCount] = useState(1);
  const [sectionCCount, setSectionCCount] = useState(1);

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={initialValues || {}}
      style={{ maxWidth: 1200, margin: '0 auto' }}
    >
      <div className={styles.sectionTitle}>A. Quản lý phụ phẩm cây trồng SAU KHI áp dụng kỹ thuật ủ phân hữu cơ tại ruộng</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionACount }).map((_, i) => (
        <div key={i} className={styles.formSectionBg}>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'tenPhuPham']} label="Tên phụ phẩm cây trồng (tận dụng ủ phân từ trước đến nay)" className={styles.col}><Input /></Form.Item>
            <Form.Item name={[`sectionA`, i, 'thangNamBatDau']} label="Tháng/năm bắt đầu tiến hành ủ phân" className={styles.col}><Input placeholder="Tháng/năm" /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'tenPhuPhamTanDung']} label="Tên phụ phẩm cây trồng tận dụng để ủ phân" className={styles.col}><Input /></Form.Item>
            <Form.Item name={[`sectionA`, i, 'khoiLuongPhuPhamTrenRuong']} label="Khối lượng phụ phẩm cây trồng có trên đồng ruộng (kg/sào x số sào)" className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'khoiLuongPhuPhamThuGom']} label="Khối lượng phụ phẩm cây trồng thu gom được (kg/sào x số sào)" className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={[`sectionA`, i, 'tongKhoiLuongPhuPhamSuDung']} label="Tổng khối lượng phụ phẩm cây trồng được sử dụng để ủ phân (kg/sào x số sào)" className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'khoiLuongPhanHuuCoThuDuoc']} label="Khối lượng phân hữu cơ thu được sau khi ủ (kg/sào x số sào)" className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={[`sectionA`, i, 'nhungLoaiCayDuocBonPhan']} label="Những loại cây trồng được bón phân ủ hữu cơ (1 ô ghi 1 loại cây trồng)" className={styles.col}><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'tongSoMuaVuBonPhan']} label="Tổng số mùa vụ đã được bón phân ủ hữu cơ (theo từng loại cây trồng)" className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={[`sectionA`, i, 'dienTichCayDuocBonPhan']} label="Diện tích cây trồng được bón phân ủ hữu cơ (số sào/vụ)" className={styles.col}><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'suDungMayCatNho']} label="Sử dụng máy để băm/cắt nhỏ phụ phẩm cây trồng" className={styles.col}>
              <Radio.Group>
                <Radio value="Có">Có</Radio>
                <Radio value="Không">Không</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name={[`sectionA`, i, 'nhienLieuSuDung']} label="Lượng nhiên liệu đã sử dụng (dầu diesel/ hoặc điện)" className={styles.col}>
              <Input placeholder="Dầu ... lít, Điện ... kw" />
            </Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'chiPhiVatLieuKhac']} label="Chi phí vật liệu/đầu vào khác (nhân công, ống thông khí, bạt, chế phẩm, rỉ mật…) (đồng)" className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
        </div>
      ))}
      <div className={styles.buttonGroup} style={{ marginTop: 16, marginBottom: 32 }}>
        <Button icon={<PlusOutlined />} onClick={() => setSectionACount(sectionACount + 1)}>Thêm phần</Button>
        {sectionACount > 1 && (
          <Button danger icon={<DeleteOutlined />} onClick={() => setSectionACount(sectionACount - 1)}>Xóa phần cuối</Button>
        )}
      </div>
      <div className={styles.sectionTitle}>B. Quản lý phụ phẩm cây trồng TRƯỚC KHI (NĂM 2022) áp dụng kỹ thuật ủ phân hữu cơ tại ruộng</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionBCount }).map((_, i) => (
        <div key={i} className={styles.formSectionBg}>
          <div className={styles.row}>
            <Form.Item name={[`sectionB`, i, 'loaiCayTrongTruoc']} label="Loại cây trồng" className={styles.col}><Input /></Form.Item>
            <Form.Item name={[`sectionB`, i, 'coTrongTruoc']} label="Có trồng không?" className={styles.col}>
              <Radio.Group>
                <Radio value="Có">Có</Radio>
                <Radio value="Không">Không</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionB`, i, 'dienTichDatTruoc']} label="Diện tích đất trồng cây (sào/vụ x số vụ/năm)" className={styles.col}><Input /></Form.Item>
            <Form.Item name={[`sectionB`, i, 'tenPhuPhamTruoc']} label="Tên phụ phẩm cây trồng (ghi tên từng loại)" className={styles.col}><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionB`, i, 'khoiLuongPhuPhamTruoc']} label="Khối lượng phụ phẩm cây trồng (kg/sào/vụ x số sào)" className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            <Form.Item name={[`sectionB`, i, 'khoiLuongPhuPhamThuGomTruoc']} label="Khối lượng phụ phẩm cây trồng được thu gom (kg/sào/vụ x số sào)" className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          </div>
        </div>
      ))}
      <div className={styles.buttonGroup} style={{ marginTop: 16, marginBottom: 32 }}>
        <Button icon={<PlusOutlined />} onClick={() => setSectionBCount(sectionBCount + 1)}>Thêm phần</Button>
        {sectionBCount > 1 && (
          <Button danger icon={<DeleteOutlined />} onClick={() => setSectionBCount(sectionBCount - 1)}>Xóa phần cuối</Button>
        )}
      </div>
      <div className={styles.sectionTitle}>C. Sử dụng phân ủ làm phân bón cây trồng, sức khoẻ cây trồng, hiệu quả kinh tế SAU và TRƯỚC khi sử dụng phân ủ hữu cơ (Tính cho 1 VỤ cây trồng GẦN ĐÂY NHẤT)</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionCCount }).map((_, i) => (
        <div key={i} className={styles.formSection}>
          <div style={{ marginBottom: 24 }}>
            <Form.Item 
              name={[`sectionC`, i, '20a']} 
              label={<span className={styles.formLabel} style={{ fontWeight: 600 }}>11a. Tên cây trồng được bón phân ủ hữu cơ</span>} 
              rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập tên cây trồng' }] : []}
            > 
              <Input placeholder='Ví dụ: Lúa, Rau...' /> 
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
                    11b. Diện tích (sào/vụ)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    11c. Số lượng từng loại phân bón (kg/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    11d. Số tiền đã chi cho mua từng loại phân bón (số tiền = khối lượng phân bón/ sào x số sào x đơn giá)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11e. Cây trồng có bị sâu bệnh không (có/không)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11f. Có sử dụng thuốc trừ sâu không (có/không)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11g. Số tiền mua thuốc trừ sâu (đồng/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11h. Số tiền mua thuốc diệt cỏ (đồng/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11i. Số tiền công lao động (số công/ sào x số sào x đơn giá ngày công trung bình) (1 công = 8 tiếng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11j. Số tiền mua hạt giống (đồng/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11k. Năng suất thu hoạch được (kg/sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11l. Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    11m. Thành tiền (đồng)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: KHÔNG BÓN PHÂN Ủ */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#e6f7ff' }}>
                    KHÔNG BÓN<br/>PHÂN Ủ
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20ctruoc']} style={{ marginBottom: 0 }}>
                      <Input placeholder='Sào' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân khác'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionC`, i, `truocPhan_tenPhan_${idx}`]} style={{ marginBottom: 0 }}>
                                <Input defaultValue={phanType} disabled size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionC`, i, `truocPhan_kg_${idx}`]} style={{ marginBottom: 0 }}>
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân khác'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionC`, i, `truocPhan_tenPhanTien_${idx}`]} style={{ marginBottom: 0 }}>
                                <Input defaultValue={phanType} disabled size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionC`, i, `truocPhan_tien_${idx}`]} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20ftruoc']} style={{ marginBottom: 0 }}>
                      <Radio.Group>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20gtruoc']} style={{ marginBottom: 0 }}>
                      <Radio.Group>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20htruoc']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20itruoc']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20jtruoc']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20ktruoc']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20ltruoc']} style={{ marginBottom: 0 }}>
                      <Input placeholder='kg' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20mtruoc']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20ntruoc']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                </tr>
                {/* Row 2: SAU KHI BÓN PHÂN Ủ */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#f6ffed' }}>
                    SAU KHI BÓN<br/>PHÂN Ủ
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Phân ủ hữu cơ', 'Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân khác'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionC`, i, `sauPhan_tenPhan_${idx}`]} style={{ marginBottom: 0 }}>
                                <Input defaultValue={phanType} disabled size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionC`, i, `sauPhan_kg_${idx}`]} style={{ marginBottom: 0 }}>
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>Tên phân bón</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '4px', fontSize: '12px', fontWeight: 500 }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Phân ủ hữu cơ', 'Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân khác'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionC`, i, `sauPhan_tenPhanTien_${idx}`]} style={{ marginBottom: 0 }}>
                                <Input defaultValue={phanType} disabled size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionC`, i, `sauPhan_tien_${idx}`]} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20fsau']} style={{ marginBottom: 0 }}>
                      <Radio.Group>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20gsau']} style={{ marginBottom: 0 }}>
                      <Radio.Group>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20hsau']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20isau']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20jsau']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20ksau']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20lsau']} style={{ marginBottom: 0 }}>
                      <Input placeholder='kg' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20msau']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, '20nsau']} style={{ marginBottom: 0 }}>
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
      <Form.Item>
        <div className={styles.centerBtn}>
          <Button onClick={onBack}>Quay lại</Button>
          <Button type="primary" htmlType="submit" style={{ minWidth: 180, fontWeight: 'bold' }}>Hoàn tất phần kỹ thuật</Button>
        </div>
      </Form.Item>
    </Form>
  );
}
