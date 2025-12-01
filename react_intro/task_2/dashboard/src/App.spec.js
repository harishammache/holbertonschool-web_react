import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

test('affiche le titre h1 "School dashboard"', () => {
    render(<App />);
    const title = screen.getByRole('heading', { name: /school dashboard/i });
    expect(title).toBeInTheDocument();
});

test('affiche le texte p dans le body et footer', () => {
    render(<App />);
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    expect(bodyText).toBeInTheDocument();

    const footerText = screen.getByText(/Copyright 2025 - holberton School/i)
    expect(footerText).toBeInTheDocument();
});

test('affiche une img element', () => {
    render(<App />);
    const img = screen.getByAltText(/holberton logo/i);
    expect(img).toBeInTheDocument();
});