import React from 'react'
import Container from './componenets/birthday/Container'

function App() {
  const [people, setPeople] = React.useState([
      {id: 1, age: 24, name: 'John Doe',  src: 'https://avatars0.githubusercontent.com/u/55249658'},
      {id: 2, age: 24, name: 'John Doe2', src: 'https://avatars0.githubusercontent.com/u/55249658'},
      {id: 3, age: 24, name: 'John Doe3', src: 'https://avatars0.githubusercontent.com/u/55249658'},
      {id: 4, age: 24, name: 'John Doe4', src: 'https://avatars0.githubusercontent.com/u/55249658'},
  ])

  return (
    <div className='App'>
      <Container people={people} clearAll={() => setPeople([])} />
    </div>
  );
}

export default App;
