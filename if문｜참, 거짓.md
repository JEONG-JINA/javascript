## 📍false(거짓)가 나오는 값
* 0, -0, 0n
* "", '', `` (빈 문자열)
* undefined
* null
* NaN

<br>

## 📍빈 배열([])과 빈 객체({})

    if ([]) {
        //true, 실행
    }
    
    if ({}) {
        //true, 실행
    }


    /** 배열이 비어있는지 확인 **/
    if ([].length) {
        //[].length == 0, false, 실행되지 않음
    }

    /** 객체가 비어있는지 확인 **/
    if (Object.keys({}).length) {
        //Object.keys() = 인수로 객체를 받아 해당 객체의 프로퍼티 key값을 배열로 반환
        //Object.keys({}) =  빈 배열 --> [].length == 0, false, 실행되지 않음
    }
