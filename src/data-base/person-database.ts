export const persons = [
  {
    id: "1",
    sex: 'male',
    color: 'red',
    name: 'miro'
  },
  {
    id: "4",
    sex: 'other',
    color: 'black',
    name: 'Pepe'
  },
  {
    id: "2",
    sex: 'female',
    color: 'yellow',
    name: 'lala'
  },
  {
    id: "3",
    sex: 'male',
    color: 'blue',
    name: 'joe'
  }
];

export const findPerson = (persons: Array<any>, id: string) => {
  return persons.find(person => person.id === id);
};

export const addPerson = (persons: Array<any>, person: any) => {
  persons.push(person);
  return person;
};