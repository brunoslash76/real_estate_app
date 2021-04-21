export class UnexpectedError extends Error {
    constructor () {
      super('Something wrong happened on our side. Please try again later.')
      this.name = 'UnexpectedError'
    }
  }
  