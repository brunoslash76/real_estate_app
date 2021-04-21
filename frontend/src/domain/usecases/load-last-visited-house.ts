import { LastVisitedHouseModel } from '@/domain/models'

export interface LoadLastVisitedHouse {
    loadLastVisited:() => Promise<LoadLastVisitedHouse.Model[]>
}

export namespace LoadLastVisitedHouse {
    export type Model = LastVisitedHouseModel
}
