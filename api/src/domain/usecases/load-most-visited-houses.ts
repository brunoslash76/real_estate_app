import { HouseModel } from '@/domain/models'

export interface LoadMostVisitedHouses {
  loadMostVisited: () => Promise<LoadMostVisitedHouses.Result>
}

export namespace LoadMostVisitedHouses {
  export type Result = HouseModel[]
}