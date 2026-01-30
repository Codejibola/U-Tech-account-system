// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaProjectDiagram, FaBook, FaEnvelope, FaDollarSign, FaTasks } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import StatCard from "../components/ui/StatCard.jsx";

const Overview = () => {
  const statsData = [
    { title: "Active Projects", value: 3, description: "Projects currently in progress", icon: <FaProjectDiagram size={20} className="text-teal-400" /> },
    { title: "Tutorials Enrolled", value: 5, description: "Purchased tutorials", icon: <FaBook size={20} className="text-teal-400" /> },
    { title: "Unread Messages", value: 1, description: "Messages from U-Tech", icon: <FaEnvelope size={20} className="text-teal-400" /> },
    { title: "Pending Requests", value: 1, description: "Awaiting review", icon: <FaTasks size={20} className="text-teal-400" /> },
    { title: "Last Payment", value: "$1,000", description: "Most recent transaction", icon: <FaDollarSign size={20} className="text-teal-400" /> },
  ];

  const projectActivities = [
    { project: "Harvest Goods", task: "Milestone 2 completed", progress: 100 },
    { project: "RahmahKnits", task: "80% complete", progress: 80 },
  ];

  const tutorialActivities = [
    { tutorial: "React Basics", task: "50% complete", progress: 50 },
    { tutorial: "UI/UX Fundamentals", task: "75% complete", progress: 75 },
  ];

  return (
    <div className="space-y-10">

      {/* PAGE HEADER */}
      <div className="text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">Overview</h2>
        <p className="mt-1 text-slate-400">
          Welcome back. Here’s a snapshot of your activity on U-Tech.
        </p>
      </div>

      {/* ACCOUNT STATUS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg bg-[#0f172a] border border-slate-800 p-4 sm:p-5 flex items-center gap-3">
          <FaTasks className="text-teal-400 w-6 h-6" />
          <div>
            <p className="text-sm text-slate-400">Account Status</p>
            <p className="mt-1 text-lg sm:text-xl font-medium text-emerald-400">Active</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg bg-[#0f172a] border border-slate-800 p-4 sm:p-5 flex items-center gap-3">
          <FaBook className="text-teal-400 w-6 h-6" />
          <div>
            <p className="text-sm text-slate-400">Membership</p>
            <p className="mt-1 text-lg sm:text-xl font-medium text-slate-200">Member since Jan 2024</p>
          </div>
        </motion.div>
      </div>

      {/* KEY STATS */}
      <div>
        <h3 className="text-lg sm:text-xl font-medium text-slate-200 mb-4">Key Stats</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsData.map((stat, i) => (
            <StatCard
              key={i}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>

      {/* CURRENT ACTIVITIES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* PROJECT UPDATES */}
        <motion.div className="rounded-lg bg-[#0f172a] border border-slate-800 p-4 sm:p-6 space-y-4">
          <h3 className="text-lg sm:text-xl font-medium text-slate-200">Project Updates</h3>
          <div className="space-y-3">
            {projectActivities.map((act, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-slate-400 min-w-0">
                  <p className="truncate">• {act.project}</p>
                  <p className="ml-2">{act.task}</p>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-teal-400 h-2 rounded-full transition-all"
                    style={{ width: `${act.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TUTORIAL UPDATES */}
        <motion.div className="rounded-lg bg-[#0f172a] border border-slate-800 p-4 sm:p-6 space-y-4">
          <h3 className="text-lg sm:text-xl font-medium text-slate-200">Tutorial Updates</h3>
          <div className="space-y-3">
            {tutorialActivities.map((act, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-slate-400 min-w-0">
                  <p className="truncate">• {act.tutorial}</p>
                  <p className="ml-2">{act.task}</p>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-teal-400 h-2 rounded-full transition-all"
                    style={{ width: `${act.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* QUICK ACTIONS */}
      <div>
        <h3 className="text-lg sm:text-xl font-medium text-slate-200 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            disabled
            className="relative rounded-md bg-teal-500/20 text-teal-400 px-4 py-3 text-sm cursor-not-allowed border border-teal-500/30 hover:bg-teal-500/30 transition"
            data-tooltip-id="quick-actions-tooltip"
            data-tooltip-content="Coming Soon!"
          >
            Request New Project
          </button>

          <button
            disabled
            className="relative rounded-md bg-slate-800 text-slate-400 px-4 py-3 text-sm cursor-not-allowed border border-slate-700 hover:bg-slate-700 transition"
            data-tooltip-id="quick-actions-tooltip"
            data-tooltip-content="Coming Soon!"
          >
            Browse Tutorials
          </button>

          <button
            disabled
            className="relative rounded-md bg-slate-800 text-slate-400 px-4 py-3 text-sm cursor-not-allowed border border-slate-700 hover:bg-slate-700 transition"
            data-tooltip-id="quick-actions-tooltip"
            data-tooltip-content="Coming Soon!"
          >
            Send Message
          </button>
          <Tooltip id="quick-actions-tooltip" />
        </div>
      </div>
    </div>
  );
};

export default Overview;
