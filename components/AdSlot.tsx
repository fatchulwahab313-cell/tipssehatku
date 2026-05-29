"use client";
interface Props { size?: "leaderboard"|"rectangle"|"mobile"; className?: string; }
const sizes = { leaderboard:{w:"728px",h:"90px",label:"728×90 Leaderboard"}, rectangle:{w:"300px",h:"250px",label:"300×250 Rectangle"}, mobile:{w:"320px",h:"100px",label:"320×100 Mobile"} };

export default function AdSlot({ size="leaderboard", className="" }: Props) {
  const s = sizes[size];
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="ad-slot" style={{ width:s.w, height:s.h, maxWidth:"100%" }}>
        <span>Iklan / Advertisement</span>
        <span style={{fontSize:"11px",color:"#c0c0c0"}}>{s.label}</span>
      </div>
    </div>
  );
}
