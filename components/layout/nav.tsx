import Navbar from "./navbar";
import { getServerSession } from "next-auth/next";
import { options } from "../../app/api/auth//[...nextauth]//options";

export default async function Nav() {
  const session = await getServerSession(options);
  return <Navbar session={session} />
}
