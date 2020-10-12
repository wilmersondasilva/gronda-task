import React from 'react'
import styled from 'styled-components'
import KpiGrid from 'components/KpiGrid'

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
    return (
        <Wrapper>
            <KpiGrid />
        </Wrapper>
    )
}

export default Dashboard
