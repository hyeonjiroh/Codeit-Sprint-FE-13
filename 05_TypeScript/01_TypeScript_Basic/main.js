"use strict";
let monster = {
    name: "고블린",
    level: 22,
    skills: ["태권도", "특공무술"],
};
console.log(`${monster.name}의 레벨은 ${monster.level}이고,\n` +
    `${monster.hasGold ? "해치우면 골드를 얻는" : "해치워도 골드를 주지 않는"} 몬스터입니다.\n` +
    `${monster.skills.length > 0
        ? `가진 능력은 ${monster.skills.join(", ")}입니다.`
        : ""}`);
