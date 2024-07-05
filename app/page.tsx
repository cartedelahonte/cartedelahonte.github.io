import Header from "@/app/ui/header";
import Filters from "@/app/ui/filters";
import Map from "@/app/ui/map";
import List from "@/app/ui/list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <Filters/>
      <Map/>
      <List/>
    </main>
  );
}
