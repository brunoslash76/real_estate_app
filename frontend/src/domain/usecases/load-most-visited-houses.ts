import { HouseModel } from '@/domain/models'

export interface LoadMostVisitedHouses {
    loadMostVisited: () => Promise<LoadMostVisitedHouses.Model>
}

export namespace LoadMostVisitedHouses {
    export type Model = HouseModel[]
}
