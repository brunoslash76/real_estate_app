import { RemoteLoadMostVisitedHouses } from '@/data/usecases'
import { makeAxiosHttpClient } from '@/main/factories/http'
import { LoadMostVisitedHouses } from '@/domain/usecases'
import { makeApiUrl } from '@/main/factories/http'


export const makeRemoteLoadMostVisitedHouses = (): LoadMostVisitedHouses => {
    return new RemoteLoadMostVisitedHouses(makeApiUrl('/most-visited'), makeAxiosHttpClient())
}