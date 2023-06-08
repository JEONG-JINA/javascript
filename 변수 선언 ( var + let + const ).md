## 1) var
* 중복 선언 가능
* 재할당 가능
* ➡️ 마지막 값이 최종 변수
    
        var name = 'jay';
        console.log(name); //jay
    
        var name = 'jane';
        console.log(name); //jane
        
        name = 'jun';
        console.log(name); //jun
        
* Scope
 - 함수 외부에서 선언 ➡️ 전역 변수
 - 함수 내부에서 선언 ➡️ 함수 내에서만 사용 가능
    
        var firstName = 'jay';
        
        function newFunction() {
            var secondName = 'jane';
        }
        
        console.log(secondName); // error
        
<br>

---

<br>

## 2) let
* 중복 선언 불가능
* 재할당 가능

        let name = 'jay';
        console.log(name); //jay
        
        let name = 'jane'
        console.log(name); // error
        
        name = 'jun';
        console.log(name); //jun

<br>

---

<br>

## 3) const
* 중복 선언 불가능
* 재할당 불가능

        const name = 'jay';
        console.log(name); //jay
        
        const name = 'jane'
        console.log(name); // error
        
        name = 'jun';
        console.log(name); // error
