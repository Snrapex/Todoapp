
interface SearchProps{
    onChange: (text:string)=>void;
}

const Search = ({onChange}:SearchProps)=>{
    
    return(
        <input
        placeholder="Search users"
        type="text"
        onChange={(e)=>onChange(e.target.value)}

        />
    )
}

export default Search;