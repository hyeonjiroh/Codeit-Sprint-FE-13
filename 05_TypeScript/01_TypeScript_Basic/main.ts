type Point = [number, number];

interface Entity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Monster extends Entity {
  name: string;
  level: number;
  hasGold?: boolean;
  skills: string[];
  move: (fromPoint: Point, toPoint: Point) => void;
}

function getDiff(fromPoint: Point, toPoint: Point) {
  let dx = toPoint[0] - fromPoint[0];
  let dy = toPoint[1] - fromPoint[1];
  return [dx, dy];
}

const monster: Monster = {
  id: "g001",
  name: "고블린",
  level: 22,
  skills: ["태권도", "특공무술"],
  move(fromPoint, toPoint) {
    let [dx, dy] = getDiff(fromPoint, toPoint);
    console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
  },
  createdAt: new Date(),
  updatedAt: new Date(),
};

const current: Point = [0, 0];
const target: Point = [4, 5];
monster.move(current, target);
