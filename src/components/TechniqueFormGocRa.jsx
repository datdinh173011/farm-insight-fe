import React from 'react'
import { Form, Input, Button, Checkbox, InputNumber} from 'antd'
import styles from './TechniqueFormGocRa.module.scss'

const questions = [
  'Bạn xử lý gốc rạ bằng loại chế phẩm nào?',
  'Bạn thấy hiệu quả xử lý gốc rạ ra sao?',
  'Bạn có gặp khó khăn về chi phí không?'
]

export default function TechniqueFormGocRa({ onFinish, onBack }) {
  return (
    <Form layout="vertical" onFinish={onFinish} initialValues={{}} style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div className={styles.sectionTitle}>A. Loại phụ phẩm cây trồng, Quản lý phụ phẩm cây trồng và chất thải</div>
      <div className={styles.formSectionBg}>
        <div className={styles.row}>
          <Form.Item name="thangNamBatDauApDung" label="Tháng/năm bắt đầu áp dụng xử lý gốc rạ bằng chế phẩm sinh học" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input placeholder="Tháng/năm" /></Form.Item>
          <Form.Item name="soVuXuLyGocRa" label="Số vụ xử lý gốc rạ bằng chế phẩm (số vụ/năm x số năm)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
        </div>
        <div className={styles.row}>
          <Form.Item name="thangNamBatDauVuGanDay" label="Tháng/năm bắt đầu vụ gần đây" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input placeholder="Tháng/năm" /></Form.Item>
          <Form.Item name="dienTichGocRaSauThuHoach" label="Diện tích ruộng có gốc rạ sau thu hoạch được xử lý bằng chế phẩm sinh học (sào/vụ)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
        </div>
        <div className={styles.row}>
          <Form.Item name="chePhamSinhHocSuDung" label="Các loại chế phẩm sinh học được sử dụng" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}>
            <Input placeholder = "Trichoderma, Sumitri, Khác (ghi rõ)"/>
          </Form.Item>
          <Form.Item name="tienMuaChePham" label="Số tiền chi mua chế phẩm sinh học (đồng/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
        </div>
        <div className={styles.row}>
          <Form.Item name="tienNhanCongPhun" label="Số tiền chi nhân công phun chế phẩm sinh học (đồng/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
          <Form.Item name="nangSuatLuaSauXuLy" label="Năng suất lúa của vụ sau khi xử lý gốc rạ bằng chế phẩm (kg/sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
        </div>
      </div>
      <div className={styles.sectionTitle}>B. Sử dụng phân xử lý gốc rạ, sức khoẻ cây trồng, hiệu quả kinh tế SAU và TRƯỚC khi sử dụng</div>
      <div className={styles.formSectionBg}>
        {[0].map((idx) => (
          <div key={idx}>
            <div style={{display:'flex',gap:16,marginBottom:8}}>
                <Form.Item name={`tenCayTrongC_${idx}`} label="Tên cây trồng được xử lý gốc rạ bằng chế phẩm vi sinh" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{ width: '50%' }}><Input /></Form.Item>
            </div>
            <div key={idx} className={styles.groupedBg}>
                <div className={styles.label}>Diện tích (sào) </div>
                <div className={styles.row}>
                <div className={styles.col} style={{width:'50%'}}>
                    <Form.Item name={`dienTichSauPhanU_${idx}`} label="SAU KHI ÁP DỤNG KỸ THUẬT" rules={[{required:true,message:'Bắt buộc nhập'}]}>
                    <InputNumber min={0} style={{width:'100%'}} />
                    </Form.Item>
                </div>
                <div className={styles.col} style={{width:'50%'}}>
                    <Form.Item name={`dienTichKhongPhanU_${idx}`} label="KHÔNG ÁP DỤNG KỸ THUẬT" rules={[{required:true,message:'Bắt buộc nhập'}]}>
                    <InputNumber min={0} style={{width:'100%'}} />
                    </Form.Item>
                </div>
                </div>
            </div>
            <div className={styles.groupedBg}>
                <div style={{fontWeight:'bold',marginBottom:4}}>Khối lượng từng loại phân bón (Tổng số lượng = số kg/ sào/ vụ x số sào)</div>
                <div style={{display:'flex',gap:16}}>
                    <div style={{flex:'1 1 300px'}}>
                        <div style={{marginBottom:2}}>SAU KHI ÁP DỤNG KỸ THUẬT</div>
                        <Form.Item name={`phanBonC_${idx}_1`} label="Phân NPK bón lót (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <InputNumber min={0} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_2`} label="Phân NPK bón thúc (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <InputNumber min={0} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_3`} label="Phân đạm (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_4`} label="Phân kali (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]}style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_4`} label="Phân khác (ghi rõ) (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]}style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                    </div>
                    <div style={{flex:'1 1 300px'}}>
                        <div style={{marginBottom:2}}>KHÔNG ÁP DỤNG KỸ THUẬT</div>
                        <Form.Item name={`phanBonC_${idx}_1`} label="Phân NPK bón lót (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <InputNumber min={0} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_2`} label="Phân NPK bón thúc (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <InputNumber min={0} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_3`} label="Phân đạm (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_4`} label="Phân kali (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]}style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_4`} label="Phân khác (ghi rõ) (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]}style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className={styles.groupedBg}>
                <div style={{fontWeight:'bold',marginBottom:4}}>Số tiền đã chi mua từng loại phân bón (Tổng số tiền = tổng số lượng từng loại phân bón x đơn giá)</div>
                <div style={{display:'flex',gap:16}}>
                    <div style={{flex:'1 1 300px'}}>
                        <div style={{marginBottom:2}}>SAU KHI ÁP DỤNG KỸ THUẬT</div>
                        <Form.Item name={`phanBonC_${idx}_1`} label="Phân NPK bón lót (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <InputNumber min={0} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_2`} label="Phân NPK bón thúc (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <InputNumber min={0} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_3`} label="Phân đạm (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_4`} label="Phân kali (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]}style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_4`} label="Phân khác (ghi rõ) (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]}style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                    </div>
                    <div style={{flex:'1 1 300px'}}>
                        <div style={{marginBottom:2}}>KHÔNG ÁP DỤNG KỸ THUẬT</div>
                        <Form.Item name={`phanBonC_${idx}_1`} label="Phân NPK bón lót (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <InputNumber min={0} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_2`} label="Phân NPK bón thúc (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <InputNumber min={0} style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_3`} label="Phân đạm (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_4`} label="Phân kali (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]}style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                        <Form.Item name={`phanBonC_${idx}_4`} label="Phân khác (ghi rõ) (kg)" rules={[{required:true,message:'Bắt buộc nhập'}]}style={{marginBottom:4}}>
                            <Input style={{width:'100%'}} />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
              <Form.Item name={`sauBenhB_${idx}`} label="Cây trồng có bị sâu bệnh không" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}>
                <Input style={{width:'50%'}} placeholder='Có / Không'/>
              </Form.Item>
              <Form.Item name={`suDungThuocSauB_${idx}`} label="Có sử dụng thuốc trừ sâu không" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}>
                <Input style={{width:'50%'}} placeholder='Có / Không'/>
              </Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item name={`tienThuocSauB_${idx}`} label="Số tiền mua thuốc trừ sâu (đồng/sào/vụ x số sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
              <Form.Item name={`suDungThuocCoB_${idx}`} label="Có sử dụng thuốc diệt cỏ không" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}>
                <Input style={{width:'50%'}} placeholder='Có / Không'/>
              </Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item name={`tienThuocCoB_${idx}`} label="Số tiền mua thuốc diệt cỏ (đồng/sào/vụ x số sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
              <Form.Item name={`tienCongLaoDongB_${idx}`} label="Số tiền công lao động (số công/sào/vụ x đơn giá)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item name={`tienHatGiongB_${idx}`} label="Số tiền mua hạt giống (đồng/sào/vụ x số sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
              <Form.Item name={`sanLuongThuHoachB_${idx}`} label="Sản lượng thu hoạch được (kg/sào/vụ x số sào)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
            </div>
            <div className={styles.row}>
              <Form.Item name={`giaBanB_${idx}`} label="Giá bán (đồng/kg)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
              <Form.Item name={`thanhTienB_${idx}`} label="Thành tiền (tổng diện tích/vụ)" rules={[{required:true,message:'Bắt buộc nhập'}]} className={styles.col}><Input /></Form.Item>
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
  )
}
