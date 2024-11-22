import { FaFilter } from "react-icons/fa"
import { GrPowerReset } from "react-icons/gr"

// 
export const FilterBar = ({
    setBrand,
    setCategory,
    handleReset,
    uniqueBrand ,
    uniqueCategory
}) => {
  return (
      <div className="bg-gray-200 h-[1000px] p-4 rounded-md">
          <div className="flex items-center gap-1
          ">
              <FaFilter size={20} />

              <h2 className="text-xl font-semibold">Filters</h2>
          </div>
          <div className="mt-8 flex flex-col gap-1 items-center">
              <div className="w-full">
                  <select className="p-[11px] w-full border border-black rounded-md" onChange={(e) => setBrand(e.target.value)}>
                      <option value=''>Brands</option>
                      {uniqueBrand.map((brand) =>
                          <option key={brand} value={brand}>{ brand}</option>
                    )}
                  </select>
              </div>
              <div className="w-full">
                  <select className="p-[11px] w-full border border-black rounded-md" onChange={(e) => setCategory(e.target.value)}>
                      <option value=''>Categories</option>
                      {uniqueCategory.map((category) =>
                          <option key={category} value={category}>{category}</option>
                      )}
                      
                  </select>
              </div>
          </div>

          <button className="btn btn-primary w-full mt-4 items-center" onClick={handleReset}>
              <p>Reset</p>
              <GrPowerReset />

          </button>
      </div>
      
  )
}
