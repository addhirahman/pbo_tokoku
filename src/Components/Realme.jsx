import React, { useState } from 'react';


const Realme = () => {
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const realmeData = [
    // ... (data produk HP Realme lainnya)
  ];

  // Fungsi untuk menampilkan popup dengan detail produk Realme
  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setShowProductDetail(true);
  };

  // Fungsi untuk menutup popup
  const closeProductDetail = () => {
    setSelectedProduct(null);
    setShowProductDetail(false);
  };

  return (
    <>
      <section className='w-11/12 p-11 mx-auto border-black mt-28 mb-28 border-t border-b'>
        <h1 className='text-2xl p-3 bg-blue-50 w-40 text-center mb-5 rounded-3xl'>Realme</h1>
        <div className="flex mb-7">
          {realmeData.map((data) => (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg mx-2"
              key={data.id}
              onClick={() => openProductDetail(data)} // Menampilkan popup ketika gambar HP Realme diklik
            >
              <img
                src={data.image} // Ganti dengan URL gambar sesuai kebutuhan
                alt={data.title}
                className="w-full"
              />
              <div className="px-6 py-4">
                <h1>{data.title}</h1>
                <p className="text-gray-700 text-base">
                  {data.content}
                </p>
                <button className='bg-slate-800 text-white p-2 h-10 w-20 mt-2 rounded-sm' >Pesan</button>
              </div>
            </div>
          ))}
        </div>

        {/* Tampilkan popup detail produk jika showProductDetail adalah true */}
        {showProductDetail && (
          <ProductDetail product={selectedProduct} onClose={closeProductDetail} />
        )}
      </section>
    </>
  );
};

export default Realme;
