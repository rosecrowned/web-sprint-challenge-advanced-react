import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

est("form header renders", () => {
    render(<CheckoutForm />)
    const formHead = screen.getByText(/Checkout Form/i)
    expect(formHead).toBeDefined()
  });
  
  test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    //variables needed
    const firstName = 'Someone'
    const firstNameInput = screen.getByLabelText(/First Name/i)
    const lastName = 'Special'
    const lastNameInput = screen.getByLabelText(/Last Name/i)
    const address = '123 away lane'
    const addressInput = screen.getByLabelText(/Address/i)
    const city = 'Farfar Away'
    const cityInput = screen.getByLabelText(/City/i)
    const state = 'Nowhere'
    const stateInput = screen.getByLabelText(/State/i)
    const zip = '12345'
    const zipInput = screen.getByLabelText(/Zip/i)
    const checkOutButton = screen.getByRole('button')
    // UserEvents to be done
    userEvent.type(firstNameInput, firstName)
    userEvent.type(lastNameInput, lastName)
    userEvent.type(addressInput, address)
    userEvent.type(cityInput, city)
    userEvent.type(stateInput, state)
    userEvent.type(zipInput, zip)
    userEvent.click(checkOutButton)
    // success message is displayed
    const successDisplay = screen.getByTestId('successMessage')
    expect(successDisplay).toHaveTextContent(firstName)
    expect(successDisplay).toHaveTextContent(lastName)
    expect(successDisplay).toHaveTextContent(address)
    expect(successDisplay).toHaveTextContent(city)
    expect(successDisplay).toHaveTextContent(state)
    expect(successDisplay).toHaveTextContent(zip)
  });