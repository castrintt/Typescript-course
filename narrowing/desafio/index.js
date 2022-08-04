"use strict";
const review = (name, review) => {
    if (review) {
        switch (review) {
            case 1:
                return `${name} achou o filme muito ruim`;
                break;
            case 2:
                return `${name} achou o filme ruim`;
                break;
            case 3:
                return `${name} achou o filme mediano`;
                break;
            case 4:
                return `${name} achou o filme bom`;
                break;
            case 5:
                return `${name} achou o filme muito bom`;
                break;
            default:
                return `${name} obrigado pela review`;
        }
    }
    else {
        return false;
    }
};
console.log(review("Matheus", 1));
console.log(review("Bernardo", 2));
console.log(review("Thales", 3));
console.log(review("Igor", 4));
console.log(review("João", 5));
console.log(review("Fábio"));
