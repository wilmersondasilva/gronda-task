import { DB } from './db'

// method used to mock a post to an actual API
const post = (params) => {
    return new Promise((resolve) => {
        console.log('Requesting... ', params)

        setTimeout(async () => {
            const { time_unit, time_unit_count } = params
            const response = {
                data: DB[time_unit][time_unit_count],
                status: 'ok'
            }

            console.log('Response: ', response)
            resolve(response)
        }, 1000)
    })
}

export default { post }
