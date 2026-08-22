import { Globe, Menu, Search } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-20 max-w-[1120px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-1.5 text-[#FF385C] hover:opacity-95 transition-opacity cursor-pointer select-none"
        >
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-[#FF385C]"
            fill="currentColor"
          >
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.479.96 3.396l.011.315c0 4.292-3.145 7.806-7.379 7.806-3.197 0-5.321-1.89-6.121-3.864-.8 1.974-2.924 3.864-6.121 3.864-4.234 0-7.379-3.514-7.379-7.806 0-1.25.324-2.455.971-3.711l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.378 0-2.383.69-3.529 2.766l-.504.97c-1.944 3.81-6.09 12.492-7.068 14.77l-.14.341C4.195 23.018 4 23.967 4 24.194 4 27.398 6.275 30 9.5 30c2.723 0 4.417-1.787 5.093-3.793.208-.618.347-1.267.407-1.921V24h2v.286c.06.654.199 1.303.407 1.921C18.083 28.213 19.777 30 22.5 30c3.225 0 5.5-2.602 5.5-5.806 0-.227-.195-1.176-.763-2.323l-.14-.341c-.978-2.278-5.124-10.96-7.068-14.77l-.504-.97C18.383 3.69 17.378 3 16 3zm0 15c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 2c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z" />
          </svg>
          <span className="text-[22px] font-bold tracking-tight text-[#FF385C]">airbnb</span>
        </a>

        {/* Center search pill */}
        <div className="hidden items-center rounded-full border border-neutral-300 bg-white py-2 pl-4 pr-2 shadow-xs hover:shadow-md transition-shadow md:flex cursor-pointer select-none">
          <span className="text-base mr-3 select-none">🏡</span>
          <button
            type="button"
            className="border-r border-neutral-200 pr-4 text-sm font-semibold text-neutral-900 cursor-pointer"
          >
            Anywhere
          </button>
          <button
            type="button"
            className="border-r border-neutral-200 px-4 text-sm font-semibold text-neutral-900 cursor-pointer"
          >
            Anytime
          </button>
          <button type="button" className="pl-4 pr-3 text-sm text-neutral-500 font-normal cursor-pointer">
            Add guests
          </button>
          <span className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#FF385C] text-white">
            <Search size={14} strokeWidth={3} />
          </span>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2.5">
          <a
            href="#"
            className="hidden rounded-full px-3.5 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 transition-colors md:block cursor-pointer"
          >
            Become a host
          </a>
          <button
            type="button"
            aria-label="Choose a language and region"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer text-neutral-800"
          >
            <Globe size={18} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Main menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer text-neutral-800"
          >
            <Menu size={18} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </header>
  );
}
