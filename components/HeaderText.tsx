import { twMerge } from 'tailwind-merge';

const HeaderText = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className={twMerge(className, 'font-semibold uppercase')}>{title}</div>
  );
};

export default HeaderText;
