"use client"

import { serverAction } from "@/lib/actions/test"



export default function NotFound()
{
  return (
    <main>
      <h2>Page Not Found</h2>
      <button
          onClick={() => serverAction("It's work!")}
      >
          Click here to test the issue
      </button>
      <p>Expected behaviour: http 404 and "It's work!" in the server console.</p>
      <p>Vercel behaviour: http 405 and nothing else.</p>
    </main>
  );
}