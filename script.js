const shareBtn = document.getElementById("shareBtn");
shareBtn.addEventListener("click", async () => {
  if (navigator.share) {
    await navigator.share({
      title: "KyoLinks",
      text: "Check out my personal link hub!",
      url: window.location.href,
    });
  } else {
    alert("Sharing not supported on this device.");
  }
});

const emailLink = document.getElementById("emailLink");
const user = "sohamkyo";
const domain = "gmail.com";
emailLink.href = `mailto:${user}@${domain}`;

const qrBtn = document.getElementById("qrBtn");
const qrModal = document.getElementById("qrModal");
const closeQR = document.getElementById("closeQR");
const qrCanvas = document.getElementById("qrCanvas");

let qrCode = null;

qrBtn.addEventListener("click", () => {
  qrModal.style.display = "flex";
  setTimeout(() => qrModal.classList.add("show"), 10);

  if (qrCode) qrCanvas.innerHTML = "";
  qrCode = new QRCode(qrCanvas, {
    text: window.location.href,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
});

closeQR.addEventListener("click", () => {
  qrModal.classList.remove("show");
  setTimeout(() => {
    qrModal.style.display = "none";
  }, 300);
});
