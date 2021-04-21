import { HouseModel } from '@/domain/models'

export interface LoadHouses {
  load: () => Promise<LoadHouses.Result>
}

export namespace LoadHouses {
  export type Result = HouseModel[]
}