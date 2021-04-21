import 'module-alias/register'
import '@/data/models/house-db-model'
import '@/main/config/dbConnection'

const env = {
    port: process.env.PORT || 5000
}

async function init() {
    const app = (await import('./config/app')).default
    app.listen(env.port, () => console.log(`Server is running on port ${env.port}`))
}
init()
