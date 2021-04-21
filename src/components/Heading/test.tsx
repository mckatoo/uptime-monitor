import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import Heading from './'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Uniesi</Heading>)
    expect(screen.getByRole('heading', { name: /Uniesi/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Uniesi</Heading>)
    expect(screen.getByRole('heading', { name: /Uniesi/i })).toHaveStyle({
      color: '#232642'
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Uniesi</Heading>)
    expect(screen.getByRole('heading', { name: /Uniesi/i })).toHaveStyle({
      'border-left': '0.7rem solid #ED3237'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Uniesi</Heading>)
    expect(screen.getByRole('heading', { name: /Uniesi/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #ED3237',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Uniesi</Heading>)
    expect(screen.getByRole('heading', { name: /Uniesi/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /Uniesi/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">Uniesi</Heading>)

    expect(screen.getByRole('heading', { name: /Uniesi/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #ED3237' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #ED3237', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
