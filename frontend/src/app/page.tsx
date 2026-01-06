"use client"
import { useState } from "react";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {
  //setup for GET requests only (table loading, users table, leads ,etc)
  const { data, error, isLoading } = useSWR(`http://127.0.0.1:8000/api/hello`, fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  // async function getDjangoAPIData() {
  //   const response = await fetch("http://127.0.0.1:8000/api/hello");
  //   const data = await response.json();
  //   console.log(data);
  // }

  // async function handleClick() {
  //   await getDjangoAPIData();
  // }
  
  return (
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      </main>
  );
}
