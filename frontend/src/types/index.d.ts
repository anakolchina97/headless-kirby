import React from "react";

declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

export interface IGrid {
  images?: any;
}

export interface IAbout {
  about?: any;
}

export interface IButton {
  link: string;
  children: React.ReactNode;
  className?: string;
}

export interface IArticle {
  src: string;
  title: string;
  className: string;
}

export interface IPost {
  icon: string;
  photo: string;
  title: string;
  text: string;
  blocks: any;
  texts: any;
}
