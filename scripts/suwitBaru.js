//* Pilihan Komputer
function getPilihanCom() {
    const com = Math.random();
    if (com < 0.34) return "gajah";
    if (com >= 0.34 && com < 0.67) return "orang";
    return "semut";
}

//* Aturan Main
function getHasil(com, play) {
    if (play == com) return "SERI!";
    if (play == "gajah") return com == "orang" ? "MENANG!" : "KALAH!";
    if (play == "orang") return com == "gajah" ? "KALAH!" : "MENANG!";
    if (play == "semut") return com == "orang" ? "KALAH" : "MENANG";
}

//* Interaktif
function putarGambar() {
    const imgComputer = document.querySelector(".img-computer");
    const gambar = ["gajah", "orang", "semut"];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
        if (i == gambar.length) i = 0;
    }, 100);
}

//* Mendapatkan hasil
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
    pil.addEventListener("click", function () {
        const pilihanCom = getPilihanCom();
        const pilihanPlay = pil.className;
        const hasil = getHasil(pilihanCom, pilihanPlay);

        putarGambar();

        setTimeout(function () {
            const imgCom = document.querySelector(".img-computer");
            imgCom.setAttribute("src", "img/" + pilihanCom + ".png");

            const info = document.querySelector(".info");
            info.innerHTML = hasil;
        }, 1000);
    });
});

//! Deprecated
// const playGajah = document.querySelector(".gajah");
// playGajah.addEventListener("click", function () {
//     const pilihanCom = getPilihanCom();
//     const pilihanPlay = playGajah.className;
//     const hasil = getHasil(pilihanCom, pilihanPlay);

//     const imgCom = document.querySelector(".img-computer");
//     imgCom.setAttribute("src", "img/" + pilihanCom + ".png");

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });

// const playOrang = document.querySelector(".orang");
// playOrang.addEventListener("click", function () {
//     const pilihanCom = getPilihanCom();
//     const pilihanPlay = playOrang.className;
//     const hasil = getHasil(pilihanCom, pilihanPlay);

//     const imgCom = document.querySelector(".img-computer");
//     imgCom.setAttribute("src", "img/" + pilihanCom + ".png");

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });

// const playSemut = document.querySelector(".semut");
// playSemut.addEventListener("click", function () {
//     const pilihanCom = getPilihanCom();
//     const pilihanPlay = playSemut.className;
//     const hasil = getHasil(pilihanCom, pilihanPlay);

//     const imgCom = document.querySelector(".img-computer");
//     imgCom.setAttribute("src", "img/" + pilihanCom + ".png");

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });

//* Mouse Warna
document.body.addEventListener("mousemove", function (event) {
    const xPosisi = Math.round((event.clientX / window.innerWidth) * 255);
    const yPosisi = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor =
        "rgb(" + xPosisi + "," + yPosisi + ", 100)";
});
