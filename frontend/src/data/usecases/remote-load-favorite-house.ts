import { LastVisitedHouseModel } from "@/domain/models"
import { LoadFavoriteHouse } from "@/domain/usecases"
import { LocalStorageAdapter } from '@/infra'

export class RemoteLoadFavoriteHouses implements LoadFavoriteHouse {
    constructor(
        private readonly handleFavoriteHouse: LocalStorageAdapter
    ) { }
    async load(): Promise<LastVisitedHouseModel[]> {
        return await this.handleFavoriteHouse.get('favoriteHouses')
    }
}
