import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { achievements } from "../../libs/utils";
import { Lock } from "lucide-react";

const rarityColors = {
  RARE: "from-primary/20 to-primary/5 border-primary/40",
  EPIC: "from-secondary/20 to-secondary/5 border-secondary/40",
  LEGENDARY: "from-accent/20 to-accent/5 border-accent/40",
};

const rarityTextColors = {
  RARE: "text-primary",
  EPIC: "text-secondary",
  LEGENDARY: "text-accent",
};

export const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [revealingId, setRevealingId] = useState<string | null>(null);
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);

  const revealAchievement = (id: string, progress: number) => {
    if (progress < 100) return;

    setRevealingId(id);

    setTimeout(() => {
      setUnlockedIds((prev) => [...prev, id]);
      setRevealingId(null);
    }, 900); // smooth, fast, premium
  };

  return (
    <section id="achievements" className="py-28">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            className="mb-14"
          >
            <span className="text-xs font-mono text-muted-foreground">
              // ACHIEVEMENTS
            </span>
            <h2 className="text-4xl font-bold mt-1">Professional Milestones</h2>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {achievements.map((a, i) => {
              const Icon = a.icon;
              const rarity = a.rarity as keyof typeof rarityColors;

              const isUnlocked = unlockedIds.includes(a.id);
              const isRevealing = revealingId === a.id;

              return (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12 }}
                  whileHover={isUnlocked ? { y: -6 } : {}}
                  onClick={() => revealAchievement(a.id, a.progress)}
                  className={`
                    relative p-6 rounded-2xl border overflow-hidden
                    bg-gradient-to-br ${rarityColors[rarity]}
                    ${isUnlocked ? "cursor-pointer" : "cursor-default"}
                  `}
                >
                  {/* LOCKED OVERLAY */}
                  <AnimatePresence>
                    {!isUnlocked && (
                      <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute inset-0 z-20 backdrop-blur-md bg-black/50
                                   flex flex-col items-center justify-center"
                      >
                        <motion.div
                          animate={
                            isRevealing ? { scale: 0.9, opacity: 0 } : {}
                          }
                          transition={{ duration: 0.4 }}
                          className="flex flex-col items-center"
                        >
                          <span
                            className="
    relative
    block
    text-center
    text-4xl sm:text-5xl font-bold
    text-white/90
    blur-xl
    opacity-90
    select-none
    tracking-wide
    transition-all
    duration-500
  "
                          >
                            Java
                          </span>

                          <Lock className="w-6 h-6 mb-3 text-muted-foreground" />

                          <div className="w-32 h-[3px] bg-white/20 rounded overflow-hidden">
                            <motion.div
                              className="h-full bg-white/70"
                              initial={{ width: 0 }}
                              animate={{ width: `${a.progress}%` }}
                              transition={{ duration: 0.6 }}
                            />
                          </div>

                          <span className="text-[11px] mt-2 text-muted-foreground">
                            {a.progress}% completed
                          </span>

                          {a.progress === 100 && (
                            <span className="text-[11px] mt-3 text-white/80">
                              Click to reveal
                            </span>
                          )}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* REVEAL SCALE */}
                  <motion.div
                    animate={isRevealing ? { scale: [0.98, 1.02, 1] } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {/* Badge */}
                    <div
                      className={`absolute top-3 right-3 px-2 py-1 text-xs font-mono
                      ${rarityTextColors[rarity]} bg-background/50`}
                    >
                      {a.rarity}
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 mb-4 rounded-xl flex items-center justify-center
                      ${rarityTextColors[rarity]} bg-background/30`}
                    >
                      <Icon size={32} />
                    </div>

                    {/* Text */}
                    <span className="text-xs font-mono text-muted-foreground">
                      ACHIEVEMENT
                    </span>

                    <h3 className="text-xl font-semibold mt-1">{a.title}</h3>

                    <p className="text-sm text-muted-foreground">
                      Issued by {a.issuer}
                    </p>
                  </motion.div>

                  {/* Subtle shine (only unlocked) */}
                  {isUnlocked && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none
                                 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
