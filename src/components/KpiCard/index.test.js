import React from 'react'
import { render } from '@testing-library/react'
import KpiCard from './index'

test('if KpiCard renders the correct title', () => {
    const { getByText } = render(
        <KpiCard
            isFetching={false}
            title="Test purposes"
            currentValue={35}
            lastValue={30}
            backgroundColor="#a4a3ff"
        />
    )
    const title = getByText(/Test purposes/i)
    expect(title).toBeInTheDocument()
})

test('if KpiCard renders the correct currentValue', () => {
    const { getByText } = render(
        <KpiCard
            isFetching={false}
            title="Test purposes"
            currentValue={35}
            lastValue={30}
            backgroundColor="#a4a3ff"
        />
    )
    const currentValue = getByText(/35/i)
    expect(currentValue).toBeInTheDocument()
})

test('if KpiCard renders the correct lastValue', () => {
    const { getByText } = render(
        <KpiCard
            isFetching={false}
            title="Test purposes"
            currentValue={35}
            lastValue={30}
            backgroundColor="#a4a3ff"
        />
    )
    const lastValue = getByText(/30/i)
    expect(lastValue).toBeInTheDocument()
})
