import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import KpiGrid from 'components/KpiGrid'
import IntervalFilter, {
    DEFAULT_INTERVAL_OPTION
} from 'components/IntervalFilter'
import { kpiService } from 'services'

const Wrapper = styled.div`
    padding-top: 50px;

    @media (min-width: 650px) {
        width: 80%;
        max-width: 1150px;
        margin-left: auto;
        margin-right: auto;
    }
`

const Dashboard = () => {
    const [filter, setFilter] = useState(DEFAULT_INTERVAL_OPTION) // the params that will be sent to the server
    const [isFetching, setIsFetching] = useState(true) // just for controlling the loading spinner
    const [data, setData] = useState({}) // the response the is received from the server

    // using hook useEffect to trigger the fetch to server when the filter changes
    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true)

            try {
                const response = await kpiService.getKPIs(filter)
                setData(response.data)
            } catch (error) {
                console.log(error)
            }

            setIsFetching(false)
        }

        fetchData()
    }, [filter])

    return (
        <Wrapper data-testid="dashboard">
            <IntervalFilter value={filter} onChange={setFilter} />
            <KpiGrid isFetching={isFetching} data={data} />
        </Wrapper>
    )
}

export default Dashboard
