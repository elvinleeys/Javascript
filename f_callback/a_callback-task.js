// 두 정수의 덧셈 결과 출력
// function add(number1, number2, callback) {
//     if (callback) {
//         callback(number1 + number2);
//     }
//     return number1 + number2;
// }

// function printResult(result) {
//     console.log(result);
// }

// add(3, 4, printResult);
// const result = add(1, 2);

const add = (number1, number2, callback) => {
    if (callback) {
        callback(number1 + number2);
    }
    return number1 + number2;
};

// add(1, 3, (result) => {
//     console.log(result);
// });

// const printResult = (result) => {
//     console.log(result);
// };

// add(1, 5, printResult);

// add(1, 5, console.log);

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱한 뒤 출력
// const multiply = (number1, number2, callback) => {
//     if (callback) {
//         return callback(number1 * number2);
//     }
//     return number1 * number2;
// };

// // const result = multiply(3, 4, (result) => result * 2);
// const result = multiply(3, 4);
// console.log(result);

// 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력
// 전달 예: "이", "순신"
// 리턴 예: "이순신님"
// const makeFullName = (firstName, lastName, callback) => {
//     if (callback) {
//         return callback(lastName + firstName);
//     }
//     return lastName + firstName;
// };

// const nameCard = makeFullName("동석", "한", (fullName) => {
//     return `${fullName}님`;
// });

// console.log(nameCard);

// 상품 1개 가격과 총 가격을 입력받고 개수가 5개 이하면 true 아니면 false
// const getCount = (perPrice, totalPrice, callback) => {
//     if (callback) {
//         return callback(totalPrice / perPrice);
//     }
//     return totalPrice / perPrice;
// };

// const check = getCount(3000, 6000, (count) => count <= 5);
// console.log(check);

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 "000원 결제 완료"
// 결제 상태가 false일 때 "000원 결제 취소" 출력
// function setStatus(price, status, callback) {
//     if (callback) {
//         callback(status ? `${price}원 결제 완료` : `${price}원 결제 취소`);
//     }
// }

// 기획

const setStatus = (price, status, callback) => {
    let result = status ? `${price}원 결제 완료` : `${price}원 결제 취소`;
    if (callback) {
        callback(result);
    }

    return result;
};

setStatus(3000, false, console.log);

const getPay = (price, priceStatus, callback) => {
    if (callback) {
        return callback(price, priceStatus);
    }
    return price;
};

const pay = getPay(3000, 1, (price, priceStatus) => {
    if (priceStatus > 0) {
        return `${price}원 결제 완료`;
    } else {
        return `${price}원 결제 취소`;
    }
});
console.log(pay);

// 숙제
// 콜백함수 문제 3개씩 만들어오기
// 회원ID와 이름을 전달받은 뒤 회원ID와 이름을 매치하여 출력
// 상품의 재고상태(수량)를 전달받은뒤 1000개 이상이면 판매, 1000개 미만이면 보존, 50개 이하면 발주를 출력
// 두 정수를 더한 뒤 2를 나누어 평균 출력
