import { HouseListModel } from '@/domain/models'

export interface LoadAllHouses {
    loadByParam: (value: string) => Promise<LoadAllHouses.Model>
}

export namespace LoadAllHouses {
    export type Model = HouseListModel[]
}
