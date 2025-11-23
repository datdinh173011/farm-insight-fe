
import React from 'react';
import { Form, Input, InputNumber, Checkbox, Button, Divider } from 'antd';
import styles from './TechniqueFormSauCanxi.module.scss';

export default function TechniqueFormSauCanxi({ onFinish, onBack }) {
  return (
    <Form layout="vertical" onFinish={onFinish} initialValues={{}} style={{ maxWidth: 1200, margin: '0 auto' }}>
  <div className="sectionTitle">A. Quản lý phụ phẩm cây trồng, vật nuôi và chất thải SAU KHI nuôi Sâu canxi</div>
  <Divider className="divider" />
  {[0,1,2].map(i => (
    <div className={styles.formSectionBg}>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "ngayBatDau" : `ngayBatDau${i+1}`} label={<span style={{whiteSpace:'nowrap'}}>Ngày bắt đầu</span>} rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          <Form.Item name={i === 0 ? "soLuaSâuCanxi" : `soLuaSâuCanxi${i+1}`} label={<span style={{whiteSpace:'nowrap'}}>Số lứa Sâu canxi đã nuôi</span>} rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "soNgayMotLua" : `soNgayMotLua${i+1}`} label={<span style={{whiteSpace:'nowrap'}}>Số ngày để nuôi một lứa Sâu canxi (TB 45 ngày)</span>} rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          <Form.Item name={i === 0 ? "tongChiPhiXayDung" : `tongChiPhiXayDung${i+1}`} label={<span style={{whiteSpace:'nowrap'}}>Tổng chi phí xây dựng khu nuôi Sâu canxi (bao gồm vật liệu và nhân công)</span>} rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "chiPhiMuaGiong" : `chiPhiMuaGiong${i+1}`} label={<span style={{whiteSpace:'nowrap'}}>Chi phí mua giống (trứng Sâu canxi)/tổng số lứa</span>} rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          <Form.Item name={i === 0 ? "chiPhiDauVaoKhac" : `chiPhiDauVaoKhac${i+1}`} label={<span style={{whiteSpace:'nowrap'}}>Chi phí đầu vào/vật liệu khác (cho nuôi sâu canxi)</span>} rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "cachSuDungSâuCanxi" : `cachSuDungSâuCanxi${i+1}`} label={<span style={{whiteSpace:'nowrap'}}>Cách sử dụng Sâu canxi</span>} rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}>
            <Input placeholder="Làm thức ăn cho vật nuôi, Đem bán, Khác (ghi rõ)" />
          </Form.Item>
          <Form.Item name={i === 0 ? "tenLoaiVatNuoi" : `tenLoaiVatNuoi${i+1}`} label={<span style={{whiteSpace:'nowrap'}}>Tên loài vật nuôi được nuôi bằng Sâu canxi</span>} rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
        <div className={styles.groupedBg} style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "soLuongConVatNuoi" : `soLuongConVatNuoi${i+1}`} label={<span style={{whiteSpace:'nowrap'}}>Số lượng con vật nuôi/lứa</span>} rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          <Form.Item name={i === 0 ? "soLuaVatNuoi" : `soLuaVatNuoi${i+1}`} label={<span style={{whiteSpace:'nowrap'}}>Số lứa (được cho ăn Sâu canxi)</span>} rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
        </div>
        <div className={styles.groupedBg} style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "cachSuDungPhanSâuCanxi" : `cachSuDungPhanSâuCanxi${i+1}`} label={<span style={{whiteSpace:'nowrap'}}>Cách sử dụng phân Sâu canxi</span>} rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}>
            <Input placeholder="Bón phân cho cây trồng, Sử dụng như thuốc trừ sâu tự nhiên, Đem bán" />
          </Form.Item>
          <Form.Item name={i === 0 ? "tenCayTrongPhanSâuCanxi" : `tenCayTrongPhanSâuCanxi${i+1}`} label={<span style={{whiteSpace:'nowrap'}}>Tên những loài cây trồng được bón bằng phân Sâu canxi (1 ô ghi 1 loại cây trồng)</span>} rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "tongSoVuTrongPhanSâuCanxi" : `tongSoVuTrongPhanSâuCanxi${i+1}`} label={<span style={{whiteSpace:'nowrap'}}>Tổng số vụ trồng (sử dụng phân bón Sâu canxi; số vụ/năm)</span>} rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          <Form.Item name={i === 0 ? "dienTichCayTrongPhanSâuCanxi" : `dienTichCayTrongPhanSâuCanxi${i+1}`} label={<span style={{whiteSpace:'nowrap'}}>Diện tích cây trồng được bón phân Sâu canxi (số sào/vụ)</span>} rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
    </div>
    ))}
  
  <div className="sectionTitle">B. Quản lý sử dụng thức ăn cho Sâu canxi & sản phẩm Sâu canxi thu được (1 lứa nuôi gần đây nhất)</div>
  <Divider className="divider" />
  {[0,1,2].map(i => (
    <div className={styles.formSectionBg}>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "loaiPhuPhamThucAn" : `loaiPhuPhamThucAn${i+1}`} label="Loại phụ phẩm nông nghiệp làm thức ăn cho Sâu canxi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          <Form.Item name={i === 0 ? "khoiLuongPhuPhamTB" : `khoiLuongPhuPhamTB${i+1}`} label="Khối lượng phụ phẩm nông nghiệp thải trung bình mỗi ngày" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "soLuongVatNuoi" : `soLuongVatNuoi${i+1}`} label="Số lượng từng loại vật nuôi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          <Form.Item name={i === 0 ? "soNgayLuaNuoi" : `soNgayLuaNuoi${i+1}`} label="Số ngày/lứa nuôi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "soLuaNuoi" : `soLuaNuoi${i+1}`} label="Số lứa nuôi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          <Form.Item name={i === 0 ? "tongKhoiLuongPhuPhamSX" : `tongKhoiLuongPhuPhamSX${i+1}`} label="Tổng khối lượng phụ phẩm nông nghiệp sản xuất ra được (kg/ngày)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "khoiLuongPhuPhamDungChoSâuCanxi" : `khoiLuongPhuPhamDungChoSâuCanxi${i+1}`} label="Khối lượng phụ phẩm nông nghiệp dùng cho sâu canxi (kg/ngày)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          <Form.Item name={i === 0 ? "tyLePhuPhamDungChoSâuCanxi" : `tyLePhuPhamDungChoSâuCanxi${i+1}`} label="Tỷ lệ % phụ phẩm nông nghiệp dùng cho sâu canxi (câu 25g/25f)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "dienTichNuoiSâuCanxi" : `dienTichNuoiSâuCanxi${i+1}`} label="Diện tích được sử dụng để nuôi sâu canxi (m2/lứa)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          <Form.Item name={i === 0 ? "chiPhiMuaGiongB" : `chiPhiMuaGiongB${i+1}`} label="Chi phí mua giống (trứng sâu canxi, tính cho 1m2/lứa)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "soNgayDeNuoiMotLuaB" : `soNgayDeNuoiMotLuaB${i+1}`} label="Số ngày để nuôi một lứa sâu canxi (ngày)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          <Form.Item name={i === 0 ? "khoiLuongSâuCanxiThuDuoc" : `khoiLuongSâuCanxiThuDuoc${i+1}`} label="Khối lượng sâu canxi thu được (kg/lứa)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "khoiLuongPhanSâuCanxiThuDuoc" : `khoiLuongPhanSâuCanxiThuDuoc${i+1}`} label="Khối lượng phân sâu canxi thu được (kg/lứa)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          <Form.Item name={i === 0 ? "congLaoDong" : `congLaoDong${i+1}`} label="Công lao động (số giờ/ngày)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
      </div>
    ))}
  <div className="sectionTitle">C. Sử dụng phân sâu canxi bón cho cây trồng SAU và TRƯỚC khi nuôi sâu canxi (1 vụ cây trồng gần đây nhất)</div>
  <Divider className="divider" />
  {[0,1,2].map(i => (
    <div className={styles.formSectionBg}>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "tenLoaiCayTrongC" : `tenLoaiCayTrongC${i+1}`} label="Nêu tên loại cây trồng được bón phân sâu canxi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
        <div className={styles.groupedBg} style={{display:'flex',gap:16,marginBottom:8}}>
          <div style={{flex:'1 1 260px'}}>
            <div className={styles.formLabel}>Cây được trồng tháng/năm nào?</div>
            <Form.Item name={i === 0 ? "thangNamC_SauCanxi" : `thangNamC_SauCanxi${i+1}`} label="SAU KHI SỬ DỤNG SÂU CANXI LÀM THỨC ĂN" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
            <Form.Item name={i === 0 ? "thangNamC_KhongBon" : `thangNamC_KhongBon${i+1}`} label="KHÔNG BÓN PHÂN SÂU CANXI" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
          </div>
          <div style={{flex:'1 1 260px'}}>
            <div className={styles.formLabel}>Diện tích trồng (sào/vụ)</div>
            <Form.Item name={i === 0 ? "dienTichTrongC_SauCanxi" : `dienTichTrongC_SauCanxi${i+1}`} label="SAU KHI SỬ DỤNG SÂU CANXI LÀM THỨC ĂN" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
            <Form.Item name={i === 0 ? "dienTichTrongC_KhongBon" : `dienTichTrongC_KhongBon${i+1}`} label="KHÔNG BÓN PHÂN SÂU CANXI" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
          </div>
        </div>
        <div className={styles.groupedBg} style={{marginBottom:8, padding:'16px'}}>
          <div className={styles.formLabel} style={{marginBottom:8}}>Khối lượng của từng loại phân bón được bón cho cây trồng (kg)</div>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <div style={{flex:'1 1 260px'}}>
              <div style={{fontWeight:'bold'}}>SAU KHI SỬ DỤNG SÂU CANXI LÀM THỨC ĂN</div>
              <Form.Item name={i === 0 ? "khoiLuongNPKBonLot_SauCanxi" : `khoiLuongNPKBonLot_SauCanxi${i+1}`} label="Phân NPK bón lót" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "khoiLuongNPKBonThuc_SauCanxi" : `khoiLuongNPKBonThuc_SauCanxi${i+1}`} label="Phân NPK bón thúc" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "khoiLuongPhanSauCanxi_SauCanxi" : `khoiLuongPhanSauCanxi_SauCanxi${i+1}`} label="Phân sâu canxi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "khoiLuongPhanKhac_SauCanxi" : `khoiLuongPhanKhac_SauCanxi${i+1}`} label="Phân khác ..." rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
            </div>
            <div style={{flex:'1 1 260px'}}>
              <div style={{fontWeight:'bold'}}>KHÔNG BÓN PHÂN SÂU CANXI</div>
              <Form.Item name={i === 0 ? "khoiLuongNPKBonLot_KhongBon" : `khoiLuongNPKBonLot_KhongBon${i+1}`} label="Phân NPK bón lót" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "khoiLuongNPKBonThuc_KhongBon" : `khoiLuongNPKBonThuc_KhongBon${i+1}`} label="Phân NPK bón thúc" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "khoiLuongPhanSauCanxi_KhongBon" : `khoiLuongPhanSauCanxi_KhongBon${i+1}`} label="Phân sâu canxi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "khoiLuongPhanKhac_KhongBon" : `khoiLuongPhanKhac_KhongBon${i+1}`} label="Phân khác ..." rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
            </div>
          </div>
        </div>
        <div className={styles.groupedBg} style={{marginBottom:8, padding:'16px'}}>
          <div className={styles.formLabel} style={{marginBottom:8}}>Số tiền đã chi cho mỗi loại phân bón (đồng)</div>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <div style={{flex:'1 1 260px'}}>
              <div style={{fontWeight:'bold'}}>SAU KHI SỬ DỤNG SÂU CANXI LÀM THỨC ĂN</div>
              <Form.Item name={i === 0 ? "soTienNPKBonLot_SauCanxi" : `soTienNPKBonLot_SauCanxi${i+1}`} label="Phân NPK bón lót" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "soTienNPKBonThuc_SauCanxi" : `soTienNPKBonThuc_SauCanxi${i+1}`} label="Phân NPK bón thúc" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "soTienPhanSauCanxi_SauCanxi" : `soTienPhanSauCanxi_SauCanxi${i+1}`} label="Phân sâu canxi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "soTienPhanKhac_SauCanxi" : `soTienPhanKhac_SauCanxi${i+1}`} label="Phân khác ..." rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
            </div>
            <div style={{flex:'1 1 260px'}}>
              <div style={{fontWeight:'bold'}}>KHÔNG BÓN PHÂN SÂU CANXI</div>
              <Form.Item name={i === 0 ? "soTienNPKBonLot_KhongBon" : `soTienNPKBonLot_KhongBon${i+1}`} label="Phân NPK bón lót" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "soTienNPKBonThuc_KhongBon" : `soTienNPKBonThuc_KhongBon${i+1}`} label="Phân NPK bón thúc" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "soTienPhanSauCanxi_KhongBon" : `soTienPhanSauCanxi_KhongBon${i+1}`} label="Phân sâu canxi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "soTienPhanKhac_KhongBon" : `soTienPhanKhac_KhongBon${i+1}`} label="Phân khác ..." rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
            </div>
          </div>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "soLanPhunThuocC" : `soLanPhunThuocC${i+1}`} label="Số lần phun thuốc trừ sâu hóa học" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "soLuongThuocSauC" : `soLuongThuocSauC${i+1}`} label="Số lượng thuốc trừ sâu hóa học được sử dụng (số bình 15-20l/sào/vụ)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          <Form.Item name={i === 0 ? "soLuongThuocCoC" : `soLuongThuocCoC${i+1}`} label="Số lượng thuốc trừ cỏ được sử dụng (số bình 15-20l/sào/vụ)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "soTienThuocSauC" : `soTienThuocSauC${i+1}`} label="Số tiền đã chi cho thuốc trừ sâu hóa học (đồng/sào/vụ)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          <Form.Item name={i === 0 ? "soTienThuocCoC" : `soTienThuocCoC${i+1}`} label="Số tiền đã chi cho thuốc trừ cỏ hóa học (đồng/sào/vụ)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "soTienCongChamSocC" : `soTienCongChamSocC${i+1}`} label="Số tiền đã chi cho công chăm sóc cây trồng (đồng/sào/vụ)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          <Form.Item name={i === 0 ? "soTienHatGiongC" : `soTienHatGiongC${i+1}`} label="Số tiền đã chi cho mua hạt giống (đồng/sào/vụ)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "sauBenhC" : `sauBenhC${i+1}`} label="Cây trồng có bị sâu bệnh tấn công (có/không)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Checkbox> Có </Checkbox> <Checkbox> Không </Checkbox></Form.Item>
          <Form.Item name={i === 0 ? "nangSuatThuHoachC" : `nangSuatThuHoachC${i+1}`} label="Năng suất thu hoạch (kg/sào)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "giaBanC" : `giaBanC${i+1}`} label="Giá bán (đồng/kg)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          <Form.Item name={i === 0 ? "thanhTienC" : `thanhTienC${i+1}`} label="Thành tiền (đồng)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
      </div>
    ))}
  <div className="sectionTitle">D. Sử dụng sâu canxi làm thức ăn cho vật nuôi SAU và TRƯỚC khi nuôi sâu canxi (1 lứa nuôi gần đây nhất)</div>
  <Divider className="divider" />
    {[0,1,2].map(i => (
        <div className={styles.formSectionBg}>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name={i === 0 ? "loaiVatNuoiD" : `loaiVatNuoiD${i+1}`} label="Loại vật nuôi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
            </div>
            <div className={styles.groupedBg} style={{display:'flex',gap:16,marginBottom:8}}>
              <div style={{flex:'1 1 260px'}}>
                <div className={styles.formLabel}>Số con vật nuôi (số con/lứa)</div>
                <Form.Item name={i === 0 ? "soConVatNuoiD_SauCanxi" : `soConVatNuoiD_SauCanxi${i+1}`} label="SAU KHI SỬ DỤNG SÂU CANXI LÀM THỨC ĂN" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
                <Form.Item name={i === 0 ? "soConVatNuoiD_KhongBon" : `soConVatNuoiD_KhongBon${i+1}`} label="KHÔNG BÓN PHÂN SÂU CANXI" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
              </div>
            </div>
        <div className={styles.groupedBg} style={{marginBottom:8, padding:'16px'}}>
          <div className={styles.formLabel} style={{marginBottom:8}}>Khối lượng của từng loại thức ăn cho lứa nuôi gần đây (kg)</div>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <div style={{flex:'1 1 260px'}}>
              <div style={{fontWeight:'bold'}}>SAU KHI SỬ DỤNG SÂU CANXI LÀM THỨC ĂN</div>
              <Form.Item name={i === 0 ? "khoiLuongSauCanxi_SauCanxi" : `khoiLuongSauCanxi_SauCanxi${i+1}`} label="Sâu canxi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "khoiLuongThucAnTinh_SauCanxi" : `khoiLuongThucAnTinh_SauCanxi${i+1}`} label="Thức ăn tinh (ngô, gạo)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "khoiLuongThucAnVien_SauCanxi" : `khoiLuongThucAnVien_SauCanxi${i+1}`} label="Thức ăn tổng hợp/viên" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "khoiLuongThucAnXanh_SauCanxi" : `khoiLuongThucAnXanh_SauCanxi${i+1}`} label="Thức ăn xanh" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
            </div>
            <div style={{flex:'1 1 260px'}}>
              <div style={{fontWeight:'bold'}}>KHÔNG BÓN PHÂN SÂU CANXI</div>
              <Form.Item name={i === 0 ? "khoiLuongThucAnTinh_KhongBon" : `khoiLuongThucAnTinh_KhongBon${i+1}`} label="Thức ăn tinh (ngô, gạo)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "khoiLuongThucAnVien_KhongBon" : `khoiLuongThucAnVien_KhongBon${i+1}`} label="Thức ăn tổng hợp/viên" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "khoiLuongThucAnXanh_KhongBon" : `khoiLuongThucAnXanh_KhongBon${i+1}`} label="Thức ăn xanh" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "khoiLuongSauCanxi_KhongBon" : `khoiLuongSauCanxi_KhongBon${i+1}`} label="Sâu canxi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
            </div>
          </div>
        </div>
        <div className={styles.groupedBg} style={{marginBottom:8, padding:'16px'}}>
          <div className={styles.formLabel} style={{marginBottom:8}}>Số tiền đã chi cho mỗi loại thức ăn cho lứa nuôi gần đây (đồng)</div>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <div style={{flex:'1 1 260px'}}>
              <div style={{fontWeight:'bold'}}>SAU KHI SỬ DỤNG SÂU CANXI LÀM THỨC ĂN</div>
              <Form.Item name={i === 0 ? "soTienSauCanxi_SauCanxi" : `soTienSauCanxi_SauCanxi${i+1}`} label="Sâu canxi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "soTienThucAnTinh_SauCanxi" : `soTienThucAnTinh_SauCanxi${i+1}`} label="Thức ăn tinh (ngô, gạo)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "soTienThucAnVien_SauCanxi" : `soTienThucAnVien_SauCanxi${i+1}`} label="Thức ăn tổng hợp/viên" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "soTienThucAnXanh_SauCanxi" : `soTienThucAnXanh_SauCanxi${i+1}`} label="Thức ăn xanh" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
            </div>
            <div style={{flex:'1 1 260px'}}>
              <div style={{fontWeight:'bold'}}>KHÔNG BÓN PHÂN SÂU CANXI</div>
              <Form.Item name={i === 0 ? "soTienThucAnTinh_KhongBon" : `soTienThucAnTinh_KhongBon${i+1}`} label="Thức ăn tinh (ngô, gạo)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "soTienThucAnVien_KhongBon" : `soTienThucAnVien_KhongBon${i+1}`} label="Thức ăn tổng hợp/viên" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "soTienThucAnXanh_KhongBon" : `soTienThucAnXanh_KhongBon${i+1}`} label="Thức ăn xanh" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
              <Form.Item name={i === 0 ? "soTienSauCanxi_KhongBon" : `soTienSauCanxi_KhongBon${i+1}`} label="Sâu canxi" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []}><Input /></Form.Item>
            </div>
          </div>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "soTienThuocThuYD" : `soTienThuocThuYD${i+1}`} label="Số tiền đã chi cho mua thuốc thú y/lứa" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          <Form.Item name={i === 0 ? "vatNuoiBiBenhD" : `vatNuoiBiBenhD${i+1}`} label="Vật nuôi có bị bất kỳ bệnh nào không" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Checkbox> Có </Checkbox> <Checkbox> Không </Checkbox></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "danhGiaSucKhoeD" : `danhGiaSucKhoeD${i+1}`} label="Bạn đánh giá sức khỏe vật nuôi như thế nào (1 = cực kỳ tệ, 10 = rất tốt)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><InputNumber min={1} max={10} style={{width:'100%'}} /></Form.Item>
          <Form.Item name={i === 0 ? "vatNuoiPhatTrienNhanhHonD" : `vatNuoiPhatTrienNhanhHonD${i+1}`} label="Vật nuôi có phát triển nhanh hơn và/hoặc lớn hơn" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Checkbox> Có </Checkbox> <Checkbox> Không </Checkbox></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "thoiGianNuoiXuatChuongD" : `thoiGianNuoiXuatChuongD${i+1}`} label="Thời gian nuôi đến khi xuất chuồng (tháng)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          <Form.Item name={i === 0 ? "trongLuongXuatChuongD" : `trongLuongXuatChuongD${i+1}`} label="Trọng lượng trung bình khi xuất chuồng (kg/con)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name={i === 0 ? "giaBanD" : `giaBanD${i+1}`} label="Giá bán (đồng/kg)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
          <Form.Item name={i === 0 ? "thanhTienD" : `thanhTienD${i+1}`} label="Thành tiền (đồng)" rules={i === 0 ? [{required:true,message:'Bắt buộc nhập'}] : []} style={{flex:'1 1 260px'}}><Input /></Form.Item>
        </div>
      </div>
    ))}
  
      <Form.Item>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
          <Button onClick={onBack}>Quay lại</Button>
          <Button type="primary" htmlType="submit" style={{ minWidth: 180, fontWeight: 'bold' }}>Hoàn tất phần kỹ thuật</Button>
        </div>
      </Form.Item>
    </Form>
  );
}
