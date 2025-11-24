import React from 'react';
import { Form, Input, InputNumber, Button, Checkbox, Divider } from 'antd';
import styles from './TechniqueFormTrunQue.module.scss';

export default function TechniqueFormUPhan({ form, onFinish, onBack, initialValues }) {
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
      <div className={styles.formSectionBg}>
        {[0].map((idx) => (
          <div key={idx}>
            <div className={styles.row}>
              <Form.Item name={`tenPhuPham_${idx}`} label="Tên phụ phẩm cây trồng (tận dụng ủ phân từ trước đến nay)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
              <Form.Item name={`thangNamBatDau_${idx}`} label="Tháng/năm bắt đầu tiến hành ủ phân" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input placeholder="Tháng/năm" /></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item name={`tenPhuPhamTanDung_${idx}`} label="Tên phụ phẩm cây trồng tận dụng để ủ phân" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
              <Form.Item name={`khoiLuongPhuPhamTrenRuong_${idx}`} label="Khối lượng phụ phẩm cây trồng có trên đồng ruộng (kg/sào x số sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item name={`khoiLuongPhuPhamThuGom_${idx}`} label="Khối lượng phụ phẩm cây trồng thu gom được (kg/sào x số sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
              <Form.Item name={`tongKhoiLuongPhuPhamSuDung_${idx}`} label="Tổng khối lượng phụ phẩm cây trồng được sử dụng để ủ phân (kg/sào x số sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item name={`khoiLuongPhanHuuCoThuDuoc_${idx}`} label="Khối lượng phân hữu cơ thu được sau khi ủ (kg/sào x số sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
              <Form.Item name={`nhungLoaiCayDuocBonPhan_${idx}`} label="Những loại cây trồng được bón phân ủ hữu cơ (1 ô ghi 1 loại cây trồng)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item name={`tongSoMuaVuBonPhan_${idx}`} label="Tổng số mùa vụ đã được bón phân ủ hữu cơ (theo từng loại cây trồng)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
              <Form.Item name={`dienTichCayDuocBonPhan_${idx}`} label="Diện tích cây trồng được bón phân ủ hữu cơ (số sào/vụ)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item name={`suDungMayCatNho_${idx}`} label="Sử dụng máy để băm/cắt nhỏ phụ phẩm cây trồng" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}>
                <Input placeholder='Có/Không'/>
              </Form.Item>
              <Form.Item name={`nhienLieuSuDung_${idx}`} label="Lượng nhiên liệu đã sử dụng (dầu diesel/ hoặc điện)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}>
                <Input placeholder="Dầu ... lít, Điện ... kw" />
              </Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item name={`chiPhiVatLieuKhac_${idx}`} label="Chi phí vật liệu/đầu vào khác (nhân công, ống thông khí, bạt, chế phẩm, rỉ mật…) (đồng)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.sectionTitle}>B. Quản lý phụ phẩm cây trồng TRƯỚC KHI (NĂM 2022) áp dụng kỹ thuật ủ phân hữu cơ tại ruộng</div>
      <Divider className={styles.divider} />
      <div className={styles.formSectionBg}>
        {[0].map((idx) => (
          <div key={idx}>
            <div className={styles.row}>
              <Form.Item name={`loaiCayTrongTruoc_${idx}`} label="Loại cây trồng" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
              <Form.Item name={`coTrongTruoc_${idx}`} label="Có trồng không?" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}>
                <Input placeholder='Có/Không'/>
              </Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item name={`dienTichDatTruoc_${idx}`} label="Diện tích đất trồng cây (sào/vụ x số vụ/năm)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
              <Form.Item name={`tenPhuPhamTruoc_${idx}`} label="Tên phụ phẩm cây trồng (ghi tên từng loại)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item name={`khoiLuongPhuPhamTruoc_${idx}`} label="Khối lượng phụ phẩm cây trồng (kg/sào/vụ x số sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
              <Form.Item name={`khoiLuongPhuPhamThuGomTruoc_${idx}`} label="Khối lượng phụ phẩm cây trồng được thu gom (kg/sào/vụ x số sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.sectionTitle}>C. Sử dụng phân ủ làm phân bón cây trồng, sức khoẻ cây trồng, hiệu quả kinh tế SAU và TRƯỚC khi sử dụng phân ủ hữu cơ</div>
      <Divider className={styles.divider} />
      <div className={styles.formSectionBg}>
        {[0].map((idx) => (
          <div key={idx}>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
              <Form.Item name={`tenCayTrongC_${idx}`} label="Tên cây trồng được bón phân ủ hữu cơ" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{ width: '50%' }}><Input /></Form.Item>
            </div>
            <div key={idx} className={styles.groupedBg}>
                <div className={styles.label}>Diện tích (sào) </div>
                    <div className={styles.row}>
                        <div className={styles.col} style={{width:'50%'}}>
                            <Form.Item name={`dienTichSauPhanU_${idx}`} label="SAU KHI BÓN PHÂN Ủ" rules={[{required:true,message:'Bắt buộc nhập'}]}>
                            <InputNumber min={0} style={{width:'100%'}} />
                            </Form.Item>
                        </div>
                        <div className={styles.col} style={{width:'50%'}}>
                            <Form.Item name={`dienTichKhongPhanU_${idx}`} label="KHÔNG BÓN PHÂN Ủ" rules={[{required:true,message:'Bắt buộc nhập'}]}>
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
                        <Form.Item name={`phanBonC_${idx}_1`} label="Phân ủ/đệm lót/trùn quế/sâu canxi (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <InputNumber min={0} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_2`} label="Phân NPK bón lót (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <InputNumber min={0} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_3`} label="Phân NPK bón thúc (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_4`} label="Phân khác (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]}style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                    </div>
                    <div style={{flex:'1 1 300px'}}>
                        <div style={{marginBottom:2}}>KHÔNG BÓN PHÂN Ủ</div>
                        <Form.Item name={`phanBonC_${idx}_2`} label="Phân NPK bón lót (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <InputNumber min={0} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_3`} label="Phân NPK bón thúc (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_4`} label="Phân khác (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]}style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className={styles.groupedBg}>
                <div style={{fontWeight:'bold',marginBottom:4}}>Số tiền đã chi cho mua từng loại phần bón (số tiền = khối lượng phân bón/ sào x số sào x đơn giá) </div>
                <div style={{display:'flex',gap:16}}>
                    <div style={{flex:'1 1 300px'}}>
                        <div style={{marginBottom:2}}>SAU KHI BÓN PHÂN Ủ</div>
                        <Form.Item name={`phanBonC_${idx}_1`} label="Phân ủ/đệm lót/trùn quế/sâu canxi (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <InputNumber min={0} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_2`} label="Phân NPK bón lót (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <InputNumber min={0} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_3`} label="Phân NPK bón thúc (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_4`} label="Phân khác (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]}style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                    </div>
                    <div style={{flex:'1 1 300px'}}>
                        <div style={{marginBottom:2}}>KHÔNG BÓN PHÂN Ủ</div>
                        <Form.Item name={`phanBonC_${idx}_2`} label="Phân NPK bón lót (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <InputNumber min={0} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_3`} label="Phân NPK bón thúc (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_4`} label="Phân khác (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]}style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
              <Form.Item name={`sauBenhC_${idx}`} label="Cây trồng có bị sâu bệnh không" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}>
                <Input placeholder='Có/Không'/>
              </Form.Item>
              <Form.Item name={`suDungThuocSauC_${idx}`} label="Có sử dụng thuốc trừ sâu không" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}>
                <Input placeholder='Có/Không'/>
              </Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item name={`tienThuocSauC_${idx}`} label="Số tiền mua thuốc trừ sâu (đồng/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
              <Form.Item name={`tienThuocCoC_${idx}`} label="Số tiền mua thuốc diệt cỏ (đồng/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item name={`tienCongLaoDongC_${idx}`} label="Số tiền công lao động (số công/sào x số sào x đơn giá ngày công trung bình)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
              <Form.Item name={`tienHatGiongC_${idx}`} label="Số tiền mua hạt giống (đồng/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item name={`nangSuatThuHoachC_${idx}`} label="Năng suất thu hoạch được (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
              <Form.Item name={`giaBanC_${idx}`} label="Giá bán (đồng/kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item name={`thanhTienC_${idx}`} label="Thành tiền (tổng diện tích/vụ)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><InputNumber min={0} style={{width:'100%'}} /></Form.Item>
            </div>
          </div>
        ))}
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
