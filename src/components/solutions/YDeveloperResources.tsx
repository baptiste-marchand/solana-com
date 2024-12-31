// import Link from "next/link";
import Image from "next/image";
import { Trans } from "next-i18next";
import classNames from "classnames";

import Button from "@/components/solutions/Button";
import { AnimatedText } from "@/components/shared/Text";

import styles from "./YDeveloperResources.module.scss";

import { ArrowUpRight } from "lucide-react";

interface YDeveloperResourcesProps {
  title: string;
  subtitle?: string;
  id: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secButtonText?: string;
  secButtonUrl?: string;
  image?: string;
}

const YDeveloperResources = ({
  id,
  title,
  subtitle,
  primaryButtonText,
  primaryButtonUrl,
  secButtonText,
  secButtonUrl,
  image,
}: YDeveloperResourcesProps) => {
  return (
    <section className={styles.developer_resources} id={id}>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.title_block}>
            <h3 className={styles.title_badge}>Build</h3>
            <AnimatedText element="h2" as="heading">
              <Trans i18nKey={title} />
            </AnimatedText>

            {subtitle && (
              <AnimatedText
                element="p"
                as="paragraph"
                className={classNames(styles.subtitle)}
              >
                <Trans i18nKey={subtitle} />
              </AnimatedText>
            )}

            <div className={styles.button_wrapper}>
              {primaryButtonText && primaryButtonUrl && (
                <Button
                  text={primaryButtonText}
                  url={primaryButtonUrl}
                  target="_blank"
                />
              )}

              {secButtonText && secButtonUrl && (
                <a
                  href={secButtonUrl}
                  className={styles.btn_secondary}
                  target="_blank"
                >
                  <span>
                    {secButtonText}
                    <ArrowUpRight size="14" />
                  </span>
                </a>
              )}
            </div>
          </div>

          {image && title && (
            <div>
              <Image src={image} alt={title} width={514} height={485} />
            </div>
          )}
        </div>
      </div>

      <div className={styles.random_gradient_bg}></div>
    </section>
  );
};

export default YDeveloperResources;
