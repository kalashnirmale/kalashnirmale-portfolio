import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, BookOpen, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 pt-6 pb-20 font-sans relative overflow-hidden">
      {/* Finance/Fraud background animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(0,255,150,0.05) 0px, rgba(0,255,150,0.05) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, rgba(0,255,150,0.05) 0px, rgba(0,255,150,0.05) 1px, transparent 1px, transparent 20px)
          `,
          backgroundSize: "100% 100%",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-96 z-0 bg-gradient-to-tr from-emerald-500/10 via-cyan-400/10 to-transparent blur-2xl rotate-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      <header className="text-center py-10 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-cyan-300 to-blue-400 animate-textShimmer"
        >
          Kalash Nirmale
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl text-gray-300"
        >
          BI Developer | Security Champion | Financial Crime Fighter
        </motion.p>
        <motion.div
          className="flex justify-center mt-4 gap-5"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="mailto:kalashnirmale@gmail.com" target="_blank">
            <Mail className="w-7 h-7 hover:text-emerald-400 transition transform hover:scale-125" />
          </a>
          <a href="https://github.com/kalashnirmale" target="_blank">
            <Github className="w-7 h-7 hover:text-emerald-400 transition transform hover:scale-125" />
          </a>
          <a href="https://in.linkedin.com/in/kalashnirmale" target="_blank">
            <Linkedin className="w-7 h-7 hover:text-emerald-400 transition transform hover:scale-125" />
          </a>
          <a href="/resume_kalash_nirmale.pdf" target="_blank">
            <FileText className="w-7 h-7 hover:text-emerald-400 transition transform hover:scale-125" />
          </a>
          <a href="https://medium.com/@kalashnirmale" target="_blank">
            <BookOpen className="w-7 h-7 hover:text-emerald-400 transition transform hover:scale-125" />
          </a>
        </motion.div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {[{
          title: "About Me",
          content: "I work at NICE Actimize building anti-money laundering solutions using advanced BI and cloud-native automation. My passion lies at the intersection of finance, data, and security."
        }, {
          title: "Skills",
          content: ["Tableau, Amazon QuickSight", "AWS (Athena, S3, Lambda)", "Data Visualization & BI Frameworks", "Python, SQL, Boto3", "Security Champion, Automation"].map((skill, idx) => <li key={idx}>{skill}</li>)
        }, {
          title: "Highlighted Projects",
          content: (
            <>
              <motion.p whileHover={{ scale: 1.05 }} className="text-gray-400 mb-2">
                <strong>Actimize BI Automation:</strong> Created CI/CD BI publishing using Boto3 + secure frameworks for QuickSight migration.
              </motion.p>
              <motion.p whileHover={{ scale: 1.05 }} className="text-gray-400 mb-2">
                <strong>Smart Data Lineage (GitHub):</strong> Visualized column-level transformation and tracked SQL logic lineage in financial data.
              </motion.p>
              <motion.p whileHover={{ scale: 1.05 }} className="text-gray-400 mb-2">
                <strong>EDA+AutoML Engine:</strong> Open-source data exploration with ML pipeline creation for structured datasets.
              </motion.p>
              <motion.p whileHover={{ scale: 1.05 }} className="text-gray-400 mb-2">
                <a href="https://github.com/kalashnirmale" target="_blank" className="text-emerald-400 underline">View more on GitHub ↗</a>
              </motion.p>
            </>
          )
        }, {
          title: "Blog & Insights",
          content: (
            <p className="text-gray-400">
              I write on finance-tech intersections, visualization, and productivity hacks. Read at
              <a href="https://kalashnirmale.medium.com" target="_blank" className="text-emerald-400 underline ml-1">
                Medium ↗
              </a>
            </p>
          )
        }, {
          title: "Profiles",
          content: (
            <ul className="list-disc list-inside text-gray-400">
              <li><a href="https://leetcode.com/kalashnirmale" target="_blank" className="text-emerald-400 underline">LeetCode</a></li>
              <li><a href="https://kalashnirmale.medium.com" target="_blank" className="text-emerald-400 underline">Medium</a></li>
              <li><a href="https://github.com/kalashnirmale" target="_blank" className="text-emerald-400 underline">GitHub</a></li>
            </ul>
          )
        }].map(({ title, content }, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-900 border border-emerald-700 rounded-3xl shadow-2xl p-6 hover:border-emerald-400"
          >
            <h2 className="text-2xl font-bold mb-4 text-emerald-300">{title}</h2>
            <div className="text-gray-300 text-sm">{content}</div>
          </motion.div>
        ))}
      </main>

      <footer className="text-center mt-20 text-sm text-gray-500 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          © {new Date().getFullYear()} Kalash Nirmale. Built with ❤️ and secured by design.
        </motion.div>
      </footer>
    </div>
  );
}
