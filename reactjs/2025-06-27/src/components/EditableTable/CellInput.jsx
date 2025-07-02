import {useContext, useEffect, useRef, useState} from "react";
import {TableContext} from "./const.js";
import './style.sass'

export default function () {
    const cellInputRef = useRef(null)
    const inputRef = useRef(null)

    const injector = useContext(TableContext)

    const {cursor, setCursor, row, column, onInput} = injector

    const colName = column[cursor.columnIndex].name
    const curRow = row[cursor.rowIndex]

    const [inputValue, setInputValue] = useState(curRow[colName])

    const onDoubleClick = () => {
        setCursor({...cursor, isEditing: true})
    }
    const onKeyDown = (e) => {
        if(!cursor.isEditing) {
            setCursor({...cursor, isEditing: true})
            setInputValue(`${inputValue} ${e.key}`)

            setTimeout(() => {
                inputRef.current.focus()
            })
        }
        if(e.key === 'Enter') {
            onInput({rowIndex:cursor.rowIndex, columnIndex:cursor.columnIndex, value: inputValue})
            // const colName = column[cursor.columnIndex].name
            // rows[cursor.rowIndex] [colName] = '12345678'
        }
    }
    console.log(cursor)

    const onBlur = () => {
        onInput({rowIndex:cursor.rowIndex, columnIndex:cursor.columnIndex, value: inputValue})

    }


    useEffect(()=>{
        setInputValue(curRow[colName])
        cellInputRef.current.focus()

    },[cursor.columnIndex, cursor.rowIndex, cursor.width])

    return (
        <div
            ref={cellInputRef}
            tabIndex={1}
            className = {'cell-input'}
            style={{
                top: cursor.top,
                left: cursor.left,
                width: cursor.width,
                height: cursor.height,
        }}
        onDoubleClick={onDoubleClick}
        onKeyDown={(e) =>onKeyDown(e)}
        >
            {
                cursor.isEditing && (
                    <input
                        ref={inputRef}
                        value={inputValue}
                        onBlur={onBlur}
                        onChange={(e) => {setinputValue(e.target.value)}}
                    />
                )
            }
        </div>
    )
}