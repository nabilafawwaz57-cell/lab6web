const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

const tombol = document.getElementById("tombolAksi");

tombol.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});

const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

const formPendaftaran = document.getElementById("formPendaftaran");
const emailInput = document.getElementById("email");
const usiaInput = document.getElementById("usia");
const pesanValidasi = document.getElementById("pesanValidasi");

formPendaftaran.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value;
  const usia = Number(usiaInput.value);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    pesanValidasi.textContent = "Email tidak valid.";
  } else if (!Number.isInteger(usia) || usia < 17 || usia > 100) {
    pesanValidasi.textContent = "Usia harus antara 17 sampai 100 tahun.";
  } else {
    pesanValidasi.textContent = "Pendaftaran berhasil!";
  }
});

const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");

tambahTugas.addEventListener("click", function () {
  const teksTugas = inputTugas.value.trim();

  if (teksTugas !== "") {
    
const item = document.createElement("li");
const teks = document.createElement("span");
const tombolHapus = document.createElement("button");

teks.textContent = teksTugas + " ";
tombolHapus.textContent = "Hapus";
tombolHapus.type = "button";

teks.addEventListener("click", function () {
  item.classList.toggle("selesai");
});

tombolHapus.addEventListener("click", function () {
  item.remove();
});

item.append(teks, tombolHapus);
    daftarTugas.appendChild(item);
    inputTugas.value = "";
  }
});

const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");
const hitungNama = document.getElementById("hitungNama");
const pesanWorkshop = document.getElementById("pesanWorkshop");
const ringkasanWorkshop = document.getElementById("ringkasanWorkshop");

namaWorkshop.addEventListener("input", function () {
  hitungNama.textContent = namaWorkshop.value.length;
});

sesiWorkshop.addEventListener("change", function () {
  ringkasanWorkshop.textContent = sesiWorkshop.value
    ? "Sesi yang dipilih: " + sesiWorkshop.value
    : "";
});

formWorkshop.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = namaWorkshop.value.trim();
  const email = emailWorkshop.value.trim();
  const sesi = sesiWorkshop.value;
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (nama.length < 3) {
  pesanWorkshop.textContent = "Nama harus minimal 3 karakter.";
} 
else if (!polaEmail.test(email)) {
  pesanWorkshop.textContent = "Masukkan email yang valid.";
} 
else if (sesi === "") {
  pesanWorkshop.textContent = "Silakan pilih sesi workshop.";
} 
else {
  pesanWorkshop.textContent = "Pendaftaran workshop berhasil!";
  ringkasanWorkshop.textContent =
    "Nama: " + nama + " | Email: " + email + " | Sesi: " + sesi;
}
});

formWorkshop.addEventListener("reset", function () {
  hitungNama.textContent = "0";
  pesanWorkshop.textContent = "";
  ringkasanWorkshop.textContent = "";
});

const paragrafEksperimen = document.getElementById("paragrafEksperimen");
const tombolSembunyi = document.getElementById("tombolSembunyi");

tombolSembunyi.addEventListener("click", function () {
  paragrafEksperimen.classList.toggle("sembunyi");
});
