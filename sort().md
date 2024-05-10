## 📍 sort()
: 배열 요소를 원하는 정렬 순서로 변경(sort)하는 함수

    // 문자열 배열(영어)
    const enStrings = ['d', 'b', 'c', 'a'];
    enStrings.sort();
    console.log(enStrings);  // ['a', 'b', 'c', 'd']


    // 문자열 배열(한글)
    const koStrings = ['나', '라', '가', '다'];
    koStrings.sort();
    console.log(koStrings);  // ['가', '나', '다', '라']


    // 숫자 배열
    const numbers = [1, 4, 10, 31, 1000];
    numbers.sort();
    console.log(numbers);  // [1, 10, 1000, 31, 4] => 문자열처럼 취급하여 오름차순으로 정렬

<br>

**1. 숫자 배열 오름차순 정렬**

    const numbers = [10, 5, 20, 1];
    numbers.sort((a, b) => a - b);
    console.log(numbers);  // [1, 5, 10, 20]

<br>
        
**2. 숫자 배열 내림차순 정렬**

    const numbers = [10, 5, 20, 1];
    numbers.sort((a, b) => b - a);
    console.log(numbers);  // [20, 10, 5, 1]

<br>

**3. 객체 배열의 특정 속성을 기준으로 정렬**

    const students = [
        {name: '김나나', age: 25},
        {name: '최미미', age: 21},
        {name: '이라라', age: 29}
    ];
    students.sort((a, b) => a.age - b.age);  // 학생 나이순으로 정렬
    console.log(students);  // [{name: '최미미', age: 21}, {name: '김나나', age: 25}, {name: '이라라', age: 29}]

<br>

**4. 비어있는 요소의 배열**

    console.log([, undefined, '가', '나'].sort());  // ['가', '나', undefined, 비어있음]

<br>

**5. 랜덤 배열**

    const array = ['딸기', '참외', '사과', '배', '바나나'];

    /* 원본 배열까지 변경 */
    const shuffledArray = array.sort(() => Math.rondom() - 0.5);
    console.log(array);  // 무작위 순서로 랜덤 배열 출력 => shuffledArray와 동일
    console.log(shuffledArray);  // 무작위 순서로 랜덤 배열 출력

    /* 원본 배열 유지 */
    const shuffledArray = [...array].sort(() => Math.rondom() - 0.5);
    console.log(array);  // ['딸기', '참외', '사과', '배', '바나나'] => array 원본 배열 유지
    console.log(shuffledArray);  // 무작위 순서로 랜덤 배열 출력
