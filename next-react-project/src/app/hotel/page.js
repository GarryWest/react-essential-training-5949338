async function getData() {
  const res = await fetch (
    "https://snowtooth-hotel-api.fly.dev"
  );
  return res.json();
}

function HotelBlock({ name, capacity }) {
  return (
    <div>
      <h2>
        {name}
      </h2>
      {capacity}
    </div>
  )
}

export default async function Page(){
  const data = await getData();
  return (
    <main>
      <div>
          <h1>Hotel Details</h1>
          <div>{data.map((hotel) => (
            <HotelBlock name = {hotel.name} capacity = {hotel.capacity} />
          ))}</div>
      </div>
    </main>
  );
}