import { Controller, HttpResponse } from '@/presentation/protocols'
import { noContent, ok, serverError } from '@/presentation/helpers'
import { LoadHouses } from '@/domain/usecases'

export class LoadHousesController implements Controller {
    constructor(private readonly loadHouses: LoadHouses) {}
    async handle(request: any): Promise<HttpResponse> {
        try {
            const houses = await this.loadHouses.load()
            return houses.length ? ok(houses) : noContent()
        } catch(error) {
            return serverError(error)
        }
    }
}
