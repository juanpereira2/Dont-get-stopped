export function ExpBar() {
  return (
    <header className="experience-bar">
      <span>0 xp</span>
      <div>
        <div style={{ width: "50%" }}></div>

        <span className="current-exp" style={{ left: "50%" }}>
          300xp
        </span>
      </div>
      <span> 600 xp</span>
    </header>
  );
}
