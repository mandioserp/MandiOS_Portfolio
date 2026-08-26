import React from "react";
import { ShieldCheck } from "lucide-react"; // change icon per role if needed

function RoleSectionHeading({ role, tagline, icon, theme }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {/* Small badge above heading */}
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5">
        {icon}
        <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-500">
          Role Access
        </span>
      </div>

      {/* Main heading */}
      <h2
        className={`text-3xl font-bold md:text-4xl ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-emerald-400 to-teal-400">
          {role}
        </span>{" "}
        Role
      </h2>

      {/* Decorative underline */}
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#10B981] to-teal-400" />

      {/* Optional tagline */}
      {tagline && (
        <p
          className={`mt-4 text-base md:text-lg ${
            theme === "dark" ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {tagline}
        </p>
      )}
    </div>
  );
}

export default RoleSectionHeading;