import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('if App renders dashboard', () => {
    const { getByTestId } = render(<App />)
    const dashboard = getByTestId('dashboard')
    expect(dashboard).toBeInTheDocument()
})
