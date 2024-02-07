
const Banner = () => {
  return (
    <div className="bg-teal-200">
      <div className="flex w-full justify-between px-4 py-10">
      <div className="Left space-y-8">

        <h2 className="text-3xl font-bold leading-snug">Buy and Sell Books for Best Prices</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam minus, eius voluptas officiis maiores.</p>
        <div className="">
            <input type="search" name="search" id="search" placeholder="Search a book" className="py-2 px-2 outline-none bg-gray-100"/>
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">Search</button>
        </div>
      </div>
      {/* <div>Right side</div> */}
      </div>
    </div>
  )
}

export default Banner
