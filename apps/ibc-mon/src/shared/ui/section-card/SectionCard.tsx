import { tcm } from "@dlvlabs/ui";

export const SectionCard = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      {...props}
      className={tcm(
        "min-w-[70vw] bg-white w-2/3 max-w-2xl overflow-hidden sm:rounded-lg shadow-[rgba(0,0,0,0.35)_0px_5px_15px] mx-auto",
        props.className
      )}>
      {children}
    </section>
  );
};
