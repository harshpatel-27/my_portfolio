import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MissionCard } from "./MissionCard";
import { MissionModal } from "./MissionModal";
import { missions, type Mission } from "../../libs/utils";
import { sounds } from "../../lib/sound";

export const MissionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);

  const handleSelectMission = (mission: Mission) => {
    sounds.missionOpen.play();
    setSelectedMission(mission);
  };

  return (
    <section id="missions" className="min-h-screen py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-1.5 sm:w-2 h-10 sm:h-12 bg-accent rounded-full" />
            <div>
              <span className="text-[10px] sm:text-xs text-muted-foreground font-mono tracking-widest">
                // COMPLETED OPERATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
                MISSIONS
              </h2>
            </div>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Field operations conducted across major gaming titles. Each mission
            represents comprehensive testing campaigns with documented findings
            and improvements.
          </motion.p>

          {/* Mission Cards */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {missions.map((mission, index) => (
              <MissionCard
                key={mission.id}
                mission={mission}
                index={index}
                onSelect={handleSelectMission}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mission Modal */}
      <MissionModal
        mission={selectedMission}
        isOpen={!!selectedMission}
        onClose={() => setSelectedMission(null)}
      />
    </section>
  );
};
