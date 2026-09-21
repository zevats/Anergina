import { motion } from 'framer-motion';
import { SEOHead } from '@/components/common/SEOHead';
import { TechLabel } from '@/components/common/TechLabel';
import { Button } from '@/components/common/Button';
import { fadeUp } from '@/lib/motion';
import { ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="404 — Page Not Found | Anergina"
        description="The requested resource could not be found on the Anergina platform network."
      />

      <section className="min-h-[85vh] flex items-center justify-center bg-[#050608] relative overflow-hidden px-6">
        <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center max-w-md relative z-10"
        >
          <div className="flex justify-center mb-4">
            <TechLabel>Error 404</TechLabel>
          </div>

          <h1 className="text-6xl sm:text-7xl font-900 tracking-tight text-[#F5F7FA] mb-4">
            404
          </h1>

          <h2 className="text-xl font-700 text-[#F5F7FA] mb-3">
            Endpoint not located on network
          </h2>

          <p className="text-sm text-[#8E99A5] leading-relaxed mb-8">
            The operational route or document you requested does not exist or has been relocated to another service cluster.
          </p>

          <Button to="/" variant="secondary" size="md">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Return to Operating Platform
          </Button>
        </motion.div>
      </section>
    </>
  );
}
