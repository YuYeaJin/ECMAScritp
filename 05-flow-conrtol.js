// if ~ else if ~ else
// switch ~ case
// for, while, do while
// 모두 C계열 문법과 거의 동일

// 연습 문제 1-1) for 문 구구단
// 2단 ~ 9단까지 루프돌며 출력

console.log("======== for문 구구단");
for(let i = 2; i < 10; i++){
    // let line ='';
    for(let j = 1; j < 10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
        // line + `${i} x ${j} = ${i*j}\t`
    }
    console.log("--------------"); 
} // gpt가 도와줌

console.log("======== for문 구구단");
for(let dan = 2; dan <= 9; dan++){
    console.log(dan + "단");
    for(let num = 1; num <= 9; num++){
        console.log(dan, "*", num, "=", dan*num);
    }
}

// 연습문제 1-2) while 문 구구단
// 2단 ~ 9단까지 루프돌며 출력
console.log("=========  whlie 구구단");
let p = 1
while(p <10){
    let j = 2
    while(j < 10){
        console.log(`${p} x ${j} = ${p*j}`);
        j++;
    }
    console.log("--------------")
    p++;
}

console.log("=========  whlie 구구단");
let dan = 2; // 반복변수 초기화
while(dan <=9 ){
    console.log(dan + "단");
    let num = 1;
    while(num <= 9){
        console.log(dan, "*", num, "=", dan * num);
        num++;
    }
    dan++;
}

// 연습문제 2-1) for 문을 이용 별그리기
/*

 *****
 ****
 ***
 **
 * 
 
 */

 console.log("========== for 별 그리기");
 for(let i = 5; i > 0; i--){
    console.log('*'.repeat(i));
 }
 
 console.log("========== for 별 그리기(샘이랑 같이)");
 for(let row = 5; row > 0; row--){
    let stars = "";
    for (let col = 1; col <= row; col++){
        stars += "*"
    }
    console.log(stars);
 }
 // 연습문제 2-2) while 문을 이용 별그리기

 console.log("========== whlie 별 그리기");
 let s = 5;
 while(s > 0){
    console.log('*'.repeat(s))
    s--;
 }

 console.log("========== whlie 별 그리기(썜이랑 같이)");
 let row = 5;
 while(row > 0){
    let stars ="";
    let col = 1;
    while(col <= row){
        stars += "*";
        col ++;
    }
    console.log(stars);
    row--;
 }