import { HouseModel } from '@/domain/models'

export interface LoadHousesById {
  loadById: (id: number) => Promise<LoadHousesById.Result>
}

export namespace LoadHousesById {
  export type Result = HouseModel
}