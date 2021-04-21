import { RemoteSaveLastVisitedHouse } from '@/data/usecases'
import { SaveLastVisitedHouse } from '@/domain/usecases'
import { makeLocalStorageAdapter } from '@/main/factories/cache'


export const makeRemoteSaveLastVisitedHouses = (): SaveLastVisitedHouse => {
    return new RemoteSaveLastVisitedHouse(makeLocalStorageAdapter())
}