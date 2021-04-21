import { HttpClient, HttpStatusCode, LoadHousesEndPointParams } from '@/data/protocols'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { HouseListModel } from "@/domain/models"
import { LoadAllHouses } from "@/domain/usecases/load-all-houses"

export class RemoteLoadAllHouses implements LoadAllHouses {
    constructor(
        private readonly url: string,
        private readonly param: string,
        private readonly httpClient: HttpClient<RemoteLoadAllHouses.Model[]>
    ){}
    async loadByParam(value: string) : Promise<RemoteLoadAllHouses.Model[]> {
        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: 'post',
            body: {
                [`${this.param}`]: value
            } 
        })
        const houses = httpResponse.body || []
        switch(httpResponse.statusCode) {
            case HttpStatusCode.ok:
                return houses
            default: throw new UnexpectedError()
        }
    }
}

export namespace RemoteLoadAllHouses {
    export type Model = HouseListModel
}
