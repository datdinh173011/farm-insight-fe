import React from 'react'
import { Form, Input, Button, Checkbox, InputNumber, Divider} from 'antd'
import styles from './TechniqueFormTrunQue.module.scss';

const questions = [
  'Bạn nuôi trùn quế bao lâu rồi?',
  'Bạn sử dụng trùn quế vào mục đích gì?',
  'Bạn có gặp khó khăn về môi trường nuôi không?'
]

export default function TechniqueFormTrunQue({ form, onFinish, onBack, initialValues }) {
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={initialValues || {}}
      style={{ maxWidth: 1200, margin: '0 auto' }}
    >
      <div style={{fontWeight:'bold',fontSize:18,marginBottom:8}}>A. Nhóm câu hỏi: Loại phụ phẩm cây trồng, vật nuôi, Quản lý phụ phẩm cây trồng vật nuôi và chất thải SAU KHI nuôi trùn quế (Từ TRƯỚC đến NAY)</div>
      <div style={{background:'#f5f7fa',border:'1px dashed #b3c2d6',borderRadius:10,padding:18,marginBottom:24}}>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name="ngayBatDau" label="Ngày bắt đầu" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
          <Form.Item name="soLuaTrunQue" label="Số lứa trùn quế đã nuôi" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name="soNgayMotLua" label="Số ngày để nuôi một lứa trùn quế (bắt đầu thả sinh khối – thu hoạch, TB 60 ngày)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          <Form.Item name="tongChiPhiXayDung" label="Tổng chi phí xây dựng khu nuôi trùn quế (bao gồm vật liệu và nhân công)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name="chiPhiMuaGiong" label="Chi phí mua giống (sinh khối trùn quế)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          <Form.Item name="chiPhiDauVaoKhac" label="Chi phí đầu vào/vật liệu khác (cho Trùn quế)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name="cachSuDungTrunQue" label="Cách sử dụng trùn quế" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}>
            <Input placeholder="Làm thức ăn cho vật nuôi, Đem bán, Khác (ghi rõ)" />
          </Form.Item>
          <Form.Item name="tenLoaiVatNuoi" label="Tên loài vật nuôi được nuôi bằng trùn quế" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name="soLuongConVatNuoi" label="Số lượng con vật nuôi/lứa" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          <Form.Item name="soLuaVatNuoi" label="Số lứa (được cho ăn trùn quế)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name="cachSuDungPhanTrunQue" label="Cách sử dụng phân trùn quế" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}>
            <Input placeholder="Bón phân cho cây trồng, Sử dụng như thuốc trừ sâu tự nhiên, Đem bán" />
          </Form.Item>
          <Form.Item name="tenCayTrongPhanTrunQue" label="Nêu tên những loài cây trồng được bón bằng phân trùn quế (1 ô ghi 1 loại cây trồng)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
        </div>
        <div style={{display:'flex',gap:16,marginBottom:8}}>
          <Form.Item name="tongSoVuTrongPhanTrunQue" label="Tổng số vụ trồng (sử dụng phân bón trùn quế/vụ; số vụ/năm x số năm)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
          <Form.Item name="dienTichCayTrongPhanTrunQue" label="Diện tích cây trồng được bón phân trùn quế (số sào/vụ x số vụ/năm)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
        </div>
      </div>
      {/* Section B, C, D would follow similar structure, with grouped backgrounds and sub-fields as described. For brevity, only section A is fully implemented here. */}
          <div className={styles.sectionTitle}>B. Quản lý sử dụng thức ăn cho trùn quế & sản phẩm trùn quế thu được (1 lứa nuôi gần đây nhất)</div>
            <Divider className={styles.divider} />
          <div style={{background:'#f5f7fa',border:'1px dashed #b3c2d6',borderRadius:10,padding:18,marginBottom:24}}>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="loaiPhuPhamThucAn" label="Loại phụ phẩm nông nghiệp làm thức ăn cho trùn quế" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
              <Form.Item name="khoiLuongPhuPhamTB" label="Khối lượng phụ phẩm nông nghiệp thải trung bình mỗi ngày (kg/con/ngày)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="soLuongVatNuoi" label="Số lượng từng loại vật nuôi" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
              <Form.Item name="soNgayLuaNuoi" label="Số ngày/lứa nuôi" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="soLuaNuoi" label="Số lứa nuôi" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
              <Form.Item name="tongKhoiLuongPhuPhamSX" label="Tổng khối lượng phụ phẩm nông nghiệp sản xuất ra được (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="khoiLuongPhuPhamDungChoTrunQue" label="Khối lượng phụ phẩm nông nghiệp dùng cho trùn quế (kg/ngày)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
              <Form.Item name="tyLePhuPhamDungChoTrunQue" label="Tỷ lệ % phụ phẩm nông nghiệp dùng cho trùn quế (19g/19f)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="dienTichNuoiTrunQue" label="Diện tích được sử dụng để nuôi trùn quế (m2/lứa)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
              <Form.Item name="chiPhiMuaGiongB" label="Chi phí mua giống (sinh khối trùn quế, tính cho 1m2/lứa)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="soNgayDeNuoiMotLuaB" label="Số ngày để nuôi một lứa trùn quế (ngày)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
              <Form.Item name="khoiLuongTrunQueThuDuoc" label="Khối lượng trùn quế thu được (kg/lứa)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="khoiLuongPhanTrunQueThuDuoc" label="Khối lượng phân trùn quế thu được (kg/lứa)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
              <Form.Item name="congLaoDong" label="Công lao động (số giờ/ngày)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="gioQuetDonPhanChuongTruoc" label="Khi chưa nuôi trùn quế, trong 1 ngày dành bao nhiêu giờ để quét dọn phân chuồng" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
              <Form.Item name="gioDonPhanChuongSau" label="Khi nuôi trùn quế, trong 1 ngày dành bao nhiêu giờ để dọn dẹp phân chuồng dùng cho trùn quế" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            </div>
          </div>
          <div style={{fontWeight:'bold',fontSize:18,marginBottom:8}}>C. Sử dụng phân trùn quế bón cho cây trồng SAU và TRƯỚC khi nuôi Trùn quế (1 vụ cây trồng gần đây nhất)</div>
          <div style={{background:'#f5f7fa',border:'1px dashed #b3c2d6',borderRadius:10,padding:18,marginBottom:24}}>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="tenLoaiCayTrongC" label="Nêu tên loại cây trồng được bón phân trùn quế" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{ width:'50%' }}><Input /></Form.Item>
            </div>
            <div className={styles.groupedBg}>
                <div style={{fontWeight:'bold',marginBottom:4}}>Cây được trồng tháng/năm nào?</div>
                <div style={{display:'flex',gap:16}}>
                    <Form.Item name="thangNamSauPhanTrunQue" label="SAU KHI BÓN PHÂN TRÙN QUẾ" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px',marginBottom:0}}>
                        <Input min={0} style={{width:'100%'}} placeholder="Tháng/năm" />
                    </Form.Item>
                    <Form.Item name="thangNamKhongPhanTrunQue" label="KHÔNG BÓN PHÂN TRÙN QUẾ" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px',marginBottom:0}}>
                        <Input min={0} style={{width:'100%'}} placeholder="Tháng/năm" />
                    </Form.Item>
                </div>
            </div>
            <div className={styles.groupedBg}>
                <div style={{fontWeight:'bold',marginBottom:4}}>Diện tích trồng (sào/vụ)</div>
                <div style={{display:'flex',gap:16}}>
                    <Form.Item name="dienTichSauPhanTrunQue" label="SAU KHI BÓN PHÂN TRÙN QUẾ" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px',marginBottom:0}}>
                        <Input placeholder="Sào/vụ" />
                    </Form.Item>
                    <Form.Item name="dienTichKhongPhanTrunQue" label="KHÔNG BÓN PHÂN TRÙN QUẾ" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px',marginBottom:0}}>
                        <Input placeholder="Sào/vụ" />
                    </Form.Item>
                </div>
            </div>
            <div className={styles.groupedBg}>
              <div style={{fontWeight:'bold',marginBottom:4}}>Khối lượng của từng loại phân bón được bón cho cây trồng (kg)</div>
              <div style={{display:'flex',gap:16}}>
                <div style={{flex:'1 1 300px'}}>
                  <div style={{marginBottom:2}}>SAU KHI BÓN PHÂN TRÙN QUẾ</div>
                  <Form.Item name="khoiLuongNPKBonLotSau" label="Phân NPK bón lót" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="khoiLuongNPKBonThucSau" label="Phân NPK bón thúc" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="khoiLuongPhanTrunQueSau" label="Phân trùn quế" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="khoiLuongPhanKhacSau" label="Phân khác ..." rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <Input style={{width:'100%'}} />
                  </Form.Item>
                </div>
                <div style={{flex:'1 1 300px'}}>
                  <div style={{marginBottom:2}}>KHÔNG BÓN PHÂN TRÙN QUẾ</div>
                  <Form.Item name="khoiLuongNPKBonLotKhong" label="Phân NPK bón lót" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="khoiLuongNPKBonThucKhong" label="Phân NPK bón thúc" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="khoiLuongPhanKhacKhong" label="Phân khác ..." rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <Input style={{width:'100%'}} />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className={styles.groupedBg}>
              <div style={{fontWeight:'bold',marginBottom:4}}>Số tiền đã chi cho mỗi loại phân bón (đồng)</div>
              <div style={{display:'flex',gap:16}}>
                <div style={{flex:'1 1 300px'}}>
                  <div style={{marginBottom:2}}>SAU KHI BÓN PHÂN TRÙN QUẾ</div>
                  <Form.Item name="soTienNPKBonLotSau" label="Phân NPK bón lót" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="soTienNPKBonThucSau" label="Phân NPK bón thúc" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="soTienPhanTrunQueSau" label="Phân trùn quế" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="soTienPhanKhacSau" label="Phân khác ..." rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <Input style={{width:'100%'}} />
                  </Form.Item>
                </div>
                <div style={{flex:'1 1 300px'}}>
                  <div style={{marginBottom:2}}>KHÔNG BÓN PHÂN TRÙN QUẾ</div>
                  <Form.Item name="soTienNPKBonLotKhong" label="Phân NPK bón lót" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="soTienNPKBonThucKhong" label="Phân NPK bón thúc" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="soTienPhanKhacKhong" label="Phân khác ..." rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <Input style={{width:'100%'}} />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="soLanPhunThuocC" label="Số lần phun thuốc trừ sâu hóa học" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="soLuongThuocSauC" label="Số lượng thuốc trừ sâu hóa học được sử dụng (số bình 15-20l/sào/vụ)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
              <Form.Item name="soLuongThuocCoC" label="Số lượng thuốc trừ cỏ được sử dụng (số bình 15-20l/sào/vụ)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="soTienThuocSauC" label="Số tiền đã chi cho thuốc trừ sâu hóa học (đồng/sào/vụ)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
              <Form.Item name="soTienThuocCoC" label="Số tiền đã chi cho thuốc trừ cỏ hóa học (đồng/sào/vụ)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="soTienCongChamSocC" label="Số tiền đã chi cho công chăm sóc cây trồng (đồng/sào/vụ)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
              <Form.Item name="soTienHatGiongC" label="Số tiền đã chi cho mua hạt giống (đồng/sào/vụ)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="sauBenhC" label="Cây trồng có bị sâu bệnh tấn công (có/không)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Checkbox> Có </Checkbox> <Checkbox> Không </Checkbox></Form.Item>
              <Form.Item name="nangSuatThuHoachC" label="Năng suất thu hoạch (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="giaBanC" label="Giá bán (đồng/kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
              <Form.Item name="thanhTienC" label="Thành tiền (đồng)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
            </div>
          </div>
          <div style={{fontWeight:'bold',fontSize:18,marginBottom:8}}>D. Sử dụng trùn quế làm thức ăn cho vật nuôi SAU và TRƯỚC khi nuôi Trùn quế (1 lứa nuôi gần đây nhất)</div>
          <div style={{background:'#f5f7fa',border:'1px dashed #b3c2d6',borderRadius:10,padding:18,marginBottom:24}}>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="loaiVatNuoiD" label="Loại vật nuôi" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
            </div>
            <div className={styles.groupedBg}>
              <div style={{fontWeight:'bold',marginBottom:4}}>Số con vật nuôi (số con/lứa)</div>
              <div style={{display:'flex',gap:16}}>
                <Form.Item name="soConSauDungTrunQue" label="SAU KHI SỬ DỤNG TRÙN QUẾ LÀM THỨC ĂN" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px',marginBottom:0}}>
                  <InputNumber min={0} style={{width:'100%'}} />
                </Form.Item>
                <Form.Item name="soConKhongDungTrunQue" label="KHÔNG SỬ DỤNG TRÙN QUẾ LÀM THỨC ĂN" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px',marginBottom:0}}>
                  <InputNumber min={0} style={{width:'100%'}} />
                </Form.Item>
              </div>
            </div>
            <div className={styles.groupedBg}>
              <div style={{fontWeight:'bold',marginBottom:4}}>Khối lượng của từng loại thức ăn cho lứa nuôi gần đây (kg)</div>
              <div style={{display:'flex',gap:16}}>
                <div style={{flex:'1 1 300px',borderRadius:8,padding:8}}>
                  <div style={{marginBottom:2}}>SAU KHI SỬ DỤNG TRÙN QUẾ LÀM THỨC ĂN</div>
                  <Form.Item name="khoiLuongThucAnTrunQueSau" label="Thức ăn trùn quế" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="khoiLuongThucAnTinhSau" label="Thức ăn tinh (ngô, gạo)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="khoiLuongThucAnTongHopSau" label="Thức ăn tổng hợp/viên" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="khoiLuongThucAnXanhSau" label="Thức ăn xanh" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                </div>
                <div style={{flex:'1 1 300px',borderRadius:8,padding:8}}>
                  <div style={{marginBottom:2}}>KHÔNG SỬ DỤNG TRÙN QUẾ LÀM THỨC ĂN</div>
                  <Form.Item name="khoiLuongThucAnTinhKhong" label="Thức ăn tinh (ngô, gạo)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="khoiLuongThucAnTongHopKhong" label="Thức ăn tổng hợp/viên" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="khoiLuongThucAnXanhKhong" label="Thức ăn xanh" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className={styles.groupedBg}>
              <div style={{fontWeight:'bold',marginBottom:4}}>Số tiền đã chi cho mỗi loại thức ăn cho lứa nuôi gần đây (đồng)</div>
              <div style={{display:'flex',gap:16}}>
                <div style={{flex:'1 1 300px',borderRadius:8,padding:8}}>
                  <div style={{marginBottom:2}}>SAU KHI SỬ DỤNG TRÙN QUẾ LÀM THỨC ĂN</div>
                  <Form.Item name="soTienThucAnTrunQueSau" label="Thức ăn trùn quế" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="soTienThucAnTinhSau" label="Thức ăn tinh (ngô, gạo)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="soTienThucAnTongHopSau" label="Thức ăn tổng hợp/viên" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="soTienThucAnXanhSau" label="Thức ăn xanh" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                </div>
                <div style={{flex:'1 1 300px',borderRadius:8,padding:8}}>
                  <div style={{marginBottom:2}}>KHÔNG SỬ DỤNG TRÙN QUẾ LÀM THỨC ĂN</div>
                  <Form.Item name="soTienThucAnTinhKhong" label="Thức ăn tinh (ngô, gạo)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="soTienThucAnTongHopKhong" label="Thức ăn tổng hợp/viên" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                  <Form.Item name="soTienThucAnXanhKhong" label="Thức ăn xanh" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                    <InputNumber min={0} style={{width:'100%'}} />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="soTienThuocThuYD" label="Số tiền đã chi cho mua thuốc thú y/lứa" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
              <Form.Item name="vatNuoiBiBenhD" label="Vật nuôi có bị bất kỳ bệnh nào không" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Checkbox> Có </Checkbox> <Checkbox> Không </Checkbox></Form.Item>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="danhGiaSucKhoeD" label="Bạn đánh giá sức khỏe vật nuôi như thế nào (1 = cực kỳ tệ, 10 = rất tốt)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><InputNumber min={1} max={10} style={{width:'100%'}} /></Form.Item>
              <Form.Item name="vatNuoiPhatTrienNhanhHonD" label="Vật nuôi có phát triển nhanh hơn và/hoặc lớn hơn" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Checkbox> Có </Checkbox> <Checkbox> Không </Checkbox></Form.Item>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="thoiGianNuoiXuatChuongD" label="Thời gian nuôi đến khi xuất chuồng (tháng)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
              <Form.Item name="trongLuongXuatChuongD" label="Trọng lượng trung bình khi xuất chuồng (kg/con)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
            </div>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name="giaBanD" label="Giá bán (đồng/kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
              <Form.Item name="thanhTienD" label="Thành tiền (đồng)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{flex:'1 1 300px'}}><Input /></Form.Item>
            </div>
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
