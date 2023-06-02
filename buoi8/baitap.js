///=== Bai 1 \
// Viết một chương trình nhận vào môt  mảng các số và trả về một mảng
// mới chưa binhf phương của các số đó

// function powArayy(a) {
//   var b = [];
//   for (var i = 0; i < a.length; i++) {
//     b.push(a[i] * a[i]);
//   }
//   return b;
// }
// var a = [1, 2, 3, 4];
// var c = powArayy(a);
// console.log(c);

///===========Bài 2=====
// Viết Một chương trình nhận vào mọot mảnh các số và trả về số đầu tiên trong mảng lớn hơn 10

// function bai2(a) {
//   for (var i = 0; i < a.length; i++) {
//     if (a[i] > 10) {
//       return a[i];
//     }
//   }
//   return 0;
// }
// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 5];
// var c = bai2(a);
// console.log(c);

///========== Bài 3=======\
// Viết chương  trình nhận vào một mảng các chuỗi trả về mangr mơ8is chỉ chứa các chuỗi có độ dài lớn hơn 5

// function chuoilonhon5(a) {
//   var c = a.filter(function (str) {
//     return str.length > 5;
//   });
//   return c;
// }
// var string = ["Vyvanmuoi", "Javascript", "Hoccode", "abc"];
// var b = chuoilonhon5(string);
// console.log(b);

//=== Bài 4 =======
// Viết chương trình nhận vào một mảng các chuoiis
// function mangcacchuoi(a) {
//   var c = a.map(function (str) {
//     return str.length;
//   });
//   return c;
// }
// var str = ["Vyvanmuoi", "Javascript", "Hoccode", "abc"];
// var c = mangcacchuoi(str);
// console.log(c);

//======= Bài 5///

//5 . Viết một chương trình nhận vào một mảng các số và trả về một mảng mới chỉ chứa các số chẵ
// function mangchan(a) {
//   b = [];
//   for (var i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//       b.push(a[i]);
//     }
//   }
//   return b;
// }
// var a = [1, 2, 3, 4, 5, 6];
// var c = mangchan(a);
// console.log(c);
