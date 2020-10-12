import { fakeApi } from 'utils'

const getKPIs = async (filter) => {
    const params = {
        time_unit: filter.timeUnit,
        time_unit_count: filter.timeUnitCount
    }
    const response = await fakeApi.post(params)

    if (response.status === 'ok') return response
    else throw new Error("was't possible")
}

export default {
    getKPIs
}
