import Student from './Student.jsx';

function App() {
  const students = [
    { id: 1, name: 'Sumanth', age: 22 },
    { id: 2, name: 'Sravan', age: 19 },
    { id: 3, name: 'Naveen', age: 22 },
  ];

  return (
    <div>
      <h1>Students List</h1>

      <ul>
        {students.map((student) => (
          <Student
            key={student.id}
            name={student.name}
            age={student.age}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;