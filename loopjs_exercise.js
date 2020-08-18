//soal nomor 1
let user = 1;

for (user; user <= 100; user++) {
  console.log("User ke -", user);
}

//soal nomor 2
let nilai = 0;

for (nilai; nilai <= 20; nilai += 2) {
  console.log(nilai);
}

//soal nomor 3
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 1) {
    console.log(i + " adalah angka ganjil");
  } else {
    console.log(i + " adalah angka genap");
  }
}

//soal nomor 4
let ask = confirm("Apakah anda mau mengulang?");
let count = 0;

while (true) {
  ask = confirm("Apakah anda mau mengulang?");
  count++;
  if (ask == false) {
    alert("anda telah mengulang sebanyak " + count + " kali");
  }
}

//soal nomor 5
let kuis;
do {
  kuis = prompt("Sebutkan kepanjangan dari nama IB!");
} while (kuis != "impact byte");
alert("Selamat jawaban kamu benar!");
