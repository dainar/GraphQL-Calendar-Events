
import React from 'react'
import { WeekDaysContainer, WeekDaysDiv } from '@/styles/app.styled'

const DaysOfTheWeek = () => {
  return (
    <WeekDaysContainer>
          <WeekDaysDiv>Lunes</WeekDaysDiv>
          <WeekDaysDiv>Martes</WeekDaysDiv>
          <WeekDaysDiv>Miércoles</WeekDaysDiv>
          <WeekDaysDiv>Jueves</WeekDaysDiv>
          <WeekDaysDiv>Viernes</WeekDaysDiv>
          <WeekDaysDiv>Sábado</WeekDaysDiv>
          <WeekDaysDiv>Domingo</WeekDaysDiv>
    </WeekDaysContainer>
  )
}

export default DaysOfTheWeek

