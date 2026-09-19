import React, { useState } from "react";
import { Link } from "react-router-dom";

const episodes = [
  {
    id: 1,
    episode: "01",
    title: "The Beginning",
    runtime: "50 min",
    image:
      "https://i.pinimg.com/1200x/66/b1/d5/66b1d52a4f3b5623130b055379c96b69.jpg",
    description:
      "After her father's death, Yoon Jiwoo becomes determined to discover who killed him. Her search leads her into the dangerous world of Dongcheon.",
  },
  {
    id: 2,
    episode: "02",
    title: "Into the Underworld",
    runtime: "50 min",
    image:
      "https://i.pinimg.com/736x/d6/f3/4e/d6f34e01fa0f216948bde4718b45499f.jpg",
    description:
      "Jiwoo gets closer to the criminal organization while Choi Mujin becomes an increasingly important part of her journey.",
  },
  {
    id: 3,
    episode: "03",
    title: "The Undercover",
    runtime: "51 min",
    image:
      "https://i.pinimg.com/736x/18/ff/4f/18ff4f8b8b73335c8a4066b7cbea2d34.jpg",
    description:
      "Jiwoo begins her life as an undercover police officer while trying to balance her mission with her desire for revenge.",
  },
  {
    id: 4,
    episode: "04",
    title: "The Truth",
    runtime: "51 min",
    image:
      "https://i.pinimg.com/1200x/ff/d1/db/ffd1dbe95b9356cc5a9fa690f98609ad.jpg",
    description:
      "As the investigation develops, Jiwoo discovers more clues about her father's past and the people connected to his death.",
  },
  {
    id: 5,
    episode: "05",
    title: "The Enemy",
    runtime: "52 min",
    image:
      "https://i.pinimg.com/1200x/7a/f0/33/7af0330709cc08a8fa080e1530411b2b.jpg",
    description:
      "The line between allies and enemies becomes increasingly unclear as Jiwoo gets deeper into the investigation.",
  },
  {
    id: 6,
    episode: "06",
    title: "Betrayal",
    runtime: "52 min",
    image:
      "https://i.pinimg.com/736x/c0/f0/b1/c0f0b16e18923eb6263afd8f0aff039a.jpg",
    description:
      "Secrets begin to surface, putting Jiwoo and the people around her in greater danger.",
  },
  {
    id: 7,
    episode: "07",
    title: "The Final Hunt",
    runtime: "53 min",
    image:
      "https://i.pinimg.com/1200x/dd/16/79/dd167920766f64b2bb6501f0f5f25fa7.jpg",
    description:
      "Jiwoo finally gets closer to the truth, but discovering the identity of her father's killer comes with a devastating cost.",
  },
  {
    id: 8,
    episode: "08",
    title: "My Name",
    runtime: "53 min",
    image:
      "https://i.pinimg.com/1200x/a1/bf/33/a1bf331c14b0d42fdfbf64fd6e3c98ed.jpg",
    description:
      "The final confrontation arrives. Jiwoo must face the truth about her father, her enemies, and herself.",
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

const Episodes = () => {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

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


          {/* Desktop Navigation */}

          <div className="hidden items-center gap-6 md:flex">

            {navLinks.map((link) => (

              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-bold uppercase tracking-[0.18em] transition ${
                  link.path === "/episode"
                    ? "text-red-500"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
              </Link>

            ))}

          </div>


          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
          >
            <span className="text-lg">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>

        </div>


        {/* Mobile Navigation */}

        {menuOpen && (

          <div className="border-t border-white/10 bg-black px-6 py-5 md:hidden">

            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (

                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-white/5 pb-3 text-xs font-bold uppercase tracking-[0.2em] ${
                    link.path === "/episode"
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

      <section className="relative flex min-h-[72vh] items-center overflow-hidden pt-20">

        <img
          src={episodes[0].image}
          alt="My Name Episode"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">

          <div className="max-w-3xl">

            <div className="mb-6 flex items-center gap-3">

              <span className="h-[2px] w-12 bg-red-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
                My Name • Episode Guide
              </span>

            </div>

            <h1 className="text-6xl font-black uppercase leading-[0.9] md:text-8xl">

              The

              <br />

              <span className="text-red-600">
                Episodes
              </span>

            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Follow Jiwoo's journey through all eight episodes
              of My Name — from the beginning of her revenge
              mission to the final confrontation.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">

        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-end">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
              Season 01
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              Episode
              <span className="text-red-600"> Guide</span>
            </h2>

          </div>

          <p className="max-w-2xl text-sm leading-7 text-white/40">
            Explore every episode of My Name and discover the
            major events that move Jiwoo's story forward.
          </p>

        </div>

      </section>


      {/* =====================================================
          EPISODE GRID
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">

        <div className="grid gap-6 md:grid-cols-2">

          {episodes.map((episode) => (

            <article
              key={episode.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] transition duration-500 hover:border-red-600/50"
            >

              <div className="grid md:grid-cols-[45%_55%]">

                {/* Image */}

                <div className="relative h-72 overflow-hidden md:h-[320px]">

                  <img
                    src={episode.image}
                    alt={`Episode ${episode.episode}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Episode number */}

                  <div className="absolute left-5 top-5">

                    <span className="text-6xl font-black text-white/20">
                      {episode.episode}
                    </span>

                  </div>

                  {/* Runtime */}

                  <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-widest backdrop-blur-md">
                    {episode.runtime}
                  </span>

                </div>


                {/* Content */}

                <div className="flex flex-col justify-center p-7">

                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-red-500">
                    Episode {episode.episode}
                  </p>

                  <h3 className="mt-3 text-2xl font-black uppercase">
                    {episode.title}
                  </h3>

                  <div className="my-5 h-px bg-white/10" />

                  <p className="text-sm leading-7 text-white/45">
                    {episode.description}
                  </p>

                  <button
                    onClick={() => setSelectedEpisode(episode)}
                    className="mt-6 flex w-fit items-center gap-3 rounded-full border border-white/10 px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] transition hover:border-red-600 hover:bg-red-600"
                  >
                    Episode Details

                    <span>→</span>

                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          EPISODE TIMELINE
      ===================================================== */}

      <section className="border-y border-white/5 bg-[#090909]">

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
              The Journey
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              8 Episodes.
              <span className="text-red-600"> One Story.</span>
            </h2>

          </div>


          <div className="relative mx-auto mt-16 max-w-4xl">

            {/* Timeline line */}

            <div className="absolute bottom-0 left-5 top-0 w-px bg-white/10 md:left-1/2" />

            {episodes.map((episode, index) => (

              <div
                key={episode.id}
                className={`relative mb-12 flex items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                <div className="hidden w-1/2 md:block" />

                {/* Timeline dot */}

                <div className="absolute left-[11px] h-3 w-3 rounded-full border-2 border-red-600 bg-[#090909] md:left-1/2 md:-translate-x-1/2" />

                <div className="ml-12 w-full md:ml-0 md:w-1/2 md:px-10">

                  <button
                    onClick={() => setSelectedEpisode(episode)}
                    className="w-full rounded-xl border border-white/5 bg-black/30 p-5 text-left transition hover:border-red-600/40"
                  >

                    <span className="text-xs font-black text-red-500">
                      {episode.episode}
                    </span>

                    <h3 className="mt-2 text-lg font-black uppercase">
                      {episode.title}
                    </h3>

                    <p className="mt-2 text-xs text-white/30">
                      {episode.runtime}
                    </p>

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 py-24 md:px-12">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-red-900/40 bg-gradient-to-br from-[#190506] to-[#090909] px-7 py-16 text-center md:px-16">

          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-red-500">
            Continue Exploring
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">
            Meet The
            <br />
            Characters
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/40">
            Discover the characters behind the story and
            explore their connections.
          </p>

          <Link
            to="/characters"
            className="mt-8 inline-flex rounded-full bg-red-600 px-7 py-3 text-xs font-bold uppercase tracking-widest transition hover:bg-red-700"
          >
            Explore Characters
          </Link>

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
          EPISODE MODAL
      ===================================================== */}

      {selectedEpisode && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-5 backdrop-blur-sm"
          onClick={() => setSelectedEpisode(null)}
        >

          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close button */}

            <button
              onClick={() => setSelectedEpisode(null)}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-sm transition hover:bg-red-600"
            >
              ✕
            </button>


            <div className="grid md:grid-cols-2">

              {/* Image */}

              <div className="h-[350px] md:h-[500px]">

                <img
                  src={selectedEpisode.image}
                  alt={selectedEpisode.title}
                  className="h-full w-full object-cover"
                />

              </div>


              {/* Details */}

              <div className="flex flex-col justify-center p-8 md:p-12">

                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-red-500">
                  Episode {selectedEpisode.episode}
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
                  {selectedEpisode.title}
                </h2>

                <p className="mt-2 text-sm text-white/40">
                  Runtime • {selectedEpisode.runtime}
                </p>

                <div className="my-7 h-px bg-white/10" />

                <p className="text-sm leading-8 text-white/60">
                  {selectedEpisode.description}
                </p>

                <button
                  onClick={() => setSelectedEpisode(null)}
                  className="mt-8 w-fit rounded-full bg-red-600 px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition hover:bg-red-700"
                >
                  Close Details
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Episodes;