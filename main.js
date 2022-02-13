/**
 * 38. Object
 */
// var emailKey = 'email';

// var myInfo = {
//   name: 'Nhan Nguyen',
//   age: 18,
//   address: 'Ha Noi, VN',
//   [emailKey]: 'nhannt0211@gmail.com',
//   getName: function() {
//     return this.name;
//   }
// };

// console.log(myInfo.getName());

/**
 * 39. Object Constructor
 */
// function User(firstName, lastName, avatar) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.avatar = avatar;

//   this.getName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// var author = new User('Nhan', 'Nguyen', 'Avatar');
// var user = new User('Vu', 'Nguyen', 'Avatar');

// author.title = 'Chia se dao tai F8';
// user.comment = 'Lieu co khoa hoc asp.net khong ad';

// console.log(author.getName());
// console.log(user.getName());

/**
 * 40. Object Prototype - Basic
 */
// function User(firstName, lastName, avatar) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.avatar = avatar;

//   this.getName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// User.prototype.className = 'F8';
// User.prototype.getClassName = function() {
//   return this.className
// }

// var user = new User('Nhan', 'Nguyen', 'Avatar 1')
// var user2 = new User('Vu', 'Nguyen', 'Avatar 2')

// console.log(user.getClassName());
// console.log(user2);

/**
 * 41. Đối tượng Date
 */
// var date = new Date();

// var year = date.getFullYear()
// var month = date.getMonth() + 1
// var day = date.getDate()

// console.log(`${day}/${month}/${year}`);

/**
 * 43. Lệnh rẽ nhánh if else
 */
// var date = 9;
// if (date === 2) {
//   console.log("Hôm nay là thứ 2");
// } else if (date === 3) {
//   console.log("Hôm nay là thứ 3");
// } else if (date === 4) {
//   console.log("Hôm nay là thứ 4");
// } else {
//   console.log("Không biết");
// }

/**
 * 44. Lệnh rẽ nhánh Switch
 */
// var date = 15;
// switch (date) {
//   case 2:
//     console.log("Hom nay la thu 2");
//     break;
//     case 3:
//       console.log("Hom nay la thu 3");
//       break;
//     case 4:
//       console.log("Hom nay la thu 4");
//       break;
//     case 5:
//       console.log("Hom nay la thu 5");
//       break;
//     default:
//       console.log("khong biet")
// }

/**
 * 45. Toán tử ba ngôi
 */
// var course = {
//   name: 'Javascript',
//   coin: 0
// }

// var result = course.coin > 0 ? `${course.coin} coins` : `Miễn phí`;
// console.log(result)

/**
 * 47, 48, 49. Vong lap For
 */
// for (let i = 1; i < 1000; i++) {
//   console.log(i)
// }
var myArray = [
  'Javascript',
  'Java',
  'PHP'
]
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
