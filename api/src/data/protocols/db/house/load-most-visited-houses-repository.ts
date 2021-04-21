import { HouseModel } from '@/domain/models'

export interface LoadMostVisitedHousesRepository {
    loadMostVisited: () => Promise<LoadMostVisitedHousesRepository.Result>
}

export namespace LoadMostVisitedHousesRepository {
    export type Result = HouseModel[]
}
