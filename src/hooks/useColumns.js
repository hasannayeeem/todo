import { useEffect, useState } from "react"

const useColumns = () =>{
    const [columns, setColumns] = useState([]);
    useEffect( () =>{
        fetch('columns.json')
        .then(res => res.json())
        .then(data => setColumns(data));
        
    },[columns, setColumns]);
    console.log({columns});
    return [columns, setColumns];
}
export default useColumns;