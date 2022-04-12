import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SimpleTests from "./SimpleTests";

describe('SimpleTests', () => {
  test('1', () => {
    render(<SimpleTests/>);
    
    const helloWorldElem = screen.getByText(/Hello World/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });
  
  test('2', () => {
    render(<SimpleTests/>);
    const helloWorldElem = screen.queryByText(/test/i);
    expect(helloWorldElem).toBeNull();
  });
  
  test('3', async () => {
    render(<SimpleTests/>);
    const helloWorldElem = await screen.findByText(/success/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloWorldElem).toHaveStyle({color: 'red'});
    expect(helloWorldElem).toHaveClass('data-wrapper');
  })
  
  test('4', () => {
    render(<SimpleTests/>);
    const toggleBtn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(toggleBtn);
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });
  
  test('5', async () => {
    render(<SimpleTests/>);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // Fire event
    fireEvent.input(input, {
      target: {value: 'firstname'}
    });
    expect(screen.queryByTestId('value-elem')).toContainHTML('firstname');
    // User event
    await userEvent.type(input, 'lastname');
    expect(screen.queryByTestId('value-elem')).toContainHTML('lastname');
  });
})

