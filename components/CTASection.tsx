import { PhoneButton } from "@/components/PhoneButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type CTASectionProps = {
  title: string;
  subtitle?: string;
  message?: string;
  className?: string;
};

export function CTASection({ title, subtitle, message, className = "" }: CTASectionProps) {
  return (
    <section className={`border-y border-white/[0.08] bg-surface-container-low py-14 md:py-20 ${className}`}>
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <h2 className="font-section-title text-3xl md:text-4xl">{title}</h2>
        {subtitle ? <p className="font-body-strong mt-4 text-lg text-on-surface/90">{subtitle}</p> : null}
        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <WhatsAppButton message={message} className="min-h-[52px] sm:min-w-[240px]" />
          <PhoneButton variant="outline" className="min-h-[52px] sm:min-w-[200px]" />
        </div>
      </div>
    </section>
  );
}
