import { LinkNavigation } from '@/types/general';
import { Link } from '@mui/material';

export const links: LinkNavigation[] = [
  {
    path: '/#mentoring',
    label: 'Mentorias',
  },
  {
    path: '/courses',
    label: 'Cursos',
  },
];

export default function Header() {
  return (
    <div className="bg-slate-200 w-full flex flex-row items-center justify-between px-6 py-4">
      <Link href="/" underline="none" variant="h2" color="primary.dark">
        LCreative
      </Link>
    </div>
  );
}
