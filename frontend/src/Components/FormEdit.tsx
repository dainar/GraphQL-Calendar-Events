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

const FormEdit = ({handleUpdate, formDataUpdate, handleChangeUpdate, setHideFormUpdate, hideFormUpdate }:{handleUpdate:(event: React.FormEvent<HTMLFormElement>)=> void, formDataUpdate:formEvent, handleChangeUpdate:(event: React.ChangeEvent<HTMLInputElement>)=> void,   setHideFormUpdate: (hideFormUpdate: boolean) => void,
    hideFormUpdate: boolean
}) => {
    


  return (
      <div>
            <form onSubmit={(event) => handleUpdate(event)}>
              <Input
                type="date"
                name="date"
                placeholder="Fecha"
                value={formDataUpdate?.date.toString().slice(0, 10)}
                onChange={handleChangeUpdate}
              />
              <Input
                type="text"
                name="title"
                placeholder="Título"
                value={formDataUpdate.title}
                onChange={handleChangeUpdate}
              />
              <Input
                type="text"
                name="description"
                placeholder="Descripción"
                value={formDataUpdate.description}
                onChange={handleChangeUpdate}
              />
              <Input
                type="number"
                name="startHour"
                placeholder="Hora de Comienzo"
                value={formDataUpdate.startHour}
                onChange={handleChangeUpdate}
              />
              <Input
                type="number"
                name="endHour"
                placeholder="Hora de Fin"
                value={formDataUpdate.endHour}
                onChange={handleChangeUpdate}
              />
              <Button type="submit">Editar evento</Button>
              <Button
                onClick={() => {
                  setHideFormUpdate(!hideFormUpdate);
                }}>
                Dejar de Editar
              </Button>
            </form>
          </div>
  )
}

export default FormEdit
