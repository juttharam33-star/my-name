import React, { useState } from "react";
import { Link } from "react-router-dom";

const characters = [
  {
    id: 1,
    name: "Yoon Jiwoo",
    role: "Main Character",
    group: "Main Leads",
    image:
      "https://i.pinimg.com/736x/e0/8a/55/e08a557464658570076e3796292457d8.jpg",
    description:
      "Driven by revenge and the search for the truth behind her father's death, Jiwoo enters the criminal underworld and becomes an undercover police officer.",
  },
  {
    id: 2,
    name: "Choi Mujin",
    role: "Crime Boss",
    group: "Main Leads",
    image:
      "https://i.pinimg.com/1200x/08/3f/f3/083ff393db17b4dafbd7daa4d05a7231.jpg",
    description:
      "The powerful leader of Dongcheon who becomes one of the most important figures in Jiwoo's dangerous journey.",
  },
  {
    id: 3,
    name: "Jeon Pil-Do",
    role: "Police Detective",
    group: "Police",
    image:
      "https://i.pinimg.com/736x/6c/f9/15/6cf91502eff10678e710d0348e022ac6.jpg",
    description:
      "Jiwoo's police partner who becomes closely involved in her investigation and the secrets surrounding her identity.",
  },
  {
    id: 4,
    name: "Do Gang-jae",
    role: "Criminal",
    group: "Dongcheon",
    image:
      "https://i.pinimg.com/736x/6e/af/cf/6eafcf9e9c52e2acdc796253322b2de1.jpg",
    description:
      "A violent member of Dongcheon whose conflict with Jiwoo becomes an important part of her dangerous path.",
  },
  {
    id: 5,
    name: "Cha Giho",
    role: "Police Officer",
    group: "Police",
    image:
      "https://i.pinimg.com/1200x/4a/53/8c/4a538c696b0b04e44d4aa5fd0e152603.jpg",
    description:
      "A senior police officer determined to bring down Dongcheon and uncover the truth behind the criminal organization.",
  },
  {
    id: 6,
    name: "Song Joon-su",
    role: "Police Officer",
    group: "Police",
    image:
      "https://i.pinimg.com/736x/01/90/2a/01902a84e8086bd737e835c628a6c81d.jpg",
    description:
      "A police officer connected to the investigation surrounding Jiwoo and the criminal world.",
  },
  {
    id: 7,
    name: "Yoon Donghoon",
    role: "Jiwoo's Father",
    group: "Family",
    image:
      "https://i.pinimg.com/1200x/94/fe/7b/94fe7bf0a6706d2e9c363f266fa49f08.jpg",
    description:
      "Jiwoo's father whose death becomes the starting point of her search for revenge and the truth.",
  },
  {
    id: 8,
    name: "Dongcheon",
    role: "Criminal Organization",
    group: "Organization",
    image:
      "https://i.pinimg.com/736x/64/00/6d/64006d0022f926f1301b5e37dcf3b037.jpg",
    description:
      "The powerful criminal organization at the center of the conflict between the criminal underworld and the police.",
  },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Characters", path: "/characters" },
  { name: "Episodes", path: "/episode" },
  { name: "Story", path: "/story" },
  { name: "Gallery", path: "/gallery" },
  { name: "Quiz", path: "/quiz" },
];

const Characters = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    "All",
    "Main Leads",
    "Police",
    "Dongcheon",
    "Family",
    "Organization",
  ];

  const filteredCharacters =
    filter === "All"
      ? characters
      : characters.filter((character) => character.group === filter);

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">

          {/* LOGO */}

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


          {/* DESKTOP NAVIGATION */}

          <div className="hidden items-center gap-6 md:flex">

            {navLinks.map((link) => (

              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-bold uppercase tracking-[0.18em] transition ${
                  link.path === "/characters"
                    ? "text-red-500"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
              </Link>

            ))}

          </div>


          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
          >
            <span className="text-lg">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>

        </div>


        {/* MOBILE MENU */}

        {menuOpen && (

          <div className="border-t border-white/10 bg-black px-6 py-5 md:hidden">

            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (

                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-white/5 pb-3 text-xs font-bold uppercase tracking-[0.2em] ${
                    link.path === "/characters"
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

      <section className="relative flex min-h-[75vh] items-center overflow-hidden pt-20">

        <img
          src={characters[0].image}
          alt="Yoon Jiwoo"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">

          <div className="max-w-3xl">

            <div className="mb-6 flex items-center gap-3">

              <span className="h-[2px] w-12 bg-red-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
                My Name • Character Guide
              </span>

            </div>

            <h1 className="text-6xl font-black uppercase leading-[0.9] md:text-8xl">

              Meet The

              <br />

              <span className="text-red-600">
                Characters
              </span>

            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Explore the characters who shape the story of{" "}
              <span className="font-semibold text-white">
                My Name
              </span>
              .
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CHARACTER SECTION
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">

        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-end">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
              Character Directory
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              Know The
              <span className="text-red-600"> Players</span>
            </h2>

          </div>

          <p className="max-w-2xl text-sm leading-7 text-white/40">
            Explore the people and organization that shape
            the world of My Name.
          </p>

        </div>


        {/* FILTER BUTTONS */}

        <div className="mt-10 flex flex-wrap gap-3">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full border px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition ${
                filter === category
                  ? "border-red-600 bg-red-600 text-white"
                  : "border-white/10 bg-white/[0.02] text-white/50 hover:border-red-600/50 hover:text-white"
              }`}
            >
              {category}
            </button>

          ))}

        </div>


        {/* CHARACTER CARDS */}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {filteredCharacters.map((character, index) => (

            <button
              key={character.id}
              onClick={() => setSelectedCharacter(character)}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] text-left transition duration-500 hover:-translate-y-2 hover:border-red-600/60"
            >

              <div className="relative h-[430px] overflow-hidden">

                <img
                  src={character.image}
                  alt={character.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <span className="absolute left-4 top-4 text-5xl font-black text-white/15">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                  {character.group}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-5">

                  <div className="mb-2 h-[2px] w-8 bg-red-600 transition-all group-hover:w-14" />

                  <h3 className="text-2xl font-black uppercase">
                    {character.name}
                  </h3>

                  <p className="mt-1 text-xs text-red-500">
                    {character.role}
                  </p>

                </div>

              </div>

            </button>

          ))}

        </div>

      </section>


      {/* =====================================================
          FEATURED JIWOO
      ===================================================== */}

      <section className="border-y border-white/5 bg-[#090909]">

        <div className="mx-auto grid max-w-7xl md:grid-cols-2">

          <div className="relative min-h-[550px] overflow-hidden">

            <img
              src={characters[0].image}
              alt="Yoon Jiwoo"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#090909]" />

          </div>

          <div className="flex items-center px-7 py-20 md:px-14">

            <div>

              <p className="text-xs uppercase tracking-[0.4em] text-red-500">
                Main Character
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-6xl">

                Yoon

                <br />

                <span className="text-red-600">
                  Jiwoo
                </span>

              </h2>

              <div className="my-8 h-px bg-white/10" />

              <p className="max-w-xl text-sm leading-8 text-white/60">
                Jiwoo's journey begins with loss and revenge,
                taking her deep into the criminal underworld
                and eventually into the police force.
              </p>

              <button
                onClick={() => setSelectedCharacter(characters[0])}
                className="mt-8 rounded-full bg-red-600 px-7 py-3 text-xs font-bold uppercase tracking-widest transition hover:bg-red-700"
              >
                View Character
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/5 bg-black px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

          <Link
            to="/"
            className="text-sm font-black uppercase tracking-[0.25em]"
          >
            My Name
          </Link>

          <p className="text-xs text-white/30">
            A fan-made website for My Name lovers.
          </p>

        </div>

      </footer>


      {/* =====================================================
          CHARACTER MODAL
      ===================================================== */}

      {selectedCharacter && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-5 backdrop-blur-sm"
          onClick={() => setSelectedCharacter(null)}
        >

          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              onClick={() => setSelectedCharacter(null)}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 transition hover:bg-red-600"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2">

              <div className="h-[400px] md:h-[550px]">

                <img
                  src={selectedCharacter.image}
                  alt={selectedCharacter.name}
                  className="h-full w-full object-cover"
                />

              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">

                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-red-500">
                  {selectedCharacter.group}
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
                  {selectedCharacter.name}
                </h2>

                <p className="mt-2 text-sm text-red-500">
                  {selectedCharacter.role}
                </p>

                <div className="my-7 h-px bg-white/10" />

                <p className="text-sm leading-8 text-white/60">
                  {selectedCharacter.description}
                </p>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Characters;