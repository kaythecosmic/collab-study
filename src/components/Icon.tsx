import Link from "next/link";

const Icon = ({
  children,
  className,
  href
}: {
  href: string;
  children: React.ReactElement;
  className?: string;
}) => {
  return (
    <Link href={href}>
      <div
        className={`size-10 mx-auto rounded-full flex justify-center items-center hover:border hover:border-primary transition-colors ${className}`}
      >

        {children}
      </div>
    </Link>
  );
};

export default Icon;
