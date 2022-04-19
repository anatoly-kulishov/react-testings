import { screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
import { renderTestApp } from "../../tests/helpers/renderTestApp";

describe('USERS TEST', () => {
  test('test user link', async () => {
    renderTestApp(<Navbar/>, []);
    const usersLink = screen.getByTestId('users-link')
    await userEvent.click(usersLink);
    expect(screen.getByTestId('users-page')).toBeInTheDocument()
  });
  test('test about link', async () => {
    renderTestApp(<Navbar/>, []);
    const aboutLink = screen.getByTestId('about-link')
    await userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
  });
  test('test main link', async () => {
    renderTestApp(<Navbar/>, {route: '/users'});
    const mainLink = screen.getByTestId('main-link')
    await userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
  });
})

