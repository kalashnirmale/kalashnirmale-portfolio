module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",  // Tells Tailwind which files to scan for classes
  ],
  theme: {
    extend: {
      colors: {
        emerald: "#10B981",
        cyan: "#06B6D4",
      },
    },
  },
  plugins: [],
}
