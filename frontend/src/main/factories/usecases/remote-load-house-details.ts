
import { makeAxiosHttpClient } from '@/main/factories/http'
import { LoadHouseById } from '@/domain/usecases'
import { makeApiUrl } from '@/main/factories/http'
import { RemoteLoadHouseById } from '@/data/usecases/remote-load-houses-by-id'


export const makeRemoteLoadHouseDetails = (id: number): LoadHouseById => {
    return new RemoteLoadHouseById(makeApiUrl(`/house-details/${id}`), makeAxiosHttpClient())
}