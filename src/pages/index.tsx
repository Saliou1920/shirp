import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Head from "next/head";
import { api } from "~/utils/api";

export default function Home() {
  const user = useUser();

  const { data } = api.posts.getAll.useQuery();
  console.log(data);
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {data?.map((post) => (
            <div key={post.id}>{post.content}</div>
          ))}
          <div>{user.isSignedIn ? <SignOutButton /> : <SignInButton />}</div>
        </div>
      </main>
    </>
  );
}
