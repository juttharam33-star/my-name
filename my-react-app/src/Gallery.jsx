import React, { useState } from "react";
import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    category: "Characters",
    title: "Yoon Jiwoo",
    image:
      "https://i.pinimg.com/736x/e0/8a/55/e08a557464658570076e3796292457d8.jpg",
  },
  {
    id: 2,
    category: "Characters",
    title: "Choi Mujin",
    image:
      "https://i.pinimg.com/1200x/08/3f/f3/083ff393db17b4dafbd7daa4d05a7231.jpg",
  },
  {
    id: 3,
    category: "Characters",
    title: "Jeon Pil-do",
    image:
      "https://i.pinimg.com/736x/6c/f9/15/6cf91502eff10678e710d0348e022ac6.jpg",
  },
  {
    id: 4,
    category: "Characters",
    title: "Do Gang-jae",
    image:
      "https://i.pinimg.com/736x/6e/af/cf/6eafcf9e9c52e2acdc796253322b2de1.jpg",
  },
  {
    id: 5,
    category: "Characters",
    title: "Cha Giho",
    image:
      "https://i.pinimg.com/1200x/4a/53/8c/4a538c696b0b04e44d4aa5fd0e152603.jpg",
  },
  {
    id: 6,
    category: "Characters",
    title: "Song Joon-su",
    image:
      "https://i.pinimg.com/736x/01/90/2a/01902a84e8086bd737e835c628a6c81d.jpg",
  },
  {
    id: 7,
    category: "Characters",
    title: "Yoon Donghoon",
    image:
      "https://i.pinimg.com/1200x/94/fe/7b/94fe7bf0a6706d2e9c363f266fa49f08.jpg",
  },
  {
    id: 8,
    category: "Moments",
    title: "The Beginning",
    image:
      "https://i.pinimg.com/1200x/66/b1/d5/66b1d52a4f3b5623130b055379c96b69.jpg",
  },
  {
    id: 9,
    category: "Action",
    title: "The Fight",
    image:
      "https://i.pinimg.com/736x/d6/f3/4e/d6f34e01fa0f216948bde4718b45499f.jpg",
  },
  {
    id: 10,
    category: "Moments",
    title: "Into the Underworld",
    image:
      "https://i.pinimg.com/736x/18/ff/4f/18ff4f8b8b73335c8a4066b7cbea2d34.jpg",
  },
  {
    id: 11,
    category: "Action",
    title: "The Investigation",
    image:
      "https://i.pinimg.com/1200x/ff/d1/db/ffd1dbe95b9356cc5a9fa690f98609ad.jpg",
  },
  {
    id: 12,
    category: "Moments",
    title: "The Truth",
    image:
      "https://i.pinimg.com/1200x/7a/f0/33/7af0330709cc08a8fa080e1530411b2b.jpg",
  },
  {
    id: 13,
    category: "Action",
    title: "Betrayal",
    image:
      "https://i.pinimg.com/736x/c0/f0/b1/c0f0b16e18923eb6263afd8f0aff039a.jpg",
  },
  {
    id: 14,
    category: "Moments",
    title: "The Final Hunt",
    image:
      "https://i.pinimg.com/1200x/dd/16/79/dd167920766f64b2bb6501f0f5f25fa7.jpg",
  },
  {
    id: 15,
    category: "Action",
    title: "Final Confrontation",
    image:
      "https://i.pinimg.com/1200x/a1/bf/33/a1bf331c14b0d42fdfbf64fd6e3c98ed.jpg",
  },
  {
    id: 16,
    category: "Moments",
    title: "My Name",
    image:
      "https://i.pinimg.com/736x/d8/98/60/d89860e0e01bd51bdf0a2c0a7d9efda8.jpg",
  },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Characters", path: "/characters" },
  { name: "Episodes", path: "/episodes" },
  { name: "Story", path: "/story" },
  { name: "Gallery", path: "/gallery" },
  { name: "Quiz", path: "/quiz" },
];

const categories = ["All", "Characters", "Moments", "Action"];

const Gallery = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">

          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-red-600 bg-red-600/10">
              <span className="text-lg font-black text-red-500">
                M
              </span>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em]">
                My Name
              </p>

              <p className="text-[8px] uppercase tracking-[0.35em] text-white/40">
                Fan Hub
              </p>
            </div>

          </Link>

          {/* Desktop Navbar */}

          <div className="hidden items-center gap-6 md:flex">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-bold uppercase tracking-[0.18em] transition ${
                  link.path === "/gallery"
                    ? "text-red-500"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
          >
            <span className="text-lg">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>

        </div>

        {/* Mobile Navbar */}

        {menuOpen && (
          <div className="border-t border-white/10 bg-black px-6 py-5 md:hidden">

            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-white/5 pb-3 text-xs font-bold uppercase tracking-[0.2em] ${
                    link.path === "/gallery"
                      ? "text-red-500"
                      : "text-white/60"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

            </div>

          </div>
        )}

      </nav>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-20">

        <img
          src="https://i.pinimg.com/1200x/37/c1/bd/37c1bda9e47dd0d921853fed110e8749.jpg"
          alt="My Name Gallery"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">

          <div className="max-w-3xl">

            <div className="mb-6 flex items-center gap-3">

              <span className="h-[2px] w-12 bg-red-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
                My Name • Visual Archive
              </span>

            </div>

            <h1 className="text-6xl font-black uppercase leading-[0.9] md:text-8xl">

              The

              <br />

              <span className="text-red-600">
                Gallery
              </span>

            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-white/60 md:text-base">
              Explore the characters, moments and action that
              make My Name unforgettable.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">

        <div className="grid gap-8 md:grid-cols-2 md:items-end">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
              Visual Archive
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
              Moments
              <span className="text-red-600"> In Frame</span>
            </h2>

          </div>

          <p className="max-w-xl text-sm leading-8 text-white/40 md:ml-auto">
            Browse through the world of My Name, from its
            characters and intense action sequences to the
            moments that define Jiwoo's story.
          </p>

        </div>

      </section>


      {/* =====================================================
          CATEGORY FILTERS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-10 md:px-12">

        <div className="flex flex-wrap gap-3">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-6 py-3 text-[9px] font-bold uppercase tracking-[0.2em] transition ${
                activeCategory === category
                  ? "border-red-600 bg-red-600 text-white"
                  : "border-white/10 text-white/50 hover:border-red-600/50 hover:text-white"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

      </section>


      {/* =====================================================
          FEATURED IMAGE
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-12 md:px-12">

        <button
          onClick={() => setSelectedImage(images[0])}
          className="group relative block h-[400px] w-full overflow-hidden rounded-2xl border border-white/10 text-left md:h-[550px]"
        >

          <img
            src={images[0].image}
            alt={images[0].title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 p-7 md:p-10">

            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-red-500">
              Featured
            </p>

            <h3 className="mt-2 text-3xl font-black uppercase md:text-5xl">
              {images[0].title}
            </h3>

            <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
              Click to view
            </p>

          </div>

        </button>

      </section>


      {/* =====================================================
          GALLERY GRID
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">

          {filteredImages.map((item, index) => (

            <button
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`group relative overflow-hidden rounded-xl border border-white/5 bg-[#0a0a0a] text-left ${
                index % 5 === 0
                  ? "md:row-span-2"
                  : ""
              }`}
            >

              <div
                className={`relative ${
                  index % 5 === 0
                    ? "h-[420px] md:h-full"
                    : "h-[230px] md:h-[280px]"
                }`}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Hover overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition group-hover:opacity-100" />

                {/* Zoom icon */}

                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xs opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                  +
                </div>

                {/* Info */}

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">

                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-red-500">
                    {item.category}
                  </p>

                  <h3 className="mt-1 text-sm font-black uppercase md:text-base">
                    {item.title}
                  </h3>

                </div>

              </div>

            </button>

          ))}

        </div>

        {filteredImages.length === 0 && (

          <div className="py-20 text-center">

            <p className="text-sm text-white/30">
              No images found.
            </p>

          </div>

        )}

      </section>


      {/* =====================================================
          QUOTE SECTION
      ===================================================== */}

      <section className="border-y border-white/5 bg-[#090909]">

        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-12">

          <span className="text-5xl text-red-600">
            "
          </span>

          <blockquote className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
            Sometimes the truth
            <br />
            hurts more than revenge.
          </blockquote>

          <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">
            My Name • Fan Archive
          </p>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 py-24 md:px-12">

        <div className="mx-auto max-w-5xl rounded-3xl border border-red-900/30 bg-gradient-to-br from-[#180506] to-[#090909] px-7 py-16 text-center md:px-16">

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
            Continue Exploring
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">
            Know The
            <br />
            Characters
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/40">
            Explore the people behind the story and discover
            their roles in Jiwoo's journey.
          </p>

          <Link
            to="/characters"
            className="mt-8 inline-flex rounded-full bg-red-600 px-7 py-3 text-xs font-bold uppercase tracking-widest transition hover:bg-red-700"
          >
            View Characters
          </Link>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/5 bg-black px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">

          <Link
            to="/"
            className="text-sm font-black uppercase tracking-[0.25em]"
          >
            My Name
          </Link>

          <div className="flex flex-wrap justify-center gap-5">

            {navLinks.map((link) => (

              <Link
                key={link.path}
                to={link.path}
                className="text-[9px] font-bold uppercase tracking-widest text-white/30 transition hover:text-white"
              >
                {link.name}
              </Link>

            ))}

          </div>

          <p className="text-xs text-white/20">
            Fan-made website
          </p>

        </div>

      </footer>


      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {selectedImage && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-sm transition hover:bg-red-600"
            >
              ✕
            </button>


            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain"
            />


            <div className="mt-4 text-center">

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-red-500">
                {selectedImage.category}
              </p>

              <h3 className="mt-2 text-xl font-black uppercase">
                {selectedImage.title}
              </h3>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Gallery;