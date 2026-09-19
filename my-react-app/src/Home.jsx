import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const heroImage =
    "https://i.pinimg.com/736x/17/17/a4/1717a488f4b23f94e248bcab9b8ee8fb.jpg";

  const posterImage =
    "https://i.pinimg.com/736x/84/9c/5f/849c5f391256c2d86950ae9dc4308de9.jpg";

  const galleryImages = [
    "https://i.pinimg.com/736x/d4/df/e1/d4dfe1945423ff9437525b566a090a2c.jpg",
    "https://i.pinimg.com/1200x/08/3f/f3/083ff393db17b4dafbd7daa4d05a7231.jpg",
    "https://i.pinimg.com/736x/f9/62/34/f96234a2a52e39d719c35e9b84f7c918.jpg",
    "https://i.pinimg.com/1200x/45/a6/bb/45a6bba8d75f9411a75478a85c32e1ac.jpg",
    "https://i.pinimg.com/736x/86/4b/e6/864be6b91bcff6dfa5624bd1dcefd8a1.jpg",
    "https://i.pinimg.com/1200x/79/d3/e8/79d3e86636011d23ebcaca988646df37.jpg",
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">

          {/* Logo */}

          <Link
            to="/"
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-red-600 bg-red-600/10 transition group-hover:bg-red-600">
              <span className="text-lg font-black text-red-500 group-hover:text-white">
                M
              </span>
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-black uppercase tracking-[0.25em]">
                My Name
              </p>

              <p className="text-[8px] uppercase tracking-[0.3em] text-white/40">
                Fan Hub
              </p>
            </div>
          </Link>


          {/* Desktop Navigation */}

          <div className="hidden items-center gap-8 md:flex">

            <Link
              to="/"
              className="text-xs font-semibold uppercase tracking-widest text-red-500 transition hover:text-red-400"
            >
              Home
            </Link>

            <Link
              to="/characters"
              className="text-xs font-semibold uppercase tracking-widest text-white/60 transition hover:text-white"
            >
              Characters
            </Link>

            <Link
              to="/episode"
              className="text-xs font-semibold uppercase tracking-widest text-white/60 transition hover:text-white"
            >
              Episodes
            </Link>

            <Link
              to="/story"
              className="text-xs font-semibold uppercase tracking-widest text-white/60 transition hover:text-white"
            >
              Story
            </Link>

            <Link
              to="/gallery"
              className="text-xs font-semibold uppercase tracking-widest text-white/60 transition hover:text-white"
            >
              Gallery
            </Link>

            <Link
              to="/quiz"
              className="rounded-full border border-red-600/50 px-5 py-2 text-xs font-bold uppercase tracking-widest text-red-500 transition hover:bg-red-600 hover:text-white"
            >
              Quiz
            </Link>

          </div>


          {/* Mobile menu button */}

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            aria-label="Open menu"
          >
            <span className="text-xl">
              ☰
            </span>
          </button>

        </div>

      </nav>


      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen overflow-hidden pt-20">

        <img
          src={heroImage}
          alt="My Name"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#050505] to-transparent" />


        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 md:px-12">

          <div className="max-w-3xl">

            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-10 bg-red-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
                The Fan Hub
              </span>

            </div>


            <h1 className="text-7xl font-black uppercase leading-[0.82] tracking-tight sm:text-8xl md:text-9xl">

              My

              <br />

              <span className="text-red-600">
                Name
              </span>

            </h1>


            <p className="mt-8 max-w-xl text-sm leading-7 text-white/70 md:text-base md:leading-8">

              Enter the world of revenge, secrets and betrayal.
              Explore the characters, episodes, story and most
              memorable moments from the Korean crime thriller
              <span className="font-semibold text-white">
                {" "}My Name.
              </span>

            </p>


            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/story"
                className="rounded-full bg-red-600 px-7 py-3 text-sm font-bold uppercase tracking-wide transition duration-300 hover:scale-105 hover:bg-red-700"
              >
                Explore Story
              </Link>

              <Link
                to="/characters"
                className="rounded-full border border-white/30 bg-black/30 px-7 py-3 text-sm font-semibold uppercase tracking-wide backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white/10"
              >
                Meet Characters
              </Link>

            </div>


            <div className="mt-12 flex flex-wrap gap-10 border-t border-white/20 pt-6">

              <div>
                <p className="text-2xl font-bold">
                  2021
                </p>

                <p className="text-[10px] uppercase tracking-widest text-white/40">
                  Release
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  8
                </p>

                <p className="text-[10px] uppercase tracking-widest text-white/40">
                  Episodes
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  K-Drama
                </p>

                <p className="text-[10px] uppercase tracking-widest text-white/40">
                  Genre
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">

        <div className="grid gap-12 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">

          <div className="relative">

            <div className="absolute -inset-2 rounded-2xl border border-red-600/20" />

            <img
              src={posterImage}
              alt="My Name poster"
              className="relative aspect-[2/3] w-full rounded-xl object-cover shadow-2xl"
            />

          </div>


          <div className="flex flex-col justify-center">

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
              About the Series
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">

              A Story Built

              <br />

              <span className="text-red-600">
                On Revenge.
              </span>

            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-base md:leading-8">

              After the death of her father, Yoon Jiwoo enters
              the criminal underworld in search of answers.
              Her journey eventually takes her undercover
              within the police, forcing her to question the
              people she trusts and the truth she has been
              chasing.

            </p>


            <div className="mt-8 flex flex-wrap gap-3">

              {[
                "Action",
                "Crime",
                "Thriller",
                "Revenge",
                "Mystery",
              ].map((genre) => (

                <span
                  key={genre}
                  className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/60"
                >
                  {genre}
                </span>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPLORE
      ====================================================== */}

      <section className="border-y border-white/5 bg-[#090909] px-6 py-24 md:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12">

            <p className="text-xs uppercase tracking-[0.4em] text-red-500">
              Explore the World
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              Everything
              <span className="text-red-600">
                {" "}My Name
              </span>
            </h2>

          </div>


          <div className="grid gap-5 md:grid-cols-3">

            {/* Characters */}

            <Link
              to="/characters"
              className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-[#111] p-7 transition duration-500 hover:-translate-y-2 hover:border-red-600/50"
            >

              <span className="text-4xl">
                👤
              </span>

              <h3 className="mt-16 text-2xl font-bold">
                Characters
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Discover Jiwoo, Mujin, Pildo and the
                characters who shape the story.
              </p>

              <span className="absolute bottom-7 text-xs font-bold uppercase tracking-widest text-red-500">
                Explore →
              </span>

            </Link>


            {/* Episodes */}

            <Link
              to="/episode"
              className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-[#111] p-7 transition duration-500 hover:-translate-y-2 hover:border-red-600/50"
            >

              <span className="text-4xl">
                🎬
              </span>

              <h3 className="mt-16 text-2xl font-bold">
                Episodes
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Explore all 8 episodes and keep track
                of your watching progress.
              </p>

              <span className="absolute bottom-7 text-xs font-bold uppercase tracking-widest text-red-500">
                View Episodes →
              </span>

            </Link>


            {/* Story */}

            <Link
              to="/story"
              className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-[#111] p-7 transition duration-500 hover:-translate-y-2 hover:border-red-600/50"
            >

              <span className="text-4xl">
                🩸
              </span>

              <h3 className="mt-16 text-2xl font-bold">
                Story Timeline
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Follow Jiwoo's journey and uncover the
                important events of the story.
              </p>

              <span className="absolute bottom-7 text-xs font-bold uppercase tracking-widest text-red-500">
                Enter Timeline →
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          EPISODES
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p className="text-xs uppercase tracking-[0.4em] text-red-500">
              Watch the Story
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              Episode Guide
            </h2>

          </div>

          <Link
            to="/episode"
            className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-400"
          >
            View all episodes →
          </Link>

        </div>


        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {[
            "The Beginning",
            "A New Identity",
            "Into the Police",
            "The Investigation",
          ].map((episode, index) => (

            <Link
              to="/episode"
              key={episode}
              className="group rounded-xl border border-white/10 bg-[#0b0b0b] p-5 transition duration-300 hover:border-red-600/60 hover:bg-[#111]"
            >

              <div className="flex items-center justify-between">

                <span className="text-3xl font-black text-white/10 group-hover:text-red-600/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xs text-white/30">
                  EPISODE
                </span>

              </div>

              <h3 className="mt-8 font-bold">
                {episode}
              </h3>

              <p className="mt-2 text-xs text-white/40">
                Explore episode →
              </p>

            </Link>

          ))}

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ====================================================== */}

      <section className="bg-[#090909] px-6 py-24 md:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="flex items-end justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.4em] text-red-500">
                Memorable Moments
              </p>

              <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
                Gallery
              </h2>

            </div>

            <Link
              to="/gallery"
              className="hidden text-xs font-bold uppercase tracking-widest text-red-500 sm:block"
            >
              View gallery →
            </Link>

          </div>


          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">

            {galleryImages.map((image, index) => (

              <Link
                to="/gallery"
                key={image}
                className="group relative overflow-hidden rounded-lg"
              >

                <img
                  src={image}
                  alt={`My Name scene ${index + 1}`}
                  className="h-52 w-full object-cover transition duration-700 group-hover:scale-110 md:h-60"
                />

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          QUIZ
      ====================================================== */}

      <section className="px-6 py-24 md:px-12">

        <div className="mx-auto max-w-5xl rounded-3xl border border-red-900/40 bg-gradient-to-br from-[#170506] to-[#090909] p-10 text-center md:p-16">

          <p className="text-xs font-bold uppercase tracking-[0.5em] text-red-500">
            Think you know the story?
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">

            How Well Do You

            <br />

            <span className="text-red-600">
              Know My Name?
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/50">
            Test your knowledge of the characters,
            episodes, relationships and unforgettable
            moments from the series.
          </p>

          <Link
            to="/quiz"
            className="mt-8 inline-flex rounded-full bg-red-600 px-8 py-4 text-xs font-bold uppercase tracking-widest transition duration-300 hover:scale-105 hover:bg-red-700"
          >
            Take the Quiz →
          </Link>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-white/5 bg-black px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

          <div>

            <p className="text-sm font-black uppercase tracking-[0.25em]">
              My Name
            </p>

            <p className="mt-1 text-xs text-white/30">
              Fan Hub
            </p>

          </div>

          <p className="text-xs text-white/30">
            A fan-made website for My Name lovers.
          </p>

        </div>

      </footer>

    </div>
  );
};

export default Home;