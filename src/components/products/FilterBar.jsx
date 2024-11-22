import { FaFilter } from "react-icons/fa"
import { GrPowerReset } from "react-icons/gr"

// 
export const FilterBar = () => {
  return (
      <div className="bg-gray-200 h-[1000px] p-4 rounded-md">
          <div className="flex items-center gap-1
          ">
              <FaFilter size={20} />

              <h2 className="text-xl font-semibold">Filters</h2>
          </div>
          <div className="mt-8 flex flex-col gap-1 items-center">
              <div className="w-full">
                  <select className="p-[11px] w-full border border-black rounded-md">
                      <option disabled selected>Brand</option>
                      <option>Marge</option>
                      <option>Bart</option>
                      <option>Lisa</option>
                      <option>Maggie</option>
                  </select>
              </div>
              <div className="w-full">
                  <select className="p-[11px] w-full border border-black rounded-md">
                      <option disabled selected>Category</option>
                      <option>Marge</option>
                      <option>Bart</option>
                      <option>Lisa</option>
                      <option>Maggie</option>
                  </select>
              </div>
          </div>

          <button className="btn btn-primary w-full mt-4 items-center">
              <p>Reset</p>
              <GrPowerReset />

          </button>
      </div>
      
  )
}
