import { HouseModel } from '@/domain/models'

export interface LoadHousesByZipcode {
  loadByZipcode: (zipcode: string) => Promise<LoadHousesByZipcode.Result>
}

export namespace LoadHousesByZipcode {
  export type Result = HouseModel[]
}