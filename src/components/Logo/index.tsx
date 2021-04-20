import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
  id?: string
}

const Logo = ({
  id = 'logo',
  color = 'white',
  size = 'normal',
  hideOnMobile = false
}: LogoProps) => (
  <S.Wrapper color={color} size={size} hideOnMobile={hideOnMobile}>
    {/* <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 158 48'
      role='img'
      aria-label='Won Games'
    >
      <path
        fill={`url(#paint_linear_${id})`}
        d='M.05 15.23L.02 35.87a6 6 0 009.33 5l20.6-13.72 20.54 13.8a6 6 0 009.34-4.97l.04-20A11.81 11.81 0 0044.75 4.62l-.87.25a50.87 50.87 0 01-29.36-.27A11.15 11.15 0 00.05 15.23z'
      />
      <path
        fill='#110F28'
        fillOpacity='.15'
        d='M30.16 27.16l-6.03-4.3a.5.5 0 00-.78.5l1.3 7.3 5.51-3.5z'
      />
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeOpacity='.4'
        strokeWidth='1.5'
        d='M7.6 7.1c-5.12 2.76-4.53 5-4.53 7.5M57.27 26.1v1M3.05 18.1v2M57.27 30.1v5'
      />
      <path
        stroke='#0A0D27'
        strokeLinecap='round'
        strokeWidth='2'
        d='M13.05 15.1v6M10.04 18.1h6.02'
      />
      <ellipse
        fill='#0A0D27'
        rx='1.51'
        ry='1.5'
        transform='matrix(1 0 0 1 44.72 13.66)'
      />
      <ellipse
        fill='#0A0D27'
        rx='1.51'
        ry='1.5'
        transform='matrix(1 0 0 1 49.74 17.6)'
      />
      <ellipse
        fill='#0A0D27'
        rx='1.51'
        ry='1.5'
        transform='matrix(1 0 0 1 44.72 21.6)'
      />
      <ellipse
        fill='#0A0D27'
        rx='1.51'
        ry='1.5'
        transform='matrix(1 0 0 1 39.7 17.6)'
      />
      <path
        className='text'
        fill='currentColor'
        d='M79.26 12.63h-.06c-.68.1-1.2.44-1.56 1.02a2.36 2.36 0 00-.3 1.5v.03l1.38 9.33c.08.54.34 1 .78 1.35a2.27 2.27 0 001.77.45c.66-.1 1.17-.42 1.53-.96a2.05 2.05 0 00.36-1.5l-1.38-9.33a2.23 2.23 0 00-2.22-1.92l-.3.03zm18.78-.03c-.54 0-1.02.18-1.44.54-.44.36-.7.82-.78 1.38l-1.4 9.51a.88.88 0 00-.04.21c0 .52.17.98.51 1.38.36.46.84.73 1.44.81a2.15 2.15 0 001.98-.69c.3-.32.5-.7.57-1.14v-.06l1.38-9.36v-.03l.03-.3c0-.42-.12-.82-.36-1.2a2.1 2.1 0 00-1.53-1.02h-.06l-.3-.03zm-9.24 8.04h-.06a.99.99 0 00-.24.03 2.2 2.2 0 00-1.4.72l-.4.42-2.19 2.7-.72.84c-.28.34-.5.6-.69.75a3.26 3.26 0 01-1.74.9 3.19 3.19 0 01-1.53-.18c-.32-.12-.6-.29-.84-.5l.75 5.12v.06a3.8 3.8 0 00.18.66c.14.3.35.56.63.78.18.16.38.28.6.36.24.08.5.12.75.12h.1c.15 0 .3 0 .41-.03.46-.1.85-.32 1.17-.66l.3-.3 4.9-6.03 4.73 5.82.45.51c.38.38.83.61 1.35.7h.33c.28 0 .55-.06.81-.16.42-.18.77-.46 1.05-.84.18-.28.3-.59.36-.93v-.06l.75-5c-.34.3-.73.5-1.17.6a2.64 2.64 0 01-1.23.08 2.9 2.9 0 01-.8-.24 4.1 4.1 0 01-1-.75c-.26-.26-.59-.65-.99-1.17L90.9 21.9a5.15 5.15 0 00-.42-.48c-.2-.2-.39-.35-.57-.45a2 2 0 00-1.02-.33h-.09zm19.8.3a2.99 2.99 0 012.02-.8 3.04 3.04 0 012.49 1.35 5.91 5.91 0 012.13-3.16 5.73 5.73 0 013.6-1.23 5.7 5.7 0 014.23 1.77 5.76 5.76 0 011.74 4.23c0 1.66-.58 3.08-1.74 4.26a5.76 5.76 0 01-4.23 1.74 5.95 5.95 0 01-5.76-4.38c-.22.34-.5.63-.84.87-.5.3-1.04.45-1.62.45-.42 0-.83-.08-1.23-.24-.3-.14-.56-.32-.78-.54.5 2.42 1.7 4.42 3.63 6a10.17 10.17 0 006.6 2.34c1.9 0 3.65-.47 5.25-1.4a10.24 10.24 0 003.8-3.82 10.34 10.34 0 001.42-5.28c0-1.9-.47-3.65-1.41-5.25a10.18 10.18 0 00-3.81-3.84 10.18 10.18 0 00-5.25-1.4c-2.46 0-4.65.78-6.57 2.36a10.26 10.26 0 00-3.66 5.97zm2.02-.09c-.66 0-1.21.24-1.65.72-.24.24-.41.53-.51.87a2.61 2.61 0 000 1.32c.08.28.2.53.39.75.44.56 1.03.84 1.77.84.72 0 1.3-.27 1.74-.8.22-.27.37-.55.45-.85.04-.2.06-.4.06-.6 0-.18-.02-.35-.06-.5a2.19 2.19 0 00-.48-1 2.23 2.23 0 00-1.71-.75zm29.65-8.25c-.6 0-1.12.21-1.56.63-.46.44-.7.98-.7 1.62V21c.25-.28.54-.5.88-.66.42-.2.87-.3 1.35-.3h.06a3.03 3.03 0 012.37 1.14l9.8 11.55a2.1 2.1 0 001.78.87 2.2 2.2 0 001.68-.75c.38-.42.57-.92.57-1.5v-6.12a3.17 3.17 0 01-2.25.93c-.56 0-1.08-.13-1.56-.39-.34-.2-.63-.45-.87-.75l-9.87-11.67a2.46 2.46 0 00-.78-.57 2.26 2.26 0 00-.9-.18zm13.98 0c-.62 0-1.14.21-1.56.63-.46.44-.7.98-.7 1.62v8.7c0 .42.15.8.43 1.14a2.2 2.2 0 001.83.84c.54 0 1.02-.15 1.44-.45.52-.4.79-.9.8-1.53v-8.7a2.22 2.22 0 00-.8-1.7c-.42-.37-.9-.55-1.44-.55zm-14.01 8.07c-.6 0-1.11.2-1.53.57-.44.4-.67.88-.7 1.44v8.67c0 .5.16.95.46 1.35.46.6 1.06.9 1.8.9.64 0 1.18-.23 1.62-.69.42-.42.63-.94.63-1.56v-8.67a1.93 1.93 0 00-1.17-1.77 2.31 2.31 0 00-1.05-.24h-.06z'
      />
      <defs>
        <linearGradient
          id={`paint_linear_${id}`}
          x1='29.16'
          x2='30.15'
          y1='-7.4'
          y2='49.1'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF5F5F' />
          <stop offset='1' stopColor='#F062C0' />
          <stop offset='1' stopColor='#F23131' />
        </linearGradient>
      </defs>
    </svg> */}

    <svg
      id={`paint_linear_${id}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 175 44"
      role="img"
      aria-label="Uniesi"
    >
      <path
        d="M57.18 41.25l-.32.13a3.22 3.22 0 01-.78.2 3.22 3.22 0 01-1.42-.09 1.8 1.8 0 01-1.2-1.07c-.1-.27-.17-.58-.17-.94 0-.35.06-.65.17-.92a1.84 1.84 0 011.19-1.1c.28-.1.6-.15.94-.15a3.54 3.54 0 011.59.37v.66h-.05a2.48 2.48 0 00-1.58-.55c-.24 0-.45.03-.64.1a1.4 1.4 0 00-.85.85 2.1 2.1 0 00-.12.74c0 .29.05.54.13.75a1.4 1.4 0 00.86.82c.2.07.4.1.63.1a2.54 2.54 0 001.58-.55h.04v.65zM61.15 41.55h-3.09V37.4h3.09v.5h-2.47v1.13h2.47v.5h-2.47v1.54h2.47v.5zM65.7 41.55h-.76l-2.23-3.72v3.72h-.58V37.4h.97l2.02 3.4v-3.4h.59v4.16zM70.3 37.88h-1.68v3.67H68v-3.67h-1.68v-.49h3.97v.5zM74.8 41.55h-.81l-1.57-1.65h-.88v1.65h-.62V37.4h1.31c.28 0 .52.02.7.05.2.03.37.09.52.17.17.1.3.22.4.36.1.15.14.33.14.55 0 .3-.08.55-.25.76-.17.2-.4.35-.7.45l1.76 1.82zm-1.46-2.99a.67.67 0 00-.07-.31.57.57 0 00-.24-.24.9.9 0 00-.32-.11 2.5 2.5 0 00-.43-.03h-.74v1.57h.63c.2 0 .37-.02.52-.05a.87.87 0 00.37-.17c.1-.08.17-.17.21-.27.05-.1.07-.23.07-.39v0zM78.89 37.87c.2.18.34.41.44.68.1.27.15.58.15.92 0 .35-.05.65-.16.92a1.83 1.83 0 01-1.12 1.1c-.26.1-.56.15-.9.15-.32 0-.62-.05-.9-.15-.26-.1-.5-.23-.68-.42a1.87 1.87 0 01-.44-.68 2.6 2.6 0 01-.15-.92c0-.34.05-.64.15-.9.1-.28.25-.51.44-.7.19-.18.42-.32.69-.42.27-.1.57-.15.9-.15.33 0 .63.05.9.15.27.1.5.24.68.42v0zm-.06 1.6c0-.54-.13-.95-.4-1.25-.28-.3-.65-.44-1.12-.44-.48 0-.85.15-1.12.44-.28.3-.41.71-.41 1.25 0 .55.14.97.41 1.26.28.29.65.43 1.12.43.46 0 .83-.14 1.1-.43.29-.3.42-.71.42-1.26v0zM86.26 39.88c0 .3-.04.57-.11.8-.08.21-.2.4-.37.55a1.5 1.5 0 01-.57.31c-.21.07-.46.1-.75.1-.3 0-.55-.04-.77-.1-.22-.07-.4-.18-.55-.31-.17-.15-.29-.34-.37-.55a2.5 2.5 0 01-.1-.8v-2.49h.62v2.52c0 .22.01.4.05.53.03.13.1.25.17.36.1.12.22.21.38.27.16.06.35.1.57.1.22 0 .42-.04.57-.1a.86.86 0 00.38-.27c.08-.1.14-.23.17-.37.04-.13.06-.3.06-.5v-2.54h.62v2.49zM91.02 41.55h-.77l-2.22-3.72v3.72h-.58V37.4h.96l2.03 3.4v-3.4h.58v4.16zM93.92 41.55h-1.85v-.42h.61v-3.31h-.61v-.43h1.85v.43h-.62v3.3h.62v.43zM98.67 37.39l-1.7 4.16h-.84l-1.7-4.16h.67l1.47 3.66 1.46-3.66h.64zM102.47 41.55h-3.09V37.4h3.09v.5H100v1.13h2.47v.5H100v1.54h2.47v.5zM107.33 41.55h-.81l-1.57-1.65h-.87v1.65h-.63V37.4h1.31c.29 0 .52.02.71.05.2.03.36.09.51.17.17.1.3.22.4.36.1.15.14.33.14.55 0 .3-.08.55-.25.76-.17.2-.4.35-.7.45l1.76 1.82zm-1.46-2.99a.67.67 0 00-.07-.31.57.57 0 00-.23-.24.9.9 0 00-.32-.11 2.49 2.49 0 00-.44-.03h-.73v1.57h.63c.2 0 .36-.02.51-.05a.87.87 0 00.38-.17c.09-.08.16-.17.2-.27.05-.1.07-.23.07-.39v0zM111.33 40.36a1.15 1.15 0 01-.48.88 2 2 0 01-.59.29 4.52 4.52 0 01-2.54-.23v-.7h.05a2.99 2.99 0 001.7.55c.38 0 .68-.07.9-.2.2-.12.32-.3.32-.5s-.05-.33-.16-.42c-.1-.08-.25-.15-.46-.2a5.1 5.1 0 00-.51-.1l-.58-.08a1.83 1.83 0 01-.93-.4.98.98 0 01-.3-.74c0-.35.17-.64.5-.86a2.2 2.2 0 011.26-.34 4.55 4.55 0 011.64.3v.65h-.05a3 3 0 00-1.6-.47c-.33 0-.6.06-.8.19-.2.12-.3.28-.3.47 0 .18.05.31.15.41.1.1.28.17.53.23l.58.1.63.1c.34.09.6.21.78.38.18.16.27.4.27.7v0zM113.99 41.55h-1.85v-.42h.61v-3.31h-.61v-.43h1.85v.43h-.62v3.3h.62v.43zM118.39 37.88h-1.68v3.67h-.62v-3.67h-1.67v-.49h3.97v.5zM122.7 41.55h-.66l-.46-1.16h-2.02l-.46 1.16h-.63l1.7-4.16h.83l1.7 4.16zm-1.3-1.63l-.83-2.05-.82 2.05h1.64zm-.01-4.1l-.86 1.05h-.47l.57-1.04h.76zM127.3 41.55h-.81l-1.57-1.65h-.88v1.65h-.62V37.4h1.31c.28 0 .52.02.7.05.2.03.37.09.52.17.17.1.3.22.4.36.09.15.14.33.14.55 0 .3-.09.55-.26.76-.17.2-.4.35-.7.45l1.76 1.82zm-1.46-2.99a.67.67 0 00-.08-.31.56.56 0 00-.23-.24.9.9 0 00-.32-.11 2.5 2.5 0 00-.43-.03h-.74v1.57h.63c.2 0 .37-.02.52-.05a.88.88 0 00.37-.17c.1-.08.16-.17.2-.27.05-.1.08-.23.08-.39v0zM129.55 41.55h-1.85v-.42h.61v-3.31h-.61v-.43h1.85v.43h-.61v3.3h.6v.43zM134.1 37.87c.2.18.34.41.44.68.1.27.15.58.15.92 0 .35-.05.65-.16.92a1.84 1.84 0 01-1.12 1.1c-.26.1-.56.15-.9.15-.32 0-.62-.05-.9-.15a1.87 1.87 0 01-1.12-1.1c-.1-.27-.15-.57-.15-.92 0-.34.05-.64.15-.9a1.83 1.83 0 011.13-1.11c.27-.1.57-.16.9-.16.33 0 .63.05.9.15.27.1.5.24.68.42v0zm-.06 1.6c0-.54-.13-.95-.4-1.25-.28-.3-.65-.44-1.12-.44-.48 0-.85.15-1.13.44-.26.3-.4.71-.4 1.25 0 .55.14.97.41 1.26.28.29.65.43 1.12.43.46 0 .83-.14 1.1-.43.28-.3.42-.71.42-1.26v0zM141.9 39.48a1.94 1.94 0 01-1.02 1.74c-.21.12-.45.2-.72.25-.26.06-.6.08-1.03.08h-1.19V37.4h1.17c.46 0 .82.03 1.1.09.26.06.49.14.68.24.32.18.56.41.74.7.18.3.27.65.27 1.06v0zm-.65-.01c0-.33-.06-.6-.2-.83-.12-.22-.31-.4-.57-.53-.18-.09-.38-.15-.58-.19-.21-.04-.46-.05-.75-.05h-.58v3.2h.58c.3 0 .56-.01.78-.05.23-.04.43-.11.62-.22.23-.13.4-.3.52-.52.12-.22.18-.49.18-.81zM146 41.55h-3.1V37.4h3.1v.5h-2.47v1.13h2.46v.5h-2.46v1.54h2.46v.5zM150.9 41.55h-1.85v-.42h.6v-3.31h-.6v-.43h1.84v.43h-.6v3.3h.6v.43zM155.3 37.88h-1.68v3.67H153v-3.67h-1.67v-.49h3.96v.5zM159.24 41.55h-.67l-.45-1.16h-2.03l-.46 1.16H155l1.7-4.16h.83l1.7 4.16zm-1.32-1.63l-.82-2.05-.82 2.05h1.64zM163.01 38.65a1.21 1.21 0 01-.4.92 1.6 1.6 0 01-.58.32c-.22.08-.5.11-.84.11h-.62v1.55h-.62V37.4h1.27c.28 0 .52.02.71.06.2.05.37.11.52.2.18.1.32.24.42.4.1.16.14.36.14.6zm-.64.01a.78.78 0 00-.09-.37.65.65 0 00-.26-.26c-.1-.06-.21-.1-.34-.13a2.5 2.5 0 00-.5-.03h-.6v1.66h.52c.25 0 .45-.02.61-.06.16-.04.29-.1.38-.2a.78.78 0 00.28-.6v0zM165.49 41.55h-1.85v-.42h.6v-3.31h-.6v-.43h1.85v.43h-.62v3.3h.62v.43zM170.42 41.55h-.8l-1.58-1.65h-.87v1.65h-.63V37.4h1.32c.28 0 .52.02.7.05.2.03.36.09.51.17.17.1.3.22.4.36.1.15.15.33.15.55 0 .3-.09.55-.26.76-.17.2-.4.35-.7.45l1.76 1.82zm-1.46-2.99a.66.66 0 00-.07-.31.56.56 0 00-.23-.24.9.9 0 00-.32-.11 2.5 2.5 0 00-.44-.03h-.73v1.57h.63c.2 0 .37-.02.51-.05a.88.88 0 00.38-.17c.1-.08.16-.17.2-.27.05-.1.07-.23.07-.39v0zM174.72 41.55h-.67l-.46-1.16h-2.02l-.46 1.16h-.63l1.7-4.16h.83l1.7 4.16zm-1.32-1.63l-.82-2.05-.82 2.05h1.64z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth=".17"
      />
      <path
        d="M6.44 4.2c.27.27.95-.09 1.52-.79.58-.7.83-1.47.56-1.72-.27-.26-.95.1-1.53.79-.57.7-.82 1.47-.55 1.73zM5.52 5.62c.36-.06.5-.82.28-1.7-.2-.88-.67-1.54-1.04-1.48-.37.05-.5.81-.29 1.7.21.87.68 1.53 1.05 1.48z"
        fill="#B3181C"
      />
      <path
        d="M8.88 4.84c-.07-.36-.83-.47-1.7-.24-.88.23-1.53.7-1.47 1.07.07.37.83.48 1.7.25.88-.23 1.53-.71 1.47-1.08zM4.62 7.82c.36-.1.4-.86.1-1.72-.3-.85-.83-1.46-1.19-1.36-.36.1-.4.86-.1 1.71.3.86.83 1.47 1.2 1.37z"
        fill="#B3181C"
      />
      <path
        d="M7.88 6.7c-.1-.36-.88-.39-1.72-.07s-1.44.87-1.34 1.23c.1.35.88.38 1.72.06.85-.32 1.44-.87 1.34-1.22zM3.6 9.82c.36-.1.41-.86.11-1.71s-.84-1.47-1.2-1.37c-.35.1-.4.87-.1 1.72.3.85.84 1.46 1.2 1.36z"
        fill="#B3181C"
      />
      <path
        d="M6.86 8.7c-.1-.36-.87-.39-1.72-.07-.84.32-1.44.87-1.33 1.23.1.36.87.39 1.71.07.85-.33 1.45-.87 1.34-1.23zM3.02 12.3c.34-.15.25-.92-.19-1.7-.44-.8-1.07-1.3-1.4-1.15-.34.15-.26.92.18 1.7.44.8 1.07 1.3 1.4 1.15z"
        fill="#B3181C"
      />
      <path
        d="M6.04 10.65c-.16-.34-.93-.24-1.7.22-.78.46-1.28 1.1-1.12 1.44.17.33.93.23 1.7-.23.79-.46 1.28-1.1 1.12-1.43zM2.51 14.46c.31-.15.22-.84-.2-1.55-.43-.7-1.03-1.16-1.34-1-.3.14-.21.84.22 1.54.42.71 1.01 1.16 1.32 1.01z"
        fill="#B3181C"
      />
      <path
        d="M5.27 12.88c-.16-.3-.87-.19-1.57.25-.71.43-1.16 1.03-1 1.33.16.3.86.19 1.57-.25.7-.43 1.15-1.03 1-1.33zM2.23 16.8c.32-.2.14-.95-.4-1.68C1.3 14.4.61 13.97.3 14.16c-.31.2-.14.95.4 1.68.54.72 1.23 1.15 1.54.96z"
        fill="#B3181C"
      />
      <path
        d="M5.02 14.77c-.2-.3-.95-.11-1.66.44-.72.55-1.13 1.25-.93 1.56.2.32.95.12 1.67-.43.71-.56 1.13-1.26.92-1.57zM2.3 19.18c.29-.22.04-.9-.57-1.54-.6-.64-1.32-.97-1.61-.76-.29.22-.04.91.57 1.55.6.63 1.32.97 1.61.75z"
        fill="#B3181C"
      />
      <path
        d="M4.83 16.98c-.24-.27-.95 0-1.59.59-.64.6-.98 1.3-.74 1.57.23.27.94.01 1.59-.58.64-.6.97-1.3.74-1.58zM2.78 21.72c.24-.26-.09-.92-.74-1.48-.64-.55-1.36-.8-1.6-.53-.23.25.1.91.75 1.47.64.56 1.36.8 1.6.54z"
        fill="#B3181C"
      />
      <path
        d="M4.81 19.17c-.25-.24-.87.11-1.38.8-.51.68-.72 1.44-.47 1.68s.87-.11 1.39-.8c.5-.69.71-1.44.46-1.68zM3.26 23.93c.2-.28-.18-.9-.87-1.4-.7-.48-1.43-.64-1.64-.36-.21.28.18.9.87 1.4.7.48 1.42.64 1.64.36z"
        fill="#B3181C"
      />
      <path
        d="M5.04 21.18c-.27-.22-.86.2-1.3.94-.45.73-.59 1.5-.32 1.72.28.22.86-.2 1.31-.94.45-.74.59-1.5.31-1.72zM3.74 26.2c.2-.27-.18-.83-.82-1.25-.64-.42-1.32-.55-1.51-.28-.2.26.18.82.82 1.24.65.42 1.32.55 1.51.28z"
        fill="#B3181C"
      />
      <path
        d="M5.34 23.63c-.25-.2-.79.21-1.18.9-.4.68-.52 1.4-.26 1.58.25.19.78-.21 1.18-.9.4-.69.52-1.4.26-1.58zM5.17 28.03c.15-.28-.4-.72-1.21-.97-.82-.26-1.6-.23-1.75.05-.15.29.4.72 1.22.98.82.25 1.6.23 1.74-.06z"
        fill="#B3181C"
      />
      <path
        d="M6.31 25.32c-.33-.13-.82.36-1.09 1.08-.27.72-.23 1.4.1 1.52.33.12.82-.36 1.1-1.08.27-.72.22-1.4-.1-1.52zM6.14 30.15c.15-.31-.4-.8-1.24-1.08-.83-.28-1.63-.25-1.78.06-.15.32.41.8 1.24 1.08.84.28 1.64.25 1.78-.06z"
        fill="#B3181C"
      />
      <path
        d="M7.3 27.15c-.33-.13-.83.4-1.1 1.2-.29.8-.24 1.54.1 1.68.33.13.83-.4 1.11-1.2.28-.8.23-1.55-.1-1.68zM7.79 32.11c.09-.32-.54-.69-1.4-.83-.86-.14-1.63 0-1.72.33-.1.32.53.69 1.4.83.86.14 1.63-.01 1.72-.33z"
        fill="#B3181C"
      />
      <path
        d="M8.4 29.1c-.36-.07-.75.51-.88 1.3-.13.8.05 1.5.4 1.57.35.08.74-.5.87-1.3.13-.79-.05-1.49-.4-1.56zM9.11 33.82c.08-.34-.52-.7-1.33-.82-.82-.12-1.55.06-1.62.4-.08.33.52.7 1.33.8.82.13 1.54-.05 1.62-.38z"
        fill="#B3181C"
      />
      <path
        d="M9.62 30.68c-.33-.06-.69.55-.8 1.38-.1.82.08 1.54.41 1.6.33.07.7-.54.8-1.36.11-.83-.07-1.55-.4-1.62zM10.75 35.5c.04-.36-.65-.7-1.55-.74-.9-.04-1.67.22-1.72.6-.05.36.65.7 1.55.74.9.04 1.67-.22 1.72-.6z"
        fill="#B3181C"
      />
      <path
        d="M10.94 32.07c-.37-.04-.69.66-.71 1.56-.02.9.26 1.67.63 1.7.37.04.69-.66.7-1.56.03-.9-.25-1.67-.62-1.7zM12.64 36.96c.01-.36-.68-.6-1.56-.54-.87.07-1.59.42-1.6.78-.01.36.69.6 1.56.54.87-.07 1.59-.42 1.6-.78z"
        fill="#B3181C"
      />
      <path
        d="M12.53 33.61c-.36 0-.6.73-.55 1.6.06.87.4 1.58.75 1.57.36-.01.6-.73.55-1.6-.05-.88-.4-1.58-.75-1.57zM14.91 38.18c-.05-.34-.77-.5-1.6-.35-.85.15-1.48.55-1.43.9.05.34.77.5 1.61.35.84-.15 1.48-.55 1.42-.9z"
        fill="#B3181C"
      />
      <path
        d="M14.21 35c-.34.05-.46.75-.25 1.58.21.83.66 1.47 1.01 1.42.35-.04.46-.75.26-1.58-.21-.82-.67-1.46-1.02-1.42zM16.93 39.21c-.09-.34-.82-.43-1.63-.2-.81.23-1.4.7-1.32 1.04.09.34.82.43 1.63.2.81-.23 1.4-.7 1.32-1.04z"
        fill="#B3181C"
      />
      <path
        d="M15.92 36.09c-.34.08-.38.8-.1 1.6.3.82.8 1.41 1.15 1.34.34-.08.38-.8.09-1.61-.3-.81-.8-1.4-1.14-1.33zM19 40.26c-.1-.31-.76-.38-1.5-.14-.73.23-1.25.68-1.17 1 .09.3.75.37 1.49.14.73-.24 1.26-.68 1.17-1z"
        fill="#B3181C"
      />
      <path
        d="M18 37.4c-.3.08-.32.75-.04 1.5.28.73.76 1.27 1.06 1.2.31-.09.33-.75.05-1.5-.28-.74-.75-1.28-1.06-1.2zM21.24 40.91c-.09-.34-.81-.43-1.63-.2-.81.23-1.4.7-1.31 1.03.08.35.8.44 1.62.2.82-.22 1.4-.68 1.32-1.03z"
        fill="#B3181C"
      />
      <path
        d="M20.23 37.79c-.34.08-.38.8-.1 1.6.3.82.8 1.41 1.15 1.34.34-.08.38-.8.1-1.61-.3-.81-.8-1.4-1.15-1.33zM23.5 41.13c-.12-.3-.79-.27-1.48.07-.7.34-1.15.85-1.02 1.15.13.3.8.27 1.49-.07.7-.34 1.15-.86 1.02-1.15z"
        fill="#B3181C"
      />
      <path
        d="M22.11 38.44c-.29.12-.21.79.17 1.48.39.7.94 1.15 1.23 1.03.3-.12.22-.79-.17-1.48-.38-.7-.93-1.15-1.23-1.03zM26.14 40.95c-.2-.3-.9-.12-1.55.43-.66.54-1.02 1.23-.82 1.54.2.31.9.12 1.55-.43.66-.54 1.02-1.23.82-1.54z"
        fill="#B3181C"
      />
      <path
        d="M26.15 40.67c-.18.33-.78.12-1.35-.45-.57-.57-.89-1.3-.71-1.61.17-.33.78-.13 1.35.45.57.57.88 1.3.7 1.61zM45.85 4.2c-.26.27-.94-.09-1.52-.79-.57-.7-.81-1.47-.55-1.72.27-.26.95.1 1.52.79.57.7.82 1.47.55 1.73zM46.77 5.62c-.37-.06-.5-.82-.29-1.7.21-.88.68-1.54 1.04-1.48.37.05.5.81.29 1.7-.21.87-.68 1.53-1.04 1.48z"
        fill="#B3181C"
      />
      <path
        d="M43.43 4.84c.06-.36.82-.47 1.7-.24.86.23 1.51.7 1.44 1.07-.06.37-.82.48-1.69.25-.87-.23-1.52-.71-1.45-1.08zM47.66 7.82c-.36-.1-.4-.86-.1-1.72.3-.85.83-1.46 1.18-1.36.36.1.4.86.1 1.71-.29.86-.82 1.47-1.18 1.37z"
        fill="#B3181C"
      />
      <path
        d="M44.42 6.7c.1-.36.87-.39 1.7-.07.85.32 1.44.87 1.34 1.23-.1.35-.87.38-1.71.06s-1.44-.87-1.33-1.22zM48.67 9.82c-.36-.1-.4-.86-.1-1.71.3-.85.83-1.47 1.19-1.37.35.1.4.87.1 1.72-.3.85-.83 1.46-1.19 1.36z"
        fill="#B3181C"
      />
      <path
        d="M45.43 8.7c.1-.36.87-.39 1.71-.07s1.44.87 1.33 1.23c-.1.36-.87.39-1.7.07-.85-.33-1.44-.87-1.34-1.23zM49.25 12.3c-.33-.15-.25-.92.19-1.7.44-.8 1.06-1.3 1.4-1.15.34.15.25.92-.18 1.7-.44.8-1.07 1.3-1.4 1.15z"
        fill="#B3181C"
      />
      <path
        d="M46.25 10.65c.16-.34.92-.24 1.7.22.77.46 1.26 1.1 1.1 1.44-.16.33-.92.23-1.7-.23-.77-.46-1.27-1.1-1.1-1.43zM49.76 14.46c-.3-.15-.21-.84.2-1.55.43-.7 1.02-1.16 1.33-1 .3.14.21.84-.21 1.54-.42.71-1.02 1.16-1.32 1.01z"
        fill="#B3181C"
      />
      <path
        d="M47.02 12.88c.16-.3.86-.19 1.56.25.7.43 1.15 1.03.99 1.33-.16.3-.86.19-1.56-.25-.7-.43-1.15-1.03-.99-1.33zM50.04 16.8c-.32-.2-.14-.95.4-1.68.53-.72 1.21-1.15 1.53-.96.31.2.13.95-.4 1.68-.53.72-1.22 1.15-1.53.96z"
        fill="#B3181C"
      />
      <path
        d="M47.26 14.77c.2-.3.95-.11 1.66.44.7.55 1.12 1.25.92 1.56-.2.32-.95.12-1.66-.43-.71-.56-1.12-1.26-.92-1.57zM49.97 19.18c-.29-.22-.04-.9.56-1.54.6-.64 1.32-.97 1.6-.76.3.22.04.91-.55 1.55-.6.63-1.32.97-1.61.75z"
        fill="#B3181C"
      />
      <path
        d="M47.45 16.98c.24-.27.94 0 1.58.59.64.6.98 1.3.74 1.57-.23.27-.94.01-1.58-.58-.64-.6-.97-1.3-.74-1.58zM49.49 21.72c-.24-.26.1-.92.73-1.48.65-.55 1.36-.8 1.6-.53.23.25-.1.91-.75 1.47-.64.56-1.35.8-1.58.54z"
        fill="#B3181C"
      />
      <path
        d="M47.47 19.17c.25-.24.87.11 1.38.8.5.68.71 1.44.46 1.68-.25.24-.87-.11-1.38-.8-.5-.69-.71-1.44-.46-1.68zM49.02 23.93c-.21-.28.17-.9.86-1.4.69-.48 1.42-.64 1.63-.36.21.28-.18.9-.86 1.4-.7.48-1.42.64-1.63.36z"
        fill="#B3181C"
      />
      <path
        d="M47.24 21.18c.27-.22.86.2 1.3.94.44.73.58 1.5.31 1.72-.27.22-.85-.2-1.3-.94-.44-.74-.58-1.5-.3-1.72zM48.53 26.2c-.19-.27.18-.83.82-1.25.64-.42 1.32-.55 1.5-.28.2.26-.17.82-.81 1.24-.64.42-1.32.55-1.5.28z"
        fill="#B3181C"
      />
      <path
        d="M46.94 23.63c.26-.2.79.21 1.18.9.4.68.52 1.4.26 1.58-.25.19-.78-.21-1.18-.9-.4-.69-.51-1.4-.26-1.58zM47.11 28.03c-.14-.28.4-.72 1.21-.97.82-.26 1.6-.23 1.74.05.14.29-.4.72-1.21.98-.82.25-1.6.23-1.74-.06z"
        fill="#B3181C"
      />
      <path
        d="M45.98 25.32c.33-.13.81.36 1.09 1.08.27.72.22 1.4-.1 1.52-.34.12-.82-.36-1.1-1.08-.27-.72-.22-1.4.1-1.52zM46.15 30.15c-.15-.31.4-.8 1.23-1.08s1.62-.25 1.77.06c.15.32-.4.8-1.23 1.08s-1.63.25-1.77-.06z"
        fill="#B3181C"
      />
      <path
        d="M45 27.15c.33-.13.82.4 1.1 1.2.27.8.23 1.54-.1 1.68-.34.13-.84-.4-1.11-1.2-.28-.8-.23-1.55.1-1.68zM44.5 32.11c-.08-.32.54-.69 1.4-.83.86-.14 1.63 0 1.71.33.1.32-.53.69-1.39.83-.86.14-1.62-.01-1.71-.33z"
        fill="#B3181C"
      />
      <path
        d="M43.9 29.1c.36-.07.75.51.88 1.3.13.8-.05 1.5-.4 1.57-.35.08-.74-.5-.87-1.3-.13-.79.05-1.49.4-1.56zM43.2 33.82c-.09-.34.51-.7 1.32-.82s1.54.06 1.61.4c.08.33-.51.7-1.33.8-.8.13-1.53-.05-1.6-.38z"
        fill="#B3181C"
      />
      <path
        d="M42.68 30.68c.33-.06.7.55.8 1.38.1.82-.07 1.54-.4 1.6-.34.07-.7-.54-.8-1.36-.1-.83.07-1.55.4-1.62zM41.57 35.5c-.05-.36.64-.7 1.54-.74.9-.04 1.66.22 1.7.6.05.36-.64.7-1.54.74-.9.04-1.66-.22-1.7-.6z"
        fill="#B3181C"
      />
      <path
        d="M41.38 32.07c.36-.04.68.66.7 1.56.02.9-.26 1.67-.62 1.7-.37.04-.69-.66-.71-1.56-.02-.9.26-1.67.63-1.7zM39.68 36.96c0-.36.68-.6 1.55-.54.87.07 1.58.42 1.6.78 0 .36-.68.6-1.55.54-.87-.07-1.58-.42-1.6-.78z"
        fill="#B3181C"
      />
      <path
        d="M39.8 33.61c.35 0 .6.73.54 1.6-.06.87-.39 1.58-.75 1.57-.35-.01-.6-.73-.54-1.6.05-.88.39-1.58.74-1.57zM37.42 38.18c.05-.34.77-.5 1.6-.35.84.15 1.47.55 1.42.9-.05.34-.77.5-1.6.35-.84-.15-1.47-.55-1.42-.9z"
        fill="#B3181C"
      />
      <path
        d="M38.12 35c.34.05.46.75.25 1.58-.2.83-.66 1.47-1 1.42-.35-.04-.47-.75-.26-1.58.21-.82.66-1.46 1-1.42zM35.42 39.21c.08-.34.8-.43 1.62-.2.8.23 1.4.7 1.3 1.04-.08.34-.8.43-1.6.2-.82-.23-1.4-.7-1.32-1.04z"
        fill="#B3181C"
      />
      <path
        d="M36.42 36.09c.34.08.38.8.1 1.6-.3.82-.8 1.41-1.14 1.34-.34-.08-.38-.8-.1-1.61.3-.81.8-1.4 1.14-1.33zM33.37 40.26c.08-.31.74-.38 1.47-.14.73.23 1.26.68 1.17 1-.08.3-.74.37-1.48.14-.73-.24-1.25-.68-1.16-1z"
        fill="#B3181C"
      />
      <path
        d="M34.34 37.4c.31.08.33.75.05 1.5-.28.73-.75 1.27-1.06 1.2-.3-.09-.32-.75-.05-1.5.28-.74.76-1.28 1.06-1.2zM31.13 40.91c.08-.34.8-.43 1.62-.2.8.23 1.4.7 1.3 1.03-.08.35-.8.44-1.61.2-.81-.22-1.4-.68-1.31-1.03z"
        fill="#B3181C"
      />
      <path
        d="M32.13 37.79c.34.08.38.8.1 1.6-.3.82-.8 1.41-1.14 1.34-.34-.08-.38-.8-.1-1.61.3-.81.8-1.4 1.14-1.33zM28.87 41.13c.13-.3.8-.27 1.48.07.7.34 1.15.85 1.02 1.15-.13.3-.8.27-1.48-.07-.7-.34-1.15-.86-1.02-1.15z"
        fill="#B3181C"
      />
      <path
        d="M30.26 38.44c.29.12.21.79-.17 1.48-.38.7-.93 1.15-1.22 1.03-.3-.12-.22-.79.17-1.48.38-.7.93-1.15 1.22-1.03zM26.25 40.95c.2-.3.9-.12 1.55.43.65.54 1.01 1.23.81 1.54-.2.31-.89.12-1.54-.43-.65-.54-1.02-1.23-.82-1.54z"
        fill="#B3181C"
      />
      <path
        d="M26.24 40.67c.18.33.78.12 1.35-.45.56-.57.88-1.3.7-1.61-.17-.33-.77-.13-1.34.45-.56.57-.88 1.3-.7 1.61zM26.15 31.1l.76 1.8 1.95.08-1.48 1.28.53 1.88-1.67-1.02-1.63 1.09.45-1.9-1.53-1.21 1.95-.17.67-1.83zM20.39 30.98l.55 1.33 1.45.06-1.1.94.4 1.4-1.24-.76-1.2.8.33-1.4-1.14-.9 1.45-.12.5-1.35zM16.42 30.76l.45 1.09 1.18.04-.9.77.32 1.13-1-.61-.98.65.27-1.14-.92-.73 1.17-.1.4-1.1zM31.92 30.98l-.56 1.33-1.45.06 1.1.94-.4 1.4 1.24-.76 1.2.8-.33-1.4 1.14-.9-1.44-.12-.5-1.35zM35.89 30.76l-.46 1.09-1.17.04.89.77-.32 1.13 1-.61.98.65-.27-1.14.93-.73-1.18-.1-.4-1.1z"
        fill="#B3181C"
      />
      <path
        d="M10.96 7.92l15.64-5.5 15.63 5.5v1.2H10.96v-1.2zM41.1 9.55H12.09v1.5h29.03v-1.5zM41.1 24.9H12.09v1.48h29.03v-1.49zM41.97 26.88H11.22v1.58h30.75v-1.58zM14.53 11.86v12.08h2.13V11.86h-2.13zM28.21 11.86v12.08h2.13V11.86h-2.13zM32.34 11.86v12.08h2.13V11.86h-2.13zM36.47 11.86v12.08h2.13V11.86h-2.13z"
        fill="currentColor"
      />
      <path
        d="M20.02 15.18v-3.32h2.13v3.32l-1.07-1.28-1.06 1.28z"
        fill="#B3181C"
      />
      <path
        d="M81.53 19.82c-.1 2.27-.47 4.25-1.12 5.94a9.9 9.9 0 01-2.95 4.2 12.13 12.13 0 01-4.4 2.33c-1.67.49-3.6.73-5.77.73a19.3 19.3 0 01-5.8-.77c-1.64-.52-3-1.28-4.09-2.29a9.33 9.33 0 01-2.62-4.16 18.28 18.28 0 01-.58-5.98l.8-18.7h4.74l-.81 18.91c-.08 1.7 0 3.03.2 4.01.23.98.64 1.87 1.23 2.67.66.9 1.58 1.6 2.76 2.05 1.19.46 2.63.7 4.32.7 1.7 0 3.16-.23 4.38-.68a6.9 6.9 0 002.96-2.07c.65-.8 1.13-1.71 1.43-2.73.31-1.04.5-2.32.57-3.84l.82-19.02h4.73l-.8 18.7zM107.17 32.98h-4.5l.58-13.35c.04-1.08.02-2.08-.09-3.02a4.9 4.9 0 00-.7-2.23 3.27 3.27 0 00-1.66-1.3c-.73-.3-1.7-.44-2.9-.44-1.22 0-2.52.27-3.88.8a21.42 21.42 0 00-3.93 2.04l-.76 17.5h-4.49l1-23.45h4.5l-.11 2.6a19.86 19.86 0 014.45-2.39 13.1 13.1 0 014.65-.86c2.89 0 5.06.77 6.5 2.3 1.45 1.52 2.11 3.71 2 6.58l-.66 15.22z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.37"
      />
      <path
        d="M140.29 21.1h-16.2c-.12 1.41-.03 2.66.29 3.72a5.87 5.87 0 003.73 4.07c.92.33 1.94.5 3.07.5 1.5 0 3.02-.31 4.59-.93a12.43 12.43 0 003.4-1.86h.2l-.37 4.23c-1.3.56-2.6 1.02-3.94 1.39a15.3 15.3 0 01-4.14.56c-3.65 0-6.4-1.04-8.27-3.1-1.86-2.09-2.62-5.04-2.29-8.85.33-3.78 1.57-6.78 3.72-9a10.78 10.78 0 018.05-3.33c2.96 0 5.17.91 6.6 2.73 1.46 1.82 2.04 4.4 1.75 7.76l-.2 2.1zm-3.34-2.98c.17-2.04-.19-3.62-1.06-4.74-.86-1.11-2.27-1.67-4.24-1.67-1.98 0-3.62.61-4.9 1.84a8.1 8.1 0 00-2.4 4.57h12.6z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.66"
      />
      <path
        d="M159.88 25.57a7.4 7.4 0 01-2.5 5.17c-1.49 1.35-3.45 2.02-5.87 2.02-1.38 0-2.62-.2-3.75-.6-1.1-.41-2.03-.86-2.77-1.34l.32-4.34h.17a11 11 0 003.13 2.2c1.16.54 2.3.8 3.4.8a5.8 5.8 0 003.29-.82c.82-.55 1.27-1.42 1.36-2.6.06-.9-.1-1.59-.48-2.06-.39-.46-1.17-.86-2.34-1.2-.43-.12-1-.26-1.7-.42-.7-.17-1.34-.35-1.91-.54-1.6-.54-2.69-1.32-3.3-2.35a6.59 6.59 0 01-.73-3.83 7.26 7.26 0 014.75-6.45c1-.38 2.08-.58 3.27-.58 1.1 0 2.21.18 3.31.52 1.12.33 2.04.73 2.75 1.21l-.3 4.15h-.17a9.41 9.41 0 00-2.77-1.84c-1.1-.5-2.2-.76-3.3-.76-1.14 0-2.12.27-2.95.82a2.96 2.96 0 00-1.36 2.41c-.07.95.11 1.67.56 2.15.42.48 1.15.87 2.17 1.17a38 38 0 001.89.5c.7.16 1.29.31 1.76.45a5.7 5.7 0 013.2 2.12 6.1 6.1 0 01.87 4.04v0z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.74"
      />
      <path
        d="M164.67 8.49h4.38l-1 24.5h-4.39l1-24.5z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M165.06.67h4.38l-.2 5.1h-4.39l.21-5.1z"
        fill="#B3181C"
        stroke="#B3181C"
        strokeWidth="1.4"
      />
      <path
        d="M111.93 8.49h4.38l-1 24.5h-4.39l1-24.5z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M112.32.67h4.38l-.21 5.1h-4.38l.2-5.1z"
        fill="#B3181C"
        stroke="#B3181C"
        strokeWidth="1.4"
      />
    </svg>
  </S.Wrapper>
)

export default Logo
