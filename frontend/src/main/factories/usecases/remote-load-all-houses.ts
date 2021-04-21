import { RemoteLoadAllHouses } from '@/data/usecases'
import { makeAxiosHttpClient } from '@/main/factories/http'
import { LoadAllHouses } from '@/domain/usecases'
import { makeApiUrl } from '@/main/factories/http'

export const makeRemoteHousesList = (type: string): LoadAllHouses => {
    return new RemoteLoadAllHouses(makeApiUrl(`/houses-by-${type}`), type,  makeAxiosHttpClient())
}