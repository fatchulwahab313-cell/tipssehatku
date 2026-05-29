"use client";
import { useEffect, useRef } from "react";

interface Props {
  size?: "leaderboard" | "rectangle" | "mobile";
  className?: string;
  slot?: string; // AdSense ad unit slot ID (isi setelah dapat dari AdSense dashboard)
}

const sizes = {
  leaderboard: { w: 728, h: 90,  label: "728×90 Leaderboard"  },
  rectangle:   { w: 300, h: 250, label: "300×250 Rectangle"    },
  mobile:      { w: 320, h: 100, label: "320×100 Mobile Banner" },
};

const PUB_ID = "ca-pub-1505871499689560";

// Slot IDs — isi setelah dapat dari AdSense dashboard > Iklan > Per unit iklan
// Sementara pakai "auto" untuk Auto Ads, nanti ganti dengan ID unit iklan spesifik
const DEFAULT_SLOTS: Record<string, string> = {
  leaderboard: "", // ganti dengan slot ID leaderboard
  rectangle:   "", // ganti dengan slot ID rectangle
  mobile:      "", // ganti dengan slot ID mobile
};

export default function AdSlot({ size = "leaderboard", className = "", slot }: Props) {
  const s = sizes[size];
  const adRef = useRef<HTMLModElement>(null);
  const slotId = slot || DEFAULT_SLOTS[size];

  useEffect(() => {
    // Hanya jalankan di production dengan slot ID valid
    if (!slotId) return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {
      // ignore
    }
  }, [slotId]);

  // Kalau slot ID belum diisi, tampilkan placeholder
  if (!slotId) {
    return (
      <div className={`flex justify-center ${className}`}>
        <div className="ad-slot" style={{ width: s.w, height: s.h, maxWidth: "100%" }}>
          <span>Iklan / Advertisement</span>
          <span style={{ fontSize: "11px", color: "#c0c0c0" }}>{s.label}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex justify-center overflow-hidden ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", width: s.w, height: s.h, maxWidth: "100%" }}
        data-ad-client={PUB_ID}
        data-ad-slot={slotId}
        data-ad-format={size === "leaderboard" ? "horizontal" : "rectangle"}
        data-full-width-responsive="true"
      />
    </div>
  );
}
