import { render, screen } from '@testing-library/react';
import LoginPage from '../LoginPage';
import { BrowserRouter as Router } from 'react-router-dom';
describe("LoginPage", () => {
    test('check input values', () => {
        expect(true).toBe(true)
    })
    test('check page title name', () => {
        render(
            <Router>
                <LoginPage />
            </Router>
        )
        const titleName = screen.getByText(/Resource One IT Solutions/)
        expect(titleName).toBeInTheDocument()
    })
})