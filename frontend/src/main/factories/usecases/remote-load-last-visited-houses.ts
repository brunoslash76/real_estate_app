import { RemoteLoadLastVisitedHouse } from '@/data/usecases'
import { LoadLastVisitedHouse } from '@/domain/usecases'
import { makeLocalStorageAdapter } from '@/main/factories/cache'


export const makeRemoteLoadLastVisitedHouses = (): LoadLastVisitedHouse => {
    return new RemoteLoadLastVisitedHouse(makeLocalStorageAdapter())
}