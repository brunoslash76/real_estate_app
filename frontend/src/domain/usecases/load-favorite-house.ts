import { LastVisitedHouseModel } from '@/domain/models'

export interface LoadFavoriteHouse {
    load:() => Promise<LoadFavoriteHouse.Model[]>
}

export namespace LoadFavoriteHouse {
    export type Model = LastVisitedHouseModel
}