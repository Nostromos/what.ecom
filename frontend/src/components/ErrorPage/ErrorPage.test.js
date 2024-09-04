import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Fetch from './fetch'
import { test, expect } from '@jest/globals'

test('loads and displays error', async () => {
  // ARRANGE
  render(<Fetch url="/error" />);

  // ACT
  await userEvent.click(screen.getByText('Load error'));
  await screen.findByRole('heading');

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContext('Sorry, an unexpected error has occurred.');
  expect(screen.getByRole('button')).toBeDisabled();
});