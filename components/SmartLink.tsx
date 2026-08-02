import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/**
 * Renders a plain <a> for external URLs (redirecting to the original site /
 * shop) and a client-routed next/link for internal translated pages.
 */
export default function SmartLink({ href, children, ...rest }: Props) {
  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
