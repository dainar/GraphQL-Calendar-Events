import React from 'react'
import { Input, Button } from '@/styles/app.styled'
type formEvent = {
  id?: string;
  date: Date;
  description: string;
  endHour: number;
  startHour: number;
  title: string;
};

const FormCreateEvent = ({handleSubmit, formData, handleChange, }:{handleSubmit:(event: React.FormEvent<HTMLFormElement>)=> void, formData:formEvent, handleChange:(event: React.ChangeEvent<HTMLInputElement>)=> void}) => {
  return (
     <form onSubmit={(event) => handleSubmit(event)}>
            <Input
              type="date"
              name="date"
              placeholder="Fecha"
              value={formData?.date.toString()}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="title"
              placeholder="Título"
              value={formData.title}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="description"
              placeholder="Descripción"
              value={formData.description}
              onChange={handleChange}
            />
            <Input
              type="number"
              name="startHour"
              max={23}
              placeholder="Hora de Comienzo"
              value={formData.startHour}
              onChange={handleChange}
            />
            <Input
              type="number"
              name="endHour"
              placeholder="Hora de Fin"
              value={formData.endHour}
              onChange={handleChange}
            />
            <Button type="submit">Crear evento</Button>
          </form>
  )
}

export default FormCreateEvent
