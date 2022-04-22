let count = 1;

let apiClient = () => new Promise((resolve, reject) => {
    console.log("sercver run")
    if (count === 4) {
        console.log('server count', count)
        return setTimeout(() => resolve({response: { data: 'ok' }}), 1000)
    } else return setTimeout(() => reject({response: { status: 502 }}), 1000);    
});


const getPipelineCSV = () => apiClient()
      .then((response) => {
         return response;
      })
      .catch((err) => {
            if (count === 5) {
                throw new Error(`${err}`);
            }

            if (err.response.status === 502) {
              ++count;
              return getPipelineCSV();
            }

            throw new Error(`${err}`);
      });
 
const test = () => {      
getPipelineCSV()
.then(data => console.log('111111111111111', data))
.catch(err => console.log('222222222222222', err));
}