//variaveis

//boolean => true || false
//number => 1350.40
//string => "casa"

const userName: string = "vinicius";
let code: number = 1239;

const ages: number[] = [-12, 34, 45, 54, 67];
const formatedAges = ages.join(" : ");

const biggerthem0 = ages.every((item) => {
  return item > 0;
});

console.log(ages.length);

const arrayMap = ages.map((item) => {
  return item * 4;
});

console.log(arrayMap);

function getUserName(userId: number) {
  return userId;
}
getUserName(23);

() => {};

const result = () => {
  return 24;
};
result();

const images: string[] = [];

images.push("assets/image1.png");
images.push("assets/image2.png");
images.push("assets/image3.png");

console.log(images);

const randomArrayNumber: number[] = [1, 23, 4, 5, 78, 53, 79, 8];

const order = randomArrayNumber.sort((a, b) => {
  return a < b ? 1 : -1;
});
console.log(order);

const user = {
  name: "vini",
  age: 23,
  working: false,
  pets: ["dog", "cat"],
  info: {},
};

console.log(user.age);
