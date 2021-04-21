import { HouseModel } from '@/domain/models'

export interface LoadHousesRepository {
    loadAll: () => Promise<LoadHousesRepository.Result>
}

export namespace LoadHousesRepository {
    export type Result = HouseModel[]
}
