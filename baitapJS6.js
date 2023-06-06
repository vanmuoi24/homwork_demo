//===== Bài 1 ====
// var a = [1, 2, 3, 4, 5, 6];
// var b = a.map(function (item) {
//   return item * 2;
// });
// console.log(b);

//==== Bai 2 =====
// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 1, 3, 12];
// var b = a.find(function (item) {
//   return item > 10;
// });
// console.log(b);

//=== Bai 3
// var a = ["muoi", "van", "vyvanmuoi"];
// var b = a.filter(function (item) {
//   return item.length > 5;
// });
// console.log(b);
//== Bai 4
// var a = ["muoi", "van", "vyvanmuoi"];
// var b = a.map(function (item) {
//   return item.length;
// });
// console.log(b);
//== Bai 5
// var a = [1, 2, 3, 4, 5, 6, 7];
// var b = a.filter(function (item) {
//   return item % 2 == 0;
// });
// console.log(b);

//== Bai 6
// var a = [1, 2, 3, 4, 5];
// var sum = 0;
// sum = a.reduce(function (a, b) {
//   return a + b;
// });
// console.log(sum);
//== Bai 7
// var a = [1, 2, 3, 4, 3];
// var max = a.reduce(function (a, b) {
//   return a > b ? a : b;
// });
// console.log(max);

//== bai 8
// var a = [-1, -3, -3, -7, 5];
// var b = a.some(function (item) {
//   return item % 2 == 0;
// });
// console.log(b);

//== Bai 9
// var a = [-1, -3, -3, -7, 5];
// var c = [12, 14, 15];
// var b = c.every(function (item) {
//   return item > 10;
// });
// console.log(b);
//== Bai 10
// var a = [1, 2, 3, 4, 5, 6];
// var b = a.splice(2, 3);
// console.log(b);
//== Bai 12

// function sumchan(a) {
//   var sum = 0;
//   for (var i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//       sum += a[i];
//     }
//   }
//   return sum;
// }
// var a = [3, 5, 6, 8];
// var c = sumchan(a);
// console.log(c);

// var a = [1, 2, 3, 4];
// var b;
// b = a.reduce(function (total, giatri) {
//   if (giatri % 2 === 0) {
//     return total + giatri;
//   }
//   return total;
// }, 0); // 0 là tham số cuối cùng điều này đẩm bảo cho rằng tổng sẽ bắt đầu từ 0 và tính toán
// các phần tử chẵn
// console.log(b);

//== Bài 13
// var array = [3, 6, 3, 8, 5, 8, 5];
// array.sort((a, b) => b - a);
// console.log(array);

//=== bai 14

// var a = [1, 2, 3, 4];
// var b = a.fill(1);
// console.log(b);

//=== Bai 15
// var a = [1, 2, 3, 4, 5];
// var c = parseInt(prompt("Nhap Gia tri Can Kiem Tra"));
// var b = a.some(function (item) {
//   return item == c;
// });

// if (b) {
//   alert("So Nay Ton tai Trong Mang");
// } else {
//   alert("So nay khong ton tai trong mang");
// }
// console.log(b);
