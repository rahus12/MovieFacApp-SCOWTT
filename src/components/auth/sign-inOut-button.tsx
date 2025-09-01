// from documentation
// https://authjs.dev/getting-started/session-management/login

import { signIn, signOut } from "@/auth"

 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google", {redirectTo: "/userPage"})
      }}
    >
      {/* basic styling using gpt */}
      <button type="submit" className="w-40 rounded-xl bg-blue-600 px-4 py-2 text-white font-semibold 
                   shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 
                   focus:ring-blue-400 focus:ring-offset-1 transition"
                   >Sign in</button>
    </form>
  )
}

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({redirectTo: "/"})
      }}
    >
      <button type="submit" className="w-40 rounded-xl bg-red-700 px-4 py-2 text-white font-semibold 
                   shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 
                   focus:ring-gray-400 focus:ring-offset-1 transition"
                   >Sign Out</button>
    </form>
  )
}