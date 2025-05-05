import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for build files
  },
};
