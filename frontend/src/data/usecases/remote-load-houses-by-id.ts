import { HttpClient, HttpStatusCode } from '@/data/protocols'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { HouseDetailsModel } from "@/domain/models"
import { LoadHouseById } from "@/domain/usecases"

export class RemoteLoadHouseById implements LoadHouseById {
    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteLoadHouseById.Model>
    ){}
    async loadById(id: number) : Promise<RemoteLoadHouseById.Model> {
        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: 'get',
        })
        const house = httpResponse.body
        switch(httpResponse.statusCode) {
            case HttpStatusCode.ok:
                return house
            default: throw new UnexpectedError()
        }
    }
}

export namespace RemoteLoadHouseById {
    export type Model = HouseDetailsModel
}
