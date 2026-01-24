import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { StatBar } from "./StatBar";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { profileData, stats } from "../../libs/utils";
import ElectricBorder from "../ElectricBorder";

export const PlayerProfile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="profile" className="min-h-screen py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div
            className="flex items-start sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-1.5 sm:w-2 h-10 sm:h-12 bg-primary rounded-full" />
            <div>
              <span className="text-[10px] sm:text-xs text-muted-foreground font-mono tracking-widest">
                // PLAYER DATA
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
                PROFILE
              </h2>
            </div>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Character Card */}
            <motion.div
              className="glass-panel p-5 sm:p-8 hud-corners"
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Avatar area */}
              <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                <ElectricBorder
                  color="#7df9ff"
                  speed={1}
                  chaos={0.12}
                  thickness={2}
                  style={{ borderRadius: 16 }}
                >
                  <motion.div
                    className="
                w-20 h-20
                sm:w-24 sm:h-24
                md:w-32 md:h-32
                rounded-xl
                bg-gradient-to-br from-primary/20 to-accent/20
                flex items-center justify-center
                neon-border relative overflow-hidden
              "
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary">
                      <img
                        src={profileData.player.avatar}
                        alt={profileData.player.name}
                        className="w-full h-full object-cover"
                      />
                    </span>

                    {/* Scanline effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
                      animate={{ y: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </ElectricBorder>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[10px] sm:text-xs text-primary font-mono">
                      LVL {profileData.player.level}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-[10px] sm:text-xs text-secondary font-mono">
                      {" "}
                      {profileData.player.status}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground mb-1 sm:mb-2">
                    {profileData.player.name}
                  </h3>
                  <p className="text-primary font-mono text-xs sm:text-sm">
                    {profileData.player.role}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-[10px] sm:text-xs text-muted-foreground font-mono mb-2 tracking-wider">
                  // BIO
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {profileData.bio.description}
                </p>
              </div>

              {/* Education */}
              {profileData.education.map((edu) => (
                <div
                  key={edu.degree}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/30"
                >
                  <GraduationCap
                    className={`text-${edu.color} mt-1 shrink-0`}
                    size={18}
                  />
                  <div>
                    <h5 className="font-display font-bold">{edu.degree}</h5>
                    <p className="text-sm text-muted-foreground">
                      {edu.university}
                    </p>

                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {edu.year}
                      </span>

                      {edu.location && (
                        <span className="flex items-center gap-1">
                          <MapPin size={12} /> {edu.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Stats Panel */}

            <motion.div
              className="glass-panel p-5 sm:p-8"
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="text-[10px] sm:text-xs text-muted-foreground font-mono mb-6 sm:mb-8 tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                // PLAYER STATS
              </h4>

              <div className="space-y-5 sm:space-y-6">
                {stats.map((stat, index) => (
                  <StatBar
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                    color={stat.color}
                    delay={0.8 + index * 0.2}
                  />
                ))}
              </div>

              {/* Additional stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
                {profileData.statsSummary.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-lg bg-muted/30 text-center"
                  >
                    <span
                      className={`text-2xl sm:text-3xl font-display font-bold ${stat.colorClass}`}
                    >
                      {stat.value}
                    </span>
                    <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
