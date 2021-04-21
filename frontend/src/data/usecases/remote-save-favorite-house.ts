import { LastVisitedHouseModel } from "@/domain/models"
import { SaveFavoriteHouse } from "@/domain/usecases"
import { LocalStorageAdapter } from '@/infra'

export class RemoteSaveFavoriteHouse implements SaveFavoriteHouse {
    private readonly arrayLimit = 5
    constructor(
        private readonly handleLastVisitedHouse: LocalStorageAdapter
    ) { }
    async save(house: LastVisitedHouseModel): Promise<void> {
        const result = this.handleArray(house)
        this.handleLastVisitedHouse.set('favoriteHouses', result)
    }

    private handleArray(house: LastVisitedHouseModel): LastVisitedHouseModel[] {
        let houses = this.handleLastVisitedHouse.get('favoriteHouses') as Array<LastVisitedHouseModel>
        if (!houses) {
            houses = []
        }

        const filteredHouses = houses.filter(h => h.id !== house.id)

        if(filteredHouses.length < this.arrayLimit) {
            filteredHouses.push(house)
        } else {
            filteredHouses.pop()
            filteredHouses.unshift(house)
        }
        
        return filteredHouses
    }
}
