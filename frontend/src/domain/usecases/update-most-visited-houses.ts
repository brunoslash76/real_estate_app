import { MostVisitedHousesModel } from '@/domain/models'

export interface UpdateMostVisitedHouses {
    updateMostVisited: (id: number) => Promise<UpdateMostVisitedHouses.Model>
}

export namespace UpdateMostVisitedHouses {
    export type Model = MostVisitedHousesModel[]
}
