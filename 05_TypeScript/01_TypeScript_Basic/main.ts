interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
}

const itemTable: [keyof Item, string][] = [
  ["name", "이름"],
  ["price", "가격"],
  ["description", "설명"],
];

const item: Item = {
  id: "h001",
  name: "힐링 포션",
  price: 200,
  description: "마시면 체력을 50 회복한다.",
};

for (let [propertyKey, propertyName] of itemTable) {
  console.log(`${propertyName} | ${item[propertyKey]}`);
}
