import { Leaf, MessageCircle, Tag } from "lucide-react";
const items = [
  { Icon: Leaf, label: "Mobilidade sustentável" },
  { Icon: Tag, label: "Condições claras" },
  { Icon: MessageCircle, label: "Atendimento pelo WhatsApp" },
];
export function Features() {
  return (
    <ul className="grid grid-cols-3 gap-2 text-center text-xs text-white/90">
      {items.map(({ Icon, label }) => (
        <li key={label} className="flex flex-col items-center gap-2"><Icon size={28} strokeWidth={1.5} aria-hidden />{label}</li>
      ))}
    </ul>
  );
}
