import classNames from "classnames";
import styles from "./DevelopersContentPage.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";

interface NavItem {
  href?: string;
  label?: string;
  title?: string;
}

interface PageNavProps {
  nav: {
    prev?: NavItem | null;
    next?: NavItem | null;
  };
}

export const PageNav = ({ nav }: PageNavProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(
        styles["developers-content-page__nav"],
        "d-flex flex-column flex-md-row justify-content-between mt-10 small",
      )}
    >
      {nav.prev?.href ? (
        <Link href={nav.prev.href}>
          <span>{t("developers.nav.prev")}</span>
          <div>« {nav.prev.label || nav.prev.title}</div>
        </Link>
      ) : (
        <div>{/* flex display placeholder when index is first item */}</div>
      )}

      {nav.next?.href ? (
        <Link href={nav.next.href}>
          <span>{t("developers.nav.next")}</span>
          <div>{nav.next.label || nav.next.title} »</div>
        </Link>
      ) : (
        <div>{/* flex display placeholder when index is last item*/}</div>
      )}
    </div>
  );
};
