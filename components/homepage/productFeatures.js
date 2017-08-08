const FeatureDescription =
  ({ imageSrc, title, text }) => (
    <div className="featureDescription">
      <img src={imageSrc} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );

const features =
  () => (
    <div className="productFeatures">
      <h2>We can probably make your life better!</h2>
      <div className="featureContainer">
        <FeatureDescription
          imageSrc="http://travel.cloud/wp-content/uploads/2017/04/tc-icons_update-teams-01-3.svg"
          title="An Email thing"
          text="Something about email here! Email is great! Or it is rubbish? Whichever one you agree with, our product will help!"
        />

        <FeatureDescription
          imageSrc="http://travel.cloud/wp-content/uploads/2017/03/feedback-01.svg"
          title="A shared baskets thing"
          text="Something about shared baskets here! Share all your baskets, all the time!"
        />

        <FeatureDescription
          imageSrc="http://travel.cloud/wp-content/uploads/2017/03/saved-time-1-01.svg"
          title="A thing for cost codes"
          text="You want cost codes? You got them!"
        />

        <FeatureDescription
          imageSrc="http://travel.cloud/wp-content/uploads/2017/03/travel-overview-01-1-01.svg"
          title="Policy and approvals"
          text="Policies! Approvals! Together!"
        />

        <FeatureDescription
          imageSrc="http://travel.cloud/wp-content/uploads/2017/03/tc-icons_event-reporting-01.svg"
          title="Reporting"
          text="Because no-one likes reporting. Shut up, Brian."
        />

        <FeatureDescription
          imageSrc="http://travel.cloud/wp-content/uploads/2017/04/tc-icons_free-cost-01.svg"
          title="Comes with a free money-finder"
          text="Cool, right?"
        />
      </div>
    </div>
  );

export default features;
