function generatePrompt() {
  const topic = document.getElementById("topic").value;

  if (topic === "") {
    document.getElementById("result").innerText = "Masukkan topik dulu!";
    return;
  }

  const prompt = "Buat skrip YouTube Shorts tentang " + topic +
    " dengan hook kuat di 3 detik pertama, durasi 30 detik, dan CTA di akhir.";

  document.getElementById("result").innerText = prompt;
}
