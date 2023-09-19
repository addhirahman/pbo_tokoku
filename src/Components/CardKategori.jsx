import React from 'react';

const Kategori = () => {
  const dataCard = [
    {
      id: 1,
      title: 'realmeC53',
      harga: "3.000.000",
      content: "Hp Realme Spesifikasi...",
      image: 'images/real-53.jpeg', // URL gambar slide 1
    },
    {
      id: 2,
      title: 'realmeC53',
      harga: "13.000.000",
      content: "Hp Realme Spesifikasi...",
      image: 'images/real-53.jpeg', // URL gambar slide 2
    },
    {
      id: 3,
      title: 'realmeC53',
      harga: "23.000.000",
      content: "Hp Realme Spesifikasi...",
      image: 'images/real-53.jpeg', // URL gambar slide 3
    },
    {
      id: 4,
      title: 'realmeC53',
      harga: "3.000.000",
      content: "Hp Realme Spesifikasi...",
      image: 'images/real-53.jpeg', // URL gambar slide 4
    },
    // Tambahkan lebih banyak data slide jika diperlukan
  ];


  return (
    <section className='w-11/12 p-11 mx-auto border-black mt-12 mb-28 border-t border-b'>
      <h1 className='text-2xl p-3 bg-blue-50 w-40 text-center mb-2 rounded-3xl'>Handphone</h1>
      <div className="flex mb-7" id='handphone'>
        {dataCard.map((data) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-2xl mx-auto" // Menggunakan mx-2 untuk memberikan margin horizontal
            key={data.id}
          >
            <img
              src={data.image} // Ganti dengan URL gambar sesuai kebutuhan
              alt={`data ${data.id}`}
              className="w-48 mx-auto rounded-full"
            />
            <div className="px-6 py-4">
              <h1>{data.title}</h1>
              <h1>{data.harga}</h1>
              <p className="text-gray-700 text-base">
                {data.content}
              </p>
              <button className='bg-slate-800 text-white p-2 h-10 w-full mt-2 rounded-sm'>Pesan</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mb-7" id='handphone'>
        {dataCard.map((data) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-2xl mx-auto" // Menggunakan mx-2 untuk memberikan margin horizontal
            key={data.id}
          >
            <img
              src={data.image} // Ganti dengan URL gambar sesuai kebutuhan
              alt={`data ${data.id}`}
              className="w-48 mx-auto  rounded-full"
            />
            <div className="px-6 py-4">
              <h1>{data.title}</h1>
              <h1>{data.harga}</h1>
              <p className="text-gray-700 text-base">
                {data.content}
              </p>
              <button className='bg-slate-800 text-white p-2 h-10 w-full mt-2 rounded-sm'>Pesan</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Kategori;
