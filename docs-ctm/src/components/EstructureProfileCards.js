import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

// translate id. need to be changed "team" to "estructure"


function WebsiteLink({to, children}) {
  return (
    <Link to={to}>
      {children || (
        <Translate id="team.profile.websiteLinkLabel">website</Translate>
      )}
    </Link>
  );
}

function EstructureProfileCard({className, avatarUrl, name, children, githubUrl, twitterUrl, facebookUrl}) {
  return (
    <div className={className}>
      <div className="card card--full-height shadow--tl">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={avatarUrl} //src={githubUrl + '.png'}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <h3 className="avatar__name">{name}</h3>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <a className="button button--danger" href={githubUrl}>
                GitHub
              </a>
            )}
            {twitterUrl && (
              <a className="button button--secondary" href={twitterUrl}>
                Twitter
              </a>
            )}
            {facebookUrl && (
              <a className="button button--secondary" href={facebookUrl}>
                Facebook
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function EstructureProfileCardCol(props) {
  return (
    <EstructureProfileCard {...props} className={'col col--12 margin-bottom--lg'} />
  );
}
function EstructureProfileCardCol2(props) {
  return (
    <EstructureProfileCard {...props} className={'col col--6 margin-bottom--lg'} />
  );
}
export function SecretariaGeneralEstructureRow() {
  return (
    <div className="row">
     
      <EstructureProfileCardCol
        avatarUrl="img/Secretario General.jpg"
        name="Jose I. Santamaria Casanova"
        twitterUrl="https://twitter.com/"
        facebookUrl="https://www.facebook.com/jose.i.santamaria.3">
        
        <Translate id="team.profile.Jose I Santamaria Casanova.body">
          Obsessed open-source enthusiast 👋 Eternal amateur at everything 🤷‍♂️
          Maintainer of Russian docs on PHP, React, Kubernetes and much more 🧐

          
        </Translate>
      </EstructureProfileCardCol>
      </div>

      
    
  );
}

export function ComiteEstatalEstructureRow() {
  return (
    <div className="row">
      <EstructureProfileCardCol2
        name="Endilie Yacop Sucipto"
        githubUrl="https://github.com/endiliey"
        twitterUrl="https://twitter.com/endiliey">
        <Translate id="team.profile.Endilie Yacop Sucipto.body">
          Maintainer @docusaurus · 🔥🔥🔥
        </Translate>
      </EstructureProfileCardCol2>
      <EstructureProfileCardCol2
        name="Wei Gao"
        githubUrl="https://github.com/wgao19"
        twitterUrl="https://twitter.com/wgao19">
        <Translate id="team.profile.Wei Gao.body">
          🏻‍🌾 Work in progress React developer, maintains Docusaurus, writes
          docs and spams this world with many websites.
        </Translate>
      </EstructureProfileCardCol2>
      
      <EstructureProfileCardCol2
        name="Joel Marcey"
        githubUrl="https://github.com/JoelMarcey"
        twitterUrl="https://twitter.com/joelmarcey">
        <Translate id="team.profile.Joel Marcey.body">
          Docusaurus founder and now ever grateful Docusaurus cheerleader to
          those who actually write code for it.
        </Translate>
      </EstructureProfileCardCol2>
      

        
          <EstructureProfileCardCol2
         name="Sébastien Lorber"
           githubUrl="https://github.com/slorber"
         twitterUrl="https://twitter.com/sebastienlorber">
         <Translate
          id="team.profile.Sebastien Lorber.body"
          values={{
            website: <WebsiteLink to="https://sebastienlorber.com/" />,
            devto: <Link to="https://dev.to/sebastienlorber">Dev.to</Link>,
          }}>
          {
            'React lover since 2014. Freelance, helping Facebook ship Docusaurus v2. He writes regularly, on his {website} and {devto}.'
          }
          </Translate>
          </EstructureProfileCardCol2>
      
      
        <EstructureProfileCardCol2
        name="Yangshun Tay"
        githubUrl="https://github.com/yangshun"
        twitterUrl="https://twitter.com/yangshunz">
        <Translate id="team.profile.Yangshun Tay.body">
          Full Front End Stack developer who likes working on the Jamstack.
          Working on Docusaurus made him Facebook's unofficial part-time Open
          Source webmaster, which is an awesome role to be in.
        </Translate>
        </EstructureProfileCardCol2>
      
    </div>
  );
}

export function FederacionesEstructureRow() {
  return (
    <div className="row">
      <EstructureProfileCardCol
        name="Anshul Goyal"
        githubUrl="https://github.com/anshulrgoyal"
        twitterUrl="https://twitter.com/ar_goyal">
        Fullstack developer who loves to code and try new technologies. In his
        free time, he contributes to open source, writes blog posts on his{' '}
        <a href="https://anshulgoyal.dev/" target="_blank">
          website
        </a>{' '}
        and watches Anime.
      </EstructureProfileCardCol>
      <EstructureProfileCardCol
        name="Drew Alexander"
        githubUrl="https://github.com/drewbi">
        Developer and Creative, trying to gain the skills to build whatever he
        can think of.
      </EstructureProfileCardCol>
      <EstructureProfileCardCol
        name="Fanny Vieira"
        githubUrl="https://github.com/fanny"
        twitterUrl="https://twitter.com/fannyvieiira">
        Fanny got started with web development in high school, building a
        project for the school kitchen. In her free time she loves contributing
        to Open Source, occasionally writing on{' '}
        <a href="https://dev.to/fannyvieira" target="_blank">
          her blog
        </a>{' '}
        about her experiences, cooking, and creating{' '}
        <a href="https://open.spotify.com/user/anotherfanny" target="_blank">
          Spotify playlists
        </a>
        .
      </EstructureProfileCardCol>
      <EstructureProfileCardCol
        name="Sam Zhou"
        githubUrl="https://github.com/SamChou19815"
        twitterUrl="https://twitter.com/SamChou19815">
        Sam started programming in 2011 and built his{' '}
        <a href="https://developersam.com">website</a> in 2015. He is interested
        in programming languages, dev infra and web development, and has built
        his own{' '}
        <a href="https://samlang.developersam.com/">programming language</a> and{' '}
        <a href="https://github.com/SamChou19815/mini-react">mini React</a>.
      </EstructureProfileCardCol>
      
    </div>
  );
}