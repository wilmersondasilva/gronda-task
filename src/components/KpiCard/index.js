import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
    const { title, currentValue, lastValue, backgroundColor } = props

    return (
        <Wrapper backgroundColor={backgroundColor}>
            <Title>{title}</Title>
            <CurrentValue>{currentValue}</CurrentValue>
            <LastValue>{lastValue} Last period</LastValue>
        </Wrapper>
    )
}

KpiCard.propTypes = {
    title: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    currentValue: PropTypes.number,
    lastValue: PropTypes.number
}

export default KpiCard
