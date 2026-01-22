"use client"
// import { loginAction } from "@/lib/actions/auth"; // Import the function we wrote
import { useState } from "react";
import { SWRConfig } from "swr";

// export default function Home() {
//   //setup for GET requests only (table loading, users table, leads ,etc)
//   // const { data, error, isLoading } = useSWR(`http://127.0.0.1:8000/api/hello`, fetcher)
//   // if (error) return <div>failed to load</div>
//   // if (isLoading) return <div>loading...</div>

export default function Home() {
  // const [result, setResult] = useState("");

  // // This function connects your button click to the server action
  // async function handleTestLogin(formData: FormData) {
  //   const response = await loginAction(formData);
    
  //   if (response.success) {
  //     setResult("Success! Check your Browser Cookies tab.");
  //   } else {
  //     setResult("Error: " + response.error);
  //   }
  // }

  return (
    <div className="p-20 flex flex-col gap-4">
      <h1 className="text-xl font-bold">Test Login Action</h1>
      
      {/* Note: We use the 'action' attribute instead of 'onClick' */}
      <form className="flex flex-col gap-2 max-w-sm">
        <input 
          name="email" // This 'name' is what FormData looks for!
          type="email" 
          placeholder="admin@example.com" 
          className="border p-2 text-black"
          required 
        />
        <input 
          name="password" 
          type="password" 
          placeholder="password" 
          className="border p-2 text-black"
          required 
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Run Login Action
        </button>
      </form>

      <div className="mt-4 p-4 bg-gray-100 dark:text-black">
        <strong>Status:</strong>
      </div>
    </div>
  );
}