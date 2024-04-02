const moves: string[] = [];

function logMove(disk: number, from: string, to: string) {
  const log = `Move disk ${disk} from ${from} to ${to}`;
  moves.push(log);
}

function hanoiTower(
  n: number,
  fromRod: string,
  toRod: string,
  usingRod: string
) {
  if (n === 1) {
    logMove(n, fromRod, toRod);
    return;
  }

  hanoiTower(n - 1, fromRod, usingRod, toRod);
  logMove(n, fromRod, toRod);
  hanoiTower(n - 1, usingRod, toRod, fromRod);
}

export function hanoiTowerStart(
  n: number,
  fromRod: string,
  toRod: string,
  usingRod: string
) {
  hanoiTower(n, fromRod, toRod, usingRod);
  return moves;
}
