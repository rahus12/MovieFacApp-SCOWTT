
import { setMovie } from "../api/actions/actions"

export default function UpdateMovie() {
  return (
    <div className="w-full max-w-2xl bg-gray-700 p-8 rounded-3xl shadow-lg text-center mb-6">
  <h2 className="text-xl font-semibold text-white mb-4">Enter Your Favorite Movie 🎬</h2>
  <form action={setMovie} className="flex flex-col sm:flex-row items-center gap-4">
    <input
      name="favMovie"
      type="text"
      placeholder="Your favorite movie"
      className="flex-1 bg-gray-100 text-gray-900 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-colors duration-200"
    >
      Submit
    </button>
  </form>
</div> 
  )
}
