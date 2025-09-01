import styles from "../styles/Services.module.css";
import servicesListData from "../data/services.json";
import type { ReactNode } from "react";

interface ItemIter {
  id: number;
  ifa: string;
  pjt: string;
  content: string;
}

interface ItemProps {
  ppt: object;
  children?: ReactNode | ReactNode[];
}

const Item = ({ ppt, children }: ItemProps) => {
  // console.log(ppt);
  return <div className={styles["services-box"]}>{children}</div>;
};

const Services = () => {
  return (
    <>
      <section className={styles.services}>
        <h2 className="heading">
          My <span>Services</span>
        </h2>

        <div className={styles["services-container"]}>
          {servicesListData.map((data: ItemIter, idx: number) => {
            return (
              <Item key={idx} ppt={data}>
                <div className={styles.icon}>
                  <i className={data.ifa}></i>
                  <a href="#">
                    <i className="fa fa-arrow-left"></i>
                  </a>
                </div>
                <h3>{data.pjt}</h3>
                <p>{data.content}</p>
              </Item>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
