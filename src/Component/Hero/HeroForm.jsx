import React from 'react'

const HeroForm = () => {
  return (
    <div className="bg-transparent p-4 rounded-lg shadow-none flex justify-center items-center w-full mx-auto my-8">
      <form className="flex flex-col md:flex-row items-center md:items-end gap-4 w-full max-w-[400px] md:max-w-[1000px] justify-center mx-auto">
        <div>
          <label className="block text-sm hidden font-medium mb-2">Nom</label>
          <input type="text" placeholder="Brice Sam" className="input input-bordered w-[200px] bg-white" />
        </div>
        <div>
          <label className="block text-sm hidden font-medium mb-2">Montant du prêt</label>
          <input type="number" placeholder='Montant du prêt' className="input input-bordered w-[200px] bg-white" />
        </div>
        <div>
          <label className="block text-sm hidden font-medium mb-2">Durée</label>
          <select defaultValue="Pick a color" className="select w-[200px] input-bordered bg-white">
            <option disabled={false}>Pick a color</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
        <button type="submit" className="btn btn-warning text-black text-xl rounded-full mt-6 md:mt-6">Voir les offres</button>
      </form>
    </div>
  )
}

export default HeroForm
