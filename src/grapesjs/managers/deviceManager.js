export const deviceManager = {
  // The device `id` to select on start, if not indicated, the first available from `devices` will be used.
  default: null,

  // Default devices
  devices: [
    {
      id: ' PC',
      name: 'PC',
      width: '',
    },
    {
      id: 'タブレット',
      name: 'タブレット',
      width: '770px',
      widthMedia: '992px',
    },
    {
      id: 'スマートフォン(大)',
      name: 'スマートフォン(大)',
      width: '568px',
      widthMedia: '768px',
    },
    {
      id: 'スマートフォン(小)',
      name: 'スマートフォン(小)',
      width: '320px',
      widthMedia: '480px',
    },
  ],
};
