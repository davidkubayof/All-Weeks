import { question } from 'readline-sync';
import {agents} from '../database/agentsDB.js'

export function createAgent() {
    agents.push({
        realName:question("enter a realName: "),
        codeName:question("enter a codeName: "),
        area:getSector(),
        status: getstatus(),
    });
}
export function getSector() {
  const sector = question(`
    enter a activitySector: 
    1. gaza 
    2. lavnon
    3. iran 
    `);
  switch (sector) {
    case "1":
      return "gaza";
    case "2":
      return "lavnon";
    case "3":
      return "iran";
    default:
      console.log("not valid: ");
  }
}
export function getstatus() {
  const status = question(`
    enter a status
    1.Active without a mission
    2.Active on a mission
    3.Discovered
    4.Retired`);
  switch (status) {
    case "1":
      return "Active without a mission";
    case "2":
      return "Active on a mission";
    case "3":
      return "Discovered";
    case "4":
      return "Retired";
    default:
      console.log("not valid: ");
  }
}
