import { HouseModel } from '@/domain/models'

export interface LoadHousesByNeighborhoodRepository {
    loadByNeighborhood: (neighborhood: string) => Promise<LoadHousesByNeighborhoodRepository.Result>
}

export namespace LoadHousesByNeighborhoodRepository {
    export type Result = HouseModel[]
}
