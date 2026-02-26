export default function AdSlot({ label = "Advertisement" }: { label?: string }) {
  return (
    <div className="ad-slot">
      <p>[ {label} — Google AdSense / Affiliate ]</p>
    </div>
  );
}
