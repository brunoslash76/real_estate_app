import { HouseModel } from '@/domain/models'

export interface LoadHousesByIdRepository {
    loadById: (id: number) => Promise<LoadHousesByIdRepository.Result>
}

export namespace LoadHousesByIdRepository {
    export type Result = HouseModel
}