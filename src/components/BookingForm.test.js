import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

describe('BookingForm Component', () => {
  const mockSubmitForm = jest.fn();
  const mockDispatch = jest.fn();
  const availableTimes = { availableTimes: ['12:00 PM', '1:00 PM', '2:00 PM'] };

  const renderBookingForm = () => {
    render(
      <BookingForm
        SubmitForm={mockSubmitForm}
        dispatch={mockDispatch}
        availableTimes={availableTimes}
      />
    );
  };

  test('renders the form with all input fields', () => {
    renderBookingForm();
    
    // Check if each input field is rendered
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/Make Your Reservation/i)).toBeInTheDocument();
  });

  test('validates form inputs and shows error messages', () => {
    renderBookingForm();
    const submitButton = screen.getByText(/Make Your Reservation/i);

    fireEvent.click(submitButton);

    // Check if validation error messages are shown
    expect(screen.getByLabelText(/First Name/i)).toBeInvalid();
    expect(screen.getByLabelText(/Last Name/i)).toBeInvalid();
    expect(screen.getByLabelText(/Email/i)).toBeInvalid();
    expect(screen.getByLabelText(/Choose Date/i)).toBeInvalid();
    expect(screen.getByLabelText(/Choose Time/i)).toBeInvalid();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInvalid();
  });

  test('submits the form with valid inputs', () => {
    renderBookingForm();

    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: '2024-12-14' } });
    fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: '12:00 PM' } });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

    const submitButton = screen.getByText(/Make Your Reservation/i);
    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalled();
  });
});
