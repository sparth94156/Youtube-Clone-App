const SearchSuggestions = ({ result }) => {

    return (
        <div className=' flex gap-x-3 px-2 py-1 hover:bg-gray-200 rounded-xl'>
            <span><i class="fa-solid fa-magnifying-glass"></i></span>
            <h2>{result}</h2>
        </div>
    )
}

export default SearchSuggestions
