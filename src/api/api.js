export default {
  newsIndex: {
    url: () => '/news',
    method: 'GET'
  },
  newsShow: {
    url: (p) => '/news/' + p.id,
    method: 'GET'
  },
  noticesIndex: {
    url: () => '/notices',
    method: 'GET'
  },
  noticeShow: {
    url: (p) => '/notices/' + p.id,
    method: 'GET'
  },
  questionsIndex: {
    url: () => '/questions',
    method: 'GET'
  },
  questionShow: {
    url: (p) => '/questions/' + p.id,
    method: 'GET'
  }
};
