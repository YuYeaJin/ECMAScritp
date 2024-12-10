// 자바 스크립트 캑체

// 객체 생성 방법 1

const person = new Objest();
// 동적으루 속성 추가
person.name = "홍길동";
person.age = 28;
// 동적으로 메서드 추가
person.showInfo = function(){
    // this: 현재 인스턴스 자체
    let message = `Name: ${this.name}, Age: ${this.age}`
    console.log(message);
}
console.log(person);
person.showInfo();

// 객체 생성 방법 2: JSON
console.log("========== JSON");
const person2 = {
    // 키 : 값
    name: "홍길동",
    age : 28,
    showInfo: function(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
console.log(person2);

console.log(person2.name) // 속성접근
person2.showInfo()        // 메서드 접근

// JSON은 JS 객체 표기에도 중요하지만, 데이터 포맷으로 사용괴디 때문에 중요