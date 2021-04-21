import { HouseDetailsModel } from '@/domain/models'

export interface LoadHouseByNeighborhood {
    loadByNeighborhood: (neighborhood: string) => Promise<LoadHouseByNeighborhood.Model>
}

export namespace LoadHouseByNeighborhood {
    export type Model = HouseDetailsModel[]
}
