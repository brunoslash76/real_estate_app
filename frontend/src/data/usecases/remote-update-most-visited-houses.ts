import { HttpClient, HttpStatusCode } from '@/data/protocols'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { MostVisitedHousesModel } from "@/domain/models"
import { UpdateMostVisitedHouses } from "@/domain/usecases"

export class RemoteUpdateMostVisitedHouses implements UpdateMostVisitedHouses {
    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteUpdateMostVisitedHouses.Model>
    ){}
    async updateMostVisited(id: number) : Promise<RemoteUpdateMostVisitedHouses.Model> {
        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: 'put',
            body: {
                id
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

export namespace RemoteUpdateMostVisitedHouses {
    export type Model = MostVisitedHousesModel[]
}
