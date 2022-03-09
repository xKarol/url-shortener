import Shortener from "../shortener";
import Item from "./Item";

export default function AdvancedStatistics() {
  return (
    <section className="advanced-statistics">
      <div className="spacing">
        <Shortener />
        <div className="advanced-statistics__details">
          <h1 className="advanced-statistics__title">Advanced Statistics</h1>
          <p className="advanced-statistics__text">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <section className="advanced-statistics__grid">
          <Item
            iconSrc={"images/icon-brand-recognition.svg"}
            title={"Brand Recognition"}
            text={
              "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
            }
          />
          <Item
            iconSrc={"images/icon-detailed-records.svg"}
            title={"Detailed Records"}
            text={
              "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            }
          />
          <Item
            iconSrc={"images/icon-fully-customizable.svg"}
            title={"Fully Customizable"}
            text={
              "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            }
          />
        </section>
      </div>
    </section>
  );
}
