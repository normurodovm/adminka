import React from 'react';
import { useDebounce } from "../hooks/useDebounce"
import { useSearch } from "../service/query/useSearch";

export const Search  = () => {
    const [inputValue, setInputValue] = React.useState("")
    debouncedValue = useDebounce(inputValue);
    const {data} = useSearch(debouncedValue)
    console.log(data);
    return <div>
        <input onChange={setInputValue((e)=>e.target.value)} className="bg-[#f7f7ff]  rounded-xl w-[250px] px-2 py-2" placeholder="Поиск" type="text"  />
    </div>
}