import { Controller, HttpResponse } from '@/presentation/protocols'
import { noContent, ok, serverError } from '@/presentation/helpers'
import { LoadHousesByCity } from '@/domain/usecases'

export class LoadHousesByCityController implements Controller {
    constructor(private readonly loadHousesByCity: LoadHousesByCity) {}
    async handle(request: any): Promise<HttpResponse> {
        const { city } = request
        try {
            const houses = await this.loadHousesByCity.loadByCity(city)
            return houses ? ok(houses) : noContent()
        } catch(error) {
            return serverError(error)
        }
    }
}
