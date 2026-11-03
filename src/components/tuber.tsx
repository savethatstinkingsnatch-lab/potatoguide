const SIZE = {
  sm: "size-8",
  md: "size-12",
  lg: "size-16",
  xl: "size-24",
} as const;

export function Tuber({
  skin,
  flesh,
  label,
  size = "md",
}: {
  skin: string;
  flesh: string;
  label: string;
  size?: keyof typeof SIZE;
}) {
  const mark = (
    <span aria-hidden={label ? undefined : true} className={`relative inline-block shrink-0 ${SIZE[size]}`}>
      <span className="tuber-skin" style={{ backgroundColor: skin }} />
      <span className="tuber-flesh" style={{ backgroundColor: flesh }} />
    </span>
  );
  if (!label) return mark;
  return (
    <span role="img" aria-label={label} className="inline-flex">
      {mark}
    </span>
  );
}
