## 📍 Math.abs
: 인수의 **절댓값**을 반환

    Math.abs(-1);  // 1
    Math.abs('-1');  // 1
    Math.abs('');  // 0
    Math.abs([]);  // 0
    Math.abs(null);  // 0
    Math.abs(undefined);  // NaN

<br>

## 📍 Math.round
: 인수의 **소수점 이하를 반올림**한 정수를 반환

    Math.round(1.4);  // 1
    Math.round(1.6);  // 2
    Math.round(-1.4);  // -1
    Math.round(-1.6);  // -2
    Math.round(1);  // 1
    Math.round();  // NaN

<br>

## 📍 Math.ceil
: 인수의 **소수점 이하를 올림**한 정수를 반환

    Math.ceil(1.4);  // 2
    Math.ceil(1.6);  // 2
    Math.ceil(-1.4);  // -1
    Math.ceil(-1.6);  // -1
    Math.ceil(1);  // 1
    Math.ceil();  // NaN

<br>

## 📍 Math.floor
: 인수의 **소수점 이하를 내림**한 정수를 반환<br>
(양수인 경우, 소수점 이하를 떼어 버린 다음 정수 반환 / 음수인 경우, 소수점 이하를 떼어 버린 다음 -1을 한 정수 반환)

    Math.floor(1.9);  // 1
    Math.floor(9.1);  // 9
    Math.floor(-1.9);  // -2
    Math.floor(-9.1);  // -10
    Math.floor(1);  // 1
    Math.floor();  // NaN

<br>

## 📍 Math.sqrt
: 인수의 **제곱근**을 반환

    Math.sqrt(9);  // 3
    Math.sqrt(-9);  // NaN
    Math.sqrt(2);  // 1.414213562373095
    Math.sqrt(1);  // 1
    Math.sqrt(0);  // 0
    Math.sqrt();  // NaN

<br>

## 📍 Math.random
: **임의의 부동 소수점**을 반환<br>
(반환된 부동 소수점은 0부터 1 미만)

    Math.random();  // 0 ~ 1 미만의 부동 소수점 (0.8208720231391746)

    /**
        1 ~ 10의 랜덤 정수 취득
        1) Math.random로 0 ~ 1 미만의 부동 소수점을 구한 다음, 10을 곱해 0 ~ 10 미만의 부동 소수점을 구한다.
        2) 0 ~ 10 미만의 부동 소수점에 1을 더해 1 ~ 10까지의 부동 소수점을 구한다.
        3) Math.floor으로 1 ~ 10까지의 부동 소수점의 소수점 이하를 떼어 버린 다음 정수를 반환한다
    **/

    const random = Math.floor((Math.random() * 10) + 1);
    console.log(random);  // 1 ~ 10까지의 정수

<br>

## 📍 Math.pow
: 첫번째 인수를 밑, 두번째 인수를 지수로 하여 **거듭제곱**을 반환

    Math.pow(2, 8);  // 256
    Math.pow(2, -1);  // 0.5

    2 ** 8;  // 256 (**는 거듭제곱 연산자 = 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2)

<br>

## 📍 Math.max
: 인수 중에서 **가장 큰 수**를 반환

    Math.max(1, 2, 3);  // 3

    // 배열 요소 중에서 최대값 취득 (max() 인수로 배열을 받을 수 없으니, 배열을 인수로 받는 apply 사용)
    const arr = [1, 2, 3];
    const max = Math.max.apply(null, arr);  // 3

    // ES6 문법
    Math.max(...arr);  // 3
    [...rest] = [1, 2, 4];  // rest = [1, 2, 4]
    Math.max(...rest);  // 4

<br>

## 📍 Math.min
: 인수 중에서 **가장 작은 수**를 반환

    Math.min(1, 2, 3);  // 1

    // 배열 요소 중에서 최소값 취득
    const arr = [1, 2, 3];
    const min = Math.min.apply(null, arr);  // 1

    // ES6 문법
    Math.min(...arr);  // 1
