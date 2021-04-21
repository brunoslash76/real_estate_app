import { HouseModel } from '@/domain/models'

export interface LoadHousesByCity {
  loadByCity: (city: string) => Promise<LoadHousesByCity.Result>
}

export namespace LoadHousesByCity {
  export type Result = HouseModel[]
}