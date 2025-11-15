"use client";

import { Suspense, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Spline to reduce initial bundle size
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineLoadingSkeleton />,
});

interface SplineLoaderProps {
  scene: string;
  className?: string;
  fallbackImage?: string;
}

function SplineLoadingSkeleton() {
  return (
    <div className="w-full h-full bg-bg-secondary animate-pulse flex items-center justify-center">
      <div className="text-text-secondary">Loading 3D Model...</div>
    </div>
  );
}

export default function SplineLoader({
  scene,
  className = "",
  fallbackImage,
}: SplineLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount
  useState(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  });

  // Show fallback image on mobile or error
  if (isMobile || hasError) {
    return (
      <div
        className={`w-full h-full bg-cover bg-center ${className}`}
        style={{
          backgroundImage: fallbackImage
            ? `url(${fallbackImage})`
            : "linear-gradient(135deg, #005288 0%, #00d9ff 100%)",
        }}
      />
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {!isLoaded && <SplineLoadingSkeleton />}
      
      <Suspense fallback={<SplineLoadingSkeleton />}>
        <div className={isLoaded ? "opacity-100" : "opacity-0"}>
          <Spline
            scene={scene}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          />
        </div>
      </Suspense>
    </div>
  );
}
