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
    <section className={`border-y border-white/[0.08] bg-surface-container-low py-12 md:py-20 ${className}`}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-12">
        <h2 className="font-section-title text-2xl sm:text-3xl md:text-4xl">{title}</h2>
        {subtitle ? (
          <p className="font-body-strong mt-3 text-base text-on-surface/90 sm:mt-4 sm:text-lg">{subtitle}</p>
        ) : null}
        <div className="mx-auto mt-8 flex max-w-md flex-col items-center justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
          <WhatsAppButton
            message={message}
            className="min-h-[52px] w-full justify-center sm:w-auto sm:min-w-[240px]"
          />
          <PhoneButton variant="outline" className="min-h-[52px] w-full justify-center sm:w-auto sm:min-w-[200px]" />
        </div>
      </div>
    </section>
  );
}
