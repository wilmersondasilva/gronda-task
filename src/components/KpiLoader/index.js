import styled, { keyframes } from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

const spin = keyframes`
    from {
        transform: translate(-50%, -50%);
    }

    to {
        transform: translate(-50%, -50%) rotate(360deg)
    }
`

const Wrapper = styled.div`
    z-index: 11;
    position: absolute;
    top: 50%;
    left: 50%;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;

    ${(props) => `border-left-color: ${props.color};`}
`

const KpiLoader = (props) => {
    const { color } = props

    return <Wrapper color={color} />
}

KpiLoader.propTypes = {
    color: PropTypes.string.isRequired
}

export default KpiLoader
