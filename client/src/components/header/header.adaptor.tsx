export interface IMenuItem {
    title: string;
    link: string;
}

export const HeaderAdaptor = {
  getMenuItems(): IMenuItem[] {
    return [
      {
        title: 'фото',
        link: 'photo'
      },
      {
        title: 'ціни',
        link: 'price'
      },
      {
        title: 'про нас',
        link: 'about'
      },
      {
        title: 'локація',
        link: 'location'
      },
      {
        title: 'контакти',
        link: 'contacts'
      }
    ]
  },
};