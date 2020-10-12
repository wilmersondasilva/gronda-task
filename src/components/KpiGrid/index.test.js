import React from 'react'
import { render } from '@testing-library/react'
import KpiGrid from './index'

test('if KpiGrid renders', () => {
    const { getByTestId } = render(<KpiGrid isFetching={false} data={{}} />)
    const activeSourcingKpi = getByTestId('kpi-grid')
    expect(activeSourcingKpi).toBeInTheDocument()
})

test('if KpiGrid renders the correct KPIs', () => {
    const { getByText } = render(<KpiGrid isFetching={false} data={{}} />)
    const activeSourcingKpi = getByText(/Active sourcing/i)
    const weeklyActiveKpi = getByText(/Weekly active/i)
    const npsKpi = getByText(/NPS/i)

    expect(activeSourcingKpi).toBeInTheDocument()
    expect(weeklyActiveKpi).toBeInTheDocument()
    expect(npsKpi).toBeInTheDocument()
})
