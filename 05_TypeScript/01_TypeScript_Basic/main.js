"use strict";
const itemTable = [
    ["name", "이름"],
    ["price", "가격"],
    ["description", "설명"],
];
const item = {
    id: "h001",
    name: "힐링 포션",
    price: 200,
    description: "마시면 체력을 50 회복한다.",
};
for (let [propertyKey, propertyName] of itemTable) {
    console.log(`${propertyName} | ${item[propertyKey]}`);
}
