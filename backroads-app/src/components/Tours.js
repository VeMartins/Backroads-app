import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title titleFirst={"Featured"} titleSecond={"Tours"} />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          const {
            id,
            src,
            date,
            title,
            text,
            icon,
            location,
            duration,
            price,
          } = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={src} className="tour-img" alt={title} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={icon}></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{`${duration} days`}</p>
                  <p>{`from £${price}`}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
