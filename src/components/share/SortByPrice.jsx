
export const SortByPrice = ({setSort}) => {
  return (
    <select className="select select-bordered w-full max-w-xs " onChange={(e) => setSort(e.target.value)}>

          <option value='asc'>Law to High</option>
          <option value='desc'>High to Low</option>
      </select>
  )
}
