import Banner from "@/components/Banner";
import NewArrival from "@/components/NewArrival";

export default function Home() {
  return (
    <main className="w-9/12 mx-auto space-y-4">
      <Banner></Banner>
      <NewArrival></NewArrival>
      <div className="grid grid-cols-12">
        <div className="col-span-4 border">All Categories</div>
        <div className="col-span-8 border">Main Content</div>
      </div>
    </main>
  );
}
