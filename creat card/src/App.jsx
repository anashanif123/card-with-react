import './App.css'

function App() {

  const products = [{
    key: 1,
    name: "Smartphone",
    category: "Electronics",
    price: 699.99,
    image: "https://m.media-amazon.com/images/I/314Rp+8XKWL._AC_SR300,300.jpg",
  },
  {
    key: 2,
    name: "Laptop",
    category: "Electronics",
    price: 1199.99,
    image: "https://acom.pk/cdn/shop/articles/laptop_or_macbook.jpg?v=1670917158",
  },
  {
    key: 3,
    name: "Coffee Maker",
    category: "Appliances",
    price: 89.99,
    image: "https://cubeonline.pk/cdn/shop/files/1227537-1_1024x1024.jpg?v=1693644465",
  },
  {
    key: 4,
    name: "Desk Chair",
    category: "Furniture",
    price: 179.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShrIJOdb79A5NxyJwabVemqmbNE8KZKeAVA&s",
  },{
    key: 5,
    name: "Laptop",
    category: "Electronics",
    price: 1199.99,
    image: "https://www.cultbeauty.co.uk/images?url=https://static.thcdn.com/widgets/257-en/47/original-Coming_Soon_Old_Homepage_ElizabethArden%5B1%5D-145947.jpg&format=webp&auto=avif&width=342&height=456&fit=crop",
  },{
    key: 6,
    name: "Laptop",
    category: "Electronics",
    price: 1199.99,
    image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FkZ2V0c3xlbnwwfHwwfHx8MA%3D%3D",
  },{
    key: 7,
    name: "Laptop",
    category: "Electronics",
    price: 1199.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEw2ce40BkWdXvgMffW8BefaU8jogoAzSNDA&s",
  },{
    key: 8,
    name: "Laptop",
    category: "Electronics",
    price: 1199.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s",
  },]

  return (
    <>
   
    <div className="flex flex-wrap -m-4">
 {products.map(product => (
  <div className="lg:w-1/4 md:w-1/2 p-4 w-full border border-black-600">
  <a className="block relative h-48 rounded overflow-hidden">
    <img
      alt="ecommerce"
      className="object-cover object-center w-full h-full block"
      src={product.image}
    />
  </a>
  <div className="mt-4">
    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
      {product.category}
    </h3>
    <h2 className="text-gray-900 title-font text-lg font-medium">
      {product.name}
    </h2>
    <p className="mt-1">{product.price}</p>
  </div>
</div>
 ))}
 </div>
  </>
  )
}

export default App