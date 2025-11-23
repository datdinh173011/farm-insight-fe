import React from 'react'
import { Form, Input, InputNumber, Button, Checkbox, Radio, Select, Divider } from 'antd'

export default function CommonForm({ onFinish, onBack }) {
  return (
    <Form layout="vertical" onFinish={onFinish} initialValues={{}} style={{maxWidth: 1200, margin: '0 auto'}}>
      <h3>Nhóm câu hỏi chung - phỏng vấn hộ gia đình</h3>
      <Divider />
      {/* 40. Xử lý phụ phẩm cây trồng - hiển thị dạng bảng */}
      <Form.Item label="40. Gia đình bạn đã xử lý phụ phẩm cây trồng như thế nào và xử lý được bao nhiêu %?" style={{fontWeight:'bold'}}>
        <div style={{marginBottom:8}}>Nhập phần trăm cho từng phương pháp (tổng các mục là 100%)</div>
        <div style={{overflowX:'auto'}}>
          <table style={{borderCollapse:'collapse',width:'100%',marginBottom:16}}>
            <thead>
              <tr style={{background:'#f5f5f5'}}>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:220}}>Phương pháp xử lý</th>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:120}}>Trước khi tham gia mô hình (%)</th>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:120}}>Sau khi tham gia mô hình (%)</th>
              </tr>
            </thead>
            <tbody>
              {["Vứt bỏ trong vườn hoặc cánh đồng","Đốt","Đưa đến bãi tập kết chôn lấp","Chôn, đầy hố có lấp đất","Bán","Đem cho người khác","Ủ phân hữu cơ không ống khí","Ủ phân hữu cơ có ống khí","Cho vật nuôi ăn trực tiếp","Lên men làm thức ăn chăn nuôi","Làm thức ăn cho sâu canxi","Làm thức ăn cho trùn quế","Làm lớp lót nuôi gà trên đệm lót sinh học dày","Khác (chỉ định phương pháp)","Cho vào hố Biogas tạo khí sinh học"].map((item, idx) => (
                <tr key={idx}>
                  <td style={{border:'1px solid #ddd',padding:'8px'}}>{item}</td>
                  <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                    <Form.Item name={[`xulyPhuPhamTruoc`,idx]} rules={[{required:false}]} style={{marginBottom:0}}>
                      <InputNumber min={0} max={100} addonAfter="%" style={{width:90}} />
                    </Form.Item>
                  </td>
                  <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                    <Form.Item name={[`xulyPhuPhamSau`,idx]} rules={[{required:false}]} style={{marginBottom:0}}>
                      <InputNumber min={0} max={100} addonAfter="%" style={{width:90}} />
                    </Form.Item>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Form.Item>
      {/* Nếu xử lý bằng hố Biogas thì hỏi tiếp - hiển thị dạng bảng con */}
      <Form.Item label="Nếu xử lý bằng hố Biogas:">
        <div style={{overflowX:'auto'}}>
          <table style={{borderCollapse:'collapse',width:'100%',marginBottom:8}}>
            <thead>
              <tr style={{background:'#f5f5f5'}}>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:260}}>Nội dung</th>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:260}}>Giá trị nhập</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{border:'1px solid #ddd',padding:'8px'}}>Ước lượng % lượng gas dùng nấu ăn/sưởi ấm</td>
                <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                  <Form.Item name="biogasGasPercent" rules={[{required:false}]} style={{marginBottom:0}}>
                    <InputNumber min={0} max={100} addonAfter="%" style={{width:120}} />
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td style={{border:'1px solid #ddd',padding:'8px'}}>Ước tính % phân vật nuôi cho vào hố Biogas/Tổng phân chuồng thu gom</td>
                <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                  <Form.Item name="biogasPhanPercent" rules={[{required:false}]} style={{marginBottom:0}}>
                    <InputNumber min={0} max={100} addonAfter="%" style={{width:120}} />
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td style={{border:'1px solid #ddd',padding:'8px'}}>Sau bao nhiêu ngày phải xử lý xả khí gas 1 lần?</td>
                <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                  <Form.Item name="biogasNgayXaKhi" rules={[{required:false}]} style={{marginBottom:0}}>
                    <Input style={{width:120}} />
                  </Form.Item>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Form.Item>
      <Divider />
      {/* 41. Có trồng lúa không */}
      <Form.Item name="coTrongLua" label="41. Gia đình bạn có trồng Lúa không?" rules={[{required:true}]}> <Radio.Group><Radio value="Có">Có</Radio><Radio value="Không">Không</Radio></Radio.Group> </Form.Item>
      {/* 42. Xử lý gốc rạ - hiển thị dạng bảng */}
      <Form.Item label="42. Bạn xử lý gốc rạ như thế nào trước và sau khi tham gia mô hình và bao nhiêu phần trăm gốc rạ đã được xử lý theo cách đó?">
        <div style={{marginBottom:8}}>Nhập phần trăm cho từng phương pháp (tổng các mục là 100%)</div>
        <div style={{overflowX:'auto'}}>
          <table style={{borderCollapse:'collapse',width:'100%',marginBottom:8}}>
            <thead>
              <tr style={{background:'#f5f5f5'}}>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:220}}>Phương pháp xử lý</th>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:120}}>Trước khi tham gia mô hình (%)</th>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:120}}>Sau khi tham gia mô hình (%)</th>
              </tr>
            </thead>
            <tbody>
              {["Đốt","Vùi trong nước","Chôn xuống đất","Sử dụng chế phẩm sinh học","Khác (Ghi rõ)"]
                .map((item, idx) => (
                  <tr key={idx}>
                    <td style={{border:'1px solid #ddd',padding:'8px'}}>{item}</td>
                    <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                      <Form.Item name={[`xulyGocRaTruoc`,idx]} rules={[{required:false}]} style={{marginBottom:0}}>
                        <InputNumber min={0} max={100} addonAfter="%" style={{width:90}} />
                      </Form.Item>
                    </td>
                    <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                      <Form.Item name={[`xulyGocRaSau`,idx]} rules={[{required:false}]} style={{marginBottom:0}}>
                        <InputNumber min={0} max={100} addonAfter="%" style={{width:90}} />
                      </Form.Item>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Form.Item>
      {/* 43. Có nuôi động vật không */}
      <Form.Item name="coNuoiDongVat" label="43. Gia đình bạn có nuôi động vật nào không?" rules={[{required:true}]}> <Radio.Group><Radio value="Có">Có</Radio><Radio value="Không">Không</Radio></Radio.Group> </Form.Item>
      {/* 44. Xử lý phân gia súc - hiển thị dạng bảng */}
      <Form.Item label="44. Bạn xử lý phân gia súc như thế nào trước và sau khi tham gia mô hình và bao nhiêu phần trăm phân được xử lý theo cách đó?">
        <div style={{marginBottom:8}}>Nhập phần trăm cho từng phương pháp (tổng các mục là 100%)</div>
        <div style={{overflowX:'auto'}}>
          <table style={{borderCollapse:'collapse',width:'100%',marginBottom:8}}>
            <thead>
              <tr style={{background:'#f5f5f5'}}>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:220}}>Phương pháp xử lý</th>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:120}}>Trước khi tham gia mô hình (%)</th>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:120}}>Sau khi tham gia mô hình (%)</th>
              </tr>
            </thead>
            <tbody>
              {["Ủ phân","Xả bằng nước ra khu vực xung quanh","Chôn xuống đất","Bán cho người khác","Lưu trữ trong hố tự hoại","Làm thức ăn cho sâu canxi","Làm thức ăn cho trùn quế","Khác (Ghi rõ)","Sử dụng cho hầm Biogas"]
                .map((item, idx) => (
                  <tr key={idx}>
                    <td style={{border:'1px solid #ddd',padding:'8px'}}>{item}</td>
                    <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                      <Form.Item name={[`xulyPhanTruoc`,idx]} rules={[{required:false}]} style={{marginBottom:0}}>
                        <InputNumber min={0} max={100} addonAfter="%" style={{width:90}} />
                      </Form.Item>
                    </td>
                    <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                      <Form.Item name={[`xulyPhanSau`,idx]} rules={[{required:false}]} style={{marginBottom:0}}>
                        <InputNumber min={0} max={100} addonAfter="%" style={{width:90}} />
                      </Form.Item>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Form.Item>
      {/* Nếu xử lý bằng hầm Biogas thì hỏi tiếp - hiển thị dạng bảng con */}
      <Form.Item label="Nếu xử lý bằng hầm Biogas:">
        <div style={{overflowX:'auto'}}>
          <table style={{borderCollapse:'collapse',width:'100%',marginBottom:8}}>
            <thead>
              <tr style={{background:'#f5f5f5'}}>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:260}}>Nội dung</th>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:180}}>Giá trị nhập</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{border:'1px solid #ddd',padding:'8px'}}>Ước lượng % lượng gas dùng nấu ăn/sưởi ấm</td>
                <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                  <Form.Item name="biogasPhanGasPercent" rules={[{required:false}]} style={{marginBottom:0}}>
                    <InputNumber min={0} max={100} addonAfter="%" style={{width:120}} />
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td style={{border:'1px solid #ddd',padding:'8px'}}>Ước tính % phân vật nuôi cho vào hố Biogas/Tổng phân chuồng thu gom</td>
                <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                  <Form.Item name="biogasPhanPhanPercent" rules={[{required:false}]} style={{marginBottom:0}}>
                    <InputNumber min={0} max={100} addonAfter="%" style={{width:120}} />
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td style={{border:'1px solid #ddd',padding:'8px'}}>Sau bao nhiêu ngày phải xử lý xả khí gas 1 lần?</td>
                <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                  <Form.Item name="biogasPhanNgayXaKhi" rules={[{required:false}]} style={{marginBottom:0}}>
                    <Input style={{width:120}} />
                  </Form.Item>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Form.Item>
      <Divider />
      {/* 45-50. Đánh giá kỹ thuật */}
      <Form.Item label="45. Kỹ thuật đó thực hiện dễ hay khó (1 cực kỳ dễ, 10 cực kỳ khó)">
        <Form.Item name="kyThuatDeHayKho" placeholder="Nhập điểm" rules={[{required:false}]} style={{marginBottom:4}}>
          <InputNumber min={1} max={10} style={{width:120}} />
        </Form.Item>
      </Form.Item>
      {/* 46-50. Ý kiến về kỹ thuật */}
      {["Thực hiện đúng kỹ thuật sẽ giúp tăng lợi nhuận","Thực hiện đúng kỹ thuật sẽ giúp giảm chi phí","Thực hiện đúng kỹ thuật sẽ giúp giảm khối lượng công việc","Thực hiện đúng kỹ thuật sẽ tốt cho môi trường","Thực hiện đúng kỹ thuật sẽ giúp cải thiện chất lượng đất"].map((label, idx) => (
        <Form.Item key={idx} name={`ykienKyThuat_${idx}`} label={`${46+idx}. ${label}`} rules={[{required:false}]}> <Radio.Group>
          <Radio value={1}>Không đồng ý</Radio>
          <Radio value={2}>Có phần không đồng ý</Radio>
          <Radio value={3}>Không đồng ý cũng không phản đối</Radio>
          <Radio value={4}>Có phần đồng ý</Radio>
          <Radio value={5}>Hoàn toàn đồng ý</Radio>
          <Radio value={6}>Không biết kỹ thuật này</Radio>
        </Radio.Group></Form.Item>
      ))}
      <Divider />
      {/* 51-53. Hoạt động liên quan xử lý chất thải - hiển thị dạng bảng */}
      <Form.Item label="51-53. Hoạt động liên quan xử lý chất thải">
        <div style={{overflowX:'auto'}}>
          <table style={{borderCollapse:'collapse',width:'100%',marginBottom:8}}>
            <thead>
              <tr style={{background:'#f5f5f5'}}>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:260}}>Hoạt động</th>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:120}}>Đã nghe nói về nó</th>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:120}}>Đã tham dự</th>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:180}}>Ảnh hưởng đến quyết định áp dụng kỹ thuật</th>
              </tr>
            </thead>
            <tbody>
              {["Được Dự án hỗ trợ về con giống/vật tư để xây dựng mô hình","Tham gia lớp tập huấn giảng viên nguồn (TOT)","Tham gia lớp tập huấn nông dân (FFS)","Các buổi sinh hoạt của các hợp tác xã, các chi, tổ hội nông dân nghề nghiệp, các câu lạc bộ nông dân","Hội nghị truyền thông/ Sự kiện tuyên truyền/ Hội thi","Các chuyến tham quan học tập, chia sẻ kinh nghiệm","Một người nông dân khác đã hướng dẫn tôi về kỹ thuật"].map((label, idx) => (
                <tr key={idx}>
                  <td style={{border:'1px solid #ddd',padding:'8px'}}>{label}</td>
                  <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                    <Form.Item name={`hoatDong_${idx}_ngheNoi`} rules={[{required:false}]} style={{marginBottom:0}}>
                      <Radio.Group style={{display:'flex',justifyContent:'center',gap:16}}>
                        <Radio value="Đúng">Đúng</Radio>
                        <Radio value="KHÔNG">KHÔNG</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                    <Form.Item name={`hoatDong_${idx}_thamDu`} rules={[{required:false}]} style={{marginBottom:0}}>
                      <Radio.Group style={{display:'flex',justifyContent:'center',gap:16}}>
                        <Radio value="Đúng">Đúng</Radio>
                        <Radio value="KHÔNG">KHÔNG</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                    <Form.Item name={`hoatDong_${idx}_anhHuong`} rules={[{required:false}]} style={{marginBottom:0}}>
                      <Radio.Group style={{display:'flex',justifyContent:'center',gap:8}}>
                        <Radio value={1} style={{width:140,textAlign:'center'}}>Không ảnh hưởng</Radio>
                        <Radio value={2} style={{width:140,textAlign:'center'}}>Ít ảnh hưởng 1-30%</Radio>
                        <Radio value={3} style={{width:140,textAlign:'center'}}>Ảnh hưởng trung bình 31-50%</Radio>
                        <Radio value={4} style={{width:140,textAlign:'center'}}>Ảnh hưởng cao 51-70%</Radio>
                        <Radio value={5} style={{width:140,textAlign:'center'}}>Ảnh hưởng rất cao lớn hơn 71%</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Form.Item>
      {/* 54. Sự kiện sẽ tham gia */}
      <Form.Item name="suKienThamGia" label="54. Bạn sẽ tham gia sự kiện nào?" rules={[{required:false}]}> <Select placeholder="Chọn sự kiện" style={{width:400}} options={[
        {value:'hoTroGiongVatTu',label:'Được Dự án hỗ trợ về con giống/vật tư để xây dựng mô hình'},
        {value:'tot',label:'Tham gia lớp tập huấn giảng viên nguồn (TOT)'},
        {value:'ffs',label:'Tham gia lớp tập huấn nông dân (FFS)'},
        {value:'farmerGroup',label:'Các buổi sinh hoạt của các hợp tác xã, các chi, tổ hội nông dân nghề nghiệp, các câu lạc bộ nông dân'},
        {value:'event',label:'Hội nghị truyền thông/ Sự kiện tuyên truyền/ Hội thi'},
        {value:'exchange',label:'Các chuyến tham quan học tập, chia sẻ kinh nghiệm'},
        {value:'peer',label:'Một người nông dân khác đã hướng dẫn tôi về kỹ thuật'}
      ]} /> </Form.Item>
      {/* 55. Lợi ích sự kiện */}
      <Form.Item label="55. Với các sự kiện bạn đã tham dự, hãy chọn 1 lợi ích quan trọng nhất và 1 lợi ích quan trọng thứ hai">
        <Form.Item name="loiIch1" label="Lợi ích quan trọng nhất" rules={[{required:false}]} style={{display:'inline-block',width:'45%',marginRight:8}}>
          <Select placeholder='Chọn lợi ích' style={{width:300}} options={[
            {value:'hocMoi',label:'Học một cái gì đó mới'},
            {value:'giaoLuu',label:'Giao lưu với các thành viên trong cộng đồng'},
            {value:'phuongPhapQuanTrong',label:'Phương pháp rất quan trọng'},
            {value:'tietKiemThoiGian',label:'Tiết kiệm thời gian'},
            {value:'giamKhoiLuong',label:'Giảm khối lượng công việc'},
            {value:'tietKiemTien',label:'Tiết kiệm tiền'},
            {value:'tangThuNhap',label:'Tăng thu nhập'},
            {value:'giupSachSe',label:'Giữ trang trại sạch sẽ'},
            {value:'giamMuiHoi',label:'Giảm mùi hôi'},
            {value:'tangNangSuat',label:'Tăng năng suất cây trồng'},
            {value:'giamSauBenh',label:'Giảm sâu bệnh'},
            {value:'baoVeMoiTruong',label:'Bảo vệ môi trường'},
            {value:'khac',label:'Khác'}
          ]} />
        </Form.Item>
        <Form.Item name="loiIch2" label="Lợi ích quan trọng thứ hai" rules={[{required:false}]} style={{display:'inline-block',width:'45%'}}>
          <Select placeholder='Chọn lợi ích' style={{width:300}} options={[
            {value:'hocMoi',label:'Học một cái gì đó mới'},
            {value:'giaoLuu',label:'Giao lưu với các thành viên trong cộng đồng'},
            {value:'phuongPhapQuanTrong',label:'Phương pháp rất quan trọng'},
            {value:'tietKiemThoiGian',label:'Tiết kiệm thời gian'},
            {value:'giamKhoiLuong',label:'Giảm khối lượng công việc'},
            {value:'tietKiemTien',label:'Tiết kiệm tiền'},
            {value:'tangThuNhap',label:'Tăng thu nhập'},
            {value:'giupSachSe',label:'Giữ trang trại sạch sẽ'},
            {value:'giamMuiHoi',label:'Giảm mùi hôi'},
            {value:'tangNangSuat',label:'Tăng năng suất cây trồng'},
            {value:'giamSauBenh',label:'Giảm sâu bệnh'},
            {value:'baoVeMoiTruong',label:'Bảo vệ môi trường'},
            {value:'khac',label:'Khác'}
          ]} />
        </Form.Item>
      </Form.Item>
      {/* 56. Lý do không tham gia */}
      <Form.Item name="lyDoKhongThamGia" label="56. Nếu không tham gia hoạt động nào, hãy nêu lý do" rules={[{required:false}]}> <Select placeholder='Chọn lý do'style={{width:400}} options={[
        {value:'khongBiet',label:'Không biết về chúng'},
        {value:'khongLienQuan',label:'Không liên quan đến tôi'},
        {value:'viTri',label:'Vị trí không thuận tiện'},
        {value:'thoiGian',label:'Thời gian không thuận tiện'},
        {value:'trachNhiem',label:'Trách nhiệm khác'},
        {value:'khongChacChan',label:'Không chắc chắn sự kiện này là về cái gì'},
        {value:'daBiet',label:'Tôi đã biết về thông tin được truyền đạt'},
        {value:'khac',label:'Khác'}
      ]} /> </Form.Item>
      <Divider />
      {/* 57-58. Truyền thông */}
      <Form.Item label="57-58. Bạn đã nghe hoặc thấy bất kỳ phương tiện/hình thức/tư liệu truyền thông nào dưới đây">
        <div style={{overflowX:'auto'}}>
          <table style={{borderCollapse:'collapse',width:'100%',marginBottom:8}}>
            <thead>
              <tr style={{background:'#f5f5f5'}}>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:320}}>Phương tiện truyền thông</th>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:220}}>Đã nghe nói hoặc nhìn thấy nó</th>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:320}}>Ảnh hưởng đến quyết định áp dụng kỹ thuật</th>
              </tr>
            </thead>
            <tbody>
              {["Băng rôn/ Áp phích/ Lịch tuyên truyền",
                "Loa phát thanh của làng/xã",
                "Tài liệu kỹ thuật về phương pháp xử lý rác thải thân thiện với môi trường",
                "Bài viết trên mạng xã hội",
                "Video trên mạng xã hội",
                "Thông tin trên trang web Hội Nông dân",
                "Thông tin trên tivi",
                "Thông tin trên báo",
                "Thông tin qua đài phát thanh",
                "Người khác trong cộng đồng đã áp dụng và có kết quả tốt"].map((label, idx) => (
                <tr key={idx}>
                  <td style={{border:'1px solid #ddd',padding:'8px'}}>{label}</td>
                  <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                    <Form.Item name={`truyenThong_${idx}_ngheNoi`} rules={[{required:false}]} style={{marginBottom:0}}>
                      <Radio.Group style={{display:'flex',justifyContent:'center',gap:16}}>
                        <Radio value="Đúng" style={{width:100,textAlign:'center'}}>Đúng</Radio>
                        <Radio value="KHÔNG" style={{width:100,textAlign:'center'}}>KHÔNG</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                  <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                    <Form.Item name={`truyenThong_${idx}_anhHuong`} rules={[{required:false}]} style={{marginBottom:0}}>
                      <Radio.Group style={{display:'flex',justifyContent:'center',gap:16}}>
                        <Radio value={1} style={{width:140,textAlign:'center'}}>Không ảnh hưởng</Radio>
                        <Radio value={2} style={{width:140,textAlign:'center'}}>Ít ảnh hưởng 1-30%</Radio>
                        <Radio value={3} style={{width:140,textAlign:'center'}}>Ảnh hưởng trung bình 31-50%</Radio>
                        <Radio value={4} style={{width:140,textAlign:'center'}}>Ảnh hưởng cao 51-70%</Radio>
                        <Radio value={5} style={{width:140,textAlign:'center'}}>Ảnh hưởng rất cao lớn hơn 71%</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Form.Item>
      {/* 59. Khả năng tiếp tục sử dụng */}
      <Form.Item label="59. Bạn có khả năng tiếp tục sử dụng những phương pháp này không?">
        <div style={{overflowX:'auto'}}>
          <table style={{borderCollapse:'collapse',width:'100%',marginBottom:8}}>
            <thead>
              <tr style={{background:'#f5f5f5'}}>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:260}}>Phương pháp</th>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:520}}>Khả năng tiếp tục sử dụng</th>
              </tr>
            </thead>
            <tbody>
              {["Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi","Ủ phân hữu cơ từ phụ phẩm cây trồng tại ruộng","Xử lý gốc rạ bằng chế phẩm sinh học","Nuôi trùn quế","Nuôi sâu canxi","Nuôi gà trên đệm lót sinh học dày"].map((label, idx) => (
                <tr key={idx}>
                  <td style={{border:'1px solid #ddd',padding:'8px'}}>{label}</td>
                  <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                    <Form.Item name={`khaNangTiepTuc_${idx}`} rules={[{required:false}]} style={{marginBottom:0}}>
                      <Radio.Group style={{display:'flex',justifyContent:'center',gap:16}}>
                        <Radio value={1} style={{width:120,textAlign:'center'}}>Tiếp tục</Radio>
                        <Radio value={2} style={{width:120,textAlign:'center'}}>Có thể tiếp tục</Radio>
                        <Radio value={3} style={{width:120,textAlign:'center'}}>Khó tiếp tục</Radio>
                        <Radio value={4} style={{width:120,textAlign:'center'}}>Rất khó tiếp tục</Radio>
                        <Radio value={5} style={{width:120,textAlign:'center'}}>Từng áp dụng nhưng dừng lại</Radio>
                        <Radio value={6} style={{width:120,textAlign:'center'}}>Không tiếp tục</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Form.Item>
      {/* 60. Chia sẻ kỹ thuật */}
      <Form.Item name="soNguoiChiaSeKyThuat" label="60. Bạn đã từng chia sẻ kỹ thuật này với bao nhiêu người? (0=chưa từng chia sẻ)" rules={[{required:false}]}> <InputNumber min={0} style={{width:120}} /> </Form.Item>
      {/* 61. Dự định chia sẻ */}
      <Form.Item name="duDinhChiaSe" label="61. Trong tương lai, bạn có dự định chia sẻ những kỹ thuật này với hàng xóm, bạn bè và người thân không?" rules={[{required:false}]}> <Radio.Group>
        <Radio value="ratCoThe">Rất có thể</Radio>
        <Radio value="coThe">Có thể</Radio>
        <Radio value="khoXayRa">Khó xảy ra</Radio>
        <Radio value="ratKhoXayRa">Rất khó xảy ra</Radio>
      </Radio.Group></Form.Item>
      {/* 62. Khía cạnh hấp dẫn */}
        <Form.Item label="62. Khía cạnh nào của từng kỹ thuật xử lý phụ phẩm này hấp dẫn bạn xếp thứ nhất và xếp thứ hai?">
            <div style={{overflowX:'auto'}}>
                <table style={{borderCollapse:'collapse',width:'100%',marginBottom:8}}>
                <thead>
                    <tr style={{background:'#f5f5f5'}}>
                    <th style={{border:'1px solid #ddd',padding:'8px',minWidth:260}}>Kỹ thuật xử lý phụ phẩm</th>
                    <th style={{border:'1px solid #ddd',padding:'8px',minWidth:260}}>Mặt hấp dẫn nhất</th>
                    <th style={{border:'1px solid #ddd',padding:'8px',minWidth:260}}>Mặt hấp dẫn thứ hai</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                    "Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi",
                    "Ủ phân hữu cơ từ phụ phẩm cây trồng tại ruộng",
                    "Xử lý gốc rạ bằng chế phẩm sinh học",
                    "Nuôi trùn quế",
                    "Nuôi sâu canxi",
                    "Nuôi gà trên đệm lót sinh học dày"
                    ].map((label, idx) => (
                    <tr key={idx}>
                        <td style={{border:'1px solid #ddd',padding:'8px'}}>{label}</td>
                        <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                        <Form.Item name={`matHapDanNhat_${idx}`} rules={[{required:false}]} style={{marginBottom:0}}>
                            <Select placeholder='Chọn mặt hấp dẫn' style={{width:220}} options={[
                            {value:1,label:'Giảm chi phí phân bón/thức ăn'},
                            {value:2,label:'Giảm chi phí thuốc trừ sâu/thuốc'},
                            {value:3,label:'Giảm thời gian'},
                            {value:4,label:'Giảm lao động'},
                            {value:5,label:'Tăng năng suất cây trồng / Vật nuôi phát triển lớn hơn'},
                            {value:6,label:'Giảm sâu bệnh'},
                            {value:7,label:'Tăng chất lượng sản phẩm'},
                            {value:8,label:'Cây trồng/vật nuôi phát triển nhanh hơn'},
                            {value:9,label:'Giảm mùi hôi từ phân chuồng'},
                            {value:10,label:'Cải thiện vệ sinh môi trường'},
                            {value:11,label:'Giảm ô nhiễm đất/nước'}
                            ]} />
                        </Form.Item>
                        </td>
                        <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                        <Form.Item name={`matHapDanHai_${idx}`} rules={[{required:false}]} style={{marginBottom:0}}>
                            <Select placeholder='Chọn mặt hấp dẫn' style={{width:220}} options={[
                            {value:1,label:'Giảm chi phí phân bón/thức ăn'},
                            {value:2,label:'Giảm chi phí thuốc trừ sâu/thuốc'},
                            {value:3,label:'Giảm thời gian'},
                            {value:4,label:'Giảm lao động'},
                            {value:5,label:'Tăng năng suất cây trồng / Vật nuôi phát triển lớn hơn'},
                            {value:6,label:'Giảm sâu bệnh'},
                            {value:7,label:'Tăng chất lượng sản phẩm'},
                            {value:8,label:'Cây trồng/vật nuôi phát triển nhanh hơn'},
                            {value:9,label:'Giảm mùi hôi từ phân chuồng'},
                            {value:10,label:'Cải thiện vệ sinh môi trường'},
                            {value:11,label:'Giảm ô nhiễm đất/nước'}
                            ]} />
                        </Form.Item>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </Form.Item>
      {/* 63. Yếu tố quan trọng khi xử lý chất thải */}
      <Form.Item label="63. Bạn coi những yếu tố sau đây quan trọng như thế nào khi cân nhắc việc xử lý chất thải?">
        <div style={{overflowX:'auto'}}>
          <table style={{borderCollapse:'collapse',width:'100%',marginBottom:8}}>
            <thead>
              <tr style={{background:'#f5f5f5'}}>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:320}}>Yếu tố</th>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:320}}>Mức độ quan trọng</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Tác động đến môi trường",
                "Tác động đến cộng đồng xung quanh",
                "Ý kiến của cộng đồng",
                "Dễ dàng (tốn ít công sức)",
                "Chi phí",
                "Tác động đến vệ sinh và sức khỏe",
                "Phương pháp xử lý rác thải mà người khác áp dụng",
                "Sạch sẽ và gọn gàng của trang trại",
                "Mùi của chất thải gây ra"
              ].map((label, idx) => (
                <tr key={idx}>
                  <td style={{border:'1px solid #ddd',padding:'8px'}}>{label}</td>
                  <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                    <Form.Item name={`yeuToQuanTrong_${idx}`} rules={[{required:false}]} style={{marginBottom:0}}>
                      <Radio.Group style={{display:'flex',justifyContent:'center',gap:24}}>
                        <Radio value={1} style={{width:120,textAlign:'center'}}>Không quan trọng</Radio>
                        <Radio value={2} style={{width:120,textAlign:'center'}}>Quan trọng</Radio>
                        <Radio value={3} style={{width:120,textAlign:'center'}}>Rất quan trọng</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </Form.Item>
      {/* 64. Tỷ lệ hộ gia đình áp dụng kỹ thuật */}
      <Form.Item name="tyLeHoApDung" label="64. Theo bạn, hiện nay tỷ lệ hộ gia đình trong thôn áp dụng kỹ thuật như bạn là bao nhiêu?" rules={[{required:false}]}> <InputNumber min={0} max={100} addonAfter="%" style={{width:120}} /> </Form.Item>
      {/* 65. Sự chấp thuận các phương pháp */}
      <Form.Item label="65. Bạn có ủng hộ những phương pháp sau đây không?">
        <div style={{overflowX:'auto'}}>
          <table style={{borderCollapse:'collapse',width:'100%',marginBottom:8}}>
            <thead>
              <tr style={{background:'#f5f5f5'}}>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:320}}>Phương pháp</th>
                <th style={{border:'1px solid #ddd',padding:'8px',minWidth:320}}>Mức độ ủng hộ</th>
              </tr>
            </thead>
            <tbody>
              {["Lên men phụ phẩm cây trồng làm thức ăn chăn nuôi",
                "Ủ phân hữu cơ từ phụ phẩm cây trồng tại ruộng",
                "Xử lý gốc rạ bằng chế phẩm sinh học",
                "Nuôi trùn quế",
                "Nuôi sâu canxi",
                "Nuôi gà trên đệm lót sinh học dày"].map((label, idx) => (
                <tr key={idx}>
                  <td style={{border:'1px solid #ddd',padding:'8px'}}>{label}</td>
                  <td style={{border:'1px solid #ddd',padding:'8px',textAlign:'center'}}>
                    <Form.Item name={`chapThuan_${idx}`} rules={[{required:false}]} style={{marginBottom:0}}>
                      <Radio.Group style={{display:'flex',justifyContent:'center',gap:24}}>
                        <Radio value={1} style={{width:120,textAlign:'center'}}>Không ủng hộ</Radio>
                        <Radio value={2} style={{width:120,textAlign:'center'}}>Ủng hộ ít</Radio>
                        <Radio value={3} style={{width:120,textAlign:'center'}}>Ủng hộ nhiều</Radio>
                        <Radio value={4} style={{width:120,textAlign:'center'}}>Hoàn toàn ủng hộ</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Form.Item>
      {/* 66. Biết về danh hiệu "Người gìn giữ tương lai xanh" */}
      <Form.Item name="bietDanhHieuXanh" label="66. Bạn có biết đến tên gọi/ danh hiệu “Người gìn giữ tương lai xanh” không?" rules={[{required:false}]}> <Radio.Group>
        <Radio value="nhomXanh">Tôi thuộc nhóm “Người gìn giữ tương lai xanh”</Radio>
        <Radio value="daNghe">Tôi đã nghe nói về nó, nhưng tôi không tham gia</Radio>
        <Radio value="khongBiet">Tôi không biết</Radio>
      </Radio.Group></Form.Item>
      {/* 67. Muốn tham gia nhóm "Người gìn giữ tương lai xanh" */}
      <Form.Item name="muonThamGiaXanh" label="67. Bạn có muốn tham gia nhóm “Người gìn giữ tương lai xanh” không?" rules={[{required:false}]}> <Radio.Group>
        <Radio value="co">Có</Radio>
        <Radio value="khong">Không</Radio>
      </Radio.Group></Form.Item>
      {/* 68. Ước tính thu nhập */}
      <Form.Item name="thuNhap2025" label="68. Ước tính thu nhập trung bình hàng tháng trong năm 2025 của hộ gia đình (đồng)" rules={[{required:false}]}> <InputNumber min={0} style={{width:200}} /> </Form.Item>
      {/* 69. Nguồn thu nhập */}
      <Form.Item name="nguonThuNhap" label="69. Nguồn thu nhập của hộ gia đình bạn từ đâu?" rules={[{required:false}]}> <Select mode="multiple" style={{width:400}} options={[
        {value:'trongTrot',label:'Trồng trọt'},
        {value:'chanNuoi',label:'Chăn nuôi gia súc/gia cầm/Cá'},
        {value:'congNhan',label:'Làm việc tại công ty'},
        {value:'doanhNghiep',label:'Điều hành doanh nghiệp'},
        {value:'khac',label:'Khác'}
      ]} /> </Form.Item>
      {/* 70. Trình độ học vấn */}
      <Form.Item name="trinhDoHocVan" label="70. Trình độ học vấn của bạn?" rules={[{required:false}]}> <Select style={{width:400}} options={[
        {value:'tieuHoc',label:'Tiểu học'},
        {value:'thcs',label:'Trung học cơ sở'},
        {value:'thpt',label:'Trung học phổ thông'},
        {value:'trungCap',label:'Trung cấp'},
        {value:'caoDangDaiHoc',label:'Cao đẳng/Đại học trở lên'}
      ]} /> </Form.Item>
      <Divider />
      <Form.Item>
        <Button onClick={onBack}>Quay lại</Button>
        <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>Gửi toàn bộ phiếu</Button>
      </Form.Item>
    </Form>
  )
}
