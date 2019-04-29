interface BaseObject {
  [key: string]: any
}

declare module '*.jpg'
declare module '*.png'
declare module '*.svg' {
  import { Component } from 'react'

  class SVG extends Component<{
    width?: string
    height?: string
    className?: string
  }> {}

  export = SVG
}
