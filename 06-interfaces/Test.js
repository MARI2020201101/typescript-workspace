"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FutbollCoach_1 = require("./FutbollCoach");
var TennisCoach_1 = require("./TennisCoach");
var coach1 = new TennisCoach_1.TennisCoach();
var coach2 = new FutbollCoach_1.FutbollCoach();
console.log(coach1.getinfo());
console.log(coach2.getinfo());
