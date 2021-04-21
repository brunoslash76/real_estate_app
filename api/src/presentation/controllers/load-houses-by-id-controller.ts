import { Controller, HttpResponse } from '@/presentation/protocols'
import { noContent, ok, serverError } from '@/presentation/helpers'
import { LoadHousesById } from '@/domain/usecases'

export class LoadHousesByIdController implements Controller {
    constructor(private readonly loadHousesById: LoadHousesById) {}
    async handle(request: any): Promise<HttpResponse> {
        const { id } = request
        try {
            const houses = await this.loadHousesById.loadById(id)
            return houses ? ok(houses) : noContent()
        } catch(error) {
            return serverError(error)
        }
    }
}
