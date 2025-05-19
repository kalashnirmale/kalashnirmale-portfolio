import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, BookOpen } from "lucide-react";
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

      {/* Hero Section */}
      <header className="relative z-10 text-center pt-20">
        <motion.div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-r from-green-500/40 via-cyan-400/30 to-transparent"></div>
        </motion.div>

        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-full overflow-hidden w-40 h-40 mb-5">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQELpFiD50V4vQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730279168876?e=2147483647&v=beta&t=UDC2Au2GOWIJ2cqbXgDx6llhg4T0svV1tqr89q_Ewvw"
              alt="Kalash Nirmale"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl text-white font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-cyan-400">
            Kalash Nirmale
          </h1>
          <p className="text-xl text-gray-300">Software Developer | Financial Crime Fighter | Security Champion | Love Animals</p>
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-extrabold text-emerald-300 mb-6"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-gray-400 max-w-4xl mx-auto"
        >
        I’m a passionate Software Developer — I thrive at the intersection of <strong>backend logic</strong>,
        <strong>data intelligence</strong>, and <strong>user-facing storytelling</strong>. With hands-on experience in
        <strong> cloud-native development</strong> using AWS (Lambda, Step Functions, SageMaker, IAM, Athena, EC2),
        and a strong grasp of <strong>BI tools</strong> like Tableau and Amazon QuickSight, I bring clarity and structure
        to complex systems.
        </motion.p>
      </section>
      <section>
      <p className="text-gray-700 text-lg mb-4">
        What sets me apart is my ability to:
      </p>
      <ul className="list-disc list-inside text-gray-700 text-lg mb-4">
        <li>Build robust backend solutions</li>
        <li>Translate data into insights</li>
        <li>Present them through intuitive dashboards and automated workflows</li>
      </ul>
      <p className="text-gray-700 text-lg">
        Whether it's developing fraud detection systems at NICE Actimize or designing and hosting my own portfolio site,
        I aim to bring <strong>precision, polish, and purpose</strong> to every solution I create.
      </p>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-extrabold text-emerald-300 mb-6 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "AML Dashboard Migration",
              description: "Migrated dashboards to AWS QuickSight, integrating security and automation.",
              link: "https://github.com/your-repo",
            },
            {
              title: "Visualization Framework",
              description: "Built a framework to standardize BI dashboards for fraud analytics.",
              link: "https://github.com/your-repo",
            }
          ].map(({ title, description, link }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-900 p-6 rounded-lg shadow-xl hover:bg-emerald-700"
            >
              <h3 className="text-2xl text-emerald-400 mb-4">{title}</h3>
              <p className="text-gray-300 mb-4">{description}</p>
              <a href={link} className="text-emerald-400 hover:underline">View on GitHub</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 text-center bg-gray-800">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-extrabold text-emerald-300 mb-6"
        >
          Blog
        </motion.h2>
        <p className="text-lg text-gray-400 mb-6">
          I share technical insights on various topics, including:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl text-emerald-400 mb-4">How Data Center Serves the Campus!</h3>
            <p className="text-gray-300 mb-4">Explore the crucial role of data centers in providing the backbone for campus networking.</p>
            <a href="https://kalashnirmale.medium.com" target="_blank" className="text-emerald-400 hover:underline">Read Article</a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl text-emerald-400 mb-4">How UPI Payment Gateway Works?</h3>
            <p className="text-gray-300 mb-4">An in-depth explanation of the functioning of the UPI system in digital payments.</p>
            <a href="https://kalashnirmale.medium.com" target="_blank" className="text-emerald-400 hover:underline">Read Article</a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl text-emerald-400 mb-4">Packet Switching in Networking</h3>
            <p className="text-gray-300 mb-4">A look into how packet switching facilitates efficient data transfer across networks.</p>
            <a href="https://kalashnirmale.medium.com" target="_blank" className="text-emerald-400 hover:underline">Read Article</a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          © {new Date().getFullYear()} Kalash Nirmale. Built with ❤️ and secured by design.
        </motion.div>
      </footer>
    </div>
  );
}
