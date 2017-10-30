import React from 'react'
import { P, H1, H2 } from '../../components/Text/Text'
import Image from '../../components/Image'
import Box from '../../components/Box'
import logo from '../../logo.svg'
import CustomLink from '../../components/CustomLink'

const Home = props => (
    <div>
      <H1>Home</H1>
      <P>Welcome home!</P>
      <P>{'output of clean puretext'}</P>
      <Image src={logo} alt={'logo'} />

      <P>
        Lorem Ipsum is simply <CustomLink >dummy text</CustomLink> of the printing and typesetting industry.
        Lorem Ipsum has been the industry's <CustomLink className={'inv'} to='/'>standard dummy text</CustomLink> ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </P>
      <CustomLink className={'btn'} to='/'>{'LinkButton'}</CustomLink><br/>
      <CustomLink className={'btn inv'} to='/'>{'LinkButtonInverse'}</CustomLink>
      <P>
        It has survived not only <CustomLink to='http://google.com' external>five centuries</CustomLink>, but also the leap
        into electronic typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets containing <CustomLink className={'inv'} to='http://google.com' external>Lorem Ipsum</CustomLink> passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </P>
      <CustomLink className={'btn'} to='http://google.com' external>{'ExternalLinkButton'}</CustomLink><br/>
      <CustomLink className={'btn inv'} to='http://google.com' external>{'ExternalLinkButtonInverse'}</CustomLink>

      <Box myClass={'box'}>
        <Box myClass={'box23'}>
          <H2>Header</H2>
          <P>somecontent</P>
        </Box>
        <Image src={'/img/m.jpg'}
          myClass={'box13'}
          alt={'HC meda'}
          isCropped
          pathName={'doubleArrow'}
          width={290}
          height={207}
          style={{float: 'right'}}
        />
      </Box>

    </div>
)

export default Home