interface IndicationChipsProps {
  stacked?: boolean;
}

export function IndicationChips({ stacked = false }: IndicationChipsProps) {
  return (
    <div className={`flex ${stacked ? "flex-col gap-2.5" : "flex-row flex-wrap gap-0"} items-start`}>
      <div
        className="bg-[#237EBF] text-white font-[700] px-5 py-2.5 text-[22px] sm:text-[26px] lg:text-[30px]"
        style={{
          borderRadius: stacked ? "12px" : "12px 0 0 12px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >for CML<span className="text-[16px] align-super">*</span></div>
      <div
        className="bg-[#2E8762] text-white font-[700] px-5 py-2.5 text-[22px] sm:text-[26px] lg:text-[30px]"
        style={{
          borderRadius: stacked ? "12px" : "0 12px 12px 0",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        and Ph+ ALL<span className="text-[16px] align-super">&dagger;</span>
      </div>
    </div>
  );
}