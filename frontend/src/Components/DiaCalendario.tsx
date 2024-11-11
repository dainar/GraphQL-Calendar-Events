import React, { Dispatch, SetStateAction } from 'react';
import { DiaCalendarioDiv } from '@/styles/app.styled';

type typeEvent = {
  events:formEvent[]
};
type formEvent = {
  id?: string;
  date: Date;
  description: string;
  endHour: number;
  startHour: number;
  title: string;
};

const DiaCalendario = ({ midiaCalendario, data, calendarDate, handleDelete, setFormDataUpdate, setHideFormUpdate, hideFormUpdate }:
  {
    midiaCalendario: string, data: typeEvent, calendarDate: string,
    handleDelete: (id: string) => void,
    setFormDataUpdate:Dispatch<SetStateAction<formEvent>> ,
    setHideFormUpdate: (hideFormUpdate: boolean) => void,
    hideFormUpdate: boolean
  }) =>
{
  return (
    <div>
      <DiaCalendarioDiv key={midiaCalendario}>
        {midiaCalendario}
        {data?.events.map((event: any) =>
          event.date.slice(0, 10) === calendarDate ? (
            <div>
              {event.title}
              <button
                onClick={() => {
                  setHideFormUpdate(!hideFormUpdate);
                  setFormDataUpdate(event);
                }}>
                🖍
              </button>
              <button onClick={() => handleDelete(event.id)}>❌</button>
              <p>
                {event.startHour} - {event.endHour}
              </p>
              <p>{event.description}</p>
            </div>
          ) : (
            ''
          )
        )}
      </DiaCalendarioDiv>
    </div>
  );
};

export default DiaCalendario;

