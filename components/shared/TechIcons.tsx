import React from "react";

export function ReactIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M6.5 18.5c.8.5 1.7.8 2.6.8 1.5 0 2.4-.8 2.4-2v-6.8h-1.8v6.8c0 .7-.3 1.1-1 1.1-.4 0-.8-.1-1.2-.3l-1 1.4zm8-8.2c-1.3 0-2.3.8-2.3 2 0 1.2.7 1.8 2 2.3l.6.2c.8.3 1.2.6 1.2 1.1 0 .6-.5 1-1.3 1-.8 0-1.6-.4-2.1-.8l-.8 1.4c.7.6 1.8 1 2.9 1 2 0 3.2-1 3.2-2.5 0-1.2-.8-1.9-2.1-2.4l-.6-.2c-.7-.3-1.1-.5-1.1-.9 0-.5.4-.8 1.1-.8.6 0 1.3.2 1.8.6l.8-1.3c-.6-.5-1.5-.8-2.4-.8z"
        fill="#000000"
      />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M4.5 10.5h6v1.8h-2.1v6.2h-1.8v-6.2h-2.1v-1.8zm7.5 5.5c.6.6 1.4.9 2.2.9 1.1 0 1.8-.5 1.8-1.3 0-.8-.6-1.2-1.7-1.6l-.6-.2c-1.6-.6-2.5-1.3-2.5-2.6 0-1.6 1.3-2.7 3.3-2.7 1.1 0 2.1.4 2.8 1l-.9 1.5c-.5-.4-1.2-.7-1.9-.7-.9 0-1.5.4-1.5 1.1 0 .7.5 1 1.5 1.4l.6.2c1.8.7 2.7 1.5 2.7 2.8 0 1.8-1.4 2.9-3.6 2.9-1.4 0-2.5-.5-3.3-1.2l1.1-1.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function PythonIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.87 2c-5.18 0-4.86 2.25-4.86 2.25l.01 2.33h4.94v.7H4.96S2 6.94 2 12.15c0 5.2 2.58 5.01 2.58 5.01h1.54v-2.16s-.08-2.58 2.53-2.58h4.9v-.74H8.62s-.99-.08-.99-.95V8.1s-.11-1.12 1.12-1.12h7.33s.96-.03.96.96v3.13h-4.43c-2.3 0-2.28 2.18-2.28 2.18l-.01 2.45h4.94v.7H8.28S5.33 16.07 5.33 21.28c0 5.2 2.57 5.01 2.57 5.01h1.54"
        fill="url(#python-gradient-1)"
        transform="scale(0.85) translate(2, 2)"
      />
      <path
        d="M12.13 22c5.18 0 4.86-2.25 4.86-2.25l-.01-2.33h-4.94v-.7h7.02s2.96.34 2.96-4.87c0-5.2-2.58-5.01-2.58-5.01h-1.54v2.16s.08 2.58-2.53 2.58h-4.9v.74h4.93s.99.08.99.95v4.63s.11 1.12-1.12 1.12H7.94s-.96.03-.96-.96v-3.13h4.43c2.3 0 2.28-2.18 2.28-2.18l.01-2.45h-4.94v-.7h7.02s2.95.34 2.95-4.87c0-5.2-2.57-5.01-2.57-5.01h-1.54"
        fill="url(#python-gradient-2)"
        transform="scale(0.85) translate(2, 2)"
      />
      <circle cx="9" cy="5.5" r="1" fill="#FFFFFF" />
      <circle cx="15" cy="18.5" r="1" fill="#FFFFFF" />
      <defs>
        <linearGradient id="python-gradient-1" x1="2" y1="2" x2="16" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#387EB8" />
          <stop offset="1" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="python-gradient-2" x1="8" y1="8" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE873" />
          <stop offset="1" stopColor="#FFD43B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SqlIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="6" rx="9" ry="3" fill="#336791" fillOpacity="0.2" stroke="#336791" strokeWidth="1.8" />
      <path d="M3 6v6c0 1.66 4.03 3 9 3s9-1.34 9-3V6" stroke="#336791" strokeWidth="1.8" fill="none" />
      <path d="M3 12v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" stroke="#4169E1" strokeWidth="1.8" fill="none" />
      <circle cx="15" cy="15" r="1" fill="#61DAFB" />
      <circle cx="9" cy="15" r="1" fill="#61DAFB" />
    </svg>
  );
}

export function NextjsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="90" cy="90" r="90" fill="#000000" stroke="#333333" strokeWidth="4" />
      <path
        d="M149.508 157.067L69.8327 54H54V125.967H66.9099V69.7562L139.123 162.776C142.756 161.055 146.234 159.138 149.508 157.067Z"
        fill="url(#nextjs-paint0)"
      />
      <rect x="115" y="54" width="12.9" height="71.9" fill="url(#nextjs-paint1)" />
      <defs>
        <linearGradient id="nextjs-paint0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="nextjs-paint1" x1="121.5" y1="54" x2="121.5" y2="104" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TailwindIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
        fill="#06B6D4"
      />
    </svg>
  );
}

export function HtmlIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 2l1.65 18.53L12 22l7.35-1.47L21 2H3z" fill="#E34F26" />
      <path d="M12 3.8v16.5l5.85-1.17L19.2 3.8H12z" fill="#EF652A" />
      <path d="M12 7.7h4.3l-.2 2.4H12v2.3h3.8l-.4 4.3-3.4 1-3.4-1-.2-2.3H6.5l.4 4.3 5.1 1.4 5.1-1.4.6-6.6.1-1.3.2-2.7H6l.2 2.3h5.8V7.7z" fill="#FFFFFF" />
    </svg>
  );
}

export function CssIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 2l1.65 18.53L12 22l7.35-1.47L21 2H3z" fill="#1572B6" />
      <path d="M12 3.8v16.5l5.85-1.17L19.2 3.8H12z" fill="#33A9DC" />
      <path d="M12 7.7h4.3l-.2 2.4H12v2.3h3.8l-.4 4.3-3.4 1-3.4-1-.2-2.3H6.5l.4 4.3 5.1 1.4 5.1-1.4.6-6.6.1-1.3.2-2.7H6l.2 2.3h5.8V7.7z" fill="#FFFFFF" />
    </svg>
  );
}

export function FlutterIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.314 0L2.3 12.014l3.714 3.714L19.043 2.729H14.314V0z" fill="#42A5F5" />
      <path d="M14.286 10.286L7.429 17.143l3.714 3.714 4.143-4.143 4.714 4.714h4.714l-6.571-6.571-3.857-4.571z" fill="#02569B" />
      <path d="M11.143 20.857L14.286 24h4.714l-4.714-4.714-3.143 1.571z" fill="#01579B" />
      <path d="M14.286 16.714l-3.143 3.143 4.143 4.143 3.143-3.143-4.143-4.143z" fill="#29B6F6" />
    </svg>
  );
}

export function DartIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 4.5l6.5-2.5 8.5 8.5-2.5 6.5-12.5-12.5z" fill="#0175C2" />
      <path d="M11 2L2 11l4.5 4.5 9-9L11 2z" fill="#00B4AB" />
      <path d="M19.5 10.5L13 17l4.5 4.5 4.5-4.5-2.5-6.5z" fill="#01579B" />
      <path d="M4.5 4.5L2 11l6.5 6.5 9-9L4.5 4.5z" fill="#54C5F8" />
    </svg>
  );
}

export function SupabaseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.4 2.1c.3-.5 1-.4 1.2.2l4.8 11.2c.2.5-.2 1.1-.8 1.1H11v7.3c0 .5-.7.8-1 .4L2.8 11.1c-.3-.5.1-1.1.7-1.1h7.6V2.5c0-.2.1-.4.3-.4z"
        fill="url(#supabase-gradient)"
      />
      <defs>
        <linearGradient id="supabase-gradient" x1="2" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3ECF8E" />
          <stop offset="1" stopColor="#249361" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FirebaseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.2 17.5L6.8 2.2c.1-.4.6-.5.8-.2l3.4 6.3L4.2 17.5z" fill="#FFA000" />
      <path d="M13.7 9.8l2.2-4.2c.2-.4.8-.4 1 0l3 11.9-6.2-7.7z" fill="#F57C00" />
      <path d="M3.9 18.2l8.1 4.5c.3.2.7.2 1 0l7.2-4.5-6.5-12.8-9.8 12.8z" fill="#FFCA28" />
    </svg>
  );
}

export function GitIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.9 4.5l2.6 2.6c.6-.2 1.4-.1 1.9.5.5.5.7 1.3.5 1.9l2.5 2.5c.6-.2 1.4-.1 1.9.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.4-.4-2.1l-2.3-2.3v5.4c.2.1.4.3.5.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.2-.2.5-.4.8-.5V8.4c-.3-.1-.6-.3-.8-.5-.6-.6-.7-1.4-.4-2.1L8.9 8.4l-6.5 6.5c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.5-8.5c.7-.6.7-1.5.1-2.1z"
        fill="#F05032"
      />
    </svg>
  );
}

export function FramerMotionIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 2h16v8h-8zM4 10h8l8 8H4zM4 18h8v6z" fill="#0055FF" />
    </svg>
  );
}

export function WebglIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.4l7.6 3.8-7.6 3.8-7.6-3.8L12 4.4zM4 8.7l7 3.5v7.2l-7-3.5V8.7zm9 10.7v-7.2l7-3.5v7.2l-7 3.5z" fill="#990000" />
    </svg>
  );
}

export function VercelIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L24 22H0L12 2z" fill="#FFFFFF" />
    </svg>
  );
}

export function CodeChipIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#3B82F6" strokeWidth="1.8" />
      <path d="M8 10l-2 2 2 2M16 10l2 2-2 2M13 8l-2 8" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
