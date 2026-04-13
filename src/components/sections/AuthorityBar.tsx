type AuthorityItem = {
  value: string;
  label: string;
};

type AuthorityBarProps = {
  items: AuthorityItem[];
};

export function AuthorityBar({ items }: AuthorityBarProps) {
  return (
    <section data-reveal className="relative border-y border-[var(--color-border)]/50 bg-[var(--color-bg)] py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-x-0 lg:divide-y-0 lg:divide-x divide-[var(--color-border)]/40 rtl:divide-x-reverse">
          {items.map((item) => (
            <div
              key={item.label}
              className="px-4 py-6 lg:py-4 flex flex-col items-center text-center first:pt-0 lg:first:pt-4 last:pb-0 lg:last:pb-4"
            >
              <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[var(--color-gold)] uppercase mb-3 opacity-90">
                {item.label}
              </p>
              <p className="text-xl sm:text-2xl lg:text-[1.75rem] font-medium text-[var(--color-text)] leading-none tracking-tight font-[family-name:var(--font-arabic-display)]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
