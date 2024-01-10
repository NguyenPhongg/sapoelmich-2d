import { PartPropertyType, type Product } from './models/productModel'

export const get = (): Product => ({
  id: 1,
  name: 'Nồi Elmich',
  parts: [
    {
      id: 1,
      name: 'Thân',
      src: '/images/type1-body.png',
      images: {
        '1=1': '/2d/than-1.png',
        '1=2&2=5': '/2d/than-2.png',
        '1=26&2=5': '/2d/than-3.png',
        '1=1&2=6': '/2d/type1-body-yellow.png',
        '1=2&2=6': '/2d/type2-body-yellow.png',
        '1=1&2=7': '/2d/type1-body-blue.png',
        '1=2&2=7': '/2d/type2-body-blue.png',
      },
      properties: [
        {
          id: 1,
          name: 'Kiểu dáng',
          type: PartPropertyType.IMAGE,
          options: [
            {
              id: 1,
              name: 'Màu xanh lá',
              src: '/2d/than-1.png',
              default: true,
            },
            // {
            //   id: 2,
            //   name: 'Kiểu 2',
            //   src: '/images/type2-body.png',
            // },
            // {
            //   id: 26,
            //   name: 'Kiểu 3',
            //   src: '/images/type2-body.png',
            // },
          ],
        },
        // {
        //   id: 2,
        //   name: 'Màu sắc',
        //   type: PartPropertyType.COLOR,
        //   options: [
        //     {
        //       id: 5,
        //       name: 'Đỏ',
        //       default: true,
        //       color: '#ff0000',
        //     },
        //     {
        //       id: 6,
        //       name: 'Vàng',
        //       src: '',
        //       color: '#ffff00',
        //     },
        //     {
        //       id: 7,
        //       name: 'Tím',
        //       src: '',
        //       color: '#ff00ff',
        //     },
        //   ],
        // },
      ],
    },
    {
      id: 3,
      name: 'Quai',
      images: {
        '1001=1001&1005=1015': '/2d/quai-1.png',
        '1001=1001&1005=1016': '/2d/quai-1-blue.png',
        '1001=1002&1005=1015': '/2d/quai-2.png',
        '1001=1002&1005=1016': '/2d/quai-2-blue.png',
        '1001=1003&1005=1015': '/2d/quai-3.png',
        '1001=1003&1005=1016': '/2d/quai-3-blue.png',
        '1001=1003&1005=1017': '/2d/quai-3-yellow.png',
        '1=1&2=6': '/2d/type1-body-yellow.png',
        '1=2&2=6': '/2d/type2-body-yellow.png',
        '1=1&2=7': '/2d/type1-body-blue.png',
        '1=2&2=7': '/2d/type2-body-blue.png',
      },
      properties: [
        {
          id: 1001,
          name: 'Kiểu 1',
          type: PartPropertyType.IMAGE,
          options: [
            {
              id: 1001,
              name: 'Kiểu 1',
              src: '/2d/quai-1.png',
              default: true,
            },
            {
              id: 1002,
              name: 'Kiểu 2',
              src: '/2d/quai-2.png',
            },
            {
              id: 1003,
              name: 'Kiểu 3',
              src: '/2d/quai-3.png',
            },
          ],
        },
        {
          id: 1005,
          name: 'Màu sắc',
          type: PartPropertyType.COLOR,
          options: [
            {
              id: 1015,
              name: 'Xanh lá',
              color: '#CFFDD1',
              default: true,
            },
            {
              id: 1016,
              name: 'Xanh dương',
              color: '#C8E3F7',
            },
            {
              id: 1017,
              name: 'Vàng',
              color: '#F7F0D5',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'Vung',
      src: '/images/type1-default.png',
      properties: [
        {
          id: 4,
          name: 'Kiểu dáng',
          type: PartPropertyType.IMAGE,
          options: [
            {
              id: 13,
              name: 'Kiểu 1',
              src: '/2d/vung-1.png',
              default: true,
            },
            {
              id: 14,
              name: 'Kiểu 2',
              src: '/2d/vung-2.png',
            },
            {
              id: 25,
              name: 'Kiểu 3',
              src: '/2d/vung-3.png',
            },
          ],
        },
        {
          id: 5,
          name: 'Màu sắc',
          type: PartPropertyType.COLOR,
          options: [
            {
              id: 1015,
              name: 'Xanh lá',
              color: '#CFFDD1',
              default: true,
            },
            {
              id: 1016,
              name: 'Xanh dương',
              color: '#C8E3F7',
            },
            {
              id: 1017,
              name: 'Vàng',
              color: '#F7F0D5',
            },
          ],
        },
      ],
      images: {
        '4=13&5=1015': '/2d/vung-1.png',
        '4=13&5=1016': '/2d/vung-1-blue.png',
        '4=14&5=1015': '/2d/vung-2-summary.png',
        '4=14&5=1016': '/2d/vung-3.png',
        '4=25&5=1015': '/2d/vung-3.png',
        '4=25&5=1017': '/2d/vung-3-yellow.png',
        '4=13&5=17': '/images/type1-blue.png',
        '4=14&5=17': '/images/type2-blue.png',
      },
    },
  ],
})
