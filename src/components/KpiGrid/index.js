import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import KpiCard from 'components/KpiCard'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div + div {
        margin-top: 30px;
    }

    @media (min-width: 650px) {
        flex-direction: row;
        justify-content: space-between;

        & > div + div {
            margin: 0 0 0 30px;
        }
    }
`

const defaultData = {
    active_source: {},
    weekly_active: {},
    nps: {}
}

const KpisGrid = (props) => {
    const { isFetching, data } = props
    const { active_source, weekly_active, nps } = Object.assign(
        {},
        defaultData,
        data
    )

    return (
        <Wrapper>
            <KpiCard
                isFetching={isFetching}
                title="Active sourcing"
                currentValue={active_source.current_period}
                lastValue={active_source.last_period}
                backgroundColor="#ffa07a"
            />
            <KpiCard
                isFetching={isFetching}
                title="Weekly active"
                currentValue={weekly_active.current_period}
                lastValue={weekly_active.last_period}
                backgroundColor="#87cefa"
            />
            <KpiCard
                isFetching={isFetching}
                title="NPS"
                currentValue={nps.current_period}
                lastValue={nps.last_period}
                backgroundColor="#73dad6"
            />
        </Wrapper>
    )
}

KpisGrid.propTypes = {
    data: PropTypes.object,
    isFetching: PropTypes.bool
}

export default KpisGrid
