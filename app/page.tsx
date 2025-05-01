"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md text-center space-y-6">
        <h1 className="text-2xl font-bold">CS391 OAuth App</h1>

        {!session && (
          <button
            onClick={() => signIn("github")}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Sign in with GitHub
          </button>
        )}

        {session && (
          <div className="space-y-4">
            <img
              src={session.user?.image ?? ""}
              alt="Profile"
              className="rounded-full w-20 mx-auto"
            />
            <p className="font-semibold">{session.user?.name}</p>
            <p className="text-gray-600">{session.user?.email}</p>
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </main>
  )
}

