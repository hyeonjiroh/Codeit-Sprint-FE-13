const current: [number, number] = [0, 0];
const target: [number, number] = [4, 5];
const dx: number = target[0] - current[0];
const dy: number = target[1] - current[1];
console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);

const items: string[] = [];
items.push("갑옷");
items.push("빨간 물약");
console.log(`${items.join(", ")}을/를 획득했다!`);
