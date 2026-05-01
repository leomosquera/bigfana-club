"use client";

export function Visual({ type }: { type: string }) {

return (
    <div className="relative h-full w-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden">

    {/* GLOW */}
    <div className="absolute inset-0 bg-[#FF2D55]/10 blur-[80px]" />

    {/* CONTENT */}
    <div className="relative h-full w-full flex items-center justify-center text-white/60 text-sm">

        {type === "sponsors" && (
        <div className="flex flex-col gap-2">
            <div className="text-white font-semibold">Sponsor ROI</div>
            <div className="text-[#FF2D55] text-lg">+320%</div>
        </div>
        )}

        {type === "consumo" && (
        <div className="flex flex-col gap-2">
            <div className="text-white font-semibold">Consumo</div>
            <div className="text-[#FF2D55] text-lg">+22%</div>
        </div>
        )}

        {type === "tickets" && (
        <div className="flex flex-col gap-2">
            <div className="text-white font-semibold">Tickets</div>
            <div className="text-[#FF2D55] text-lg">+20%</div>
        </div>
        )}

        {type === "data" && (
        <div className="flex flex-col gap-2">
            <div className="text-white font-semibold">Fan Data</div>
            <div className="text-[#FF2D55] text-lg">Segmentación activa</div>
        </div>
        )}

    </div>

    </div>
);
}