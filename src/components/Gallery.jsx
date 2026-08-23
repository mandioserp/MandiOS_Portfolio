import React, { useState, useEffect, useRef, useCallback } from "react";

/**
 * ─────────────────────────────────────────────────────────────────────────
 * HOW TO REPLACE PLACEHOLDER IMAGES
 * ─────────────────────────────────────────────────────────────────────────
 * Every module below points at IMAGE_BASE + "/<slug>/cover.jpg" and
 * IMAGE_BASE + "/<slug>/1.jpg", "2.jpg", "3.jpg" ...
 *
 * To wire up real screenshots you only need to do ONE of these:
 *   1) Drop your files into  public/images/modules/<slug>/  using the same
 *      names (cover.jpg, 1.jpg, 2.jpg, 3.jpg) — nothing else changes, OR
 *   2) Edit the `coverImage` / `images` values directly on any module
 *      object below to point at wherever your assets actually live
 *      (an import, a CDN URL, S3, etc).
 *
 * Until real files exist, a themed gradient + icon placeholder is shown
 * automatically (see <ModuleThumb />), so the gallery always looks
 * finished — nothing ever renders as a broken image icon.
 * ─────────────────────────────────────────────────────────────────────────
 */
const IMAGE_BASE = "/images/modules";

const AUTOPLAY_INTERVAL_MS = 4000; // how often the carousel auto-advances
const RESUME_DELAY_MS = 5000; // how long to wait after user input before autoplay resumes
const SWIPE_THRESHOLD_PX = 45; // minimum touch-drag distance to count as a swipe

// Cycled per-card so cover placeholders don't look flat/repetitive,
// while staying inside one cohesive "fresh produce" green family.
const COVER_GRADIENTS = [
  "from-emerald-600 to-teal-800",
  "from-teal-600 to-emerald-900",
  "from-green-600 to-emerald-800",
  "from-emerald-700 to-green-900",
];

const modules = [
  {
    slug: "home",
    name: "Home",
    icon: "🏠",
    description:
      "A polished landing page that introduces MandiOS to your team and clients before they sign in to their daily workspace.",
  },
  {
    slug: "dashboard",
    name: "Dashboard",
    icon: "📊",
    description:
      "A real-time command centre showing today's sales, purchases, outstanding dues, and stock levels at a single glance.",
  },
  {
    slug: "truck-logs-logistics",
    name: "Truck Logs & Logistics",
    icon: "🚚",
    description:
      "Track every truck arrival and departure, consignment details, loading slips, and transport charges from mandi floor to delivery.",
  },
  {
    slug: "clerks-auth",
    name: "Clerks Auth",
    icon: "🔐",
    description:
      "Secure, role-based sign-in for munshis and clerks, keeping every daily entry accountable to the person who made it.",
  },
  {
    slug: "employee-salary",
    name: "Employee & Salary",
    icon: "👥",
    description:
      "Maintain staff records, attendance, and salary disbursements for every worker on your mandi floor and office team.",
  },
  {
    slug: "suppliers-catalog",
    name: "Suppliers Catalog",
    icon: "🌾",
    description:
      "A complete directory of growers and suppliers with contact details, consignment history, and khata balances at your fingertips.",
  },
  {
    slug: "customers-portfolio",
    name: "Customers Portfolio",
    icon: "🤝",
    description:
      "Manage buyer profiles, credit limits, purchase history, and running ledgers for every customer your arthi does business with.",
  },
  {
    slug: "product-catalog",
    name: "Product Catalog",
    icon: "🍎",
    description:
      "Organize every fruit and vegetable variety with categories, units, and pricing so listings and sales stay consistent.",
  },
  {
    slug: "stock-supplies",
    name: "Stock Supplies",
    icon: "📦",
    description:
      "Monitor incoming stock, bardana usage, and current inventory levels across the mandi in real time.",
  },
  {
    slug: "sales-ledger",
    name: "Sales Ledger",
    icon: "💰",
    description:
      "Manage sales transactions, sold consignments, customer ledgers, commissions and complete sales records from one place.",
  },
  {
    slug: "pay-or-receive",
    name: "Pay or Receive",
    icon: "🔁",
    description:
      "Track peshgi advances given and received, along with pending dues, so every rupee owed is easy to follow.",
  },
  {
    slug: "payments-receipts",
    name: "Payments & Receipts",
    icon: "🧾",
    description:
      "Record cash and bank transactions, issue receipts, and keep the daily roznamcha reconciled without extra paperwork.",
  },
  {
    slug: "reports",
    name: "Reports",
    icon: "📑",
    description:
      "Generate print-ready ledgers, deduction summaries, and sales reports that keep every arthi and stakeholder informed.",
  },
  {
    slug: "audit-log-activity",
    name: "Audit & Log Activity",
    icon: "🕵️",
    description:
      "A transparent trail of every action taken in the system, so changes to records are always traceable.",
  },
  {
    slug: "deleted-users-trash",
    name: "Deleted Users / Trash",
    icon: "🗑️",
    description:
      "Recover accidentally removed records or permanently clear them out, keeping your data clean without losing accountability.",
  },
].map((m, i) => ({
  ...m,
  coverImage: `${IMAGE_BASE}/${m.slug}/cover.jpg`,
  images: [1, 2, 3].map((n) => `${IMAGE_BASE}/${m.slug}/${n}.jpg`),
  gradient: COVER_GRADIENTS[i % COVER_GRADIENTS.length],
}));

/* ── tiny inline icons (no external icon library required) ───────────── */

function IconChevronLeft(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function IconChevronRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function IconStack(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="6" y="6" width="14" height="14" rx="2" />
      <path d="M4 14V6a2 2 0 0 1 2-2h8" />
    </svg>
  );
}

/* ── shared thumbnail with automatic gradient/icon fallback ──────────── */

function ModuleThumb({ src, alt, icon, gradient, className }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`${className} flex items-center justify-center bg-gradient-to-br ${gradient}`}>
        <span className="text-5xl drop-shadow-sm select-none" aria-hidden="true">
          {icon}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

/* ── reduced-motion helper ─────────────────────────────────────────────── */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);
  return reduced;
}

/* ── module card ───────────────────────────────────────────────────────── */

function ModuleCard({ module, onOpen, theme }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 cursor-pointer ${
        theme === "dark"
          ? "bg-white/5 border-white/10 hover:border-[#10B981]/50 focus-visible:ring-offset-[#0a0a0b]"
          : "bg-white border-slate-200 hover:border-[#10B981]/50 focus-visible:ring-offset-slate-50"
      }`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <ModuleThumb
          src={module.coverImage}
          alt={`${module.name} screenshot`}
          icon={module.icon}
          gradient={module.gradient}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center gap-1.5 p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <IconStack className="h-4 w-4" />
          <span className="text-xs font-semibold tracking-wide">
            View Screenshots{module.images.length ? ` (${module.images.length})` : ""}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className={`text-base font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
          {module.name}
        </h3>
        <p className={`text-sm leading-relaxed line-clamp-3 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
          {module.description}
        </p>
      </div>
    </div>
  );
}

/* ── lightbox / modal with autoplay carousel ─────────────────────────── */

function ModuleModal({ module, onClose, theme }) {
  const images = module.images && module.images.length ? module.images : [module.coverImage];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [interactionPause, setInteractionPause] = useState(false);

  const resumeTimeoutRef = useRef(null);
  const touchStartXRef = useRef(null);
  const touchDeltaXRef = useRef(0);

  const reducedMotion = usePrefersReducedMotion();
  const isPaused = hovering || interactionPause || reducedMotion;

  // mount transition
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // lock background scroll while open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToIndex = useCallback(
    (idx) => setCurrentIndex(((idx % images.length) + images.length) % images.length),
    [images.length]
  );

  const registerInteraction = useCallback(() => {
    setInteractionPause(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setInteractionPause(false), RESUME_DELAY_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const handlePrev = useCallback(() => {
    registerInteraction();
    goPrev();
  }, [registerInteraction, goPrev]);

  const handleNext = useCallback(() => {
    registerInteraction();
    goNext();
  }, [registerInteraction, goNext]);

  const handleDotClick = useCallback(
    (idx) => {
      registerInteraction();
      goToIndex(idx);
    },
    [registerInteraction, goToIndex]
  );

  // autoplay — slides right to left, loops from last back to first
  useEffect(() => {
    if (isPaused || images.length <= 1) return undefined;
    const id = setInterval(goNext, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isPaused, goNext, images.length]);

  // keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, handlePrev, handleNext]);

  // touch / swipe support
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchDeltaXRef.current = 0;
    registerInteraction();
  };
  const handleTouchMove = (e) => {
    if (touchStartXRef.current === null) return;
    touchDeltaXRef.current = e.touches[0].clientX - touchStartXRef.current;
  };
  const handleTouchEnd = () => {
    const delta = touchDeltaXRef.current;
    if (delta < -SWIPE_THRESHOLD_PX) goNext();
    else if (delta > SWIPE_THRESHOLD_PX) goPrev();
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
  };

  const transitionMs = reducedMotion ? 0 : 700;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${module.name} screenshots`}
    >
      <div
        className={`relative w-full max-w-3xl overflow-hidden rounded-2xl border shadow-2xl transition-all duration-300 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } ${theme === "dark" ? "bg-[#111113] border-white/10" : "bg-white border-slate-200"}`}
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <IconClose className="h-5 w-5" />
        </button>

        <div className={`relative aspect-video w-full overflow-hidden ${theme === "dark" ? "bg-black/40" : "bg-slate-100"}`}>
          <div
            className="flex h-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: `transform ${transitionMs}ms ease-in-out`,
            }}
          >
            {images.map((src, i) => (
              <div key={src + i} className="h-full w-full flex-shrink-0">
                <ModuleThumb
                  src={src}
                  alt={`${module.name} screenshot ${i + 1} of ${images.length}`}
                  icon={module.icon}
                  gradient={module.gradient}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/65 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <IconChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/65 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <IconChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className={`flex items-center justify-center gap-2 py-3 ${theme === "dark" ? "bg-black/20" : "bg-slate-50"}`}>
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleDotClick(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                aria-current={i === currentIndex}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  i === currentIndex
                    ? "w-6 bg-emerald-600"
                    : theme === "dark"
                      ? "w-2 bg-slate-600 hover:bg-slate-500"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}

        <div className="p-6">
          <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>{module.name}</h3>
          <p className={`mt-2 leading-relaxed ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
            {module.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── main exported component ─────────────────────────────────────────── */

export default function Gallery({ theme }) {
  const [activeModule, setActiveModule] = useState(null);

  return (
    <section className={`py-16 md:py-24 ${
      theme === "dark" ? "bg-[#0a0a0b]" : "bg-gradient-to-b from-white to-emerald-50/40"
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600">
            Explore MandiOS
          </span>
          <h2 className={`text-3xl font-bold md:text-4xl ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
            Explore MandiOS
          </h2>
          <p className={`mt-4 text-base md:text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
            Powerful modules designed to manage every aspect of a fruit &amp; vegetable commission
            brokerage business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard key={module.slug} module={module} theme={theme} onOpen={() => setActiveModule(module)} />
          ))}
        </div>
      </div>

      {activeModule && <ModuleModal module={activeModule} theme={theme} onClose={() => setActiveModule(null)} />}
    </section>
  );
}
