import { RemoteUpdateMostVisitedHouses } from '@/data/usecases'
import { makeAxiosHttpClient } from '@/main/factories/http'
import { UpdateMostVisitedHouses } from '@/domain/usecases'
import { makeApiUrl } from '@/main/factories/http'


export const makeRemoteUpdateMostVisitedHouses = (): UpdateMostVisitedHouses => {
    return new RemoteUpdateMostVisitedHouses(makeApiUrl('/update-most-visited'), makeAxiosHttpClient())
}