import Banner from "@/components/Banner";
import NewArrival from "@/components/NewArrival";
import TopBooks from "@/components/TopBooks";

export default function Home() {
  return (
    <main className="w-9/12 mx-auto space-y-4">
      <Banner></Banner>
      <NewArrival></NewArrival>
      <TopBooks></TopBooks>
    </main>
  );
}
