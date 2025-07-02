import { EditableTable } from './components'
import {useState} from "react";


const columns = [
  { name: 'product'},
  { name: 'quantity'},
  { name: 'price'},
  { name: 'amount'},
  { name: 'comment'},
]

function App() {

  const [ rows, setRows] = useState ([
    {
    id: 1,
    product: 'product 1',
    quantity: 50,
    price: 10000,
    amount: 50000,
    comment: 'comment text',
  },
  {
    id: 2,
    product: 'product 1',
    quantity: 50,
    price: 10000,
    amount: 50000,
    comment: 'comment text 2',
  }
  ])

  const onInput = ({rowsIndex, columnsIndex, row, columns, value}) =>{
    console.log('vao day chua')
    const newData = () => [...row]
    newData[rowsIndex] [columns[columnsIndex].name] = value
    setRows(newData)
  }
  const contextValue = {
    rows: 0,
    columns: 0,
  }
  return (
    <>
      <EditableTable columns={columns} rows={rows}/>
    </>
  )
}

export default App
