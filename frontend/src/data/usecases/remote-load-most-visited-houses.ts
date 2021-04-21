import { HttpClient, HttpStatusCode } from '@/data/protocols'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { HouseModel } from "@/domain/models"
import { LoadMostVisitedHouses } from "@/domain/usecases"

export class RemoteLoadMostVisitedHouses implements LoadMostVisitedHouses {
    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteLoadMostVisitedHouses.Model[]>
    ){}
    async loadMostVisited() : Promise<RemoteLoadMostVisitedHouses.Model[]> {
        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: 'get'
        })
        const houses = httpResponse.body || []
        switch(httpResponse.statusCode) {
            case HttpStatusCode.ok:
                return houses
            default: throw new UnexpectedError()
        }
    }
}

export namespace RemoteLoadMostVisitedHouses {
    export type Model = HouseModel
}
