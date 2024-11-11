import { useState } from 'react';
import {
  Button,
  ErrorH1,
  Input,
  TableContainer,

} from '@/styles/app.styled';
import { gql, useMutation, useQuery } from '@apollo/client';
import DiaCalendario from '@/Components/DiaCalendario';
import DaysOfTheWeek from '@/Components/DaysOfTheWeek';
import DateSelectorComponent from '@/Components/DateSelector';
import FormCreateEvent from '@/Components/FormCreateEvent';
import FormEdit from '@/Components/FormEdit';

const CREATE_EVENT = gql`
  mutation Mutation(
    $title: String!
    $description: String!
    $date: Date!
    $startHour: Int!
    $endHour: Int!
  ) {
    createEvent(
      title: $title
      description: $description
      date: $date
      startHour: $startHour
      endHour: $endHour
    ) {
      id
      date
      description
      endHour
      startHour
      title
    }
  }
`;

const DELETE_EVENT = gql`
  mutation Mutation($deleteEventId: ID!) {
    deleteEvent(id: $deleteEventId) {
      id
    }
  }
`;

const UPDATE_EVENT = gql`
  mutation UpdateEvent(
    $updateEventId: ID!
    $title: String!
    $description: String!
    $date: Date!
    $startHour: Int!
    $endHour: Int!
  ) {
    updateEvent(
      id: $updateEventId
      title: $title
      description: $description
      date: $date
      startHour: $startHour
      endHour: $endHour
    ) {
      id
    }
  }
`;

const GET_EVENTS = gql`
  query Events {
    events {
      id
      date
      description
      endHour
      startHour
      title
    }
  }
`;

type formEvent = {
  id?: string;
  date: Date;
  description: string;
  endHour: number;
  startHour: number;
  title: string;
};

const mesArray = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
const diasMesArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const currentDate = new Date();

function Home() {
  const [errorMsg, setErrorMsg] = useState<string>();
  const [mes, setMes] = useState<number>(currentDate.getMonth());
  const [anyo, setAnyo] = useState<number>(currentDate.getFullYear());
  const [hideForm, setHideForm] = useState<boolean>(false);
  const [hideFormUpdate, setHideFormUpdate] = useState<boolean>(false);
  const [formData, setFormData] = useState<formEvent>({
    date: new Date(),
    title: '',
    description: '',
    endHour: 0,
    startHour: 0,
  });

  const [formDataUpdate, setFormDataUpdate] = useState<formEvent>({
    date: new Date(),
    title: '',
    description: '',
    endHour: 0,
    startHour: 0,
  });


  const [createEvent] = useMutation(CREATE_EVENT, {
    refetchQueries: [{ query: GET_EVENTS }],
    onError: (err) => {
      setErrorMsg('Ya existe un evento en esa fecha y hora.');
    },
  });
  const [deleteEvent] = useMutation(DELETE_EVENT, {
    refetchQueries: [{ query: GET_EVENTS }],
  });
  const [updateEvent] = useMutation(UPDATE_EVENT, {
    refetchQueries: [{ query: GET_EVENTS }],
  });
  const { data, loading, error } = useQuery(GET_EVENTS);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMsg('');
    try {
      if (formData.startHour > formData.endHour) {
        setErrorMsg('La hora de inicio no puede ser mayor que la hora de fin.');
        return;
      }
      await createEvent({
        variables: {
          title: formData.title,
          date: formData.date,
          description: formData.description,
          startHour: Number(formData.startHour),
          endHour: Number(formData.endHour),
        },
      });
      setHideForm(!hideForm);
    } catch (error) {
      setErrorMsg('Ya existe un evento en esa fecha y hora.');
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleDelete(id: string) {
    deleteEvent({ variables: { deleteEventId: id } });
  }

  function handleChangeUpdate(event: React.ChangeEvent<HTMLInputElement>) {
    setFormDataUpdate({
      ...formDataUpdate,
      [event.target.name]: event.target.value,
    });
  }

  async function handleUpdate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateEvent({
      variables: {
        updateEventId: formDataUpdate.id,
        title: formDataUpdate.title,
        date: formDataUpdate.date,
        description: formDataUpdate.description,
        startHour: Number(formDataUpdate.startHour),
        endHour: Number(formDataUpdate.endHour),
      },
    });
  }

  return (
    <div>
      {loading && <div>Loading...</div> }
      <div style={{ backgroundColor: '#0a0a46' }}>
        {errorMsg && <ErrorH1>{errorMsg}</ErrorH1>}
        {!hideForm && (
          <>
            <Button onClick={() => setHideForm(!hideForm)}>
              Agregar Evento
            </Button>
            <br />
            <br />
          </>
        )}
        {hideForm && <FormCreateEvent handleChange={handleChange} handleSubmit={handleSubmit} formData={formData}/>}

        {hideFormUpdate && <FormEdit formDataUpdate={formDataUpdate} handleUpdate={handleUpdate} handleChangeUpdate={handleChangeUpdate}
        setHideFormUpdate={setHideFormUpdate} hideFormUpdate={hideFormUpdate}
        />}
        <br />
        <br />
        <DateSelectorComponent anyo={anyo} mes={mes} currentDate={currentDate} mesArray={mesArray}
          setAnyo={setAnyo} setMes={setMes} />
        <br />
        <br />
        <DaysOfTheWeek/>
      </div>
      <TableContainer>
        {Array.from(Array(diasMesArray[mes]).keys()).map(
          (element, diaCalendario) => {
            const midiaCalendario:string =
              diaCalendario + 1 < 10
                ? '0' + (diaCalendario + 1)
                : "" + (diaCalendario + 1);
            const mimes = mes + 1 < 10 ? '0' + (mes + 1) : mes + 1;
            const calendarDate = `${anyo}-${mimes}-${midiaCalendario}`;
            return (
              <DiaCalendario midiaCalendario={midiaCalendario} data={data} calendarDate={calendarDate}
                handleDelete={handleDelete} setFormDataUpdate={setFormDataUpdate} setHideFormUpdate={setHideFormUpdate}
                hideFormUpdate={hideFormUpdate} />
            );
          }
        )}
      </TableContainer>
    </div>
  );
}

export default Home;
