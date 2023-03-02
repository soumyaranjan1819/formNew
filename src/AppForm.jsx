import { useState } from 'react';

const style = {
    table: {
      borderCollapse: 'collapse'
    },
    tableCell: {
      border: '1px solid gray',
      margin: 0,
      padding: '5px 10px',
      width: 'max-content',
      minWidth: '150px'
    },
    form: {
      container: {
        padding: '20px',
        border: '1px solid #F0F8FF',
        borderRadius: '15px',
        width: 'max-content',
        marginBottom: '40px'
      },
      inputs: {
        marginBottom: '5px'
      },
      submitBtn: {
        marginTop: '10px',
        padding: '10px 15px',
        border:'none',
        backgroundColor: 'lightseagreen',
        fontSize: '14px',
        borderRadius: '5px'
      }
    }
  }

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [input, setInput] = useState({
    userFirstname: 'Coder',
    userLastname: 'Byte',
    userPhone: '8885559999'
  });
  const [entries, setEntries] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    const newEntry = {
      firstName: input.userFirstname,
      lastName: input.userLastname,
      phone: input.userPhone
    };
    setEntries([...entries, newEntry]);
    setInput({
      userFirstname: '',
      userLastname: '',
      userPhone: ''
    });
    addEntryToPhoneBook([...entries, newEntry]);
  }

  return (
    <form onSubmit={handleAdd} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        value={input.userFirstname}
        onChange={(e) => setInput({ ...input, userFirstname: e.target.value })}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        value={input.userLastname}
        onChange={(e) => setInput({ ...input, userLastname: e.target.value })}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        value={input.userPhone}
        onChange={(e) => setInput({ ...input, userPhone: e.target.value })}
      />
      <br />
      <button
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
      >Submit</button>
    </form>
  )
}

function InformationTable(props) {
    const sortedEntries = [...props.entries].sort((a, b) => a.lastName.localeCompare(b.lastName));
    
    return (
      <table style={style.table} className='informationTable'>
        <thead>
          <tr>
            <th style={style.tableCell}>First name</th>
            <th style={style.tableCell}>Last name</th>
            <th style={style.tableCell}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {sortedEntries.map((entry, index) => (
            <tr key={index}>
              <td style={style.tableCell}>{entry.firstName}</td>
              <td style={style.tableCell}>{entry.lastName}</td>
              <td style={style.tableCell}>{entry.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

function App() {
  const [entries, setEntries] = useState([]);

  const addEntryToPhoneBook = (newEntries) => {
    setEntries(newEntries);
  }

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable entries={entries} />
    </section>
  );
}


export default App;
