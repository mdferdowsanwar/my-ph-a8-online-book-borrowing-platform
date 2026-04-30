import Banner from "@/components/Banner";
import NewArrival from "@/components/NewArrival";

export default function Home() {
  return (
    <main className="w-9/12 mx-auto space-y-4">
      <Banner></Banner>
      <NewArrival></NewArrival>
      <h2>Homepage</h2>
    </main>
  );
}
