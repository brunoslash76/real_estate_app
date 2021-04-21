import { RemoteLoadFavoriteHouses } from '@/data/usecases'
import { LoadFavoriteHouse } from '@/domain/usecases'
import { makeLocalStorageAdapter } from '@/main/factories/cache'


export const makeRemoteLoadFavoriteHouses = (): LoadFavoriteHouse => {
    return new RemoteLoadFavoriteHouses(makeLocalStorageAdapter())
}