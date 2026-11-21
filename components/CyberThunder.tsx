/** Lightning strikes + sky flash, layered behind the rain. */
export default function CyberThunder() {
  return (
    <div className="cyber-thunder" aria-hidden="true">
      <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMin slice">
        <defs>
          <filter id="bolt-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="bolt bolt-a" filter="url(#bolt-glow)">
          <polyline points="286,0 268,64 306,104 276,168 316,214 282,286 322,342 300,402" />
          <polyline points="306,104 350,138 340,188 372,222" />
          <polyline points="276,168 236,200 228,250 196,276" />
          <polyline points="316,214 358,252 350,296" />
        </g>

        <g className="bolt bolt-b" filter="url(#bolt-glow)">
          <polyline points="902,0 884,54 920,96 890,150 928,196 898,258 934,310 914,356" />
          <polyline points="920,96 962,128 954,172 984,206" />
          <polyline points="890,150 852,184 846,226 816,250" />
        </g>

        <g className="bolt bolt-c" filter="url(#bolt-glow)">
          <polyline points="620,0 606,48 634,86 610,138 642,180" />
          <polyline points="634,86 668,116 662,158" />
        </g>
      </svg>

      <div className="thunder-flash" />
      <div className="thunder-flash thunder-flash-secondary" />
    </div>
  );
}
