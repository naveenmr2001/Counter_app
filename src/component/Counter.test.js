import { fireEvent, render , screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Counter from "./Counter"

test('should be have header in the page', () => {
  render(<Counter/>);
  const header = screen.getByText("M2P Header");
  expect(header).toBeVisible();
})

test('should be have value of 0 if the user gives the parameter nothing', () => {
    render(<Counter/>);
    const initialValue = screen.queryByText(0);
    expect(initialValue).toBeVisible();
})

test('should be have value of 1 if the user pass the paramenter to the counter',()=>{
    render(<Counter initialValue={1}/>);
    const initialValue = screen.queryByText(1);
    expect(initialValue).toBeVisible();
})

test('should be have value of 5 if the user click the add button onces',()=>{
    render(<Counter initialValue={4}/>);
    const addBtn = screen.queryByText("Add")
    fireEvent.click(addBtn);
    const incrementedValue = screen.queryByText(5);
    expect(incrementedValue).toBeVisible();
})

test('should be have value of 6 if the user click the add button twices',()=>{
    render(<Counter initialValue={4}/>);
    const addBtn = screen.getByText("Add")
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    const incrementedValue = screen.queryByText(6);
    expect(incrementedValue).toBeVisible();
})

test('should be have value of 3 if the user click the sub button onces',()=>{
    render(<Counter initialValue={4}/>);
    const subBtn = screen.getByText("Sub")
    fireEvent.click(subBtn);
    const decrementedValue = screen.queryByText(3);
    expect(decrementedValue).toBeVisible();
})

test('should be have value of 2 if the user click the sub button twices',()=>{
    render(<Counter initialValue={4}/>);
    const subBtn = screen.getByText("Sub")
    fireEvent.click(subBtn);
    fireEvent.click(subBtn);
    const decrementedValue = screen.queryByText(2);
    expect(decrementedValue).toBeVisible();
})

test('should be have value of not allow if the user pass the negative value or the value is negative',()=>{
    render(<Counter initialValue={-2}/>);
    const decrementedValue = screen.queryByText("Not Allowed");
    expect(decrementedValue).toBeVisible();
})