import {useDispatch, useSelector} from "react-redux";
import {setSearchQuery} from "../../store/action.js";
import {selectSearchQuery} from "../../store/selectors.js";

export default function (){
    const dispatch = useDispatch()
    const searchStr = useSelector( state => state.searchStr)

    const handleChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    }
    return (
        <input
            value={searchStr || ''}
            onChange={(e) => dispatch({type: 'searchStr/inputting', value: e.target.value})}
            type="text"
            placeholder="Search..."
        />    )

}