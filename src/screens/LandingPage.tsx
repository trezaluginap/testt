import React from "react";
import { Link } from "react-router-dom";
const BackgroundImage =
  "https://img.pikbest.com/ai/illus_our/20230427/f8ba94a45d27fe7b283d9e9329eb300b.jpg!w700wp";
// import BackgroundImage from "../assets/screen.png";

function LandingPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Konten lain tetap sama */}
      <header className="container mx-auto px-20 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-center">
          <span>
            E<span className="text-blue-500">V</span>ENT
          </span>{" "}
          <br />
          <span>FUNDLY</span>
        </div>
        <nav className="hidden md:flex space-x-10">
          <Link to="/" className="hover:text-blue-500">
            Beranda
          </Link>
          <Link to="/fitur-utama" className="hover:text-blue-500">
            Fitur Utama
          </Link>
          <Link to="/tentang-kami" className="hover:text-blue-500">
            Tentang Kami
          </Link>
          <Link to="/bantuan" className="hover:text-blue-500">
            Bantuan
          </Link>
        </nav>
        <div className="space-x-4">
          <Link to="/signin">
            <button className="px-4 py-2 text-sm hover:text-blue-500">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 text-sm bg-blue-600 rounded hover:bg-blue-700">
              Sign Up
            </button>
          </Link>
        </div>
      </header>

      {/* Konten utama dengan layout lebih ke tengah */}
      <main className="container mx-auto px-20 py-16 flex flex-col md:flex-row items-center justify-center">
        {/* Bagian teks kiri */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-blue-500">SMART</span>-<span>SAVINGS</span>
            <br />
            PLANNED-<span>EVENTS</span>
          </h1>
          <p className="text-gray-400 max-w-md mx-auto md:mx-0">
            Nunc urna at, elit Nullam nulla, convallis. Donec nulla, gravida
            sollicitudin. ipsum id fringilla elementum Vestibulum tincidunt ex
            tincidunt Ut odio tortor. non leo. elit nisl. non venenatis vel
            faucibus non id tincidunt Cras non. nisl.
          </p>
          <button className="px-8 py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Bagian kanan tanpa SVG untuk efek garis */}
        <div className="md:w-1/2 mt-10 md:mt-0 h-96 relative rounded-lg"></div>
      </main>
    </div>
  );
}

export default LandingPage;
