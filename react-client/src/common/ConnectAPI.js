const http = 'http://'
const host = 'localhost'
const port = ':8080'
const version = '/v1'

const url = http + host + port + version;

const methodOptions = (method, body = null) => {
  const options =  {
                      method: method, 
                      mode: 'no-cors', 
                      cache: 'no-cache', 
                      credentials: 'same-origin', 
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      redirect: 'follow', 
                      referrerPolicy: 'no-referrer',
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  return options;
}

const api = {
  get: async (link, queryParam) => {
    const param = '?' + Object
      .entries(queryParam)
      .map(([key, value]) => key + '=' + value)
      .join('&');
        
    const result = await fetch(url + link + param, methodOptions('Get', null));
    return result.json();
  },

  post: async (link, body) => {
    const result = await fetch(url + link, methodOptions('post', body));
    return result.json;
  },

  patch: async (link, primarykey, body) => {
    const result = await fetch(url + link + `/${primarykey}`, methodOptions('patch', body));
    return result.json;
  },

  delete: async (link, primarykey) => {
    const result = await fetch(url + link + `/${primarykey}`, methodOptions('delete'));
    return result.json;
  },

}

export default api;
