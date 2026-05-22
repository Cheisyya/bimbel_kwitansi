import React, { useState } from 'react';
import { Printer, FileEdit } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    noKwitansi: 'KWI-001/XI/2023',
    terimaDari: 'Bapak/Ibu: Rahma Nuraini (Siswa: Fauzan Aris)',
    uangSejumlah: 'Sejuta Lima Ratus Ribu Rupiah',
    uangAngka: '1.500.000',
    untukPembayaran: 'Pembayaran Angsuran 1 Bimbel Kelas 6 SD (Program Intensif UN)',
    isLunas: false,
    paymentType: 'ANGSURAN',
    angsuranTipe: '1',
    jumlahDibayarkan: '1.500.000',
    sisaPembayaran: '4.500.000',
    lokasiTanggal: 'Jakarta, 15 November 2023',
    penerima: 'LUNA',
    penyetor: 'Rahma Nuraini'
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-container">
      {/* Form Section */}
      <div className="form-section">
        <h1><FileEdit className="icon" /> Data Kwitansi</h1>

        <div className="form-group">
          <label>No Kwitansi</label>
          <input type="text" name="noKwitansi" value={formData.noKwitansi} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label>Telah Terima Dari</label>
          <input type="text" name="terimaDari" value={formData.terimaDari} onChange={handleInputChange} />
        </div>

        <div className="grid-2">
          <div className="form-group">
            <label>Uang Sejumlah (Terbilang)</label>
            <input type="text" name="uangSejumlah" value={formData.uangSejumlah} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Nominal (Rp)</label>
            <input type="text" name="uangAngka" value={formData.uangAngka} onChange={handleInputChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Untuk Pembayaran</label>
          <input type="text" name="untukPembayaran" value={formData.untukPembayaran} onChange={handleInputChange} />
        </div>

        <div className="grid-2">
          <div className="form-group">
            <label>Status Pembayaran</label>
            <div className="radio-group" style={{ marginTop: '10px' }}>
              <label className="radio-label">
                <input
                  type="checkbox"
                  name="isLunas"
                  checked={formData.isLunas}
                  onChange={handleInputChange}
                />
                LUNAS (PAID)
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Tipe Pembayaran</label>
            <select name="paymentType" value={formData.paymentType} onChange={handleInputChange}>
              <option value="ANGSURAN">ANGSURAN</option>
              <option value="FULL">FULL PAYMENT</option>
            </select>
          </div>
        </div>

        {formData.paymentType === 'ANGSURAN' && (
          <div className="form-group">
            <label>Angsuran Ke-</label>
            <select name="angsuranTipe" value={formData.angsuranTipe} onChange={handleInputChange}>
              <option value="DP">DP (Uang Muka)</option>
              <option value="1">1 (Angsuran ke-1)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        )}

        <div className="grid-2">
          <div className="form-group">
            <label>Jumlah Dibayarkan (Rp)</label>
            <input type="text" name="jumlahDibayarkan" value={formData.jumlahDibayarkan} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Sisa Pembayaran (Rp)</label>
            <input type="text" name="sisaPembayaran" value={formData.sisaPembayaran} onChange={handleInputChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Lokasi & Tanggal</label>
          <input type="text" name="lokasiTanggal" value={formData.lokasiTanggal} onChange={handleInputChange} />
        </div>

        <div className="grid-2">
          <div className="form-group">
            <label>Nama Penerima</label>
            <input type="text" name="penerima" value={formData.penerima} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Nama Penyetor</label>
            <input type="text" name="penyetor" value={formData.penyetor} onChange={handleInputChange} />
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="preview-section">
        <button className="btn btn-print" onClick={handlePrint}>
          <Printer size={20} /> Print PDF
        </button>

        <div className="receipt-wrapper">
          <div className="receipt-container">
            <div className="receipt-header">
              {/* Note: Pastikan file logo.png ada di folder public/ */}
              <img src="/logo.png" alt="Smart Home Center Logo" className="receipt-logo" />
              <div className="receipt-header-text">
                <h2>SMART HOME CENTER</h2>
                <p style={{ fontWeight: 'bold' }}>BIMBINGAN BELAJAR TERPERCAYA</p>
                <p>Mojokerto, Jawa Timur</p>
                <p>Telp: 0813-5804-293 | Email: bimbelshc@gmail.com</p>
              </div>
            </div>

            <div className="receipt-title-bar">
              <h3>KWITANSI PEMBAYARAN</h3>
              <div className="receipt-no">No: {formData.noKwitansi}</div>
            </div>

            <div className="receipt-body">
              <div className="receipt-row">
                <div className="receipt-label">Telah Terima Dari:</div>
                <div className="receipt-value">{formData.terimaDari}</div>
              </div>
              <div className="receipt-row">
                <div className="receipt-label">Uang Sejumlah:<br />(Terbilang)</div>
                <div className="receipt-value terbilang">
                  <span>{formData.uangSejumlah}</span>
                  <span>(Rp {formData.uangAngka},-)</span>
                </div>
              </div>
              <div className="receipt-row">
                <div className="receipt-label">Untuk Pembayaran:</div>
                <div className="receipt-value">{formData.untukPembayaran}</div>
              </div>
            </div>

            <div className="payment-details">
              <div className="payment-type">
                <div className="checkbox-item" style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
                  <span className="checkbox-box">{formData.isLunas ? '✔' : ''}</span>
                  <strong>LUNAS (PAID)</strong>
                </div>

                <div className="checkbox-item">
                  <span className="checkbox-box">{formData.paymentType === 'ANGSURAN' ? 'x' : ''}</span>
                  <strong>ANGSURAN</strong>
                </div>

                <div className="angsuran-list">
                  <div className="checkbox-item">
                    <span>({formData.angsuranTipe === 'DP' ? 'x' : ' '}) DP (Uang Muka)</span>
                  </div>
                  <div className="checkbox-item">
                    <span>({formData.angsuranTipe === '1' ? 'x' : ' '}) 1 (Angsuran ke-1)</span>
                  </div>
                  <div className="checkbox-item">
                    <span>({formData.angsuranTipe === '2' ? 'x' : ' '}) 2</span>
                  </div>
                  <div className="checkbox-item">
                    <span>({formData.angsuranTipe === '3' ? 'x' : ' '}) 3</span>
                  </div>
                  <div className="checkbox-item">
                    <span>({formData.angsuranTipe === '4' ? 'x' : ' '}) 4</span>
                  </div>
                </div>
              </div>

              <div className="summary-box">
                <table className="summary-table">
                  <tbody>
                    <tr>
                      <td>Jumlah Dibayarkan:</td>
                      <td>Rp {formData.jumlahDibayarkan},-</td>
                    </tr>
                    <tr>
                      <td>Sisa Pembayaran:</td>
                      <td>Rp {formData.sisaPembayaran},-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="receipt-footer">
              <div className="signature-block">
                <div>{formData.lokasiTanggal}</div>
                <div>Yang Menerima,</div>
                <div className="stamp-effect">
                  <img src="/logo.png" alt="Stamp Logo" className="stamp-img" />
                </div>
                <img src="/ttd-admin.png" alt="Tanda Tangan Admin" className="ttd-img" />
                <div className="signature-line">
                  {formData.penerima}<br />
                  <span className="signature-role">Pemilik Bimbel SHC</span>
                </div>
              </div>

              <div className="signature-block">
                {/* Tambahkan div transparan/kosong agar sejajar secara struktural dengan lokasiTanggal di kiri */}
                <div style={{ visibility: 'hidden' }}>Lokasi</div>
                <div>Penyetor,</div>
                <div className="signature-line">
                  {formData.penyetor}<br />
                  <span className="signature-role">Orang Tua / Wali Siswa</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
