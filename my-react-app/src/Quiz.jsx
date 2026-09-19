import React, { useState } from "react";

const questions = [
  {
    question: "Who is the leader of the Dongcheon criminal organization?",
    options: ["Cha Gi-ho", "Choi Mu-jin", "Jeon Pil-do", "Do Gang-jae"],
    answer: 1,
  },
  {
    question: "What is Ji-woo's main goal at the beginning of the story?",
    options: [
      "To become a police officer",
      "To leave Korea",
      "To find her father's killer",
      "To join Dongcheon",
    ],
    answer: 2,
  },
  {
    question: "What name does Ji-woo use after joining the police?",
    options: [
      "Oh Hye-jin",
      "Kang Ji-won",
      "Yoon Mi-rae",
      "Han So-hee",
    ],
    answer: 0,
  },
  {
    question: "Who becomes Ji-woo's police partner?",
    options: [
      "Choi Mu-jin",
      "Jeon Pil-do",
      "Cha Gi-ho",
      "Do Gang-jae",
    ],
    answer: 1,
  },
  {
    question: "What organization does Ji-woo infiltrate?",
    options: [
      "Dongcheon",
      "The National Police",
      "The Prosecutor's Office",
      "A private security company",
    ],
    answer: 0,
  },
  {
    question: "Who was Ji-woo's father?",
    options: [
      "A police captain",
      "A prosecutor",
      "A member of Dongcheon",
      "A detective",
    ],
    answer: 2,
  },
  {
    question: "Who is Ji-woo trying to uncover the truth about?",
    options: [
      "Her father's death",
      "Her mother's disappearance",
      "Dongcheon's money",
      "The police chief",
    ],
    answer: 0,
  },
  {
    question: "What is Choi Mu-jin's relationship with Ji-woo?",
    options: [
      "Her teacher",
      "Her father's friend",
      "Her brother",
      "Her police partner",
    ],
    answer: 1,
  },
  {
    question: "Which character works with Ji-woo in the police force?",
    options: [
      "Do Gang-jae",
      "Jeon Pil-do",
      "Choi Mu-jin",
      "Song Joon-su",
    ],
    answer: 1,
  },
  {
    question: "What is one of the main themes of My Name?",
    options: [
      "Comedy and friendship",
      "School life",
      "Revenge and identity",
      "Fantasy and magic",
    ],
    answer: 2,
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    if (index === question.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer(null);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-black text-white">

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <nav className="h-[80px] bg-black border-b border-neutral-900 flex items-center justify-between px-6 md:px-14 sticky top-0 z-50">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center">
            <span className="text-red-500 font-bold text-lg">
              M
            </span>
          </div>

          <div>
            <h2 className="text-white font-bold tracking-[0.25em] text-sm">
              MY NAME
            </h2>

            <p className="text-[8px] text-gray-500 tracking-[0.3em]">
              FAN HUB
            </p>
          </div>

        </div>


        {/* Navigation */}
        <div className="hidden md:flex items-center gap-7 text-[11px] font-semibold tracking-wider">

          <a href="/" className="text-gray-500 hover:text-white transition">
            HOME
          </a>

          <a
            href="/characters"
            className="text-gray-500 hover:text-white transition"
          >
            CHARACTERS
          </a>

          <a
            href="/episodes"
            className="text-gray-500 hover:text-white transition"
          >
            EPISODES
          </a>

          <a
            href="/story"
            className="text-gray-500 hover:text-white transition"
          >
            STORY
          </a>

          <a
            href="/gallery"
            className="text-gray-500 hover:text-white transition"
          >
            GALLERY
          </a>

          <a
            href="/quiz"
            className="text-red-600"
          >
            QUIZ
          </a>

        </div>

      </nav>


      {/* =====================================================
          QUIZ INTRO
      ===================================================== */}
      <section className="relative overflow-hidden bg-black">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/1200x/66/b1/d5/66b1d52a4f3b5623130b055379c96b69.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/90 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 pt-16 md:pt-20 pb-20">

          {/* Small heading */}
          <div className="flex items-center gap-3 mb-8 translate-y-3">

            <span className="h-[2px] w-12 bg-red-600"></span>

            <p className="text-red-500 text-xs font-bold tracking-[0.35em]">
              MY NAME • FAN QUIZ
            </p>

          </div>


          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl lg:text-[96px] leading-[0.88] font-black uppercase">

            <span className="block text-white">
              HOW WELL
            </span>

            <span className="block text-red-600">
              DO YOU KNOW?
            </span>

          </h1>


          <p className="mt-8 max-w-2xl text-gray-400 text-base md:text-lg leading-8">
            Test your knowledge of Ji-woo, Dongcheon, the police,
            and the story behind <span className="text-white">My Name</span>.
          </p>


          {/* Small stats */}
          <div className="flex flex-wrap gap-10 mt-10">

            <div>
              <p className="text-2xl font-bold text-white">
                10
              </p>
              <p className="text-[10px] text-gray-600 tracking-widest">
                QUESTIONS
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">
                4
              </p>
              <p className="text-[10px] text-gray-600 tracking-widest">
                ANSWERS
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-red-600">
                01
              </p>
              <p className="text-[10px] text-gray-600 tracking-widest">
                MISSION
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUIZ SECTION
      ===================================================== */}
      <section className="bg-[#050505] border-t border-neutral-900 py-20">

        <div className="max-w-4xl mx-auto px-5 md:px-8">

          {!finished ? (
            <>
              {/* Question header */}
              <div className="flex items-end justify-between mb-7">

                <div>

                  <p className="text-red-600 text-[10px] font-bold tracking-[0.4em] mb-3">
                    QUESTION
                  </p>

                  <div className="text-3xl md:text-4xl font-bold">

                    <span className="text-white">
                      {String(currentQuestion + 1).padStart(2, "0")}
                    </span>

                    <span className="text-neutral-700">
                      {" "} / {String(questions.length).padStart(2, "0")}
                    </span>

                  </div>

                </div>


                <div className="text-sm text-gray-500">
                  Score:{" "}
                  <span className="text-red-600 font-bold">
                    {score}
                  </span>
                </div>

              </div>


              {/* Progress */}
              <div className="h-[3px] bg-neutral-800 mb-12">

                <div
                  className="h-full bg-red-600 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />

              </div>


              {/* Question Card */}
              <div className="border border-neutral-800 rounded-2xl bg-[#080808] px-5 md:px-12 py-10 md:py-12">

                <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-3xl mb-12">
                  {question.question}
                </h2>


                {/* Answers */}
                <div className="space-y-4">

                  {question.options.map((option, index) => {

                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === question.answer;

                    let buttonStyle =
                      "border-neutral-800 bg-black hover:border-neutral-600";

                    if (selectedAnswer !== null) {

                      if (isCorrect) {
                        buttonStyle =
                          "border-green-600 bg-green-950/20";
                      } else if (isSelected) {
                        buttonStyle =
                          "border-red-600 bg-red-950/20";
                      } else {
                        buttonStyle =
                          "border-neutral-900 bg-black opacity-50";
                      }
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className={`w-full flex items-center gap-5 text-left border rounded-xl px-5 py-5 transition-all duration-200 ${buttonStyle}`}
                      >

                        {/* Letter */}
                        <span
                          className={`w-10 h-10 shrink-0 rounded-full border flex items-center justify-center text-sm ${
                            selectedAnswer !== null &&
                            isCorrect
                              ? "border-green-500 text-green-500"
                              : selectedAnswer === index
                              ? "border-red-500 text-red-500"
                              : "border-neutral-600 text-gray-400"
                          }`}
                        >
                          {String.fromCharCode(65 + index)}
                        </span>


                        <span className="text-gray-300 font-medium">
                          {option}
                        </span>


                        {/* Correct / wrong indicator */}
                        {selectedAnswer !== null && isCorrect && (
                          <span className="ml-auto text-green-500 text-xs uppercase tracking-widest">
                            Correct
                          </span>
                        )}

                        {selectedAnswer === index &&
                          !isCorrect && (
                            <span className="ml-auto text-red-500 text-xs uppercase tracking-widest">
                              Wrong
                            </span>
                          )}

                      </button>
                    );
                  })}

                </div>


                {/* Bottom controls */}
                <div className="flex items-center justify-between mt-10">

                  <p className="text-xs text-gray-600">
                    {selectedAnswer === null
                      ? "Choose your answer"
                      : selectedAnswer === question.answer
                      ? "Good choice."
                      : "Better luck on the next one."}
                  </p>


                  <button
                    onClick={nextQuestion}
                    disabled={selectedAnswer === null}
                    className={`px-7 py-3 rounded-full text-[10px] font-bold tracking-[0.25em] transition ${
                      selectedAnswer !== null
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "bg-neutral-900 text-neutral-700 cursor-not-allowed"
                    }`}
                  >
                    {currentQuestion === questions.length - 1
                      ? "FINISH QUIZ →"
                      : "NEXT QUESTION →"}
                  </button>

                </div>

              </div>
            </>
          ) : (

            /* =================================================
               RESULT
            ================================================= */
            <div className="border border-neutral-800 rounded-2xl bg-[#080808] text-center px-6 md:px-12 py-16">

              <p className="text-red-600 text-xs font-bold tracking-[0.4em] mb-5">
                QUIZ COMPLETE
              </p>

              <h2 className="text-5xl md:text-7xl font-black uppercase">
                YOUR SCORE
              </h2>

              <div className="mt-8">

                <span className="text-red-600 text-7xl md:text-9xl font-black">
                  {score}
                </span>

                <span className="text-neutral-700 text-4xl md:text-5xl font-bold">
                  /10
                </span>

              </div>

              <p className="text-gray-400 mt-6 max-w-xl mx-auto leading-7">
                {score >= 8
                  ? "You really know the world of My Name."
                  : score >= 5
                  ? "You know the story, but there is still more to uncover."
                  : "Looks like it is time for another watch."}
              </p>

              <button
                onClick={restartQuiz}
                className="mt-10 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-xs font-bold tracking-[0.25em] transition"
              >
                TRY AGAIN
              </button>

            </div>
          )}

        </div>

      </section>


      {/* =====================================================
          KNOWLEDGE SECTION
      ===================================================== */}
      <section className="bg-black py-24 border-t border-neutral-900">

        <div className="max-w-6xl mx-auto px-6 md:px-14">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-red-600 text-xs font-bold tracking-[0.4em] mb-5">
                KNOW THE STORY
              </p>

              <h2 className="text-5xl md:text-6xl font-black uppercase leading-none">
                MORE THAN
                <span className="block text-red-600">
                  REVENGE.
                </span>
              </h2>

              <p className="mt-7 text-gray-500 leading-8 max-w-lg">
                My Name is built around revenge, identity, loyalty and
                betrayal. Every character has their own motives, and
                every answer reveals another piece of the story.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-4">

              <div className="border border-neutral-800 p-7 rounded-xl bg-[#080808]">
                <p className="text-red-600 text-3xl font-black">
                  01
                </p>
                <h3 className="mt-5 font-bold">
                  IDENTITY
                </h3>
                <p className="mt-3 text-xs text-gray-600 leading-6">
                  Ji-woo's journey forces her to question who she can trust.
                </p>
              </div>

              <div className="border border-neutral-800 p-7 rounded-xl bg-[#080808]">
                <p className="text-red-600 text-3xl font-black">
                  02
                </p>
                <h3 className="mt-5 font-bold">
                  REVENGE
                </h3>
                <p className="mt-3 text-xs text-gray-600 leading-6">
                  Her search for the truth drives the entire story.
                </p>
              </div>

              <div className="border border-neutral-800 p-7 rounded-xl bg-[#080808]">
                <p className="text-red-600 text-3xl font-black">
                  03
                </p>
                <h3 className="mt-5 font-bold">
                  LOYALTY
                </h3>
                <p className="mt-3 text-xs text-gray-600 leading-6">
                  Alliances constantly change throughout the series.
                </p>
              </div>

              <div className="border border-neutral-800 p-7 rounded-xl bg-[#080808]">
                <p className="text-red-600 text-3xl font-black">
                  04
                </p>
                <h3 className="mt-5 font-bold">
                  TRUTH
                </h3>
                <p className="mt-3 text-xs text-gray-600 leading-6">
                  Nothing is quite what it first appears to be.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CASE FILE SECTION
      ===================================================== */}
      <section className="relative bg-[#060606] py-24 border-t border-neutral-900 overflow-hidden">

        <div className="absolute -right-40 top-20 w-96 h-96 rounded-full bg-red-900/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 md:px-14">

          <div className="text-center mb-14">

            <p className="text-red-600 text-xs font-bold tracking-[0.4em] mb-4">
              FAN HUB • CLASSIFIED
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase">
              MY NAME
              <span className="text-red-600">
                {" "}CASE FILE
              </span>
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-5">

            <div className="border border-neutral-800 bg-black p-7 rounded-xl">
              <p className="text-[10px] text-red-600 tracking-[0.3em]">
                CASE 001
              </p>

              <h3 className="mt-5 text-xl font-bold">
                Yoon Ji-woo
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-6">
                A woman determined to discover the truth behind her
                father's death.
              </p>
            </div>


            <div className="border border-neutral-800 bg-black p-7 rounded-xl">
              <p className="text-[10px] text-red-600 tracking-[0.3em]">
                CASE 002
              </p>

              <h3 className="mt-5 text-xl font-bold">
                Choi Mu-jin
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-6">
                The powerful leader of Dongcheon whose connection to
                Ji-woo shapes her journey.
              </p>
            </div>


            <div className="border border-neutral-800 bg-black p-7 rounded-xl">
              <p className="text-[10px] text-red-600 tracking-[0.3em]">
                CASE 003
              </p>

              <h3 className="mt-5 text-xl font-bold">
                Jeon Pil-do
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-6">
                Ji-woo's police partner who becomes an important part
                of her new life.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="border-t border-neutral-900 bg-black py-10">

        <div className="max-w-6xl mx-auto px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-5">

          <div>
            <h3 className="font-bold tracking-[0.3em] text-sm">
              MY NAME
            </h3>

            <p className="text-[9px] text-gray-700 tracking-[0.3em] mt-2">
              FAN HUB
            </p>
          </div>

          <p className="text-xs text-gray-700">
            A fan-made website dedicated to My Name.
          </p>

          <p className="text-xs text-gray-700">
            © 2026 MY NAME FAN HUB
          </p>

        </div>

      </footer>

    </div>
  );
};

export default Quiz;