import { Controller, HttpResponse } from '@/presentation/protocols'
import { noContent, ok, serverError } from '@/presentation/helpers'
import { LoadMostVisitedHouses } from '@/domain/usecases'

export class LoadMostVisitedHousesController implements Controller {
    constructor(private readonly updateMostVisited: LoadMostVisitedHouses) {}
    async handle(request: any): Promise<HttpResponse> {
        try {
            const houses = await this.updateMostVisited.loadMostVisited()
            return houses.length ? ok(houses) : noContent()
        } catch(error) {
            return serverError(error)
        }
    }
}
