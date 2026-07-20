import React from "react";

type Props = {
  period: string;
  role: string;
  place: string;
  desc: React.ReactNode;
  ariaLabel?: string;
};

const TimelineItem: React.FC<Props> = ({
  period,
  role,
  place,
  desc,
  ariaLabel,
}) => (
  <div className="timeline-item relative mb-9" aria-label={ariaLabel}>
    <div className="timeline-dot absolute -left-7 top-1.5 w-2.5 h-2.5 rounded-full bg-bg border-2 border-[rgba(127,238,100,0.3)] transition-all hover:bg-green" />
    <div className="timeline-period font-mono text-[10px] text-green tracking-[0.12em] mb-1.5">
      {period}
    </div>
    <div className="timeline-role text-[15px] font-bold mb-1 text-text">
      {role}
    </div>
    <div className="timeline-place font-mono text-[11px] text-text-muted mb-2">
      {place}
    </div>
    <div className="timeline-desc font-mono text-[11px] text-text-dim leading-[1.7]">
      {desc}
    </div>
  </div>
);

export default TimelineItem;
