import React, { useState } from 'react'
import { Form, Input, InputNumber, Button, Checkbox, Typography, Divider, Tooltip } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import styles from './TechniqueFormLenMen.module.scss'
const { Title, Text } = Typography


export default function TechniqueFormLenMen({ form, onFinish, onBack, initialValues }) {
  const [sectionACount, setSectionACount] = useState(
    initialValues?.sectionA?.length > 0 ? initialValues.sectionA.length : 1
  )
  const [sectionBCount, setSectionBCount] = useState(
    initialValues?.sectionB?.length > 0 ? initialValues.sectionB.length : 1
  )
  const [sectionCCount, setSectionCCount] = useState(
    initialValues?.sectionC?.length > 0 ? initialValues.sectionC.length : 1
  )

  const addSectionA = () => setSectionACount(prev => prev + 1)
  const removeSectionA = () => setSectionACount(prev => Math.max(1, prev - 1))
  const addSectionB = () => setSectionBCount(prev => prev + 1)
  const removeSectionB = () => setSectionBCount(prev => Math.max(1, prev - 1))
  const addSectionC = () => setSectionCCount(prev => prev + 1)
  const removeSectionC = () => setSectionCCount(prev => Math.max(1, prev - 1))

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={initialValues || {}}
      style={{ maxWidth: 1200, margin: '0 auto' }}
    >
      <div className={styles.sectionTitle}>A. Quản lý phụ phẩm cây trồng SAU KHI áp dụng kỹ thuật ủ lên men</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionACount }).map((_, i) => (
        <div key={i} className={styles.formSection}>
          {/* Group every 2 questions per row for a cleaner layout */}
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'tenPhuPhamCayTrong']} label="Tên phụ phẩm cây trồng (sử dụng ủ lên men)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập' }] : []}><Input /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'thangNamDau']} label="Tháng/năm áp dụng kỹ thuật ủ lên men (lần đầu tiên)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập' }] : []}><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'dienTichTrong']} label="Diện tích trồng trong 1 vụ" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập' }] : []}><Input /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'soLanMen']} label="Tổng số lần (số vụ) đã tiến hành lên men" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập' }] : []}><InputNumber style={{ width: '100%' }} /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'thangNamGanNhat']} label="Tháng/năm bắt đầu vụ gần đây nhất" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập' }] : []}><Input /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'tenPhuPhamTanDung']} label="Tên phụ phẩm cây trồng tận dụng để ủ lên men" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập' }] : []}><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'dienTichDat']} label="Diện tích đất được sử dụng để trồng cây lấy phụ phẩm ủ lên men (số sào/ vụ)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập' }] : []}><Input /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'khoiLuongTrenDong']} label="Khối lượng phụ phẩm cây trồng có trên đồng ruộng (kg/ sào/ vụ x số sào)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập' }] : []}><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'khoiLuongThuGom']} label="Tổng khối lượng phụ phẩm cây trồng thu gom được (kg/ sào/ vụ x số sào)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập' }] : []}><Input /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'khoiLuongSuDungMen']} label="Tổng khối lượng phụ phẩm cây trồng được sử dụng để ủ lên men (kg/ sào/ vụ x số sào)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập' }] : []}><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'khoiLuongThucAnMen']} label="Khối lượng thức ăn ủ lên men thu được (kg)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập' }] : []}><Input /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'mayBamCat']} label="Sử dụng máy để băm/ cắt nhỏ phụ phẩm cây trồng (có/ không)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc chọn máy băm/cắt nhỏ' }] : []}><Input placeholder='Có/Không' /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'nhienLieu']} label="Lượng nhiên liệu đã sử dụng cho 1 lần lên men (dầu diesel/ hoặc điện; kg/ hoặc giờ)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập nhiên liệu' }] : []}><Input placeholder="Dầu ... lít, Điện ... kw" /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionA`, i, 'chiPhiKhac']} label="Chi phí vật liệu/ đầu vào khác cho 1 lần lên men (ví dụ: thùng, túi ủ, chế phẩm,...)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập chi phí vật liệu/đầu vào khác' }] : []}><Input placeholder="Thùng, túi ủ, chế phẩm, rỉ mật, cám..." /></Form.Item>
          </div>
        </div>
      ))}
      <div className={styles.buttonGroup} style={{ marginTop: 16, marginBottom: 32 }}>
        <Button
          type="dashed"
          onClick={addSectionA}
          icon={<PlusOutlined />}
          style={{ minWidth: 120 }}
        >
          Thêm phần
        </Button>
        {sectionACount > 1 && (
          <Button
            type="text"
            danger
            onClick={removeSectionA}
            icon={<DeleteOutlined />}
            style={{ minWidth: 120 }}
          >
            Xóa phần cuối
          </Button>
        )}
      </div>

      <div level={4} className={styles.sectionTitle}>B. Quản lý phụ phẩm cây trồng TRƯỚC KHI áp dụng kỹ thuật ủ lên men</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionBCount }).map((_, i) => (
        <div key={i} className={styles.formSection}>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionB`, i, 'loaiCayTruoc']} label="Loại cây trồng"><Input /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionB`, i, 'dienTichTruoc']} label="Diện tích đất trồng cây"><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionB`, i, 'loaiPhuPhamTruoc']} label="Loại phụ phẩm cây trồng"><Input /></Form.Item>
            <Form.Item className={styles.col} name={[`sectionB`, i, 'khoiLuongPhuPhamTruoc']} label="Khối lượng phụ phẩm"><Input /></Form.Item>
          </div>
          <div className={styles.row}>
            <Form.Item className={styles.col} name={[`sectionB`, i, 'khoiLuongThuGomTruoc']} label="Khối lượng thu gom"><Input /></Form.Item>
          </div>
        </div>
      ))}
      <div className={styles.buttonGroup} style={{ marginTop: 16, marginBottom: 32 }}>
        <Button
          type="dashed"
          onClick={addSectionB}
          icon={<PlusOutlined />}
          style={{ minWidth: 120 }}
        >
          Thêm phần
        </Button>
        {sectionBCount > 1 && (
          <Button
            type="text"
            danger
            onClick={removeSectionB}
            icon={<DeleteOutlined />}
            style={{ minWidth: 120 }}
          >
            Xóa phần cuối
          </Button>
        )}
      </div>

      <div level={4} className={styles.sectionTitle}>C. Sử dụng thức ăn ủ lên men làm thức ăn chăn nuôi, sức khoẻ vật nuôi, hiệu quả kinh tế SAU và TRƯỚC khi sử dụng thức ăn ủ lên men</div>
      <Divider className={styles.divider} />
      {Array.from({ length: sectionCCount }).map((_, i) => (
        <div key={i} className={styles.formSection}>
          {/* Input for animal name */}
          <div style={{ marginBottom: 24 }}>
            <Form.Item
              name={[`sectionC`, i, 'tenVatNuoi']}
              label={<span style={{ fontWeight: 600 }}>Tên vật nuôi sử dụng thức ăn ủ lên men</span>}
              rules={[]}
            >
              <Input placeholder='Ví dụ: Lợn, Gà...' />
            </Form.Item>
          </div>

          {/* Main table */}
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
                    5b. Tổng số lứa (đợt nuôi) & Số ngày nuôi/ lứa, đã sử dụng thức ăn ủ lên men (trước đến nay)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    5c. Số lượng vật nuôi (số con/lứa)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 250 }}>
                    6a. Khối lượng từng loại thức ăn cho vật nuôi trong 1 lứa (kg/con/lứa) x số con/lứa
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 250 }}>
                    6b. Số tiền đã chi mua từng loại thức ăn cho vật nuôi (số tiền = khối lượng thức ăn/con/lứa x đơn giá) x số con / lứa
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    6c. Số tiền chi mua thuốc thú y (đồng/lứa)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    6d. Vật nuôi có bị bất kỳ bệnh nào không (có/không)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    6e. Bạn đánh giá sức khỏe vật nuôi như thế nào (1 = cực kỳ tệ, 10: rất tốt)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    6f. Vật nuôi có phát triển nhanh hơn và/hoặc lớn hơn
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    6g. Thời gian nuôi đến khi xuất chuồng (tháng)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    6h. Trọng lượng trung bình khi xuất chuồng (kg/con)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    6i. Giá bán (đồng/kg)
                  </th>
                  <th style={{ border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', fontWeight: 600, minWidth: 180 }}>
                    6j. Thành tiền (đồng)
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: SAU KHI SỬ DỤNG THỨC ĂN Ủ LÊN MEN */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', fontWeight: 600, backgroundColor: '#f6ffed', textAlign: 'center' }}>
                    TRƯỚC KHI SỬ DỤNG<br />THỨC ĂN Ủ LÊN MEN
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <div style={{ fontSize: '11px', marginBottom: '2px' }}>
                      <Form.Item name={[`sectionC`, i, 'soLuaSauMen']} rules={[]} style={{ marginBottom: 0 }}>
                        <InputNumber placeholder='Lứa' size='small' style={{ width: '100%' }} min={0} />
                      </Form.Item>
                    </div>
                    <div style={{ fontSize: '11px' }}>
                      <Form.Item name={[`sectionC`, i, 'soNgayNuoiSauMen']} rules={[]} style={{ marginBottom: 0 }}>
                        <InputNumber placeholder='Ngày' size='small' style={{ width: '100%' }} min={0} />
                      </Form.Item>
                    </div>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'soLuongVatNuoiSau']} rules={[]} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='Con' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '3px', fontSize: '11px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '3px', fontSize: '11px', fontWeight: 500 }}>Kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Thức ăn ủ lên men', 'Sâu canxi/trùn quế', 'Thức ăn tinh (ngô, gạo)', 'Thức ăn tổng hợp/viên', 'Thức ăn xanh'].map((thucAnType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '3px' }}>
                              <Form.Item name={[`sectionC`, i, `sauMen_tenThucAn_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder={thucAnType} size='small' style={{ fontSize: '11px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '3px' }}>
                              <Form.Item name={[`sectionC`, i, `sauMen_kg_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '3px', fontSize: '11px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '3px', fontSize: '11px', fontWeight: 500 }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Thức ăn ủ lên men', 'Sâu canxi/trùn quế', 'Thức ăn tinh (ngô, gạo)', 'Thức ăn tổng hợp/viên', 'Thức ăn xanh'].map((thucAnType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '3px' }}>
                              <Form.Item name={[`sectionC`, i, `sauMen_tenThucAnTien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder={thucAnType} size='small' style={{ fontSize: '11px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '3px' }}>
                              <Form.Item name={[`sectionC`, i, `sauMen_tien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '11px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'tienThuocSauMen']} rules={[]} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'vatNuoiBiBenhSau']} rules={[]} style={{ marginBottom: 0 }}>
                      <Input placeholder='Có/Không' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'danhGiaSucKhoeSau']} rules={[]} style={{ marginBottom: 0 }}>
                      <InputNumber min={1} max={10} placeholder='1-10' size='small' style={{ width: '100%' }} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'vatNuoiPhatTrienSau']} rules={[]} style={{ marginBottom: 0 }}>
                      <Input placeholder='Có/Không' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'thoiGianNuoiSau']} rules={[]} style={{ marginBottom: 0 }}>
                      <Input placeholder='Tháng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'trongLuongXuatSau']} rules={[]} style={{ marginBottom: 0 }}>
                      <Input placeholder='kg/con' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'giaBanSau']} rules={[]} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng/kg' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'thanhTienSau']} rules={[]} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                </tr>

                {/* Row 2: TRƯỚC KHI SỬ DỤNG THỨC ĂN Ủ LÊN MEN */}
                <tr>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px', fontWeight: 600, backgroundColor: '#e6f7ff', textAlign: 'center' }}>
                    SAU KHI SỬ DỤNG <br />THỨC ĂN Ủ LÊN MEN
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <div style={{ fontSize: '11px', marginBottom: '2px' }}>
                      <Form.Item name={[`sectionC`, i, 'soLuaTruocMen']} rules={[]} style={{ marginBottom: 0 }}>
                        <InputNumber placeholder='Lứa' size='small' style={{ width: '100%' }} min={0} />
                      </Form.Item>
                    </div>
                    <div style={{ fontSize: '11px' }}>
                      <Form.Item name={[`sectionC`, i, 'soNgayNuoiTruocMen']} rules={[]} style={{ marginBottom: 0 }}>
                        <InputNumber placeholder='Ngày' size='small' style={{ width: '100%' }} min={0} />
                      </Form.Item>
                    </div>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'soLuongVatNuoiTruoc']} rules={[]} style={{ marginBottom: 0 }}>
                      <InputNumber placeholder='Con' size='small' style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e6e6e6' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f5f5f5' }}>
                          <th style={{ border: '1px solid #e6e6e6', padding: '3px', fontSize: '11px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '3px', fontSize: '11px', fontWeight: 500 }}>Kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Sâu canxi/trùn quế', 'Thức ăn tinh (ngô, gạo)', 'Thức ăn tổng hợp/viên', 'Thức ăn xanh'].map((thucAnType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '3px' }}>
                              <Form.Item name={[`sectionC`, i, `truocMen_tenThucAn_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder={thucAnType} size='small' style={{ fontSize: '11px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '3px' }}>
                              <Form.Item name={[`sectionC`, i, `truocMen_kg_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
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
                          <th style={{ border: '1px solid #e6e6e6', padding: '3px', fontSize: '11px', fontWeight: 500 }}>Tên thức ăn</th>
                          <th style={{ border: '1px solid #e6e6e6', padding: '3px', fontSize: '11px', fontWeight: 500 }}>đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['Sâu canxi/trùn quế', 'Thức ăn tinh (ngô, gạo)', 'Thức ăn tổng hợp/viên', 'Thức ăn xanh'].map((thucAnType, idx) => (
                          <tr key={idx}>
                            <td style={{ border: '1px solid #e6e6e6', padding: '3px' }}>
                              <Form.Item name={[`sectionC`, i, `truocMen_tenThucAnTien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder={thucAnType} size='small' style={{ fontSize: '11px' }} />
                              </Form.Item>
                            </td>
                            <td style={{ border: '1px solid #e6e6e6', padding: '3px' }}>
                              <Form.Item name={[`sectionC`, i, `truocMen_tien_${idx}`]} rules={[]} style={{ marginBottom: 0 }}>
                                <Input placeholder='đồng' size='small' style={{ fontSize: '11px' }} />
                              </Form.Item>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'tienThuocTruocMen']} rules={[]} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'vatNuoiBiBenhTruoc']} rules={[]} style={{ marginBottom: 0 }}>
                      <Input placeholder='Có/Không' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'danhGiaSucKhoeTruoc']} rules={[]} style={{ marginBottom: 0 }}>
                      <InputNumber min={1} max={10} placeholder='1-10' size='small' style={{ width: '100%' }} />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'vatNuoiPhatTrienTruoc']} rules={[]} style={{ marginBottom: 0 }}>
                      <Input placeholder='Có/Không' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'thoiGianNuoiTruoc']} rules={[]} style={{ marginBottom: 0 }}>
                      <Input placeholder='Tháng' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'trongLuongXuatTruoc']} rules={[]} style={{ marginBottom: 0 }}>
                      <Input placeholder='kg/con' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'giaBanTruoc']} rules={[]} style={{ marginBottom: 0 }}>
                      <Input placeholder='đồng/kg' size='small' />
                    </Form.Item>
                  </td>
                  <td style={{ border: '1px solid #d9d9d9', padding: '6px' }}>
                    <Form.Item name={[`sectionC`, i, 'thanhTienTruoc']} rules={[]} style={{ marginBottom: 0 }}>
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
        <Button
          type="dashed"
          onClick={addSectionC}
          icon={<PlusOutlined />}
          style={{ minWidth: 120 }}
        >
          Thêm phần
        </Button>
        {sectionCCount > 1 && (
          <Button
            type="text"
            danger
            onClick={removeSectionC}
            icon={<DeleteOutlined />}
            style={{ minWidth: 120 }}
          >
            Xóa phần cuối
          </Button>
        )}
      </div>

      <div className={styles.buttonGroup}>
        <Button onClick={onBack} style={{ marginRight: 16 }}>Quay lại</Button>
        <Button type="primary" htmlType="submit" style={{ minWidth: 180, fontWeight: 'bold' }}>Hoàn tất phần kỹ thuật</Button>
      </div>
    </Form>
  )
}
