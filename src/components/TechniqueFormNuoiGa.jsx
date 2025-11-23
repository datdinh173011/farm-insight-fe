import React from 'react';
import { Form, Input, InputNumber, Checkbox, Button, Divider } from 'antd';
import styles from './TechniqueFormNuoiGa.module.scss';

export default function TechniqueFormNuoiGa({ onFinish, onBack }) {
  return (
    <Form layout="vertical" onFinish={onFinish} initialValues={{}} style={{ maxWidth: 1200, margin: '0 auto' }}>
  <div className={styles.sectionTitle}>Kỹ thuật: Nuôi gà trên đệm lót sinh học dày</div>

    <div className={styles.sectionTitle}>A. Quản lý phụ phẩm cây trồng SAU KHI sử dụng đệm lót sinh học dày</div>
    <Divider className={styles.divider} />
      {[0,1,2].map(i => (
        <div key={i} className={styles.formSection}>
          <div className={styles.formRow}>
            <Form.Item className={styles.formCol} name={[`sauDemLot`,i,'tenPhuPhamTruoc']} label={<span className={styles.formLabel}>Tên phụ phẩm cây trồng (tận dụng làm đệm lót sinh học dày TỪ TRƯỚC ĐẾN NAY)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập tên phụ phẩm'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`sauDemLot`,i,'thangNamBatDau']} label={<span className={styles.formLabel}>Tháng/năm bắt đầu áp dụng kỹ thuật</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập tháng/năm'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`sauDemLot`,i,'tongSoMuaVu']} label={<span className={styles.formLabel}>Tổng số mùa vụ đã tận dụng phụ phẩm để làm đệm lót sinh học dày TỪ TRƯỚC ĐẾN NAY (vụ)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập số vụ'}]:[]}> <InputNumber min={0} style={{width:'100%'}} /> </Form.Item>
            <Form.Item className={styles.formCol} name={[`sauDemLot`,i,'tenCayBonPhan']} label={<span className={styles.formLabel}>Tên những loại cây trồng được bón phân ủ thu được từ lớp đệm lót</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập tên cây trồng'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`sauDemLot`,i,'dienTichCayBonPhan']} label={<span className={styles.formLabel}>Diện tích cây trồng được bón phân ủ thu được từ lớp đệm lót trong 1 vụ (sào/vụ)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập diện tích'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`sauDemLot`,i,'tongSoMuaVuBonPhan']} label={<span className={styles.formLabel}>Tổng số mùa vụ đã được bón phân ủ thu được từ lớp đệm lót</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập số vụ bón phân'}]:[]}> <InputNumber min={0} style={{width:'100%'}} /> </Form.Item>
          </div>
          <div className={styles.formRow}>
            <Form.Item className={styles.formCol} name={[`sauDemLot`,i,'tenPhuPhamDuocTao']} label={<span className={styles.formLabel}>Tên phụ phẩm cây trồng được tận dụng làm đệm lót sinh học dày</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập tên phụ phẩm tạo ra'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`sauDemLot`,i,'dienTichTaoPhuPham']} label={<span className={styles.formLabel}>Diện tích cây trồng tạo ra loại phụ phẩm được tận dụng làm đệm lót sinh học dày (sào)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập diện tích tạo phụ phẩm'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`sauDemLot`,i,'khoiLuongTrenDong']} label={<span className={styles.formLabel}>Khối lượng phụ phẩm cây trồng có trên đồng ruộng (kg/sào x số sào)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập khối lượng trên đồng'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`sauDemLot`,i,'khoiLuongThuGom']} label={<span className={styles.formLabel}>Khối lượng phụ phẩm cây trồng thu gom được (kg/sào x số sào)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập khối lượng thu gom'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`sauDemLot`,i,'tongKhoiLuongLamDemLot']} label={<span className={styles.formLabel}>Tổng khối lượng phụ phẩm cây trồng được tận dụng để làm đệm lót (kg)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập tổng khối lượng làm đệm lót'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`sauDemLot`,i,'tongKhoiLuongPhanU']} label={<span className={styles.formLabel}>Tổng khối lượng phân ủ thu được từ lớp đệm lót (kg)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập tổng khối lượng phân ủ'}]:[]}> <Input /> </Form.Item>
          </div>
          <div className={styles.formRow}>
            <Form.Item className={styles.formColSmall} name={[`sauDemLot`,i,'mayBamCat']} label={<span className={styles.formLabel}>Sử dụng máy để băm/cắt nhỏ phụ phẩm cây trồng</span>} rules={i===0?[{required:true,message:'Bắt buộc chọn máy băm/cắt nhỏ'}]:[]}> <Checkbox> Có </Checkbox> <Checkbox> Không </Checkbox> </Form.Item>
            <Form.Item className={styles.formCol} name={[`sauDemLot`,i,'nhienLieu']} label={<span className={styles.formLabel}>Lượng nhiên liệu đã sử dụng (dầu diesel/ hoặc điện)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập nhiên liệu'}]:[]}> <Input placeholder="Dầu ... lít, Điện ... kw" /> </Form.Item>
            <Form.Item className={styles.formColLarge} name={[`sauDemLot`,i,'chiPhiKhac']} label={<span className={styles.formLabel}>Chi phí vật liệu/đầu vào khác (ví dụ: nhân công, chế phẩm, …) (đồng)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập chi phí vật liệu/đầu vào khác'}]:[]}> <Input /> </Form.Item>
          </div>
        </div>
      ))}

  <div className={styles.sectionTitle}>B. Quản lý phụ phẩm cây trồng TRƯỚC KHI áp dụng kỹ thuật nuôi gà trên đệm lót sinh học dày (NĂM 2022)</div>
  <Divider className={styles.divider} />
      {[0,1,2].map(i => (
        <div key={i} className={styles.formSection}>
          <div className={styles.formRow}>
            <Form.Item className={styles.formCol} name={[`truocDemLot`,i,'loaiCayTruoc']} label={<span className={styles.formLabel}>Loại cây trồng, TRƯỚC KHI áp dụng kỹ thuật</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập loại cây trồng'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`truocDemLot`,i,'dienTichTruoc']} label={<span className={styles.formLabel}>Diện tích đất trồng cây, TRƯỚC KHI áp dụng kỹ thuật (sào/vụ x số vụ/năm)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập diện tích đất trồng'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formCol} name={[`truocDemLot`,i,'loaiPhuPhamTruoc']} label={<span className={styles.formLabel}>Có những loại phụ phẩm cây trồng nào, TRƯỚC KHI áp dụng kỹ thuật</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập loại phụ phẩm'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`truocDemLot`,i,'khoiLuongPhuPhamTruoc']} label={<span className={styles.formLabel}>Có bao nhiêu kg phụ phẩm cây trồng tại ruộng/vườn TRƯỚC KHI áp dụng kỹ thuật (kg/sào/vụ x số sào/vụ)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập khối lượng phụ phẩm'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`truocDemLot`,i,'khoiLuongThuGomTruoc']} label={<span className={styles.formLabel}>Có bao nhiêu kg phụ phẩm cây trồng được thu gom TRƯỚC KHI áp dụng kỹ thuật (kg/sào/vụ x số sào/vụ)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập khối lượng thu gom'}]:[]}> <Input /> </Form.Item>
          </div>
        </div>
      ))}

  <div className={styles.sectionTitle}>C. Sử dụng PHÂN Ủ từ lớp đệm lót làm phân bón cây trồng, sức khoẻ cây trồng, hiệu quả kinh tế SAU và TRƯỚC khi sử dụng phân ủ</div>
  <Divider className={styles.divider} />
      {[0,1,2].map(i => (
        <div key={i} className={styles.formSection}>
          {/* Dòng các câu hỏi đơn */}
          <div className={styles.formRow}>
            <Form.Item className={styles.formCol} name={[`phanU`,i,'tenCayTrong']} label={<span className={styles.formLabel}>Tên cây trồng được bón phân ủ từ lớp đệm lót</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập tên cây trồng'}]:[]}> <Input style={{width:'50%'}} /> </Form.Item>
          </div>
          {/* Diện tích trồng (sào) label riêng 1 hàng */}
          <div className={styles.formRow}>
            <span className={styles.formLabel} style={{marginBottom:4,display:'block'}}>Diện tích trồng (sào)</span>
          </div>
          {/* Hai câu hỏi con trên 1 hàng */}
          <div className={styles.formRow} style={{display:'flex',gap:16,marginBottom:8}}>
            <Form.Item className={styles.formColSmall} name={[`phanU`,i,'dienTichSauPhanU']} label={<span className={styles.formLabel}>SAU KHI BÓN PHÂN Ủ</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập diện tích trồng'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`phanU`,i,'dienTichKhongPhanU']} label={<span className={styles.formLabel}>KHÔNG BÓN PHÂN Ủ</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập diện tích trồng'}]:[]}> <Input /> </Form.Item>
          </div>
          {/* Dòng nhóm phân bón riêng biệt */}
          <div className={styles.formRow} style={{marginTop:16,marginBottom:8}}>
            <div className={styles.formColLarge} style={{display:'flex',flexDirection:'column',width:'100%'}}>
              <div className={styles.formLabel} style={{marginBottom:4}}>Tổng khối lượng từng loại phân bón (kg/sào x số sào)</div>
              <div style={{display:'flex',gap:16,flexWrap:'wrap',marginBottom:4}}>
                <div style={{display:'flex',flexDirection:'column',gap:4}}>
                  <div style={{fontWeight:'bold',fontSize:13}}>SAU KHI BÓN PHÂN Ủ</div>
                  <div style={{display:'flex',gap:16,alignItems:'flex-end',flexWrap:'wrap'}}>
                    <Form.Item name={[`phanU`,i,'sauPhanU','phanU']} className={styles.formItem} label={<span className={styles.formLabel}>Phân ủ/đệm lót/trùn quế/sâu canxi</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`phanU`,i,'sauPhanU','npkLot']} className={styles.formItem} label={<span className={styles.formLabel}>Phân NPK bón lót</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`phanU`,i,'sauPhanU','npkThuc']} className={styles.formItem} label={<span className={styles.formLabel}>Phân NPK bón thúc</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`phanU`,i,'sauPhanU','phanKhac']} className={styles.formItem} label={<span className={styles.formLabel}>Phân khác (ghi rõ)</span>}><Input size="small" /></Form.Item>
                  </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:4}}>
                  <div style={{fontWeight:'bold',fontSize:13}}>KHÔNG BÓN PHÂN Ủ</div>
                  <div style={{display:'flex',gap:16,alignItems:'flex-end',flexWrap:'wrap'}}>
                    <Form.Item name={[`phanU`,i,'khongPhanU','npkLot']} className={styles.formItem} label={<span className={styles.formLabel}>Phân NPK bón lót</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`phanU`,i,'khongPhanU','npkThuc']} className={styles.formItem} label={<span className={styles.formLabel}>Phân NPK bón thúc</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`phanU`,i,'khongPhanU','phanKhac']} className={styles.formItem} label={<span className={styles.formLabel}>Phân khác (ghi rõ)</span>}><Input size="small" /></Form.Item>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Dòng nhóm Số tiền từng loại phân bón riêng biệt */}
          <div className={styles.formRow} style={{marginTop:16,marginBottom:8}}>
            <div className={styles.formColLarge} style={{display:'flex',flexDirection:'column',width:'100%'}}>
              <div className={styles.formLabel} style={{marginBottom:4}}>Số tiền đã chi cho mua từng loại phân bón (= khối lượng phân bón/ sào x số sào x đơn giá)</div>
              <div style={{display:'flex',gap:16,flexWrap:'wrap',marginBottom:4}}>
                <div style={{display:'flex',flexDirection:'column',gap:4}}>
                  <div style={{fontWeight:'bold',fontSize:13}}>SAU KHI BÓN PHÂN Ủ</div>
                  <div style={{display:'flex',gap:16,alignItems:'flex-end',flexWrap:'wrap'}}>
                    <Form.Item name={[`phanU`,i,'sauPhanU','tienPhanU']} className={styles.formItem} label={<span className={styles.formLabel}>Phân ủ/đệm lót/trùn quế/sâu canxi</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`phanU`,i,'sauPhanU','tienNpkLot']} className={styles.formItem} label={<span className={styles.formLabel}>Phân NPK bón lót</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`phanU`,i,'sauPhanU','tienNpkThuc']} className={styles.formItem} label={<span className={styles.formLabel}>Phân NPK bón thúc</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`phanU`,i,'sauPhanU','tienPhanKhac']} className={styles.formItem} label={<span className={styles.formLabel}>Phân khác (ghi rõ)</span>}><Input size="small" /></Form.Item>
                  </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:4}}>
                  <div style={{fontWeight:'bold',fontSize:13}}>KHÔNG BÓN PHÂN Ủ</div>
                  <div style={{display:'flex',gap:16,alignItems:'flex-end',flexWrap:'wrap'}}>
                    <Form.Item name={[`phanU`,i,'khongPhanU','tienNpkLot']} className={styles.formItem} label={<span className={styles.formLabel}>Phân NPK bón lót</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`phanU`,i,'khongPhanU','tienNpkThuc']} className={styles.formItem} label={<span className={styles.formLabel}>Phân NPK bón thúc</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`phanU`,i,'khongPhanU','tienPhanKhac']} className={styles.formItem} label={<span className={styles.formLabel}>Phân khác (ghi rõ)</span>}><Input size="small" /></Form.Item>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formRow}>
            <Form.Item className={styles.formColSmall} name={[`phanU`,i,'soLanPhunThuoc']} label={<span className={styles.formLabel}>Số lần phun thuốc trừ sâu hóa học</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập số lần phun thuốc'}]:[]}> <InputNumber min={0} style={{width:'100%'}} /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`phanU`,i,'soLuongThuocSau']} label={<span className={styles.formLabel}>Số lượng thuốc trừ sâu hóa học được sử dụng (số bình 15-20l/sào)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập số lượng thuốc sâu'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`phanU`,i,'soLuongThuocCo']} label={<span className={styles.formLabel}>Số lượng thuốc trừ cỏ được sử dụng (số bình 15-20l/sào)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập số lượng thuốc cỏ'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`phanU`,i,'soTienThuocSau']} label={<span className={styles.formLabel}>Số tiền đã chi cho thuốc trừ sâu hóa học (đồng/sào)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập số tiền thuốc sâu'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`phanU`,i,'soTienThuocCo']} label={<span className={styles.formLabel}>Số tiền đã chi cho thuốc trừ cỏ hóa học (đồng/sào)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập số tiền thuốc cỏ'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`phanU`,i,'soTienCongLaoDong']} label={<span className={styles.formLabel}>Số tiền công lao động (số công/sào x số sào x đơn giá ngày công TB)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập số tiền công lao động'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`phanU`,i,'soTienHatGiong']} label={<span className={styles.formLabel}>Số tiền mua hạt giống (đồng/sào)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập số tiền hạt giống'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`phanU`,i,'sauBenh']} label={<span className={styles.formLabel}>Cây trồng có bị sâu bệnh tấn công không?</span>} rules={i===0?[{required:true,message:'Bắt buộc chọn sâu bệnh'}]:[]}> <Checkbox> Có </Checkbox> <Checkbox> Không </Checkbox> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`phanU`,i,'nangSuat']} label={<span className={styles.formLabel}>Năng suất thu hoạch (kg/sào)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập năng suất'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`phanU`,i,'giaBan']} label={<span className={styles.formLabel}>Giá bán (đồng/kg)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập giá bán'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`phanU`,i,'thanhTien']} label={<span className={styles.formLabel}>Thành tiền (đồng)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập thành tiền'}]:[]}> <Input /> </Form.Item>
          </div>
        </div>
      ))}

  <div className={styles.sectionTitle}>D. Sử dụng thức ăn, sức khỏe ĐÀN GÀ và kinh tế SAU và TRƯỚC khi nuôi gà trên đệm lót sinh học dày</div>
  <Divider className={styles.divider} />
      {[0,1,2].map(i => (
        <div key={i} className={styles.formSection}>
          {/* Số lượng gà label riêng 1 hàng */}
          <div className={styles.formRow}>
            <span className={styles.formLabel} style={{marginBottom:4}}>Số lượng gà trong đợt nuôi (con)</span>
          </div>
          {/* Hai câu hỏi con trên 1 hàng */}
          <div className={styles.formRow} style={{display:'flex',gap:16,marginBottom:8}}>
            <Form.Item className={styles.formColSmall} name={[`danGa`,i,'soLuongGaSauDemLot']} label={<span className={styles.formLabel}>SAU KHI sử dụng đệm lót sinh học dày</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập số lượng gà'}]:[]}> <InputNumber min={0} style={{width:'100%'}} /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`danGa`,i,'soLuongGaTruocDemLot']} label={<span className={styles.formLabel}>TRƯỚC KHI sử dụng đệm lót sinh học dày</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập số lượng gà'}]:[]}> <InputNumber min={0} style={{width:'100%'}} /> </Form.Item>
          </div>
          {/* Khối lượng từng loại thức ăn */}
          <div className={styles.formRow} style={{marginTop:16,marginBottom:8}}>
            <div className={styles.formColLarge} style={{display:'flex',flexDirection:'column',width:'100%'}}>
              <div className={styles.formLabel} style={{marginBottom:4}}>Khối lượng của từng loại thức ăn cho lứa nuôi gần đây (kg)</div>
              <div style={{display:'flex',gap:16,flexWrap:'wrap',marginBottom:4}}>
                <div style={{display:'flex',flexDirection:'column',gap:4}}>
                  <div style={{fontWeight:'bold',fontSize:13}}>SAU KHI sử dụng đệm lót sinh học dày</div>
                  <div style={{display:'flex',gap:16,alignItems:'flex-end',flexWrap:'wrap'}}>
                    <Form.Item name={[`danGa`,i,'sauDemLot','sauCanxi']} className={styles.formItem} label={<span className={styles.formLabel}>Sâu canxi/trùn quế</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`danGa`,i,'sauDemLot','tinhNgoGao']} className={styles.formItem} label={<span className={styles.formLabel}>Thức ăn tinh (ngô, gạo)</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`danGa`,i,'sauDemLot','tongHopVien']} className={styles.formItem} label={<span className={styles.formLabel}>Thức ăn tổng hợp/viên</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`danGa`,i,'sauDemLot','thucAnXanh']} className={styles.formItem} label={<span className={styles.formLabel}>Thức ăn xanh</span>}><Input size="small" /></Form.Item>
                  </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:4}}>
                  <div style={{fontWeight:'bold',fontSize:13}}>TRƯỚC KHI sử dụng đệm lót sinh học dày</div>
                  <div style={{display:'flex',gap:16,alignItems:'flex-end',flexWrap:'wrap'}}>
                    <Form.Item name={[`danGa`,i,'truocDemLot','sauCanxi']} className={styles.formItem} label={<span className={styles.formLabel}>Sâu canxi/trùn quế</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`danGa`,i,'truocDemLot','tinhNgoGao']} className={styles.formItem} label={<span className={styles.formLabel}>Thức ăn tinh (ngô, gạo)</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`danGa`,i,'truocDemLot','tongHopVien']} className={styles.formItem} label={<span className={styles.formLabel}>Thức ăn tổng hợp/viên</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`danGa`,i,'truocDemLot','thucAnXanh']} className={styles.formItem} label={<span className={styles.formLabel}>Thức ăn xanh</span>}><Input size="small" /></Form.Item>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Số tiền từng loại thức ăn */}
          <div className={styles.formRow} style={{marginTop:16,marginBottom:8}}>
            <div className={styles.formColLarge} style={{display:'flex',flexDirection:'column',width:'100%'}}>
              <div className={styles.formLabel} style={{marginBottom:4}}>Số tiền đã chi cho mỗi loại thức ăn cho lứa nuôi gần đây (đồng)</div>
              <div style={{display:'flex',gap:16,flexWrap:'wrap',marginBottom:4}}>
                <div style={{display:'flex',flexDirection:'column',gap:4}}>
                  <div style={{fontWeight:'bold',fontSize:13}}>SAU KHI sử dụng đệm lót sinh học dày</div>
                  <div style={{display:'flex',gap:16,alignItems:'flex-end',flexWrap:'wrap'}}>
                    <Form.Item name={[`danGa`,i,'sauDemLot','tienSauCanxi']} className={styles.formItem} label={<span className={styles.formLabel}>Sâu canxi/trùn quế</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`danGa`,i,'sauDemLot','tienTinhNgoGao']} className={styles.formItem} label={<span className={styles.formLabel}>Thức ăn tinh (ngô, gạo)</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`danGa`,i,'sauDemLot','tienTongHopVien']} className={styles.formItem} label={<span className={styles.formLabel}>Thức ăn tổng hợp/viên</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`danGa`,i,'sauDemLot','tienThucAnXanh']} className={styles.formItem} label={<span className={styles.formLabel}>Thức ăn xanh</span>}><Input size="small" /></Form.Item>
                  </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:4}}>
                  <div style={{fontWeight:'bold',fontSize:13}}>TRƯỚC KHI sử dụng đệm lót sinh học dày</div>
                  <div style={{display:'flex',gap:16,alignItems:'flex-end',flexWrap:'wrap'}}>
                    <Form.Item name={[`danGa`,i,'truocDemLot','tienSauCanxi']} className={styles.formItem} label={<span className={styles.formLabel}>Sâu canxi/trùn quế</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`danGa`,i,'truocDemLot','tienTinhNgoGao']} className={styles.formItem} label={<span className={styles.formLabel}>Thức ăn tinh (ngô, gạo)</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`danGa`,i,'truocDemLot','tienTongHopVien']} className={styles.formItem} label={<span className={styles.formLabel}>Thức ăn tổng hợp/viên</span>}><Input size="small" /></Form.Item>
                    <Form.Item name={[`danGa`,i,'truocDemLot','tienThucAnXanh']} className={styles.formItem} label={<span className={styles.formLabel}>Thức ăn xanh</span>}><Input size="small" /></Form.Item>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ...existing code... */}
          <div className={styles.formRow}>
            <Form.Item className={styles.formColSmall} name={[`danGa`,i,'tienThuoc']} label={<span className={styles.formLabel}>Số tiền đã chi cho mua thuốc thú y</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập số tiền thuốc thú y'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`danGa`,i,'gioDonDep']} label={<span className={styles.formLabel}>Số giờ dành cho việc dọn dẹp chuồng gà trong 1 tuần</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập số giờ dọn dẹp'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`danGa`,i,'gaBiBenh']} label={<span className={styles.formLabel}>Đàn gà có mắc bệnh gì không</span>} rules={i===0?[{required:true,message:'Bắt buộc chọn đàn gà có mắc bệnh không'}]:[]}> <Checkbox> Có </Checkbox> <Checkbox> Không </Checkbox> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`danGa`,i,'danhGiaSucKhoe']} label={<span className={styles.formLabel}>Đánh giá sức khỏe đàn gà (1= cực kỳ tệ, 10= rất tốt)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập đánh giá sức khỏe'}]:[]}> <InputNumber min={1} max={10} style={{width:'100%'}} /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`danGa`,i,'soNgayDatTrongLuong']} label={<span className={styles.formLabel}>Số ngày để đạt được trọng lượng mong muốn?</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập số ngày đạt trọng lượng'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`danGa`,i,'trongLuongXuatChuong']} label={<span className={styles.formLabel}>Trọng lượng trung bình khi xuất chuồng (kg/con)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập trọng lượng xuất chuồng'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`danGa`,i,'tongThoiGianNuoi']} label={<span className={styles.formLabel}>Tổng thời gian nuôi đến khi xuất chuồng (tháng)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập tổng thời gian nuôi'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`danGa`,i,'gaPhatTrienNhanhHon']} label={<span className={styles.formLabel}>Đàn gà có phát triển nhanh hơn và/hoặc lớn hơn</span>} rules={i===0?[{required:true,message:'Bắt buộc chọn đàn gà phát triển nhanh hơn'}]:[]}> <Checkbox> Có </Checkbox> <Checkbox> Không </Checkbox> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`danGa`,i,'giaBan']} label={<span className={styles.formLabel}>Giá bán (đồng/kg)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập giá bán'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`danGa`,i,'tongThuNhap']} label={<span className={styles.formLabel}>Tổng thu nhập</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập tổng thu nhập'}]:[]}> <Input /> </Form.Item>
            <Form.Item className={styles.formColSmall} name={[`danGa`,i,'danhGiaMui']} label={<span className={styles.formLabel}>Đánh giá mùi từ chuồng gà (0= không có mùi, 10= cực kỳ khó chịu)</span>} rules={i===0?[{required:true,message:'Bắt buộc nhập đánh giá mùi'}]:[]}> <InputNumber min={0} max={10} style={{width:'100%'}} /> </Form.Item>
          </div>
        </div>
  ))}

      <div className={styles.buttonGroup}>
        <Button onClick={onBack}>Quay lại</Button>
        <Button type="primary" htmlType="submit" style={{ minWidth: 180, fontWeight: 'bold' }}>Hoàn tất phần kỹ thuật</Button>
      </div>
    </Form>
  );
}
