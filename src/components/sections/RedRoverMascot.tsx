import { useEffect, useRef, useState } from "react";

// Front-facing sit & grin image (the resting pose the user sees)
const IMG_FRONT_GRIN =
  "https://vibe.filesafe.space/1788454197571242570/attachments/aba7c827-a544-4681-9c00-7712d1a62967.png";

// Buddy avatar circle image
const IMG_BUDDY_CIRCLE =
  "https://vibe.filesafe.space/1788454197571242570/attachments/78db1c9b-47b0-4eac-88f1-a5b3e635cbbd.png";

type MascotPhase = "dormant" | "idle" | "leaving" | "pill";

export const RedRoverMascot = () => {
  const [phase, setPhase] = useState<MascotPhase>("dormant");
  const [showChat, setShowChat] = useState<boolean>(false);
  const [speech, setSpeech] = useState<string | null>(null);

  const hasShownRef = useRef<boolean>(false);

  // Preload image so there's no flicker
  useEffect(() => {
    const img1 = new Image();
    img1.src = IMG_FRONT_GRIN;
    const img2 = new Image();
    img2.src = IMG_BUDDY_CIRCLE;
  }, []);

  // Appear after 15 seconds initially
  useEffect(() => {
    const initial = window.setTimeout(() => {
      if (!hasShownRef.current) {
        hasShownRef.current = true;
        setPhase("idle");
        setSpeech("Click Here if You need Something");
      }
    }, 15000);

    return () => window.clearTimeout(initial);
  }, []);

  // While idle, any scroll collapses Buddy into a "Call Buddy" pill
  useEffect(() => {
    if (phase !== "idle" || showChat) return;

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        setSpeech(null);
        setPhase("pill");
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [phase, showChat]);

  const dismiss = () => {
    setSpeech(null);
    setPhase("leaving");
    setTimeout(() => {
      setPhase("dormant");
    }, 600);
  };

  const handleClickMascot = () => {
    if (phase === "idle") {
      setShowChat(true);
      setSpeech(null);
    }
  };

  const handleCloseChat = () => {
    setShowChat(false);
    // After closing chat, settle to the pill so the user can reopen
    setPhase("pill");
  };

  if (phase === "dormant" && !showChat) return null;

  return (
    <>
      {/* Full idle mascot */}
      {(phase === "idle" || phase === "leaving") && !showChat && (
        <div
          onClick={handleClickMascot}
          className={`fixed bottom-5 right-5 sm:right-8 pointer-events-auto cursor-pointer select-none transition-all duration-500 ${
            phase === "leaving"
              ? "z-0 opacity-0 translate-y-6 scale-95"
              : "z-40 opacity-100"
          }`}
          style={{ willChange: "transform, opacity" }}
          title="Buddy"
          role="img"
          aria-label="Buddy — click to chat"
        >
          {/* Thought bubble */}
          {speech && phase === "idle" && (
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none">
              <div className="relative whitespace-nowrap bg-white text-slate-900 text-sm font-bold px-4 py-2 rounded-full shadow-xl border border-red-500/20 animate-bounce">
                {speech}
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-2 w-2.5 h-2.5 bg-white rounded-full border border-red-500/20" />
              <div className="absolute -bottom-5 left-1/2 translate-x-3 w-1.5 h-1.5 bg-white rounded-full border border-red-500/20" />
            </div>
          )}

          {/* Ground shadow */}
          <div
            className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-black/40 rounded-full blur-[4px]"
            style={{ width: "110px", height: "14px" }}
          />

          {/* Chihuahua image */}
          <div className="relative w-[150px] sm:w-[175px] md:w-[195px] hover:scale-105 transition-transform duration-200">
            <img
              src={IMG_FRONT_GRIN}
              alt="Buddy"
              className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_12px_24px_rgba(227,24,45,0.28)]"
              style={{ mixBlendMode: "screen" }}
            />

            {/* Gold bone name tag on neck */}
            <div
              className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none"
              style={{ bottom: "37%", width: "31%" }}
            >
              <svg
                viewBox="0 0 72 34"
                className="w-full h-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M12 6 C5.5 6 2.5 9.5 2.5 13.5 C2.5 17 5 19.5 8.5 19.5 C6 21 5 23 5 25.5 C5 29 8 31.5 12 31.5 C16 31.5 19 29 20 26 L52 26 C53 29 56 31.5 60 31.5 C64 31.5 67 29 67 25.5 C67 23 66 21 63.5 19.5 C67 19.5 69.5 17 69.5 13.5 C69.5 9.5 66.5 6 60 6 C56 6 53 8.5 52 11 L20 11 C19 8.5 16 6 12 6 Z"
                  fill="#F5C518"
                  stroke="#9A7800"
                  strokeWidth="1.5"
                  strokeOpacity="0.7"
                />
                <text
                  x="36"
                  y="21.5"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="900"
                  fill="#1a1a1a"
                  fontFamily="Arial, sans-serif"
                  letterSpacing="0.2"
                >
                  Buddy
                </text>
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Collapsed "Call Buddy" circular button */}
      {phase === "pill" && !showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="group fixed bottom-5 right-5 sm:right-8 z-40 flex flex-col items-center gap-1 pointer-events-auto cursor-pointer select-none animate-bounce-wiggle"
          aria-label="Call Buddy — open chat"
        >
          <span className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-200 group-hover:scale-110 drop-shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
            <img
              src={IMG_BUDDY_CIRCLE}
              alt="Buddy"
              className="w-full h-full object-contain pointer-events-none rounded-full"
            />
          </span>
          <span className="px-3 py-1 rounded-full bg-white text-[#E3182D] text-xs font-extrabold uppercase tracking-wide shadow-md border border-red-500/20">
            Call Buddy
          </span>
        </button>
      )}

      {showChat && <ChatBot onClose={handleCloseChat} />}
    </>
  );
};

/* ------------------------------------------------------------------ */
/* Simple guided chat bot widget                                       */
/* ------------------------------------------------------------------ */

type ChatMsg = { role: "bot" | "user"; text: string };

const QUICK_REPLIES = [
  "Tell me about your system",
  "How much does it cost?",
  "What's included?",
  "Book a free audit",
];

const botReply = (userText: string): string => {
  const t = userText.toLowerCase();
  if (t.includes("cost") || t.includes("price") || t.includes("how much"))
    return "Red Rover is one managed plan that bundles your website, reviews, and social media — pricing is shared during your free audit so it fits your goals. Want me to point you to the free audit form?";
  if (t.includes("include"))
    return "You get a mobile-first lead-generating website, automated review requests & monitoring, and consistent weekly social posts — all managed for you.";
  if (t.includes("system") || t.includes("tell me"))
    return "It's a 3-Part Growth System: Be Seen (social media), Be Found (your website), and Be Chosen (reviews). One team manages all three.";
  if (t.includes("audit") || t.includes("book") || t.includes("free"))
    return "Awesome — scroll down to the free audit form or tap the button below and we'll review your online presence at no cost.";
  if (t.includes("review"))
    return "We send automated review requests by email and text, monitor your reviews, help with responses, and display them on your website.";
  if (t.includes("website") || t.includes("site"))
    return "You get a fast, mobile-first website built to generate leads — with local SEO, clear calls to action, and hosting included.";
  if (t.includes("social"))
    return "We plan, write, and publish consistent weekly posts across Google, Facebook, Instagram, and Yelp — you approve everything first.";
  return "Great question! Red Rover combines your website, reviews, and social media into one managed system. Want to grab a free audit so we can take a look at your business?";
};

const ChatBot = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      role: "bot",
      text: "Hi I'm Buddy. What can I help you with today?",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMsg = { role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: botReply(text) }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:right-6 z-50 w-[92vw] max-w-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-red-500/20 bg-[#07142B]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#E3182D] to-[#A20C1A]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg">
              🐾
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">
                Red Rover Chat
              </p>
              <p className="text-white/80 text-[11px] leading-tight">
                We typically reply in a few minutes
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/90 hover:text-white w-7 h-7 rounded-full hover:bg-white/20 flex items-center justify-center transition"
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-[#07142B] max-h-[50vh]"
        >
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-[#E3182D] text-white rounded-br-sm"
                    : "bg-white/10 text-slate-100 rounded-bl-sm border border-white/10"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Quick replies */}
        <div className="flex flex-wrap gap-2 px-3 pb-2 bg-[#07142B]">
          {QUICK_REPLIES.map((q) => (
            <button
              key={q}
              onClick={() => send(q)}
              className="text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/15 border border-white/15 rounded-full px-3 py-1.5 transition"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 px-3 py-3 bg-[#031B36] border-t border-white/10"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message…"
            className="flex-1 bg-white/10 text-white placeholder:text-slate-400 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500/50"
          />
          <button
            type="submit"
            className="bg-[#E3182D] hover:bg-[#FF1F38] text-white rounded-full w-9 h-9 flex items-center justify-center transition shrink-0"
            aria-label="Send message"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};
