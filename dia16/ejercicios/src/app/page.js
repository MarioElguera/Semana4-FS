'use client';
import Image from "next/image";
import GitHubUser from '../components/githubuser';
import SearchMarvel from '../components/marvelApi';

export default function Home() {
  return (
    <div>
      <GitHubUser />
      <br></br>
      <hr></hr>
      <br></br>

      <SearchMarvel />
    </div>
  );
}
