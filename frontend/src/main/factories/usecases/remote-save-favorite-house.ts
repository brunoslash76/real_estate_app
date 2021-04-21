import { RemoteSaveFavoriteHouse } from '@/data/usecases'
import { SaveFavoriteHouse } from '@/domain/usecases'
import { makeLocalStorageAdapter } from '@/main/factories/cache'


export const makeRemoteSaveFavoritedHouse = (): SaveFavoriteHouse => {
    return new RemoteSaveFavoriteHouse(makeLocalStorageAdapter())
}