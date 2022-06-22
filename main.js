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
// var myArray = [
//   'Javascript',
//   'Java',
//   'PHP'
// ]
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

/**
 * 50. For in
 */
// var myInfo = {
//   name: 'Nhan Nguyen',
//   age: 18,
//   address: 'Ha noi, VN'
// }

// for (var key in myInfo) {
//   console.log(myInfo[key])
// }

// var language = ['Java', 'PHP', 'Ruby']
// for (var key in language) {
//   console.log(language[key])
// }

// var myString = 'Javascript';
// for (var key in myString) {
//   console.log(myString[key])
// }

/**
 * 51. For of
 */
// var myInfo = {
//   name: 'Nhan Nguyen',
//   age: 19
// };
// for (var value of Object.values(myInfo)) {
//   console.log(value)
// }

/**
 * 52. Vong lap while
 */
// var i = 0;
// while (i < 10) {
//   console.log(i)
//   i++;
// }

/**
 * 53. Vong lap do while
 */
// var i = 0;
// var isSuccess = false;

// do {
//   i++;
//   console.log('Nap the lan ' + i)

//   if (false) {
//     isSuccess = true;
//   }
// } while (!isSuccess & i <= 3)

/**
 * 54. Break va continue
 */
// for (var i = 0; i < 10; i++) {
  
//   if (i % 2 !== 0)
//     continue
//   console.log(i);
// }

/**
 * 55. Vong lap long nhau
 */
// var myArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]

// for (var i = 0; i < myArray.length; i++) {
//   for (var j = 0; j < myArray[i].length; j++)
//   console.log(myArray[i][j])
// }

/**
 * 57. Gioi thieu ve de quy
 */

// function countDown(num) {
//   if (num <= 0) {
//     return num;
//   }
//   console.log(num);
//   return countDown(num - 1)
// }

// countDown(10)
// var gt = 1;

// function loop(number) {
//   if (number > 0) {
//     return number *= loop(number - 1)
//   }
//   return 1;
// }

// // var array = ['a', 'b', 'c', 'a', 'a', 'b'];
// var array = ['Javascript', 'PHP', 'Ruby']

// console.log(loop(3))

/**
 * 58. Lam viec voi mang (phan 2) (forEach, every, some, find, filter)
 */
// var courses = [
//   {
//     id: 1,
//     name: 'Javascript',
//     coin: 250
//   },
//   {
//     id: 2,
//     name: 'Java',
//     coin: 250
//   },
//   {
//     id: 3,
//     name: 'PHP',
//     coin: 0
//   },
//   {
//     id: 4,
//     name: 'React',
//     coin: 0
//   }
// ]

// var isFree = courses.filter(function(course, index) {
//   console.log(index)
//   return course.coin === 0;
// })

// console.log(isFree)

/**
 * 59. Array map() method
 */
var courses = [
  {
    id: 1,
    name: 'Javascript',
    coin: 250
  },
  {
    id: 2,
    name: 'Java',
    coin: 250
  },
  {
    id: 3,
    name: 'PHP',
    coin: 0
  },
  {
    id: 4,
    name: 'React',
    coin: 0
  }
];

function courseHandler(course) {
  return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`
  }
}

var newCourses = courses.map(courseHandler)
console.log(newCourses);

console.log('learning')