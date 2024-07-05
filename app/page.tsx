import Header from "@/app/ui/header";
import Filters from "@/app/ui/filters";
import List from "@/app/ui/list";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/app/ui/map"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <Filters/>
      <Map/>
      <List/>
    </main>
  );
}
