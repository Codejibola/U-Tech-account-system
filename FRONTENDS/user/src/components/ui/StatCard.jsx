// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const StatCard = ({ title, value, description, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="rounded-lg bg-[#0f172a] border border-slate-800 p-5 flex flex-col gap-2"
    >
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-sm text-slate-400">{title}</p>
      </div>
      <p className="mt-2 text-3xl sm:text-4xl font-bold text-teal-400">{value}</p>
      <p className="mt-1 text-xs sm:text-sm text-slate-500">{description}</p>
    </motion.div>
  );
};

export default StatCard;
