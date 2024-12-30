import styles from "@/components/home/YCTA.module.scss";
import Button from "@/components/solutions/Button";
import { ArrowUpRight } from "lucide-react";

const YCTA = () => {
  return (
    <section className={styles.ycta}>
      <div className={styles.ycta_container}>
        <div className={styles.circles}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.cta_content}>
          <h2 className={styles.cta_heading}>
            Join The Thousands Of Creators, Artists, & Developers
          </h2>

          <div className={styles.button_wrapper}>
            <Button text="Start Building" url="/" />

            <a href="#" className={styles.btn_secondary} target="_blank">
              <span>
                Resources
                <ArrowUpRight size="14" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YCTA;
