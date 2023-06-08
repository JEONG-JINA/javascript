## 📍 var
* 중복 선언 가능
* 재할당 가능
* ➡️ 마지막 값이 최종 변수
    
        var name = 'jay';
        console.log(name); //jay
    
        var name = 'jane';
        console.log(name); //jane
        
        name = 'jun';
        console.log(name); //jun
        
**Scope**
* 오직 **함수**의 코드 블록만을 지역 스코프로 인정 ➡️ **함수 레벨 스코프**
* 함수 외부에서 선언 ➡️ 전역 변수
* 함수 내부에서 선언 ➡️ 함수 내에서만 사용 가능
       
        function newFunction() {
            if(true) {
                var name = 'jay';
                console.log(name); //jay
            }
            
            console.log(name); //jay
        }
        
        console.log(name); // error
        
**호이스팅**
###### : 함수 내부에 있는 선언들을 모두 끌어올려 해당 함수 유효 범위의 최상단에 선언하는 것을 뜻함.
* 호이스팅 발생
       
        console.log(name); // undefined
        
        var name = 'jay';
        console.log(name); //jay
        
        /**
            변수가 선언되기 전에 참조되었음에도 에러가 발생하지 않음
            코드 실행 전에 자바스크립트 내부에서 미리 변수를 선언하고 undefined로 초기화를 해두었기 때문
        **/
        
<br>

---

<br>

## 📍 let
* 중복 선언 불가능
* 재할당 가능

        let name = 'jay';
        console.log(name); //jay
        
        let name = 'jane' // error
        
        name = 'jun';
        console.log(name); //jun
        
        ----------------------------------------
        
        let name = 'jay';
        
        if(true) {
            let name = 'jane';
            console.log(name); //jane
        }
        
        console.log(name); //jay
        
        /**
            동일한 변수가 다른 범위 내에서 정의된다면 에러 발생 X
            서로 다른 범위를 가지므로 서로 다른 변수로 취급
        **/

**Scope**
* **모든 코드 블록**(if, for, while, try/catch문 등)을 지역 스코프로 인정 ➡️ **블록 레벨 스코프**
    
        function newFunction() {
            if(true) {
                let name = 'jay';
                console.log(name); //jay
            }
            
            console.log(name); // error
        }
        
        console.log(name); // error

**호이스팅**
* 호이스팅이 발생하지만, 초기화되지 않음
       
        console.log(name); // error
        
        var name = 'jay';
        console.log(name); //jay

<br>

---

<br>

## 📍 const
* 일정한 상수 값 유지
* 중복 선언 불가능
* 재할당 불가능

        const name = 'jay';
        console.log(name); //jay
        
        const name = 'jane' // error
        
        name = 'jun'; // error

**Scope**
* **모든 코드 블록**(if, for, while, try/catch 등)을 지역 스코프로 인정 ➡️ **블록 레벨 스코프**
* let과 동일

**호이스팅**
* 호이스팅이 발생하지만, 초기화되지 않음
* let과 동일
