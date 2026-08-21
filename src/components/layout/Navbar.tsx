import { Globe, Menu, Search, UserCircle } from 'lucide-react';

/**
 * Static, desktop-only top navigation bar.
 * No routing / search behaviour yet — purely the visual shell
 * so the listing page has the correct chrome around it.
 */
export function Navbar() {
  return (
    <header className="w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-20 max-w-[1760px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-rose-500">
          airbnb
        </a>

        {/* Center search pill */}
        <div className="hidden items-center rounded-full border border-neutral-200 py-2 pl-6 pr-2 shadow-sm hover:shadow-md transition-shadow md:flex">
          <button type="button" className="border-r border-neutral-200 pr-4 text-sm font-semibold">
            Anywhere
          </button>
          <button type="button" className="border-r border-neutral-200 px-4 text-sm font-semibold">
            Anytime
          </button>
          <button type="button" className="pl-4 pr-2 text-sm text-neutral-500">
            Add guests
          </button>
          <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-white">
            <Search size={16} strokeWidth={3} />
          </span>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden rounded-full px-3 py-2 text-sm font-medium hover:bg-neutral-100 md:block"
          >
            Become a host
          </a>
          <button
            type="button"
            aria-label="Choose a language and region"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
          >
            <Globe size={18} />
          </button>
          <button
            type="button"
            aria-label="Main menu"
            className="flex items-center gap-3 rounded-full border border-neutral-200 py-2 pl-3 pr-2 shadow-sm hover:shadow-md transition-shadow"
          >
            <Menu size={16} />
            <UserCircle size={26} className="text-neutral-500" />
          </button>
        </div>
      </div>
    </header>
  );
}
