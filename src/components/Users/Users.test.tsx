import React from 'react';
import { screen } from '@testing-library/react';
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { renderTestApp } from "../../tests/helpers/renderTestApp";
import Users from "./Users";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Users test', () => {
  let response: any;
  
  beforeEach(() => {
    response = {
      data: [
        {
          "id": 1,
          "name": "Leanne Graham",
        },
        {
          "id": 2,
          "name": "Ervin Howell",
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
        }
      ]
    }
  })
  
  afterEach(() => {
    jest.clearAllMocks();
  })
  
  test('renders learn react link', async () => {
    mockedAxios.get.mockReturnValue(response);
    renderTestApp(<Users/>, []);
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    expect(users).toMatchSnapshot();
  });
  
  test('test redirect to details page', async () => {
    mockedAxios.get.mockReturnValue(response);
    renderTestApp(<Users/>, []);
    const users = await screen.findAllByTestId('user-item');
    await userEvent.click(users[0]);
    expect(screen.getByTestId('user-page')).toBeInTheDocument();
  })
})

