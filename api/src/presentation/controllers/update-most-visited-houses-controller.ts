import { Controller, HttpResponse } from '@/presentation/protocols'
import { noContent, ok, serverError } from '@/presentation/helpers'
import { UpdateMostVisitedHouses } from '@/domain/usecases'

export class UpdateMostVisitedHousesController implements Controller {
    constructor(private readonly updateMostVisited: UpdateMostVisitedHouses) {}
    async handle(request: any): Promise<HttpResponse> {
        const { id } = request
        try {
            const houses = await this.updateMostVisited.update(id)
            return houses.length ? ok(houses) : noContent()
        } catch(error) {
            return serverError(error)
        }
    }
}
