import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

type ButtonThemeProps = {
  isDark: boolean
  onClick: () => void
}

const STARS = [
  { top: 7, left: 10, size: 3 },
  { top: 16, left: 21, size: 2 },
  { top: 21, left: 9, size: 2 },
]

const ButtonTheme = ({ isDark, onClick }: ButtonThemeProps) => (
  <button
    type="button"
    role="switch"
    aria-checked={isDark}
    aria-label="Modo escuro"
    title={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
    onClick={onClick}
    className={`relative mx-0.5 h-7 w-12 shrink-0 cursor-pointer overflow-hidden rounded-full ring-1 ring-inset transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary sm:mx-1 sm:h-8 sm:w-14 motion-reduce:transition-none ${
      isDark
        ? 'bg-primary ring-secondary/50'
        : 'bg-primary/15 ring-primary/40'
    }`}
  >
    {STARS.map((star) => (
      <span
        key={`${star.top}-${star.left}`}
        aria-hidden="true"
        className="absolute rounded-full bg-white transition-opacity duration-300 motion-reduce:transition-none"
        style={{
          top: star.top,
          left: star.left,
          width: star.size,
          height: star.size,
          opacity: isDark ? 1 : 0,
        }}
      />
    ))}
    <span
      aria-hidden="true"
      className={`absolute top-1 left-1 flex h-5 w-5 items-center justify-center rounded-full shadow-md transition-all duration-300 sm:h-6 sm:w-6 motion-reduce:transition-none ${
        isDark
          ? 'translate-x-full bg-secondary text-primary'
          : 'translate-x-0 bg-white text-amber-500'
      }`}
    >
      {isDark ? (
        <DarkModeIcon sx={{ fontSize: { xs: 14, sm: 16 } }} />
      ) : (
        <LightModeIcon sx={{ fontSize: { xs: 14, sm: 16 } }} />
      )}
    </span>
  </button>
)

export default ButtonTheme
