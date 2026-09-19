import React, { useState } from "react";
import { Link } from "react-router-dom";

const storySections = [
  {
    number: "01",
    title: "A Daughter's Loss",
    subtitle: "THE BEGINNING",
    image:
      "https://i.pinimg.com/736x/e0/8a/55/e08a557464658570076e3796292457d8.jpg",
    text: "Yoon Jiwoo's life changes forever after witnessing the death of her father. Determined to discover who was responsible, she begins a dangerous search for the truth.",
  },
  {
    number: "02",
    title: "Entering Dongcheon",
    subtitle: "THE UNDERWORLD",
    image:
      "https://i.pinimg.com/1200x/08/3f/f3/083ff393db17b4dafbd7daa4d05a7231.jpg",
    text: "Jiwoo turns to Choi Mujin, a powerful figure in the criminal underworld. She enters Dongcheon and begins training, believing that the organization can lead her to her father's killer.",
  },
  {
    number: "03",
    title: "A New Identity",
    subtitle: "THE POLICE",
    image:
      "https://i.pinimg.com/736x/6c/f9/15/6cf91502eff10678e710d0348e022ac6.jpg",
    text: "Jiwoo joins the police force under a new identity. She must now live between two worlds while secretly continuing her search for the truth.",
  },
  {
    number: "04",
    title: "The Truth",
    subtitle: "THE REVELATION",
    image:
      "https://i.pinimg.com/1200x/94/fe/7b/94fe7bf0a6706d2e9c363f266fa49f08.jpg",
    text: "As Jiwoo investigates deeper, the past becomes increasingly difficult to separate from the present. Long-hidden connections begin to emerge.",
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

const Story = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

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
                  link.path === "/story"
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
                    link.path === "/story"
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

      <section className="relative flex min-h-[78vh] items-center overflow-hidden pt-20">

        <img
          src="https://i.pinimg.com/1200x/66/b1/d5/66b1d52a4f3b5623130b055379c96b69.jpg"
          alt="My Name story"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">

          <div className="max-w-3xl">

            <div className="mb-6 flex items-center gap-3">

              <span className="h-[2px] w-12 bg-red-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
                My Name • The Story
              </span>

            </div>

            <h1 className="text-6xl font-black uppercase leading-[0.88] md:text-8xl">

              One Name.

              <br />

              <span className="text-red-600">
                One Revenge.
              </span>

            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-white/60 md:text-base">
              A story of revenge, identity, loyalty and the
              consequences of searching for the truth.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          STORY INTRO
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">

        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
              The Story
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">

              Revenge Has
              <br />

              <span className="text-red-600">
                A Price
              </span>

            </h2>

          </div>


          <div>

            <p className="text-sm leading-8 text-white/55">
              My Name follows Yoon Jiwoo, a young woman whose
              life is changed after the death of her father.
              Refusing to accept the uncertainty surrounding
              his death, Jiwoo dedicates herself to finding
              the person responsible.
            </p>

            <p className="mt-6 text-sm leading-8 text-white/55">
              Her search takes her into the criminal
              organization Dongcheon and eventually into the
              police force. As she moves between these two
              worlds, the truth becomes increasingly difficult
              to separate from the lies surrounding her.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          STORY JOURNEY
      ===================================================== */}

      <section className="border-y border-white/5 bg-[#090909]">

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">

          <div className="mb-16">

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
              Her Journey
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
              From Loss
              <span className="text-red-600"> To Truth</span>
            </h2>

          </div>


          {/* Story Cards */}

          <div className="space-y-8">

            {storySections.map((section, index) => (

              <article
                key={section.number}
                className={`group grid overflow-hidden rounded-2xl border border-white/10 bg-black md:grid-cols-2 ${
                  index % 2 !== 0
                    ? "md:[&>*:first-child]:order-2"
                    : ""
                }`}
              >

                {/* Image */}

                <div className="relative h-[350px] overflow-hidden md:h-[480px]">

                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <span className="absolute left-6 top-6 text-7xl font-black text-white/15">
                    {section.number}
                  </span>

                </div>


                {/* Text */}

                <div className="flex flex-col justify-center p-8 md:p-14">

                  <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-red-500">
                    {section.subtitle}
                  </span>

                  <h3 className="mt-4 text-3xl font-black uppercase md:text-5xl">
                    {section.title}
                  </h3>

                  <div className="my-7 h-px w-16 bg-red-600" />

                  <p className="text-sm leading-8 text-white/50">
                    {section.text}
                  </p>

                  <button
                    onClick={() => setSelectedSection(section)}
                    className="mt-8 w-fit rounded-full border border-white/10 px-6 py-3 text-[9px] font-bold uppercase tracking-[0.2em] transition hover:border-red-600 hover:bg-red-600"
                  >
                    Read More
                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          THE TWO WORLDS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">

        <div className="text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
            The Conflict
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
            Two Worlds.
            <br />
            <span className="text-red-600">
              One Target.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/40">
            Jiwoo finds herself caught between the criminal
            world that trained her and the police force where
            she works undercover.
          </p>

        </div>


        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {/* Dongcheon */}

          <div className="group relative min-h-[500px] overflow-hidden rounded-2xl border border-white/10">

            <img
              src="https://i.pinimg.com/1200x/08/3f/f3/083ff393db17b4dafbd7daa4d05a7231.jpg"
              alt="Dongcheon"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="absolute bottom-0 p-8 md:p-10">

              <p className="text-xs font-bold uppercase tracking-[0.4em] text-red-500">
                The Underworld
              </p>

              <h3 className="mt-3 text-4xl font-black uppercase">
                Dongcheon
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
                The criminal organization led by Choi Mujin,
                where Jiwoo receives the training and
                connections she needs for her mission.
              </p>

            </div>

          </div>


          {/* Police */}

          <div className="group relative min-h-[500px] overflow-hidden rounded-2xl border border-white/10">

            <img
              src="https://i.pinimg.com/736x/6c/f9/15/6cf91502eff10678e710d0348e022ac6.jpg"
              alt="Police"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="absolute bottom-0 p-8 md:p-10">

              <p className="text-xs font-bold uppercase tracking-[0.4em] text-red-500">
                The Law
              </p>

              <h3 className="mt-3 text-4xl font-black uppercase">
                The Police
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
                Jiwoo enters the police force while hiding
                her real motives, creating a dangerous
                conflict between her mission and her new
                identity.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          JIWOO'S CHOICE
      ===================================================== */}

      <section className="relative overflow-hidden border-y border-white/5 bg-[#090909]">

        <div className="absolute inset-0 opacity-20">

          <img
            src="https://i.pinimg.com/736x/e0/8a/55/e08a557464658570076e3796292457d8.jpg"
            alt=""
            className="h-full w-full object-cover"
          />

        </div>

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center md:px-12">

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
            Yoon Jiwoo
          </p>

          <h2 className="mt-5 text-5xl font-black uppercase md:text-7xl">
            How Far Would
            <br />
            You Go For
            <br />
            <span className="text-red-600">
              Revenge?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/50">
            Jiwoo's journey forces her to question what she
            is willing to sacrifice in order to uncover the
            truth. Her mission changes the way she sees
            friendship, loyalty and identity.
          </p>

        </div>

      </section>


      {/* =====================================================
          SPOILER SECTION
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">

        <div className="rounded-3xl border border-red-900/30 bg-gradient-to-br from-[#160506] to-[#080808] p-8 md:p-16">

          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-center">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-500">
                Spoiler Zone
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">
                The Final
                <span className="text-red-600"> Truth</span>
              </h2>

            </div>

            <div>

              <p className="text-sm leading-8 text-white/50">
                Jiwoo's investigation eventually forces her to
                confront the truth behind her father's death.
                The people she trusted, the organization she
                entered and the identity she created all become
                part of the final confrontation.
              </p>

              <p className="mt-5 text-sm leading-8 text-white/50">
                Her journey ultimately becomes more than a
                simple revenge mission. It becomes a question
                of identity, loyalty and whether revenge can
                truly bring closure.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 pb-24 md:px-12">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#090909] px-7 py-16 text-center md:px-16">

          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-red-500">
            Continue Exploring
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">
            Discover The
            <br />
            Characters
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/40">
            Meet the people behind the story and explore
            their roles in Jiwoo's journey.
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
          STORY MODAL
      ===================================================== */}

      {selectedSection && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-5 backdrop-blur-sm"
          onClick={() => setSelectedSection(null)}
        >

          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              onClick={() => setSelectedSection(null)}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 transition hover:bg-red-600"
            >
              ✕
            </button>


            <div className="grid md:grid-cols-2">

              <div className="h-[350px] md:h-[500px]">

                <img
                  src={selectedSection.image}
                  alt={selectedSection.title}
                  className="h-full w-full object-cover"
                />

              </div>


              <div className="flex flex-col justify-center p-8 md:p-12">

                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-red-500">
                  {selectedSection.subtitle}
                </span>

                <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
                  {selectedSection.title}
                </h2>

                <div className="my-7 h-px bg-white/10" />

                <p className="text-sm leading-8 text-white/60">
                  {selectedSection.text}
                </p>

                <button
                  onClick={() => setSelectedSection(null)}
                  className="mt-8 w-fit rounded-full bg-red-600 px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition hover:bg-red-700"
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Story;