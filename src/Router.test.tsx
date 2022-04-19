import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { renderWithRouter } from "./tests/helpers/renderWithRouter";
import Navbar from "./components/Navbar/Navbar";
import App from "./App";

describe('Router test', () => {
  test('Router test', async () => {
    renderWithRouter(<Navbar/>, '/simple-main-page');
    const mainLink = screen.getByTestId('simple-main-link');
    const aboutLink = screen.getByTestId('about-link');
    await userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    await userEvent.click(mainLink);
    expect(screen.getByTestId('simple-main-page')).toBeInTheDocument();
  })
  
  test('Error page test', () => {
    render(
      <MemoryRouter initialEntries={['/no-exists-path']}>
        <App/>
      </MemoryRouter>
    );
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  })
})

