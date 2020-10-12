import React from 'react'
import { render } from '@testing-library/react'
import IntervalFilter from './index'

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

test('if IntervalFilter renders the correct label', () => {
    const { getByText } = render(
        <IntervalFilter value={DEFAULT_INTERVAL_OPTION} onChange={() => {}} />
    )
    const linkElement = getByText(/Filter by/i)
    expect(linkElement).toBeInTheDocument()
})
