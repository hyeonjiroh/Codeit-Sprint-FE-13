"use strict";
function getDiff(fromPoint, toPoint) {
    let dx = toPoint[0] - fromPoint[0];
    let dy = toPoint[1] - fromPoint[1];
    return [dx, dy];
}
const monster = {
    name: "고블린",
    level: 22,
    skills: ["태권도", "특공무술"],
    move(fromPoint, toPoint) {
        let [dx, dy] = getDiff(fromPoint, toPoint);
        console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
    },
};
const current = [0, 0];
const target = [4, 5];
monster.move(current, target);
