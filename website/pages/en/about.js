/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;


class About extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Frame = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Directors = () => (
      <Frame layout="fourColumn">
        {[
          {
            content: '*cfagley@codeus.tech*<br>' +
                     'Cody is a multilinguist programmer who has been coding/hacking from a young age.  ' + 
                     'He grew up in a collection of small towns in Wyoming ' +
                     '(e.g. [Basin](https://duckduckgo.com/?q=Basin%2C+Wyoming&t=ffab&ia=web&iaxm=about)' +
                     ', [Powell](https://duckduckgo.com/?q=Powell%2C+Wyoming&t=ffab&ia=web&iaxm=about)' +
                     ', and [Sheridan](https://duckduckgo.com/?q=Sheridan%2C+Wyoming&t=ffab&ia=web&iaxm=about)).  ' +
                     'Cody holds a degree in Computer Science from University of Wyoming; since graduating he has focused his ' +
                     'energy on building Codeus Tech and X-Ita Control System.  He built Codeus Tech ' +
                     'to extend his research in **intrinsically-secure systems design**.',
            image: `${baseUrl}img/Cody_square.jpg`,
            imageAlign: 'top',
            title: 'Cody Fagley',
          },
          {
            content: 'Professional Description/Photo will be up on/before Dec 2.',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Lisa Fagley',
          },
        ]}
      </Frame>
    );

  const Advisors = () => (
    <Frame layout="fourColumn">
    {[
      {
        content:  '*dbohlin1@uwyo.edu*<br>' +
                  '**David Bohling (Dave)** previously served as Principle Investigator for a DARPA semiconductor project. ' +
                  'His investigation was ultimately completed under-budget and faster than expected.  Dave has a proven ' +
                  'track record of successfully managing various technologies in concurrency.',
        image: `${baseUrl}img/dave.jpg`,
        imageAlign: 'top',
        title: 'David Bohling',
      },
      {
        content: 'Codeus Tech is honored to be advised by **Edward Hart**, previous Deputy Director in Information Security of National Security Agency (NSA).  ' +
                 'Ed has overseen development of some of the world\'s most advanced and secure IoT devices.',
        imageAlign: 'top',
        title: 'Ed Hart',
      },
      {
        content:  '**Jerad Stack** is a successful Founder/CEO and Wyoming business leader.  Jerad has had a prolific career in engineering and ' +
                  'simulation with Firehole Composites (later acquired by AutoDesk).  He continues to use his expertise to help growing companies ' +
                  'reach their next steps.',
        image: `${baseUrl}img/jerad.jpg`,
        imageAlign: 'top',
        title: 'Jerad Stack',
      },
    ]}
    </Frame>
  );

    return (
      <div>
        <div className="mainContainer">
          <h2 className="hAbout">Directors</h2>
          <Directors />
          <h2 className="hAbout">Advisors</h2>
          <Advisors />
        </div>
      </div>
    );
  }
}

module.exports = About;
