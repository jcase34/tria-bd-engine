"use client"
import { useState } from "react";
import Image from "next/image";
import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {
  //setup for GET requests only (table loading, users table, leads ,etc)
  // const { data, error, isLoading } = useSWR(`http://127.0.0.1:8000/api/hello`, fetcher)
  // if (error) return <div>failed to load</div>
  // if (isLoading) return <div>loading...</div>

  const [data, setData] = useState({}) // if new data comes in, re-render using setData function

  async function getDjangoAPIData() { //fetcher function, relates to getDjangoAPIData
    const response = await fetch("http://127.0.0.1:8000/api/token/pair", {
      method: "POST", //push data
      headers: {"Content-Type" : "application/json" },
      body: JSON.stringify({
        email: "admin@example.com",
        password: "learncode"
      })
      
    }); // the actual fetch call, response is logged after it finishes (non-blocking)

    
    console.log(response) // log the response in the browswer, includes all header information, type, but the body content isn't provided (locked?)
    const data = await response.json(); // Wait for the response to be received (non blocking) once it is, convert it to JSON (pulls the body out)
    console.log(data); // log the json data in the browser console
    setData(data) //set the data variable and re-render the data within the browswer
  }

  async function handleClick() { //a wrapper function for the djangoAPI data call - clarified function name for button
    await getDjangoAPIData(); // because our whole call / response is asycn, we await all the operations on this function
  }
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        {/* this button below triggers the handleClick Method */}
        <button onClick={handleClick}> 
          Lookup Data
        </button>
        {/*  */}
        <div>
          {JSON.stringify(data)}
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
