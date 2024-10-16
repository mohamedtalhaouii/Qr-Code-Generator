const qrCodeDiv = document.getElementById('qrcode');
const qrTextInput = document.getElementById('qr-text');

function generateQRCode(text) {
  qrCodeDiv.innerHTML = "";

  new QRCode(qrCodeDiv, {
    text: text,
    width: 128,
    height: 128,
  });

  
  qrCodeDiv.style.display = 'block';
  qrCodeDiv.style.opacity = 0;
  setTimeout(() => {
    qrCodeDiv.style.opacity = 1;
  }, 10); 
}

qrTextInput.addEventListener('input', (event) => {
  const text = event.target.value;
  if (text) {
    generateQRCode(text);
  } else {
    qrCodeDiv.style.display = 'none';
  }
});
