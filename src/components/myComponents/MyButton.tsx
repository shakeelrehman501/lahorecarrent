type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "fill"
  | "solid"
  | "solidOutline"
  | "primaryIcon"
  | "secondaryIcon"
  | "outlineIcon"
  | "fillIcon"
  | "solidIcon"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isScrolled?: boolean;
}
const MyButton = ({
  children,
  className,
  variant = "primary",
  leftIcon,
  rightIcon,
  isScrolled = false,
  ...props
}: ButtonProps) => {
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-primary hover:bg-transparent border border-transparent hover:border-primary text-primary-foreground hover:text-primary",
    secondary:
      "bg-secondary text-secondary-foreground  hover:bg-transparent border border-transparent hover:border-secondary hover:text-secondary",
    outline:
      "bg-transparent text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary border border-secondary-foreground hover:bg-secondary hover:border-transparent ",
    fill:
      "bg-primary text-primary-foreground hover:bg-transparent hover:text-primary border border-transparent hover:border-primary dark:bg-secondary-foreground dark:text-secondary dark:hover:bg-transparent dark:hover:text-secondary-foreground dark:border-secondary-foreground",
    solid:
      "bg-white text-black border border-transparent hover:border-white hover:text-white hover:bg-transparent",
    solidOutline:
      "bg-transparent text-white border border-white hover:border-transparent hover:text-black hover:bg-white",

    primaryIcon:
      "w-10 h-10 flex items-center justify-center bg-primary hover:bg-transparent border border-transparent hover:border-primary text-primary-foreground hover:text-primary",
    secondaryIcon:
      "w-10 h-10 flex items-center justify-center  bg-secondary text-secondary-foreground  hover:bg-transparent border border-transparent hover:border-secondary hover:text-secondary",
    outlineIcon:
      "w-10 h-10 flex items-center justify-center bg-transparent text-secondary hover:bg-secondary border hover:bg-secondary hover:border-transparent hover:text-secondary-foreground",
    fillIcon:
      "w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground hover:bg-transparent hover:text-primary border border-transparent hover:border-primary dark:bg-secondary-foreground dark:text-secondary dark:hover:bg-transparent dark:hover:text-secondary-foreground dark:border-secondary-foreground",
    solidIcon:
      "w-10 h-10 flex items-center justify-center bg-white text-black border border-transparent hover:border-white hover:text-white hover:bg-transparent",
  };
  const isIconOnly = variant === "primaryIcon" || variant === "secondaryIcon" || variant === "outlineIcon" || variant === "solidIcon" || variant === "fillIcon";
  const baseStyles =
    " flex justify-center items-center rounded-full cursor-pointer transition-all duration-200 font-semibold whitespace-nowrap";
  const sizeStyles = isIconOnly
    ? ""
    : "w-fit h-fit px-4 py-2 text-sm md:text-lg gap-2 sm:px-4.5 sm:py-2.5 md:px-5 md:py-3  md:gap-2.5 lg:px-6 lg:py-3.5 lg:gap-3";

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variants[variant]} ${
        isScrolled ? "dark:bg-secondary-foreground/50 dark:text-secondary-foreground" : ""
      } ${className || ""}`}
      {...props}
    >
      {isIconOnly ? (
        <span className="flex items-center justify-center w-5 h-5">
          {children || leftIcon || rightIcon}
        </span>
      ) : (
        <>
          {leftIcon && (
            <span className="flex items-center justify-center w-5 h-5">
              {leftIcon}
            </span>
          )}
          {children}
          {rightIcon && (
            <span className="flex items-center justify-center w-5 h-5">
              {rightIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
};
export default MyButton;
