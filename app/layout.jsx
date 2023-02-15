import ClientProvider from "@/components/ClientProvider";
import Login from "@/components/Login";
import { SessionProvider } from "@/components/SessionProvider";
import SideBar from "@/components/SideBar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import "./globals.css";
import Head from "@/components/Head";



export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">

      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              {/* Side bar */}
              <div className="bg-[#E7E7E7] max-w-xs overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>

              {/* Client Provider - Notification */}
              <ClientProvider />

              <div className="bg-[#E7E7E7] flex-1">
              <Head />
              {children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}