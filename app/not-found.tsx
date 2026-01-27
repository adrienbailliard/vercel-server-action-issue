"use client"

import { handleSubmit } from "@/lib/form/handlers";
import { serverAction } from "@/lib/actions/test";


export default function NotFound()
{
  return (
    <main>
      <section className="hero text-center">
        <h2>Page Not Found</h2>
        <form
          onSubmit={ (e) => handleSubmit(e, serverAction) }
        >
          <button
              type="submit"
              name="submitButton"
          >
              Click here to test the issue
          </button>
        </form>
        <p>Expected behaviour: http 404 and "Is it working?" in the server console.</p>
        <p>Vercel behaviour: http 405 and nothing else.</p>
        <p>The server action in my Header component fails on Vercel but works locally with **npm run build && npm run start**.</p>
      </section>
    </main>
  );
}