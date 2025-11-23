import React from 'react'
import { Form, Input, InputNumber, Button, Checkbox, Typography, Divider } from 'antd'
import styles from './TechniqueFormLenMen.module.scss'
const { Title, Text } = Typography

export default function TechniqueFormLenMen({ onFinish, onBack }) {
  return (
    <Form layout="vertical" onFinish={onFinish} initialValues={{}} style={{maxWidth: 1200, margin: '0 auto'}}>
      <div className={styles.sectionTitle}>A. Quản lý phụ phẩm cây trồng SAU KHI áp dụng kỹ thuật ủ lên men</div>
      <Divider className={styles.divider} />
        {[0,1,2].map((i) => (
          <div key={i} className={styles.formSection}>
            <div className={styles.formRow}>
              <div className={styles.formCol}>
                <Form.Item
                  className={styles.formItem}
                  name={['sauMen',i,'tenPhuPhamCayTrong']}
                  label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Tên phụ phẩm cây trồng</span>}
                  rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập tên phụ phẩm cây trồng' }] : []}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className={styles.formCol}><Form.Item className={styles.formItem} name={[`sauMen`,i,'thangNamDau']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Tháng/năm áp dụng lần đầu</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập tháng/năm áp dụng lần đầu' }] : []}> <Input /> </Form.Item></div>
              <div className={styles.formCol}><Form.Item className={styles.formItem} name={[`sauMen`,i,'dienTichTrong']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Diện tích trồng/vụ</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập diện tích trồng/vụ' }] : []}> <Input /> </Form.Item></div>
              <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`sauMen`,i,'soLanMen']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Tổng số lần lên men</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập tổng số lần lên men' }] : []}> <InputNumber min={0} style={{width:'100%'}} /> </Form.Item></div>
              <div className={styles.formCol}><Form.Item className={styles.formItem} name={[`sauMen`,i,'thangNamGanNhat']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Tháng/năm vụ gần nhất</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập tháng/năm vụ gần nhất' }] : []}> <Input /> </Form.Item></div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formCol}><Form.Item className={styles.formItem} name={[`sauMen`,i,'tenPhuPhamTanDung']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Tên phụ phẩm tận dụng</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập tên phụ phẩm tận dụng' }] : []}> <Input /> </Form.Item></div>
              <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`sauMen`,i,'dienTichDat']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Diện tích đất trồng phụ phẩm</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập diện tích đất trồng phụ phẩm' }] : []}> <Input /> </Form.Item></div>
              <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`sauMen`,i,'khoiLuongTrenDong']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Khối lượng phụ phẩm trên đồng</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập khối lượng phụ phẩm trên đồng' }] : []}> <Input /> </Form.Item></div>
              <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`sauMen`,i,'khoiLuongThuGom']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Khối lượng thu gom</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập khối lượng thu gom' }] : []}> <Input /> </Form.Item></div>
              <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`sauMen`,i,'khoiLuongSuDungMen']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Khối lượng dùng để ủ lên men</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập khối lượng dùng để ủ lên men' }] : []}> <Input /> </Form.Item></div>
              <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`sauMen`,i,'khoiLuongThucAnMen']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Thức ăn ủ lên men thu được</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập thức ăn ủ lên men thu được' }] : []}> <Input /> </Form.Item></div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`sauMen`,i,'mayBamCat']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Máy băm/cắt nhỏ</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc chọn máy băm/cắt nhỏ' }] : []}> <Checkbox> Có </Checkbox> <Checkbox> Không </Checkbox> </Form.Item></div>
              <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`sauMen`,i,'nhienLieu']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Nhiên liệu cho 1 lần lên men</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập nhiên liệu' }] : []}> <Input placeholder="Dầu ... lít, Điện ... kw" /> </Form.Item></div>
              <div className={styles.formColLarge}><Form.Item className={styles.formItem} name={[`sauMen`,i,'chiPhiKhac']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Chi phí vật liệu/đầu vào khác</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập chi phí vật liệu/đầu vào khác' }] : []}> <Input placeholder="Thùng, túi ủ, chế phẩm, rỉ mật, cám..." /> </Form.Item></div>
            </div>
          </div>
        ))}

      <div level={4} className={styles.sectionTitle}>B. Quản lý phụ phẩm cây trồng TRƯỚC KHI áp dụng kỹ thuật ủ lên men</div>
      <Divider className={styles.divider} />
      {[0,1,2].map((i) => (
        <div key={i} className={styles.formSection}>
          <div className={styles.formRow}>
              <div className={styles.formCol}><Form.Item className={styles.formItem} name={[`truocMen`,i,'loaiCayTruoc']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Loại cây trồng</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập loại cây trồng' }] : []}> <Input /> </Form.Item></div>
              <div className={styles.formCol}><Form.Item className={styles.formItem} name={[`truocMen`,i,'dienTichTruoc']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Diện tích đất trồng cây</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập diện tích đất trồng cây' }] : []}> <Input /> </Form.Item></div>
              <div className={styles.formCol}><Form.Item className={styles.formItem} name={[`truocMen`,i,'loaiPhuPhamTruoc']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Loại phụ phẩm cây trồng</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập loại phụ phẩm cây trồng' }] : []}> <Input /> </Form.Item></div>
              <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`truocMen`,i,'khoiLuongPhuPhamTruoc']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Khối lượng phụ phẩm</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập khối lượng phụ phẩm' }] : []}> <Input /> </Form.Item></div>
              <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`truocMen`,i,'khoiLuongThuGomTruoc']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Khối lượng thu gom</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập khối lượng thu gom' }] : []}> <Input /> </Form.Item></div>
          </div>
        </div>
      ))}

      <div level={4} className={styles.sectionTitle}>C. Sử dụng thức ăn ủ lên men làm thức ăn chăn nuôi, sức khoẻ vật nuôi, hiệu quả kinh tế SAU và TRƯỚC khi sử dụng thức ăn ủ lên men</div>
      <Divider className={styles.divider} />
      {[0,1,2].map((i) => (
        <div key={i} className={styles.formSection}>
          <div className={styles.formRow}>
              <div className={styles.formCol}><Form.Item className={styles.formItem} name={[`thucAnMen`,i,'tenVatNuoi']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Tên vật nuôi</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập tên vật nuôi' }] : []}> <Input /> </Form.Item></div>
              <div className={styles.formCol}><Form.Item className={styles.formItem} name={[`thucAnMen`,i,'soLuotNuoi']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Tổng số lứa & số ngày nuôi/lứa</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập tổng số lứa & số ngày nuôi/lứa' }] : []}> <Input /> </Form.Item></div>
              <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`thucAnMen`,i,'soLuongVatNuoi']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Số lượng vật nuôi</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập số lượng vật nuôi' }] : []}> <InputNumber min={0} style={{width:'100%'}} /> </Form.Item></div>
              <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`thucAnMen`,i,'soTienThucAn']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Số tiền đã chi mua từng loại thức ăn</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập số tiền đã chi mua từng loại thức ăn' }] : []}> <Input /> </Form.Item></div>
              <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`thucAnMen`,i,'soTienThuoc']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Số tiền chi mua thuốc thú y</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập số tiền chi mua thuốc thú y' }] : []}> <Input /> </Form.Item></div>
              <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`thucAnMen`,i,'vatNuoiBiBenh']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Vật nuôi có bị bệnh không</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc chọn vật nuôi có bị bệnh không' }] : []}> <Checkbox> Có </Checkbox> <Checkbox> Không </Checkbox> </Form.Item></div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formColFull}>
              <div className={styles.foodWeightGroupHorizontal}>
                <div className={styles.foodWeightTitle} style={{fontWeight: 'bold', margin: '10px 0'}}>Khối lượng từng loại thức ăn cho vật nuôi trong 1 lứa (kg/con/lứa) x số con/lứa</div>
                <div className={styles.foodWeightSectionsRow}>
                  <div className={styles.foodWeightRowGroup}>
                    <div className={styles.foodWeightLabel}>Sau khi sử dụng thức ăn ủ lên men:</div>
                      <div className={styles.foodWeightRowInputsRow}>
                        <Form.Item name={[`thucAnMen`,i,'khoiLuongSauMen','thucAnMen']} className={styles.foodWeightItem} label="Thức ăn ủ lên men"><Input size="small" /></Form.Item>
                        <Form.Item name={[`thucAnMen`,i,'khoiLuongSauMen','sauCanxi']} className={styles.foodWeightItem} label="Sâu canxi/trùn quế"><Input size="small" /></Form.Item>
                        <Form.Item name={[`thucAnMen`,i,'khoiLuongSauMen','tinhNgoGao']} className={styles.foodWeightItem} label="Thức ăn tinh (ngô, gạo)"><Input size="small" /></Form.Item>
                        <Form.Item name={[`thucAnMen`,i,'khoiLuongSauMen','tongHopVien']} className={styles.foodWeightItem} label="Thức ăn tổng hợp/viên"><Input size="small" /></Form.Item>
                        <Form.Item name={[`thucAnMen`,i,'khoiLuongSauMen','thucAnXanh']} className={styles.foodWeightItem} label="Thức ăn xanh"><Input size="small" /></Form.Item>
                      </div>
                  </div>
                  <div className={styles.foodWeightRowGroup}>
                    <div className={styles.foodWeightLabel}>Trước khi sử dụng thức ăn ủ lên men:</div>
                    <div className={styles.foodWeightRowInputs}>
                      <Form.Item name={[`thucAnMen`,i,'khoiLuongTruocMen','sauCanxi']} className={styles.foodWeightItem} label="Sâu canxi/trùn quế"><Input size="small" /></Form.Item>
                      <Form.Item name={[`thucAnMen`,i,'khoiLuongTruocMen','tinhNgoGao']} className={styles.foodWeightItem} label="Thức ăn tinh (ngô, gạo)"><Input size="small" /></Form.Item>
                      <Form.Item name={[`thucAnMen`,i,'khoiLuongTruocMen','tongHopVien']} className={styles.foodWeightItem} label="Thức ăn tổng hợp/viên"><Input size="small" /></Form.Item>
                      <Form.Item name={[`thucAnMen`,i,'khoiLuongTruocMen','thucAnXanh']} className={styles.foodWeightItem} label="Thức ăn xanh"><Input size="small" /></Form.Item>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`thucAnMen`,i,'danhGiaSucKhoe']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Đánh giá sức khoẻ vật nuôi (1-10)</span>}> <InputNumber min={1} max={10} style={{width:'100%'}} /> </Form.Item></div>
            <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`thucAnMen`,i,'vatNuoiPhatTrien']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Vật nuôi phát triển nhanh/lớn hơn</span>}> <Checkbox> Có </Checkbox> <Checkbox> Không </Checkbox> </Form.Item></div>
            <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`thucAnMen`,i,'thoiGianNuoi']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Thời gian nuôi đến khi xuất chuồng (tháng)</span>}> <Input /> </Form.Item></div>
            <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`thucAnMen`,i,'trongLuongXuatChuong']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Trọng lượng trung bình khi xuất chuồng</span>}> <Input /> </Form.Item></div>
            <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`thucAnMen`,i,'giaBan']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Giá bán (đồng/kg)</span>}> <Input /> </Form.Item></div>
            <div className={styles.formColSmall}><Form.Item className={styles.formItem} name={[`thucAnMen`,i,'thanhTien']} label={<span className={styles.formLabel} style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Thành tiền (đồng)</span>}> <Input /> </Form.Item></div>
          </div>
        </div>
      ))}

      <div className={styles.buttonGroup}>
        <Button onClick={onBack} style={{marginRight:16}}>Quay lại</Button>
        <Button type="primary" htmlType="submit" style={{minWidth:180,fontWeight:'bold'}}>Hoàn tất phần kỹ thuật</Button>
      </div>
    </Form>
  )
}
