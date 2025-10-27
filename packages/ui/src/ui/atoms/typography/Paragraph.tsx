import { HTMLAttributes } from "react";

export const MainIntroductionText: React.FC<
  HTMLAttributes<HTMLParagraphElement>
> = ({ children, ...props }) => {
  return (
    <p
      className="mx-auto mt-4 max-w-xl text-center font-normal text-neutral-300 text-lg"
      {...props}>
      {children}
    </p>
  );
};
