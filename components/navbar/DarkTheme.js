import React from 'react'

export default function DarkTheme() {
  return (
    <style jsx global>
        {`
        :root {
            --color-white: #000000;
            --color-grey: #dbdbdb;
            --primary-color: #3baf30;
            --secondary-color: #49d63c;
            --tertiary-color: #45f036;
          }
        `}
    </style>
  )
}
