import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    width: 90%;
    max-width: 350px;
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    @media (min-width: 650px) {
        float: right;
        width: 225px;
    }
`

const Select = styled.select`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    text-align: center;
    border: 1px solid #b7b7b7;
    color: #272727;
    border-radius: 4px;
    padding: 2px 4px;
    outline-style: none;
    margin-left: 10px;
    flex-grow: 1;
`

const TIME_UNITS = {
    WEEK: 'WEEK',
    MONTH: 'MONTH',
    QUARTER: 'QUARTER',
    YEAR: 'YEAR'
}

const TIME_UNIT_COUNTS = {
    CURRENT: 0,
    LAST: 1
}

const DEFAULT_INTERVAL_OPTION = {
    timeUnit: TIME_UNITS.WEEK,
    timeUnitCount: TIME_UNIT_COUNTS.CURRENT
}

const intervalOptions = [
    {
        label: 'This week',
        value: DEFAULT_INTERVAL_OPTION
    },
    {
        label: 'Last week',
        value: {
            timeUnit: TIME_UNITS.WEEK,
            timeUnitCount: TIME_UNIT_COUNTS.LAST
        }
    },
    {
        label: 'This month',
        value: {
            timeUnit: TIME_UNITS.MONTH,
            timeUnitCount: TIME_UNIT_COUNTS.CURRENT
        }
    },
    {
        label: 'Last month',
        value: {
            timeUnit: TIME_UNITS.MONTH,
            timeUnitCount: TIME_UNIT_COUNTS.LAST
        }
    },
    {
        label: 'This quarter',
        value: {
            timeUnit: TIME_UNITS.QUARTER,
            timeUnitCount: TIME_UNIT_COUNTS.CURRENT
        }
    },
    {
        label: 'Last quarter',
        value: {
            timeUnit: TIME_UNITS.QUARTER,
            timeUnitCount: TIME_UNIT_COUNTS.LAST
        }
    },
    {
        label: 'This year',
        value: {
            timeUnit: TIME_UNITS.YEAR,
            timeUnitCount: TIME_UNIT_COUNTS.CURRENT
        }
    },
    {
        label: 'Last year',
        value: {
            timeUnit: TIME_UNITS.YEAR,
            timeUnitCount: TIME_UNIT_COUNTS.LAST
        }
    }
]

// the internalValue is a stringfied version of the params while the externalValue is a plain JS object
const IntervalFilter = (props) => {
    const { value, onChange } = props
    const [internalValue, setInternalValue] = useState(JSON.stringify(value))

    const handleChange = (event) => {
        const { value } = event.target
        onChange(JSON.parse(value))
    }

    useEffect(() => {
        setInternalValue(JSON.stringify(value))
    }, [setInternalValue, value])

    return (
        <Wrapper>
            <label>Filter by</label>
            <Select
                data-testid="interval-select"
                value={internalValue}
                onChange={handleChange}
            >
                {intervalOptions.map((intervalOption) => (
                    <option
                        value={JSON.stringify(intervalOption.value)}
                        key={intervalOption.label}
                    >
                        {intervalOption.label}
                    </option>
                ))}
            </Select>
        </Wrapper>
    )
}

IntervalFilter.propTypes = {
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export { DEFAULT_INTERVAL_OPTION }
export default IntervalFilter
