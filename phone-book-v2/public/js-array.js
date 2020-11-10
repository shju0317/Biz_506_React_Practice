const mapArr = myarray.map((arr) => {
  // arr++ // map함수내부에서 myarray의 요소를 변경하는 코드는 가급적 지양하자
  return arr + 1;
});

const filterArr = myarray.filter((arr) => {
  if (arr % 2 == 0) return arr;
});

console.log(filterArr);

/*
slice(시작,종료): 시작위치부터 종료-1 위치까지 요소를 자르기
*/
const sliceArr = myarray.slice(0, 4);
console.log(sliceArr);

const updateArr = [...myarray.slice(0, 3), 100, ...myarray.slice(3 + 1)];

/*
배열의 구조분해
원본배열에서 다른 배열로 복사하기
*/
const [a, b, c] = [1, 2, 3];
console.log(a, b, c);

const mArr = [1, 2, 3, 4, 5, 6];
const mArr1 = mArr[(1, 2)];
