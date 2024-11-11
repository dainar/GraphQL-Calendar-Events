import React from 'react'
import { DateSelector } from '@/styles/app.styled'

const DateSelectorComponent = ({ anyo, mes, currentDate, mesArray, setAnyo, setMes }:
    {
        anyo: number, mes: number, currentDate: Date, mesArray: string[],
        setAnyo: (anyo:number)=> void,
        setMes: (mes:number)=> void
    }) => {

  return (
     <DateSelector>
          {anyo > currentDate.getFullYear() ? (
            <>
              <button onClick={() => setAnyo(anyo - 1)}>◀</button>
              <span style={{ color: 'white' }}>{anyo} </span>
              <button onClick={() => setAnyo(anyo + 1)}>▶</button>
            </>
          ) : (
            <>
              <span style={{ color: 'white' }}>{anyo} </span>
              <button onClick={() => setAnyo(anyo + 1)}>▶</button>
            </>
          )}

          {anyo === currentDate.getFullYear() ? (
            mes > currentDate.getMonth() ? (
              <>
                <button onClick={() => setMes(mes - 1)}>◀</button>
                <span style={{ color: 'white' }}>{mesArray[mes]} </span>
                {mes < 11 ? (
                  <button onClick={() => setMes(mes + 1)}>▶</button>
                ) : (
                  ''
                )}
              </>
            ) : (
              <>
                <span style={{ color: 'white' }}>{mesArray[mes]} </span>
                {mes < 11 ? (
                  <button onClick={() => setMes(mes + 1)}>▶</button>
                ) : (
                  ''
                )}
              </>
            )
          ) : mes > 0 ? (
            <>
              <button onClick={() => setMes(mes - 1)}>◀</button>
              <span style={{ color: 'white' }}>{mesArray[mes]} </span>
              {mes < 11 ? (
                <button onClick={() => setMes(mes + 1)}>▶</button>
              ) : (
                ''
              )}
            </>
          ) : (
            <>
              <span style={{ color: 'white' }}>{mesArray[mes]}</span>
              {mes < 11 ? (
                <button onClick={() => setMes(mes + 1)}>▶</button>
              ) : (
                ''
              )}
            </>
          )}
        </DateSelector>
  )
}

export default DateSelectorComponent
