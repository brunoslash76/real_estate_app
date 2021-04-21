import { HouseModel } from '@/domain/models'

export interface LoadHousesByCityRepository {
    loadByCity: (city: string) => Promise<LoadHousesByCityRepository.Result>
}

export namespace LoadHousesByCityRepository {
    export type Result = HouseModel[]
}
