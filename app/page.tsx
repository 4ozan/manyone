import Image from "next/image";
import '@/app/styles/globals.css';

export default function Home() {
  return (
  <div className="backdrop-blur-[2px]">
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Travelly</h1>
        <ul className="flex space-x-6">
          <li><a href="#locations" className="hover:text-gray-300">Locations</a></li>
          <li><a href="#benefits" className="hover:text-gray-300">Benefits</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
      
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <h2 className="text-5xl font-bold mb-4">Travel Beyond Limits.</h2>
        <h3 className="text-2xl mb-8">
          Start your travel at an affordable price with Travelly <br />Contact
          us now below.
        </h3>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg text-xl transition duration-300">Book Now</button>
      </section>

      <section id="locations" className="relative py-20 bg-gray-100">
        <header className="text-center p-8 relative z-10">
          <h2 className="text-4xl font-bold mb-4">The Perfect Travelling Experience.</h2>
          <h3 className="text-xl text-gray-600 mb-8">
            We cover everything from picking the perfect hotel, <br />
            flight and travelling destination.
          </h3>

          <Image src="/cloud.png" className="absolute top-0 left-[10%] animate-float" alt="Cloud" width={100} height={100} />
          <Image src="/cloud.png" className="absolute top-20 right-[10%] animate-float-delay" alt="Cloud" width={100} height={100} />
        </header>
      </section>

      <section id="benefits" className="py-20 bg-white">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Perfect Travel</h2>
          <h3 className="text-xl text-gray-600">
            We cover everything for picking the perfect hotel <br />
            to flight and destination.
          </h3>
        </header>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-6">
              <Image src="/hotel.svg" alt="Hotel icon" width={50} height={50} className="text-blue-600" />
            </div>
            <h4 className="text-2xl font-semibold mb-4 text-center">Travel</h4>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed
              deleniti modi ipsa blanditiis incidunt!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-6">
              <Image src="/fly (2).svg" alt="Flight icon" width={50} height={50} className="text-blue-600" />
            </div>
            <h4 className="text-2xl font-semibold mb-4 text-center">Hotel</h4>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed
              deleniti modi ipsa blanditiis incidunt!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-6">
              <Image src="/fly (2).svg" alt="Fly icon" width={50} height={50} className="text-blue-600" />
            </div>
            <h4 className="text-2xl font-semibold mb-4 text-center">Fly</h4>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed
              deleniti modi ipsa blanditiis incidunt!
            </p>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
          <header className="text-center mb-8">
            <h2 className="text-4xl font-bold">Contact Us</h2>
          </header>
          <form action="https://formspree.io/mzbbyqbo" method="POST" className="space-y-6">
            <div className="space-y-2">
              <label className="block text-gray-700 text-lg">Name:</label>
              <input 
                id="name" 
                type="text" 
                name="name" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-700 text-lg">Email:</label>
              <input 
                id="email" 
                type="email" 
                required 
                name="_replyto" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  </div>
  );
}
