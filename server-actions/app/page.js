
// import fs from "fs/promises";
import { submitActions } from "@/actions/form";
export default function Home() {

  // const submitActions = async (e) => {
  //   "use server";
  //   console.log(e.get("name"), e.get("add"));
  //   let a = await fs.writeFile("bikash.txt",`Name: ${e.get("name")}\nAddress: ${e.get("add")}`);
  //   console.log(a);
  // }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <form action={submitActions} className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-medium mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="add" className="block text-white font-medium mb-1">
            Address:
          </label>
          <input
            type="text"
            id="add"
            name="add"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
