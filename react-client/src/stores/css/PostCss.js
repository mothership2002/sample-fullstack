import { atom } from "recoil";

export const postCss = atom({
  key: 'postCss',
  default: {
    postContainer: [
      'd-flex',
      'flex-column',
      'm-2',
      'min-height',
    ],

    postInfoContainer: [
      'border',
      'border-secondary',
      'border-2',
      'd-flex',
      'justify-content-md-between',
      'rounded',
      'm-1',
      'post-info-container',
    ],

    postTitle: [
      'd-inline-flex',
      'p-3',
      'align-items-md-center',
      'flex-md-wrap',
      'title'
    ],

    postDetailInfoContainer: [
      'd-inline-flex',
      'flex-md-column',
      'flex-md-wrap',
      'post-detail-info-container'
    ],

    dateContainer: [
      'text-wrap',
      'd-flex',
      'flex-column',
      'justify-content-center',
      'date-container'
    ],

    createInfo: [
      'd-inline-flex',
      'p-1',
      'align-items-md-center',
      'text-wrap',
      'created-info',
      'fw-lighter'
    ],

    btnArea: [
      'd-inline-flex',
      'flex-column',
      'justify-content-md-evenly',
      'btn-area'
    ],

    postContentContainer: [
      'p-3',
      'm-1',
      'border',
      'border-secondary',
      'border-2',
      'rounded',
      'bg-light',
      'post-content-container'
    ],
    
    placeholderContainer: [
      'd-inline-flex',
      'align-items-md-center',
      'flex-md-wrap',
      'title',
    ]
  }
});