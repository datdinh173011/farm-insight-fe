import React from 'react'
import { Form, Input, InputNumber, Button, Checkbox, Typography, Divider } from 'antd'
import styles from './TechniqueFormLenMen.module.scss'
const { Title, Text } = Typography

export default function TechniqueFormLenMen({ form, onFinish, onBack, initialValues }) {
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={initialValues || {}}
      style={{maxWidth: 1200, margin: '0 auto'}}
    >
      <div className={styles.sectionTitle}>A. Quản lý phụ phẩm cây trồng SAU KHI áp dụng kỹ thuật ủ lên men</div>
      <Divider className={styles.divider} />
        {[0].map((i) => (
          <div key={i} className={styles.formSection}>
            {/* Group every 2 questions per row for a cleaner layout */}
            <div className={styles.row}>
              <Form.Item className={styles.col} name={[`sauMen`,i,'tenPhuPhamCayTrong']} label="Tên phụ phẩm cây trồng (sử dụng ủ lên men)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập tên phụ phẩm cây trồng' }] : []}><Input /></Form.Item>
              <Form.Item className={styles.col} name={[`sauMen`,i,'thangNamDau']} label="Tháng/năm áp dụng kỹ thuật ủ lên men (lần đầu tiên)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập tháng/năm áp dụng lần đầu' }] : []}><Input /></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item className={styles.col} name={[`sauMen`,i,'dienTichTrong']} label="Diện tích trồng trong 1 vụ" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập diện tích trồng/vụ' }] : []}><Input /></Form.Item>
              <Form.Item className={styles.col} name={[`sauMen`,i,'soLanMen']} label="Tổng số lần (số vụ) đã tiến hành lên men" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập tổng số lần lên men' }] : []}><InputNumber style={{width:'100%'}} /></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item className={styles.col} name={[`sauMen`,i,'thangNamGanNhat']} label="Tháng/năm bắt đầu vụ gần đây nhất" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập tháng/năm vụ gần nhất' }] : []}><Input /></Form.Item>
              <Form.Item className={styles.col} name={[`sauMen`,i,'tenPhuPhamTanDung']} label="Tên phụ phẩm cây trồng tận dụng để ủ lên men" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập tên phụ phẩm tận dụng' }] : []}><Input /></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item className={styles.col} name={[`sauMen`,i,'dienTichDat']} label="Diện tích đất được sử dụng để trồng cây lấy phụ phẩm ủ lên men (số sào/ vụ)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập diện tích đất trồng phụ phẩm' }] : []}><Input /></Form.Item>
              <Form.Item className={styles.col} name={[`sauMen`,i,'khoiLuongTrenDong']} label="Khối lượng phụ phẩm cây trồng có trên đồng ruộng (kg/ sào/ vụ x số sào)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập khối lượng phụ phẩm trên đồng' }] : []}><Input /></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item className={styles.col} name={[`sauMen`,i,'khoiLuongThuGom']} label="Tổng khối lượng phụ phẩm cây trồng thu gom được (kg/ sào/ vụ x số sào)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập khối lượng thu gom' }] : []}><Input /></Form.Item>
              <Form.Item className={styles.col} name={[`sauMen`,i,'khoiLuongSuDungMen']} label="Tổng khối lượng phụ phẩm cây trồng được sử dụng để ủ lên men (kg/ sào/ vụ x số sào)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập khối lượng dùng để ủ lên men' }] : []}><Input /></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item className={styles.col} name={[`sauMen`,i,'khoiLuongThucAnMen']} label="Khối lượng thức ăn ủ lên men thu được (kg)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập thức ăn ủ lên men thu được' }] : []}><Input /></Form.Item>
              <Form.Item className={styles.col} name={[`sauMen`,i,'mayBamCat']} label="Sử dụng máy để băm/ cắt nhỏ phụ phẩm cây trồng (có/ không)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc chọn máy băm/cắt nhỏ' }] : []}><Input placeholder='Có/Không'/></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item className={styles.col} name={[`sauMen`,i,'nhienLieu']} label="Lượng nhiên liệu đã sử dụng cho 1 lần lên men (dầu diesel/ hoặc điện; kg/ hoặc giờ)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập nhiên liệu' }] : []}><Input placeholder="Dầu ... lít, Điện ... kw" /></Form.Item>
              <Form.Item className={styles.col} name={[`sauMen`,i,'chiPhiKhac']} label="Chi phí vật liệu/ đầu vào khác cho 1 lần lên men (ví dụ: thùng, túi ủ, chế phẩm,...)" rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập chi phí vật liệu/đầu vào khác' }] : []}><Input placeholder="Thùng, túi ủ, chế phẩm, rỉ mật, cám..." /></Form.Item>
            </div>
          </div>
        ))}

      <div level={4} className={styles.sectionTitle}>B. Quản lý phụ phẩm cây trồng TRƯỚC KHI áp dụng kỹ thuật ủ lên men</div>
      <Divider className={styles.divider} />
      {[0].map((i) => (
        <div key={i} className={styles.formSection}>
          <div className={styles.row}>
            <div className={styles.col}>
              <Form.Item className={styles.formItem} name={[`truocMen`,i,'loaiCayTruoc']} label={<span className={styles.formLabel}>Loại cây trồng</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập loại cây trồng' }] : []}> <Input /> </Form.Item>
            </div>
            <div className={styles.col}>
              <Form.Item className={styles.formItem} name={[`truocMen`,i,'dienTichTruoc']} label={<span className={styles.formLabel}>Diện tích đất trồng cây</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập diện tích đất trồng cây' }] : []}> <Input /> </Form.Item>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <Form.Item className={styles.formItem} name={[`truocMen`,i,'loaiPhuPhamTruoc']} label={<span className={styles.formLabel}>Loại phụ phẩm cây trồng</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập loại phụ phẩm cây trồng' }] : []}> <Input /> </Form.Item>
            </div>
            <div className={styles.col}>
              <Form.Item className={styles.formItem} name={[`truocMen`,i,'khoiLuongPhuPhamTruoc']} label={<span className={styles.formLabel}>Khối lượng phụ phẩm</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập khối lượng phụ phẩm' }] : []}> <Input /> </Form.Item>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <Form.Item className={styles.formItem} name={[`truocMen`,i,'khoiLuongThuGomTruoc']} label={<span className={styles.formLabel}>Khối lượng thu gom</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập khối lượng thu gom' }] : []}> <Input /> </Form.Item>
            </div>
          </div>
        </div>
      ))}

      <div level={4} className={styles.sectionTitle}>C. Sử dụng thức ăn ủ lên men làm thức ăn chăn nuôi, sức khoẻ vật nuôi, hiệu quả kinh tế SAU và TRƯỚC khi sử dụng thức ăn ủ lên men</div>
      <Divider className={styles.divider} />
      {[0].map((i) => (
        <div key={i} className={styles.formSection}>
          <div className={styles.row}>
            <div className={styles.col}>
              <Form.Item className={styles.formItem} name={[`thucAnMen`,i,'tenVatNuoi']} label={<span className={styles.formLabel}>Tên vật nuôi</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập tên vật nuôi' }] : []}> <Input /> </Form.Item>
            </div>
          </div>
          <div key={i} className={styles.groupedBg}>
                <div className={styles.label}><span style={{fontWeight:'500'}}>Tổng số lứa (đợt nuôi) & Số ngày nuôi/ lứa, đã sử dụng thức ăn ủ lên men (trước đến nay) </span></div>
                    <div className={styles.row}>
                        <div className={styles.col} style={{width:'50%'}}>
                            <Form.Item name={`dienTichSauPhanU_${i}`} label="SAU KHI SỬ DỤNG THỨC ĂN Ủ LÊN MEN" rules={[{required:true,message:'Bắt buộc nhập'}]}>
                            <InputNumber min={0} style={{width:'100%'}} />
                            </Form.Item>
                        </div>
                        <div className={styles.col} style={{width:'50%'}}>
                            <Form.Item name={`dienTichKhongPhanU_${i}`} label="TRƯỚC KHI SỬ DỤNG THỨC ĂN Ủ LÊN MEN" rules={[{required:true,message:'Bắt buộc nhập'}]}>
                            <InputNumber min={0} style={{width:'100%'}} />
                            </Form.Item>
                        </div>
                </div>
            </div>
            <div key={i} className={styles.groupedBg}>
                <div className={styles.label}><span style={{fontWeight:'500'}}>Số lượng vật nuôi (số con/lứa) </span></div>
                    <div className={styles.row}>
                        <div className={styles.col} style={{width:'50%'}}>
                            <Form.Item name={`dienTichSauPhanU_${i}`} label="SAU KHI SỬ DỤNG THỨC ĂN Ủ LÊN MEN" rules={[{required:true,message:'Bắt buộc nhập'}]}>
                            <InputNumber min={0} style={{width:'100%'}} />
                            </Form.Item>
                        </div>
                        <div className={styles.col} style={{width:'50%'}}>
                            <Form.Item name={`dienTichKhongPhanU_${i}`} label="TRƯỚC KHI SỬ DỤNG THỨC ĂN Ủ LÊN MEN" rules={[{required:true,message:'Bắt buộc nhập'}]}>
                            <InputNumber min={0} style={{width:'100%'}} />
                            </Form.Item>
                        </div>
                </div>
            </div>
            <div className={styles.groupedBg}>
                <div style={{fontWeight:'bold',marginBottom:4}}>Số lượng từng loại phân bón (kg/sào)</div>
                <div style={{display:'flex',gap:16}}>
                    <div style={{flex:'1 1 300px'}}>
                        <div style={{marginBottom:2}}>SAU KHI BÓN PHÂN Ủ</div>
                        <Form.Item name={[`thucAnMen`,i,'khoiLuongSauMen','thucAnMen']} label="Thức ăn ủ lên men" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={[`thucAnMen`,i,'khoiLuongSauMen','sauCanxi']} label="Sâu canxi/trùn quế"rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <InputNumber min={0} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={[`thucAnMen`,i,'khoiLuongSauMen','tinhNgoGao']} label="Thức ăn tinh (ngô, gạo)"rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={[`thucAnMen`,i,'khoiLuongSauMen','tongHopVien']} label="Thức ăn tổng hợp/viên"rules={[{required:true,message:'Bắt buộc nhập'}]}style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={[`thucAnMen`,i,'khoiLuongSauMen','thucAnXanh']} label="Thức ăn xanh"rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                    </div>
                    <div style={{flex:'1 1 300px'}}>
                        <div style={{marginBottom:2}}>KHÔNG BÓN PHÂN Ủ</div>
                        <Form.Item name={[`thucAnMen`,i,'khoiLuongSauMen','sauCanxi']} label="Sâu canxi/trùn quế"rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <InputNumber min={0} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={[`thucAnMen`,i,'khoiLuongSauMen','tinhNgoGao']} label="Thức ăn tinh (ngô, gạo)"rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={[`thucAnMen`,i,'khoiLuongSauMen','tongHopVien']} label="Thức ăn tổng hợp/viên"rules={[{required:true,message:'Bắt buộc nhập'}]}style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={[`thucAnMen`,i,'khoiLuongSauMen','thucAnXanh']} label="Thức ăn xanh"rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                    </div>
                </div>
            </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <Form.Item className={styles.formItem} name={[`thucAnMen`,i,'soTienThucAn']} label={<span className={styles.formLabel}>Số tiền đã chi mua từng loại thức ăn</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập số tiền đã chi mua từng loại thức ăn' }] : []}> <Input /> </Form.Item>
            </div>
            <div className={styles.col}>
              <Form.Item className={styles.formItem} name={[`thucAnMen`,i,'soTienThuoc']} label={<span className={styles.formLabel}>Số tiền chi mua thuốc thú y</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc nhập số tiền chi mua thuốc thú y' }] : []}> <Input /> </Form.Item>
            </div>
          </div>
          <div className={styles.row}>  
            <div className={styles.col}>
              <Form.Item className={styles.formItem} name={[`thucAnMen`,i,'vatNuoiBiBenh']} label={<span className={styles.formLabel}>Vật nuôi có bị bệnh không</span>} rules={i === 0 ? [{ required: true, message: 'Bắt buộc chọn vật nuôi có bị bệnh không' }] : []}> <Input placeholder='Có/Không' /> </Form.Item>
            </div>
            <div className={styles.col}>
              <Form.Item className={styles.formItem} name={[`thucAnMen`,i,'danhGiaSucKhoe']} label={<span className={styles.formLabel}>Đánh giá sức khoẻ vật nuôi (1-10)</span>}> <InputNumber min={1} max={10} style={{width:'100%'}} /> </Form.Item>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <Form.Item className={styles.formItem} name={[`thucAnMen`,i,'vatNuoiPhatTrien']} label={<span className={styles.formLabel}>Vật nuôi phát triển nhanh/lớn hơn</span>}> <Input placeholder='Có/Không' /> </Form.Item>
            </div>
            <div className={styles.col}>
              <Form.Item className={styles.formItem} name={[`thucAnMen`,i,'thoiGianNuoi']} label={<span className={styles.formLabel}>Thời gian nuôi đến khi xuất chuồng (tháng)</span>}> <Input /> </Form.Item>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <Form.Item className={styles.formItem} name={[`thucAnMen`,i,'trongLuongXuatChuong']} label={<span className={styles.formLabel}>Trọng lượng trung bình khi xuất chuồng</span>}> <Input /> </Form.Item>
            </div>
            <div className={styles.col}>
              <Form.Item className={styles.formItem} name={[`thucAnMen`,i,'giaBan']} label={<span className={styles.formLabel}>Giá bán (đồng/kg)</span>}> <Input /> </Form.Item>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <Form.Item className={styles.formItem} name={[`thucAnMen`,i,'thanhTien']} label={<span className={styles.formLabel}>Thành tiền (đồng)</span>}> <Input /> </Form.Item>
            </div>
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
