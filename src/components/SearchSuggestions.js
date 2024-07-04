const SearchSuggestions = ({ result }) => {

    return (
            <div className=' flex gap-x-3 px-2 py-1 hover:bg-gray-200 hover:cursor-pointer rounded-xl'>
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
                <a href={"/results?q=" + result}>
                <h2>{result}</h2>
                </a>
            </div>
    )
}

export default SearchSuggestions
