import { useTheme, Theme } from "@/contexts/ThemeContext";
import { Moon, Sun, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const themes: { value: Theme; icon: typeof Moon; label: string }[] = [
  { value: "dark", icon: Moon, label: "Dark" },
  { value: "light", icon: Sun, label: "Light" },
  { value: "gradient", icon: Sparkles, label: "Gradient" },
];

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const currentIndex = themes.findIndex((t) => t.value === theme);
  const next = themes[(currentIndex + 1) % themes.length];
  const CurrentIcon = themes[currentIndex].icon;

  return (
    <button
      onClick={() => setTheme(next.value)}
      className="relative w-9 h-9 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
      aria-label={`Switch to ${next.label} theme`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <CurrentIcon className="w-4 h-4 text-primary" />
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
