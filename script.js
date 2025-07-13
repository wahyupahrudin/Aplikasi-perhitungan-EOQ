function hitungEOQ() {
  const D = parseFloat(document.getElementById('demand').value);
  const S = parseFloat(document.getElementById('orderingCost').value);
  const H = parseFloat(document.getElementById('holdingCost').value);
  const result = document.getElementById('result');

  if (isNaN(D) || isNaN(S) || isNaN(H) || D <= 0 || S <= 0 || H <= 0) {
    result.innerHTML = "<p style='color:red;'>Mohon masukkan semua nilai dengan benar dan positif.</p>";
    return;
  }

  const EOQ = Math.sqrt((2 * D * S) / H);
  const totalOrder = D / EOQ;
  const totalCost = (D / EOQ) * S + (EOQ / 2) * H;

  result.innerHTML = `
    <h3>Hasil Perhitungan:</h3>
    <p><strong>EOQ:</strong> ${EOQ.toFixed(2)} unit</p>
    <p><strong>Jumlah Pemesanan per Tahun:</strong> ${totalOrder.toFixed(2)} kali</p>
    <p><strong>Total Biaya Persediaan:</strong> Rp ${totalCost.toLocaleString('id-ID')}</p>
  `;
}
