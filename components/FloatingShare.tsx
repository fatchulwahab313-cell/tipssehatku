"use client";

export default function FloatingShare() {
  return (
    <div className="hidden lg:flex flex-col gap-2" style={{ position: "fixed", right: 16, top: "50%", transform: "translateY(-50%)", zIndex: 100 }}>
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=https://tipssehatku.com"
        target="_blank" rel="noopener noreferrer"
        title="Share ke Facebook"
        style={{ width: 40, height: 40, borderRadius: "50%", background: "#1877f2", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "1rem", boxShadow: "var(--shadow-md)", transition: "transform .2s", textDecoration: "none" }}
        onMouseOver={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}>
        f
      </a>
      <a
        href="https://twitter.com/intent/tweet?url=https://tipssehatku.com"
        target="_blank" rel="noopener noreferrer"
        title="Share ke Twitter"
        style={{ width: 40, height: 40, borderRadius: "50%", background: "#1da1f2", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "1rem", boxShadow: "var(--shadow-md)", transition: "transform .2s", textDecoration: "none" }}
        onMouseOver={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}>
        t
      </a>
      <a
        href="https://wa.me/?text=Baca%20artikel%20kesehatan%20di%20https://tipssehatku.com"
        target="_blank" rel="noopener noreferrer"
        title="Share ke WhatsApp"
        style={{ width: 40, height: 40, borderRadius: "50%", background: "#25d366", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "1rem", boxShadow: "var(--shadow-md)", transition: "transform .2s", textDecoration: "none" }}
        onMouseOver={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}>
        w
      </a>
    </div>
  );
}
