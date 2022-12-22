"use client";
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';

export default function SearchAppBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    //alert(`isi pencarian : ${search}`)
    setSearch("");
    router.push(`/products/search/${search}`);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={search}
          placeholder="Enter the search term"
          onChange={(e) => setSearch(e.target.value)}  
        />
        <button
          type="submit"
        >
          Find
        </button>
      </form>
      <br />
    </>
  );
}