import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from "axios";
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
  
  test('1', async () => {
    mockedAxios.get.mockReturnValue(response);
    render(<Users/>);
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    expect(users).toMatchSnapshot();
  });
  
})

