
/**
 * Code to Call Data From the API
 * @param   {String}    LinkToFetch     Link to fetch from the API
 * @return  {Promise}   data            Promise Of the Data
 */

function CallApi(LinkToFetch) {

return new Promise(resolve => fetch(LinkToFetch)
  .then(response => response.json())
  .then(data => resolve(data)))

}

export default CallApi