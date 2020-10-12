import { fakeApi } from 'utils'

const getKPIs = async (filter) => {
    const params = {
        time_unit: filter.timeUnit,
        time_unit_count: filter.timeUnitCount
    }
    const response = await fakeApi.post(params)

    if (response.status === 'ok') return response
    else throw new Error('Failed to fetch data from the server')
}

export default {
    getKPIs
}
