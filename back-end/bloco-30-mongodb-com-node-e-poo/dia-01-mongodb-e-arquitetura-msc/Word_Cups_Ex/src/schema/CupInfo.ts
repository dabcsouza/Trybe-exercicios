import { Schema } from 'mongoose';


export interface ICupInfo {
  _id: string,
  year: number,
  hostCountry: string,
  champions: string,
  runnerUp: string,
  editionGoals: number,
  editionStrikers: string[],
  bestPlayer: string,
  bestGoalkeeper: string,
  bestYoungPlayer: string,
}

const cupSchema = new Schema<ICupInfo>({
  
})
