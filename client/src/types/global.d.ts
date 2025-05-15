declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_GOOGLE_MAPS_API_KEY: string;
  }
}
