import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, InputNumber, Divider, Radio} from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import styles from './TechniqueFormGocRa.module.scss'

const questions = [
  'Bạn xử lý gốc rạ bằng loại chế phẩm nào?',
  'Bạn thấy hiệu quả xử lý gốc rạ ra sao?',
  'Bạn có gặp khó khăn về chi phí không?'
]

export default function TechniqueFormGocRa({ form, onFinish, onBack, initialValues }) {
  const [sectionACount, setSectionACount] = useState(1);
  const [sectionBCount, setSectionBCount] = useState(1);

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={initialValues || {}}
      style={{ maxWidth: 1200, margin: '0 auto' }}
    >
      <div className={styles.sectionTitle}>A. Loại phụ phẩm cây trồng, Quản lý phụ phẩm cây trồng và chất thải</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionACount }).map((_, i) => (
        <div key={i} className={styles.formSectionBg}>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'thangNamBatDauApDung']} label="Tháng/năm bắt đầu áp dụng xử lý gốc rạ bằng chế phẩm sinh học" className={styles.col}><Input placeholder="Tháng/năm" /></Form.Item>
            <Form.Item name={[`sectionA`, i, 'soVuXuLyGocRa']} label="Số vụ xử lý gốc rạ bằng chế phẩm (số vụ/năm x số năm)" className={styles.col}><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'thangNamBatDauVuGanDay']} label="Tháng/năm bắt đầu vụ gần đây" className={styles.col}><Input placeholder="Tháng/năm" /></Form.Item>
            <Form.Item name={[`sectionA`, i, 'dienTichGocRaSauThuHoach']} label="Diện tích ruộng có gốc rạ sau thu hoạch được xử lý bằng chế phẩm sinh học (sào/vụ)" className={styles.col}><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'chePhamSinhHocSuDung']} label="Các loại chế phẩm sinh học được sử dụng" className={styles.col}>
              <Input placeholder = "Trichoderma, Sumitri, Khác (ghi rõ)"/>
            </Form.Item>
            <Form.Item name={[`sectionA`, i, 'tienMuaChePham']} label="Số tiền chi mua chế phẩm sinh học (đồng/sào)" className={styles.col}><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item name={[`sectionA`, i, 'tienNhanCongPhun']} label="Số tiền chi nhân công phun chế phẩm sinh học (đồng/sào)" className={styles.col}><Input /></Form.Item>
            <Form.Item name={[`sectionA`, i, 'nangSuatLuaSauXuLy']} label="Năng suất lúa của vụ sau khi xử lý gốc rạ bằng chế phẩm (kg/sào)" className={styles.col}><Input /></Form.Item>
          </div>
        </div>
      ))}
      <div className={styles.buttonGroup} style={{ marginTop: 16, marginBottom: 32 }}>
        <Button icon={<PlusOutlined />} onClick={() => setSectionACount(sectionACount + 1)}>Thêm phần</Button>
        {sectionACount > 1 && (
          <Button danger icon={<DeleteOutlined />} onClick={() => setSectionACount(sectionACount - 1)}>Xóa phần cuối</Button>
        )}
      </div>
      <div className={styles.sectionTitle}>B. Sử dụng phân xử lý gốc rạ, sức khoẻ cây trồng, hiệu quả kinh tế SAU và TRƯỚC khi sử dụng</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionBCount }).map((_, i) => (
        <div key={i} className={styles.formSection}>
          <div style={{ marginBottom: 24 }}>
            <Form.Item 
              name={[`sectionB`, i, '16a']} 
              label={<span className={styles.formLabel} style={{ fontWeight: 600 }}>16a. Tên cây trồng được xử lý gốc rạ bằng chế phẩm vi sinh</span>} 
              rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập tên cây trồng' }] : []}
            > 
              <Input placeholder='Ví dụ: Lúa, Ngô...' /> 
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
                    16b. Diện tích trồng (sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    16c. Khối lượng từng loại phân bón (Tổng số lượng = số kg/sào/vụ x số sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 280 }}>
                    16d. Số tiền đã chi mua từng loại phân bón (Tổng số tiền = tổng số lượng từng loại phân bón x đơn giá)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    16e. Cây trồng có bị sâu bệnh không (có/không)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    16f. Có sử dụng thuốc trừ sâu không (có/không)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    16g. Số tiền mua thuốc trừ sâu (đồng/sào/vụ x số sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    16h. Có sử dụng thuốc diệt cỏ không (có/không)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    16i. Số tiền mua thuốc diệt cỏ (đồng/sào/vụ x số sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    16j. Số tiền công lao động (số công/sào/vụ x đơn giá)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    16k. Số tiền mua hạt giống (đồng/ sào/vụ x số sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    16l. Sản lượng thu hoạch được (kg/sào/vụ x số sào)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    16m. Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '10px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    16n. Thành tiền (đồng)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: KHÔNG ÁP DỤNG KỸ THUẬT */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#e6f7ff' }}>
                    KHÔNG ÁP DỤNG<br/>KỸ THUẬT
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16btruoc']} style={{ marginBottom: 0 }}>
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
                        {['Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân đạm', 'Phân kali', 'Phân khác'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionB`, i, `truocPhan_tenPhan_${idx}`]} style={{ marginBottom: 0 }}>
                                <Input defaultValue={phanType} disabled size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionB`, i, `truocPhan_kg_${idx}`]} style={{ marginBottom: 0 }}>
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
                        {['Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân đạm', 'Phân kali', 'Phân khác'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionB`, i, `truocPhan_tenPhanTien_${idx}`]} style={{ marginBottom: 0 }}>
                                <Input defaultValue={phanType} disabled size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionB`, i, `truocPhan_tien_${idx}`]} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16etruoc']} style={{ marginBottom: 0 }}>
                      <Radio.Group>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16ftruoc']} style={{ marginBottom: 0 }}>
                      <Radio.Group>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16gtruoc']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16htruoc']} style={{ marginBottom: 0 }}>
                      <Radio.Group>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16itruoc']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16jtruoc']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16ktruoc']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16ltruoc']} style={{ marginBottom: 0 }}>
                      <Input placeholder='kg' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16mtruoc']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16ntruoc']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                </tr>
                {/* Row 2: SAU KHI ÁP DỤNG KỸ THUẬT */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '8px', fontWeight: 600, backgroundColor: '#f6ffed' }}>
                    SAU KHI ÁP DỤNG<br/>KỸ THUẬT
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16bsau']} style={{ marginBottom: 0 }}>
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
                        {['Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân đạm', 'Phân kali', 'Phân khác'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionB`, i, `sauPhan_tenPhan_${idx}`]} style={{ marginBottom: 0 }}>
                                <Input defaultValue={phanType} disabled size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionB`, i, `sauPhan_kg_${idx}`]} style={{ marginBottom: 0 }}>
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
                        {['Phân NPK bón lót', 'Phân NPK bón thúc', 'Phân đạm', 'Phân kali', 'Phân khác'].map((phanType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionB`, i, `sauPhan_tenPhanTien_${idx}`]} style={{ marginBottom: 0 }}>
                                <Input defaultValue={phanType} disabled size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '4px' }}>
                              <Form.Item name={[`sectionB`, i, `sauPhan_tien_${idx}`]} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '12px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16esau']} style={{ marginBottom: 0 }}>
                      <Radio.Group>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16fsau']} style={{ marginBottom: 0 }}>
                      <Radio.Group>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16gsau']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16hsau']} style={{ marginBottom: 0 }}>
                      <Radio.Group>
                        <Radio value="Có">Có</Radio>
                        <Radio value="Không">Không</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16isau']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16jsau']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16ksau']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16lsau']} style={{ marginBottom: 0 }}>
                      <Input placeholder='kg' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16msau']} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionB`, i, '16nsau']} style={{ marginBottom: 0 }}>
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
        <Button icon={<PlusOutlined />} onClick={() => setSectionBCount(sectionBCount + 1)}>Thêm phần</Button>
        {sectionBCount > 1 && (
          <Button danger icon={<DeleteOutlined />} onClick={() => setSectionBCount(sectionBCount - 1)}>Xóa phần cuối</Button>
        )}
      </div>
      <Form.Item>
        <div className={styles.centerBtn}>
          <Button onClick={onBack}>Quay lại</Button>
          <Button type="primary" htmlType="submit" style={{ minWidth: 180, fontWeight: 'bold' }}>Hoàn tất phần kỹ thuật</Button>
        </div>
      </Form.Item>
    </Form>
  )
}
