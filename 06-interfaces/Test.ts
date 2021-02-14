import { FutbollCoach } from "./FutbollCoach";
import { TennisCoach } from "./TennisCoach";

let coach1 = new TennisCoach();
let coach2 = new FutbollCoach();

console.log(coach1.getinfo());
console.log(coach2.getinfo());