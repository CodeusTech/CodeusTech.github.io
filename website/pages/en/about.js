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

    const Features = () => (
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
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Frame>
    );

    return (
      <div>
        <div className="mainContainer">
          <h2 className="hDirectors">Directors</h2>
          <Features />
        </div>
      </div>
    );
  }
}

module.exports = About;
