import styled from "styled-components";

export const TableContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7,1fr);
`

export const WeekDaysContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const WeekDaysDiv = styled.span`
  flex: 1;
  color: white;

`

export const DiaCalendarioDiv = styled.div`
   grid-column: span 1;
    height: 200px;
    background-color: lightblue;
    border: 1px solid black;
` 
export const ErrorH1 = styled.h1`
color:red;
`
export const Button = styled.button`
padding: 5px;
    background-color: #ffd800;
    border-radius: 8px;
    font-weight: bold;
    color: #760909;
    `   
    export const Input = styled.input`
padding: 2px;
    `   

export const DateSelector = styled.div`
    display: flex;  
    justify-content: center;
         `

