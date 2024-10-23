"use client";

export const Header = () => {
  return (
    <div className="w-full border-b bg-background">
      <div className="flex items-center justify-center py-3 mx-auto container">
        <img src="/Logo.png" alt="" className="w-[156px] h-[36px]" />

        <nav className="flex items-center justify-center gap-6 flex-grow">
          <ul className="flex gap-6">
            <li><a href="#" className="hover:text-primary">Home</a></li>
            <li><a href="#" className="hover:text-primary">About</a></li>
            <li><a href="#" className="hover:text-primary">Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center border rounded px-4 py-2">
          <input 
            type="text" 
            placeholder="Search" 
            className="outline-none bg-transparent color-[#F4F4F5]"
            aria-label="Search"
          />
          <img 
            src="/search.png" 
            alt="Search icon" 
            className="w-5 ml-3" 
            aria-hidden="true" 
          />
        </div>
      </div>
    </div>
  );
}