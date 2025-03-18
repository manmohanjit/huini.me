import Navigation from "@/components/Navigation";
import Head from "next/head";
import Link from "next/link";

export default function ({children, title}) {
  return (
    <div>
      <Head>
        <title>{title ? `${title} // ` : ""}hello, i'm Huini</title>
      </Head>

      <div className="bg-white z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link
            href="/"
            className="bg-[url(/images/logo.svg)] bg-no-repeat bg-center bg-contain w-[54px] h-[54px] block indent-[-9999px]"
          >
            Huini
          </Link>

          <Navigation/>
        </div>
      </div>

      {children}
    </div>
  )
}