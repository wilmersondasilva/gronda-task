import React from 'react'
import { render } from '@testing-library/react'
import KpiLoader from './index'

test('if KpiLoader renders', () => {
    const { getByTestId } = render(<KpiLoader color="#87cefa" />)
    const activeSourcingKpi = getByTestId('kpi-loader')
    expect(activeSourcingKpi).toBeInTheDocument()
})
