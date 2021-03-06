import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import KpiLoader from 'components/KpiLoader'
import { lightenDarkenColor } from 'utils'

const Wrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    padding: 35px 20px;
    height: 180px;
    width: 90%;
    max-width: 350px;
    border-radius: 4px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    ${(props) => `background-color: ${props.backgroundColor};`}

    &::before,
    &::after {
        content: '';
        border-radius: 50%;
        opacity: 0.25;
        background-color: #fff;
        position: absolute;
    }

    &::after {
        width: 145px;
        height: 145px;
        right: -65px;
        top: -35px;
    }

    &::before {
        width: 200px;
        height: 200px;
        right: -32px;
        bottom: -85px;
    }
`

const Title = styled.p`
    font-size: 18px;
`

const CurrentValue = styled.p`
    font-size: 32px;
    font-weight: bold;
`

const LastValue = styled.p`
    font-size: 18px;
`

const KpiCard = (props) => {
    const {
        isFetching,
        title,
        currentValue,
        lastValue,
        backgroundColor
    } = props

    // shows a loading spinner if the fetching is not finished yet
    if (isFetching)
        return (
            <Wrapper backgroundColor={backgroundColor}>
                {/* the color of the loading spinner is 70% darker than the KpiCard backgroundColor */}
                <KpiLoader color={lightenDarkenColor(backgroundColor, -70)} />
            </Wrapper>
        )

    return (
        <Wrapper backgroundColor={backgroundColor}>
            <Title>{title}</Title>
            <CurrentValue>{currentValue}</CurrentValue>
            <LastValue>{lastValue} Last period</LastValue>
        </Wrapper>
    )
}

KpiCard.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    currentValue: PropTypes.number,
    lastValue: PropTypes.number
}

export default KpiCard
