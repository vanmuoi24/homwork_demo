//   =====BÀI 1====
// var number1 = prompt("Nhap Gia Tri Thu Nhat ");
// var number2 = prompt("Nhap Gia Tri Thu 2");
// function tinhtong(a, b) {
//   var s = a + b;
//   return s;
// }
// var a = tinhtong(parseInt(number1), parseInt(number2));
// console.log(a);

//=====BÀI 2 =======
// var number = prompt("Nhap Gia Tri Can Kiem  Tra ");
// function checksnt(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (var i = 2; i <= Math.sqrt(n); i++) {
//     if (n % 2 == 0) return false;
//   }
//   return true;
// }
// var a = checksnt(parseInt(number));
// console.log(a);

//====BÀI 3====

// function checkmax(a = [1, 2, 3, 4, 5]) {
//   var max = a[0];
//   for (var i = 0; i < a.length; i++) {
//     if (a[i] > max) {
//       max = a[i];
//     }
//   }
//   return max;
// }
// var b = checkmax();
// console.log(b);
/// ==== Bài 4 ====

// function daonguocchuoi(a) {
//   for (var i = a.length - 1; i >= 0; i--) {
//     console.log(a[i]);
//   }
// }
// daonguocchuoi("muoi");

// =======Bài 5==============
function giaithua(a) {
  var tich = 1;
  for (var i = 1; i <= a; i++) {
    tich *= i;
  }
  return tich;
}
var a = parseInt(prompt("Nhap Gia Tri Can Tinh Gia Thua  "));
var b = giaithua(a);
console.log(b);
