export type HouseModel = {
    overview: OverviewModel
    facts: FactsModel
    others: OthersModel
    visits: VisitsModel
    homeImage: string
    images: string[]
  }
  
  type OverviewModel = {
    price: string
    beds: number
    baths: number
    neighborhood: string
    address: string
    city: string
    zipcode: number
    available: boolean
  }
  
  type FactsModel = {
    type: string
    yearBuilt: number
    heating: string
    parking: string
    lot: string
    stories: number
  }
  
  type OthersModel = {
    anualTax: number
    hasGarage: boolean
    pool: boolean
    virtualTourLink: string
    parcelNumber: number
    lastSold: string
  }
  
  type VisitsModel = {
    total: number
    lastVisited: string
  }
  