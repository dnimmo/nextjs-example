const ChallengeItem = 
  ({imageSrc, text}) => (
    <div className='challengeItem'>
      <img src={imageSrc}/>
      <p>{text}</p>
    </div>
  )

const challengeComponent = 
  () => (
    <div className='businessChallenges'>
      <h2>Do any of the following apply to you?</h2>
      
      <ChallengeItem
        imageSrc='http://travel.cloud/wp-content/uploads/2017/05/1614-Click-Travel-travel.cloud-May-Retainer-V2_challenge-1.svg' 
        text='Do you stare at your monitor, not allowing your lack of eyes get in your way?'
      />

      <ChallengeItem
        imageSrc='http://travel.cloud/wp-content/uploads/2017/05/1614-Click-Travel-travel.cloud-May-Retainer-V2_challenge-2.svg' 
        text='Are you sick of being told to "like, share and subscribe"?'
      />

      <ChallengeItem
        imageSrc='http://travel.cloud/wp-content/uploads/2017/05/1614-Click-Travel-travel.cloud-May-Retainer-V2_challenge-3.svg' 
        text='Are you confused by Capitalism?'
      />

      <ChallengeItem
        imageSrc='http://travel.cloud/wp-content/uploads/2017/05/1614-Click-Travel-travel.cloud-May-Retainer-V2_challenge-5.svg' 
        text='Do you find yourself constantly wondering how you will afford your next suitcase?' 
      />
      
      <ChallengeItem
        imageSrc='http://travel.cloud/wp-content/uploads/2017/05/1614-Click-Travel-travel.cloud-May-Retainer-V2_challenge-4.svg' 
        text='Do your colleagues seem distant, even when you spent all night coming up fancy graphs just to see them smile again?' 
      />

    </div>
  )

export default challengeComponent