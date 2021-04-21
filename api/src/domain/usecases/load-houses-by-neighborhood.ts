import { HouseModel } from '@/domain/models'

export interface LoadHousesByNeighborhood {
  loadByNeighborhood: (neighborhood: string) => Promise<LoadHousesByNeighborhood.Result>
}

export namespace LoadHousesByNeighborhood {
  export type Result = HouseModel[]
}