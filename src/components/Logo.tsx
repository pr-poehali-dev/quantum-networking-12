export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Аромат логотип" role="img">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C12 2 8 6 8 10C8 12.2 9.8 14 12 14C14.2 14 16 12.2 16 10C16 6 12 2 12 2Z" stroke="#D4A96A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14V22" stroke="#D4A96A" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M8 22H16" stroke="#D4A96A" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 10C4 11 3 13 4 15C5 17 8 17 10 16" stroke="#D4A96A" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <path d="M18 10C20 11 21 13 20 15C19 17 16 17 14 16" stroke="#D4A96A" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
      <span className="text-lg font-bold text-foreground">Аромат</span>
    </div>
  )
}