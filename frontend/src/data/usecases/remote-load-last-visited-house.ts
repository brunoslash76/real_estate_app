import { LastVisitedHouseModel } from "@/domain/models"
import { LoadLastVisitedHouse } from "@/domain/usecases"
import { LocalStorageAdapter } from '@/infra'

export class RemoteLoadLastVisitedHouse implements LoadLastVisitedHouse {
    private readonly arrayLimit = 5
    constructor(
        private readonly handleLastVisitedHouse: LocalStorageAdapter
    ) { }
    async loadLastVisited(): Promise<RemoteLoadLastVisitedHouse.Model> {
        return this.handleLastVisitedHouse.get('lastVisitedHouses')
    }
}

export namespace RemoteLoadLastVisitedHouse {
    export type Model = LastVisitedHouseModel[]
}